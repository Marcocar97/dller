const fs = require("fs"),
  path = require("path"),
  parser = require("@babel/parser");
const base = path.join(__dirname, "../originals/src/components");
function walk(n, fn) {
  if (!n || typeof n !== "object") return;
  fn(n);
  for (const [k, v] of Object.entries(n)) {
    if (["loc", "start", "end"].includes(k)) continue;
    if (Array.isArray(v)) v.forEach((x) => walk(x, fn));
    else if (v && typeof v === "object") walk(v, fn);
  }
}
function attr(n, k) {
  const a = n.openingElement.attributes.find((a) => a.name?.name === k);
  return a?.value?.value || "";
}
function html(n) {
  if (n.type === "JSXText") return n.value.replace(/\s+/g, " ");
  if (n.type === "JSXExpressionContainer")
    return n.expression.type === "StringLiteral" ? n.expression.value : "";
  if (n.type !== "JSXElement") return "";
  const tag = n.openingElement.name.name;
  const inner = n.children.map(html).join("");
  if (tag === "br") return "<br/>";
  if (["strong", "li", "ul", "em"].includes(tag))
    return `<${tag}>${inner}</${tag}>`;
  if (tag === "lu") return `<ul>${inner}</ul>`;
  if (tag === "Link" || tag === "a") {
    const href = attr(n, "href") || attr(n, "to");
    return `<a href="${href.startsWith("mailto:") ? "mailto:" + inner.trim() : href}">${inner.trim()}</a>`;
  }
  return inner;
}
function literal(n) {
  if (n.type === "StringLiteral" || n.type === "NumericLiteral") return n.value;
  if (n.type === "ArrayExpression")
    return n.elements.filter(Boolean).map(literal);
  if (n.type === "ObjectExpression")
    return Object.fromEntries(
      n.properties.map((p) => [p.key.name || p.key.value, literal(p.value)]),
    );
  return null;
}
const content = {};
for (const file of [
  "Homepage.js",
  "Services.js",
  "WhyDller.js",
  "ContactUs.js",
  "AboutUs/Historty.js",
  "AboutUs/Vission.js",
  "AboutUs/Mission.js",
  "AboutUs/OurTeam.js",
  "OurKitchens/Modern.js",
  "OurKitchens/Classic.js",
  "OurKitchens/European.js",
  "OurKitchens/Unique.js",
  "PrivacyPolicy.js",
  "CookieSettings.js",
]) {
  const ast = parser.parse(fs.readFileSync(path.join(base, file), "utf8"), {
    sourceType: "module",
    plugins: ["jsx"],
  });
  const blocks = [],
    arrays = {};
  walk(ast, (n) => {
    if (
      n.type === "VariableDeclarator" &&
      [
        "modernKitchens",
        "teamMembers",
        "kitchenStyles",
        "carouselItems",
      ].includes(n.id.name)
    )
      arrays[n.id.name] = literal(n.init);
    if (n.type === "JSXElement") {
      const tag = n.openingElement.name.name;
      if (
        tag === "Typography" ||
        (["h1", "h2", "p", "ul"].includes(tag) &&
          ["PrivacyPolicy.js", "CookieSettings.js"].includes(file))
      ) {
        const text = html(n).trim();
        if (
          text &&
          !n.children.some(
            (x) =>
              x.type === "JSXExpressionContainer" &&
              !["StringLiteral", "JSXEmptyExpression"].includes(
                x.expression.type,
              ),
          )
        )
          blocks.push({ kind: attr(n, "variant") || tag, html: text });
      }
    }
  });
  content[file] = { blocks, ...arrays };
}
fs.writeFileSync(
  path.join(__dirname, "../src/redesign/content.json"),
  JSON.stringify(content, null, 2) + "\n",
);
console.log(
  "Preserved",
  Object.values(content).reduce((a, x) => a + x.blocks.length, 0),
  "text blocks and all project/team data",
);
