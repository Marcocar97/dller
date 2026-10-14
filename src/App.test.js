import React from "react";
import {
  render,
  screen,
  fireEvent,
  waitFor,
  within,
} from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Cookies from "js-cookie";
import emailjs from "@emailjs/browser";
import { Site, Gallery } from "./redesign/Site";
import preservedContent from "./redesign/content.json";
jest.mock("@emailjs/browser", () => ({ send: jest.fn() }));
beforeEach(() => {
  Cookies.set("user-consent", "rejected");
  Cookies.set("analytics-cookies", "false");
  Cookies.set("marketing-cookies", "false");
  emailjs.send.mockReset();
});
const openRoute = (route = "/") =>
  render(
    <MemoryRouter initialEntries={[route]}>
      <Site />
    </MemoryRouter>,
  );
test.each([
  "/",
  "/modern",
  "/classic",
  "/european",
  "/unique",
  "/about",
  "/services",
  "/why-dller",
  "/contact",
  "/privacy-policy",
  "/configuracion-cookies",
])("route %s renders one primary heading and a complete footer", (route) => {
  openRoute(route);
  expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
  expect(
    screen.getAllByRole("link", { name: "Privacy Policy", exact: true }).length,
  ).toBeGreaterThan(0);
  expect(
    screen.getByRole("navigation", { name: "Main navigation" }),
  ).toBeInTheDocument();
});
test("all six original team members remain visible", () => {
  openRoute("/about");
  for (const name of [
    "Tomasz",
    "Chiles",
    "Sebastian",
    "Mateusz",
    "Kamil",
    "Ana",
  ])
    expect(
      screen.getByRole("heading", { name, exact: true }),
    ).toBeInTheDocument();
  expect(
    screen.getByText(/fully heated factory fuelled by our sawdust waste/i),
  ).toBeInTheDocument();
});
test("mobile menu and category submenu can be opened and navigate", () => {
  openRoute();
  fireEvent.click(screen.getByRole("button", { name: /^Menu/ }));
  expect(screen.getByRole("button", { name: /^Close/ })).toHaveAttribute(
    "aria-expanded",
    "true",
  );
  fireEvent.click(screen.getByRole("button", { name: /Our Kitchens/ }));
  const menu = screen.getByRole("navigation");
  fireEvent.click(
    within(menu).getByRole("link", { name: /European Kitchens/ }),
  );
  expect(
    screen.getByRole("heading", {
      level: 1,
      name: "Authentic European Modernity",
    }),
  ).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /^Menu/ })).toHaveAttribute(
    "aria-expanded",
    "false",
  );
});
test("contact email labels match mailto destination", () => {
  openRoute("/contact");
  for (const link of screen.getAllByRole("link", {
    name: /Enquiry@dller.com/i,
  }))
    expect(link).toHaveAttribute("href", "mailto:enquiry@dller.com");
});
function fillContact() {
  fireEvent.change(screen.getByLabelText(/^Name/), {
    target: { value: "Test Client" },
  });
  fireEvent.change(screen.getByLabelText(/^Company/), {
    target: { value: "Test Kitchens" },
  });
  fireEvent.change(screen.getByLabelText(/^Email/), {
    target: { value: "test@example.com" },
  });
  fireEvent.change(screen.getByLabelText(/^Message/), {
    target: { value: "Bespoke cabinetry enquiry" },
  });
  fireEvent.click(screen.getByRole("checkbox"));
}
test("contact sends original template fields plus company and shows success without leaving the page", async () => {
  emailjs.send.mockResolvedValue({ status: 200 });
  openRoute("/contact?service=manufacturing");
  fillContact();
  fireEvent.click(screen.getByRole("button", { name: /Send enquiry/ }));
  await screen.findByRole("status");
  expect(emailjs.send).toHaveBeenCalledTimes(1);
  const args = emailjs.send.mock.calls[0];
  expect(args[2]).toEqual(
    expect.objectContaining({
      user_name: "Test Client",
      user_email: "test@example.com",
      company: "Test Kitchens",
      enquiry_type: "Manufacturing Only",
      message: expect.stringContaining("Bespoke cabinetry enquiry"),
    }),
  );
  expect(
    screen.getByRole("heading", { level: 1, name: /Great partnerships/ }),
  ).toBeInTheDocument();
});
test("failed enquiry preserves the entered message", async () => {
  emailjs.send.mockRejectedValue(new Error("network"));
  openRoute("/contact");
  fillContact();
  fireEvent.click(screen.getByRole("button", { name: /Send enquiry/ }));
  await screen.findByRole("alert");
  expect(screen.getByLabelText(/^Message/)).toHaveValue(
    "Bespoke cabinetry enquiry",
  );
  expect(screen.getByRole("button", { name: /Send enquiry/ })).toBeEnabled();
});
test("pending contact request cannot be submitted twice", () => {
  emailjs.send.mockImplementation(() => new Promise(() => {}));
  openRoute("/contact");
  fillContact();
  const form = screen.getByRole("form", { name: "Contact form" });
  fireEvent.submit(form);
  fireEvent.submit(form);
  expect(emailjs.send).toHaveBeenCalledTimes(1);
  expect(screen.getByRole("button", { name: /Sending/ })).toBeDisabled();
});
test("callback and meeting links select the intended enquiry type", () => {
  const result = openRoute("/contact?service=callback");
  expect(screen.getByRole("combobox")).toHaveValue("Schedule a Callback");
  result.unmount();
  openRoute("/contact?service=meeting");
  expect(screen.getByRole("combobox")).toHaveValue(
    "Arrange an In-Person Meeting",
  );
});
test("brochure download is available without submitting details", async () => {
  openRoute();
  fireEvent.click(
    screen.getAllByRole("button", { name: /Download our brochure/ })[0],
  );
  const dialog = await screen.findByRole("dialog");
  expect(
    within(dialog).getByRole("link", { name: /Download brochure/i }),
  ).toHaveAttribute("href", "/Dller_Brochure.pdf");
  expect(emailjs.send).not.toHaveBeenCalled();
});
test("gallery supports keyboard, thumbnails, and close", () => {
  const onClose = jest.fn();
  render(
    <Gallery
      value={{
        title: "Test gallery",
        images: ["/Images/c1.jpg", "/Images/c2.jpg"],
      }}
      onClose={onClose}
    />,
  );
  const dialog = screen.getByRole("dialog");
  expect(screen.getByRole("img", { name: /image 1 of 2/ })).toBeInTheDocument();
  fireEvent.keyDown(dialog, { key: "ArrowRight" });
  expect(screen.getByRole("img", { name: /image 2 of 2/ })).toBeInTheDocument();
  fireEvent.click(screen.getByRole("button", { name: "View image 1" }));
  expect(screen.getByRole("img", { name: /image 1 of 2/ })).toBeInTheDocument();
  fireEvent.click(screen.getByRole("button", { name: "Close gallery" }));
  expect(onClose).toHaveBeenCalled();
});
test("rejecting cookies disables analytics and marketing", () => {
  Cookies.remove("user-consent");
  openRoute();
  fireEvent.click(screen.getByRole("button", { name: "Reject All" }));
  expect(Cookies.get("analytics-cookies")).toBe("false");
  expect(Cookies.get("marketing-cookies")).toBe("false");
  expect(
    screen.queryByRole("region", { name: "Cookie preferences" }),
  ).not.toBeInTheDocument();
});
test("saving preferences records consent and removes the banner", async () => {
  Cookies.remove("user-consent");
  openRoute("/configuracion-cookies");
  fireEvent.click(screen.getByLabelText("Enable Analytical Cookies"));
  fireEvent.click(screen.getByRole("button", { name: /Save Preferences/ }));
  expect(Cookies.get("user-consent")).toBe("accepted");
  expect(Cookies.get("analytics-cookies")).toBe("true");
  expect(Cookies.get("marketing-cookies")).toBe("false");
  await waitFor(() =>
    expect(screen.getByRole("status")).toHaveTextContent("saved"),
  );
});
test("unknown URLs display a useful 404 view", () => {
  openRoute("/missing-page");
  expect(
    screen.getByRole("heading", { level: 1, name: /couldn’t be found/ }),
  ).toBeInTheDocument();
});

const preservedPages = {
  "Homepage.js": "/",
  "Services.js": "/services",
  "WhyDller.js": "/why-dller",
  "AboutUs/Historty.js": "/about",
  "AboutUs/Vission.js": "/about",
  "AboutUs/Mission.js": "/about",
  "AboutUs/OurTeam.js": "/about",
  "OurKitchens/Modern.js": "/modern",
  "OurKitchens/Classic.js": "/classic",
  "OurKitchens/European.js": "/european",
  "OurKitchens/Unique.js": "/unique",
  "PrivacyPolicy.js": "/privacy-policy",
  "CookieSettings.js": "/configuracion-cookies",
};
const normalise = (value) => value.replace(/\s+/g, " ").trim();
test.each(Object.entries(preservedPages))(
  "all original information paragraphs from %s are presented on %s",
  (file, route) => {
    const { container } = openRoute(route);
    const page = normalise(container.textContent);
    for (const block of preservedContent[file].blocks.filter((b) =>
      ["body1", "body2", "p", "ul"].includes(b.kind),
    )) {
      const original = document.createElement("div");
      original.innerHTML = block.html;
      expect(page).toContain(normalise(original.textContent));
    }
  },
);

test("desktop kitchen menu opens on hover and remains open over its links", () => {
  const previous = window.matchMedia;
  window.matchMedia = jest.fn((query) => ({
    matches: query.includes("hover") || query.includes("min-width"),
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
  }));
  const { container } = openRoute();
  fireEvent.mouseEnter(container.querySelector(".nav-dropdown"));
  const navigation = screen.getByRole("navigation");
  expect(
    within(navigation).getByRole("link", { name: /Classic Kitchens/ }),
  ).toBeInTheDocument();
  fireEvent.mouseLeave(container.querySelector(".nav-dropdown"));
  expect(
    within(navigation).queryByRole("link", { name: /Classic Kitchens/ }),
  ).not.toBeInTheDocument();
  window.matchMedia = previous;
});
test("hero controls switch between real kitchen photographs", () => {
  const { container } = openRoute();
  expect(container.querySelector(".hero-photo").getAttribute("src")).toContain(
    "s1-1280",
  );
  fireEvent.click(screen.getByRole("button", { name: "Next hero photograph" }));
  expect(container.querySelector(".hero-photo").getAttribute("src")).toContain(
    "c5-1280",
  );
  fireEvent.click(
    screen.getByRole("button", { name: "Previous hero photograph" }),
  );
  expect(container.querySelector(".hero-photo").getAttribute("src")).toContain(
    "s1-1280",
  );
});
test("workshop video appears before the portfolio", () => {
  const { container } = openRoute();
  const video = container.querySelector("video[controls]");
  const portfolio = container.querySelector(".portfolio-section");
  expect(
    video.compareDocumentPosition(portfolio) & Node.DOCUMENT_POSITION_FOLLOWING,
  ).toBeTruthy();
  expect(
    container.querySelector(".brand-original-tagline source"),
  ).toHaveAttribute("src", "/logo.texto.mp4");
});
