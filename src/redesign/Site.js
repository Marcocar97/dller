import React, { useEffect, useRef, useState, useCallback } from "react";
import {
  BrowserRouter,
  Link,
  NavLink,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import Cookies from "js-cookie";
import emailjs from "@emailjs/browser";
import content from "./content.json";
import assets from "./assets.json";
import "./site.css";

export const categories = ["modern", "classic", "european", "unique"];
const labels = {
  modern: "Modern",
  classic: "Classic",
  european: "European",
  unique: "Unique",
};
const covers = {
  modern: "/Images/m1.jpg",
  classic: "/Images/c5.jpg",
  european: "/Images/e13.jpg",
  unique: "/Images/u12.jpg",
};
const titles = {
  "/": "Bespoke Kitchen Manufacturing",
  "/about": "About Dller",
  "/services": "Our Services",
  "/why-dller": "The Dller Difference",
  "/contact": "Contact Dller",
  "/privacy-policy": "Privacy Policy",
  "/configuracion-cookies": "Cookie Policy",
  ...Object.fromEntries(
    categories.map((k) => ["/" + k, labels[k] + " Kitchens"]),
  ),
};
const description =
  "Dller partners with luxury kitchen companies across the UK and Europe, combining bespoke craftsmanship, modern manufacturing and complete discretion.";
const configuration = {
  service: process.env.REACT_APP_EMAILJS_SERVICE_ID || "service_8qd27im",
  template: process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "template_luu9gag",
  publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "q8SYdWtSShPPbGI8c",
};
const get = (file, index) => content[file].blocks[index].html;
const clean = (text) =>
  text
    .replace(/<br\s*\/?\s*>/g, " ")
    .replace(/<[^>]+>/g, "")
    .trim();
function Rich({ html, as: Tag = "div", className = "", ...props }) {
  return (
    <Tag
      className={"rich " + className}
      dangerouslySetInnerHTML={{
        __html: html
          .replace(/^(\s*<br\s*\/?>)+|(\s*<br\s*\/?>)+$/g, "")
          .replace(/<br\s*\/?>\s*<br\s*\/?>/g, "<br/><br/>"),
      }}
      {...props}
    />
  );
}
export function Photo({
  src,
  alt,
  priority = false,
  className = "",
  sizes = "(max-width: 700px) 100vw, 50vw",
  ...props
}) {
  const choices = assets[src];
  return (
    <img
      className={"photo " + className}
      src={choices ? choices[1].url : src}
      srcSet={
        choices
          ? [...new Map(choices.map((x) => [x.width, x])).values()]
              .map((x) => `${x.url} ${x.width}w`)
              .join(", ")
          : undefined
      }
      sizes={sizes}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      fetchpriority={priority ? "high" : undefined}
      width={choices?.[1].width}
      height={choices?.[1].height}
      {...props}
    />
  );
}
function Arrow({ direction = "right" }) {
  return <span aria-hidden="true">{direction === "left" ? "←" : "↗"}</span>;
}
function ButtonLink({
  to,
  children,
  light = false,
  outline = false,
  ...props
}) {
  return (
    <Link
      className={`button ${light ? "light" : ""} ${outline ? "outline" : ""}`}
      to={to}
      {...props}
    >
      {children}
      <Arrow />
    </Link>
  );
}
function Eyebrow({ children }) {
  return <p className="eyebrow">{children}</p>;
}
function SectionHead({ kicker, title, children, link }) {
  return (
    <div className="section-head">
      <div>
        <Eyebrow>{kicker}</Eyebrow>
        <h2>{title}</h2>
        {children}
      </div>
      {link}
    </div>
  );
}
function Header() {
  const [open, setOpen] = useState(false),
    [kitchens, setKitchens] = useState(false);
  const location = useLocation();
  const menuButton = useRef(null),
    menu = useRef(null);
  useEffect(() => {
    setOpen(false);
    setKitchens(false);
  }, [location]);
  useEffect(() => {
    if (!open) return;
    const first = menu.current?.querySelector("a");
    first?.focus();
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);
  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="brand" aria-label="Dller home">
          <img src="/dllerlogo.png" width="104" height="44" alt="Dller" />
          <video
            className="brand-original-tagline"
            autoPlay
            muted
            playsInline
            width="220"
            height="14"
            aria-label="Your Partner in Production"
          >
            <source src="/logo.texto.mp4" type="video/mp4" />
          </video>
        </Link>
        <button
          ref={menuButton}
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"}
          <span aria-hidden="true">{open ? "×" : "☰"}</span>
        </button>
        <nav
          ref={menu}
          id="primary-navigation"
          aria-label="Main navigation"
          className={open ? "navigation open" : "navigation"}
        >
          <div
            className="nav-dropdown"
            onMouseEnter={() => {
              if (
                window.matchMedia?.("(hover: hover) and (pointer: fine)")
                  .matches
              )
                setKitchens(true);
            }}
            onMouseLeave={() => {
              if (
                window.matchMedia?.("(hover: hover) and (pointer: fine)")
                  .matches
              )
                setKitchens(false);
            }}
            onFocus={() => {
              if (window.matchMedia?.("(min-width: 901px)").matches)
                setKitchens(true);
            }}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget))
                setKitchens(false);
            }}
          >
            <button
              className={
                categories.includes(location.pathname.slice(1))
                  ? "nav-kitchens active"
                  : "nav-kitchens"
              }
              aria-expanded={kitchens}
              aria-controls="kitchen-navigation"
              onClick={() => setKitchens(!kitchens)}
              onKeyDown={(e) => {
                if (e.key === "Escape") setKitchens(false);
              }}
            >
              Our Kitchens <span aria-hidden="true">⌄</span>
            </button>
            {kitchens && (
              <div id="kitchen-navigation" className="submenu">
                {categories.map((k) => (
                  <Link key={k} to={"/" + k}>
                    {labels[k]} Kitchens <Arrow />
                  </Link>
                ))}
              </div>
            )}
          </div>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/why-dller">Why Dller</NavLink>
          <NavLink className="nav-contact" to="/contact">
            Let’s talk <Arrow />
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
function Footer({ onBrochure }) {
  return (
    <footer className="footer">
      <div className="wrap footer-top">
        <div className="footer-identity">
          <Link to="/" className="footer-brand" aria-label="Dller home">
            <img src="/dllerlogo.png" alt="Dller" width="130" height="55" />
            <video
              className="brand-original-tagline"
              autoPlay
              muted
              playsInline
              width="220"
              height="14"
              aria-label="Your Partner in Production"
            >
              <source src="/logo.texto.mp4" type="video/mp4" />
            </video>
          </Link>
          <a
            className="text-link"
            href="https://www.linkedin.com/company/dller/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn <Arrow />
          </a>
        </div>
        <div>
          <h3>Contact us</h3>
          <p>
            Dller Spinningfields
            <br />
            Manchester, M3 3AJ
          </p>
          <a href="tel:+447779621607">+44 777 9621607</a>
          <a href="mailto:enquiry@dller.com">Enquiry@dller.com</a>
        </div>
        <div>
          <h3>Our kitchens</h3>
          {categories.map((k) => (
            <Link key={k} to={"/" + k}>
              {labels[k]} Kitchens
            </Link>
          ))}
        </div>
        <div>
          <h3>Explore Dller</h3>
          <Link to="/about">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/why-dller">Why Dller</Link>
          <Link to="/contact">Contact Us</Link>
          <button className="plain-button" onClick={onBrochure}>
            Download brochure <Arrow />
          </button>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <span>© {new Date().getFullYear()} Dller. All rights reserved.</span>
        <div>
          <Link to="/configuracion-cookies">Cookie Policy & Preferences</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
function Hero({
  kicker,
  title,
  image,
  images,
  subtitle,
  compact = false,
  children,
}) {
  const [slide, setSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const slideCount = images?.length || 1;
  useEffect(() => {
    if (
      slideCount < 2 ||
      paused ||
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const timer = window.setInterval(
      () => setSlide((i) => (i + 1) % slideCount),
      6500,
    );
    return () => window.clearInterval(timer);
  }, [slideCount, paused]);
  return (
    <section
      className={`hero ${compact ? "compact" : ""} ${images ? "hero-carousel" : ""}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setPaused(false);
      }}
    >
      <Photo
        key={images ? slide : image}
        className="hero-photo"
        src={images ? images[slide] : image}
        alt={
          typeof title === "string"
            ? title
            : "Bespoke handmade kitchen by Dller"
        }
        priority
        sizes="100vw"
      />
      <div className="hero-shade" />
      <div className="wrap hero-content">
        <Eyebrow>{kicker}</Eyebrow>
        <h1>{title}</h1>
        {subtitle && <p className="hero-subtitle">{subtitle}</p>}
        {children}
      </div>
      {images && (
        <div className="hero-slide-controls" aria-label="Hero photographs">
          <button
            aria-label="Previous hero photograph"
            onClick={() => setSlide((i) => (i - 1 + slideCount) % slideCount)}
          >
            ←
          </button>
          <div className="hero-dots">
            {images.map((src, i) => (
              <button
                key={src}
                aria-label={`Show hero photograph ${i + 1}`}
                aria-pressed={i === slide}
                onClick={() => setSlide(i)}
              />
            ))}
          </div>
          <button
            aria-label="Next hero photograph"
            onClick={() => setSlide((i) => (i + 1) % slideCount)}
          >
            →
          </button>
        </div>
      )}
    </section>
  );
}
function Consultation({ onBrochure }) {
  return (
    <section className="consultation">
      <div className="wrap consultation-inner">
        <div>
          <Eyebrow>A discreet partnership</Eyebrow>
          <h2>
            Let’s create
            <br />
            something exceptional.
          </h2>
          <p>
            A no-obligation, confidential consultation. Your designs, your
            brand, our craftsmanship.
          </p>
        </div>
        <div className="consultation-actions">
          <ButtonLink to="/contact" light>
            Discuss your project
          </ButtonLink>
          <ButtonLink to="/services" light outline>
            Explore our services
          </ButtonLink>
          <ButtonLinkOrBrochure onClick={onBrochure} />
        </div>
      </div>
    </section>
  );
}
function ButtonLinkOrBrochure({ onClick }) {
  return (
    <button className="text-link" onClick={onClick}>
      Download our brochure <Arrow />
    </button>
  );
}
function Home({ onBrochure, onGallery }) {
  const home = content["Homepage.js"];
  const reasons = [5, 7, 9, 11, 13, 15];
  const reasonPhotos = [
    "/Images/at.JPG",
    "/Images/skl.png",
    "/Images/mtc.png",
    "/Images/cd.jpg",
    "/Images/c20.jpg",
    "/Images/e13.jpg",
  ];
  return (
    <>
      <Hero
        kicker="Bespoke kitchen manufacturing · UK & Europe"
        title={
          <>
            You design it.
            <br />
            <em>We create it.</em>
          </>
        }
        image="/Images/s1.jpg"
        images={[
          "/Images/s1.jpg",
          "/Images/c5.jpg",
          "/Images/m1.jpg",
          "/Images/e13.jpg",
        ]}
        subtitle="Your trusted manufacturing partner for handmade kitchens. Exceptional craftsmanship. Complete discretion."
      >
        <div className="hero-actions">
          <ButtonLink to="/contact">
            Start a confidential conversation
          </ButtonLink>
          <ButtonLink to="/classic" light outline>
            Explore our craftsmanship
          </ButtonLink>
        </div>
        <div className="hero-foot">
          <span>Authentic luxury manufacturing</span>
          <span>35+ years of craftsmanship</span>
          <a href="#introduction">
            Discover Dller <span aria-hidden="true">↓</span>
          </a>
        </div>
      </Hero>
      <div className="credentials">
        <div className="wrap">
          <span>
            <strong>35+</strong> Years of experience
          </span>
          <span>
            <strong>40+</strong> Skilled craftspeople
          </span>
          <span>
            <strong>Bespoke</strong> Made to your designs
          </span>
          <span>
            <strong>Discreet</strong> Behind your brand
          </span>
        </div>
      </div>
      <section id="introduction" className="section wrap introduction">
        <div>
          <Eyebrow>Your partner in production</Eyebrow>
          <h2>{clean(home.blocks[0].html)}</h2>
          <Rich html={home.blocks[1].html} className="intro-quote" />
        </div>
        <div>
          <Rich html={home.blocks[2].html} />
          <Link className="text-link" to="/about">
            Get to know Dller <Arrow />
          </Link>
        </div>
      </section>
      <section className="workshop-section">
        <div className="wrap workshop-grid">
          <div>
            <Eyebrow>Inside Dller</Eyebrow>
            <h2>
              Handmade excellence.
              <br />
              <em>Modern precision.</em>
            </h2>
            <Rich html={home.blocks[3].html} />
            <Link className="text-link" to="/about#craft">
              Discover our craft <Arrow />
            </Link>
          </div>
          <div className="film">
            <video
              controls
              preload="none"
              playsInline
              poster={assets["/Images/skl.png"]?.[1].url}
            >
              <source src="/optimized/video.mp4" type="video/mp4" />
              Your browser does not support video.{" "}
              <a href="/optimized/video.mp4">Download our workshop film.</a>
            </video>
            <div className="film-caption">
              <span>The people. The process. The precision.</span>
              <span>Inside our workshop</span>
            </div>
          </div>
        </div>
      </section>
      <section className="section portfolio-section">
        <div className="wrap">
          <SectionHead
            kicker="Our portfolio"
            title="Explore our craftsmanship."
            link={
              <Link className="text-link" to="/services">
                Made for your vision <Arrow />
              </Link>
            }
          />
          <div className="portfolio-grid">
            {categories.map((k, i) => (
              <article className={`portfolio-card portfolio-${i}`} key={k}>
                <Link to={"/" + k} className="portfolio-image">
                  <Photo
                    src={covers[k]}
                    alt={labels[k] + " bespoke kitchen"}
                    sizes="(max-width: 700px) 100vw, 50vw"
                  />
                  <span className="image-link">
                    <Arrow />
                  </span>
                </Link>
                <div className="portfolio-caption">
                  <div>
                    <span className="index">0{i + 1}</span>
                    <h3>
                      <Link to={"/" + k}>{labels[k]} Kitchens</Link>
                    </h3>
                  </div>
                  <button
                    className="text-link"
                    onClick={() =>
                      onGallery(
                        home.kitchenStyles[i].images,
                        labels[k] + " Kitchens",
                      )
                    }
                  >
                    View gallery <Arrow />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section wrap">
        <SectionHead
          kicker="How we can help"
          title="Two ways to work together."
        />
        <div className="service-teasers">
          {[2, 4].map((n, i) => (
            <Link
              key={n}
              to={"/services#" + (i ? "collaboration" : "manufacturing")}
              className="service-teaser"
            >
              <span className="index">0{i + 1}</span>
              <h3>{clean(get("Services.js", n))}</h3>
              <Rich html={get("Services.js", n + 1)} />
              <span className="text-link">
                Explore the service <Arrow />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section wrap">
        <SectionHead
          kicker="The Dller difference"
          title="Why choose us."
          link={
            <Link to="/why-dller" className="text-link">
              Discover the difference <Arrow />
            </Link>
          }
        />
        <div className="reasons-grid">
          {reasons.map((n, i) => (
            <article key={n}>
              <Photo
                src={reasonPhotos[i]}
                alt={clean(home.blocks[n].html)}
                sizes="(max-width: 700px) 100vw, 33vw"
              />
              <span className="index">0{i + 1}</span>
              <h3>{clean(home.blocks[n].html)}</h3>
              <Rich html={home.blocks[n + 1].html} />
            </article>
          ))}
        </div>
      </section>
      <section className="discretion-section">
        <Photo
          src="/Images/s3.jpg"
          alt="Handmade kitchen showcasing Dller craftsmanship"
        />
        <div className="wrap">
          <Eyebrow>Complete discretion</Eyebrow>
          <h2>
            Your brand.
            <br />
            Our expertise.
            <br />
            <em>A shared standard.</em>
          </h2>
          <Rich html={get("WhyDller.js", 15)} />
          <ButtonLink to="/why-dller" light outline>
            Our approach to partnership
          </ButtonLink>
        </div>
      </section>
      <Consultation onBrochure={onBrochure} />
    </>
  );
}
function Kitchens({ kind, onGallery, onBrochure }) {
  const data = content["OurKitchens/" + labels[kind] + ".js"];
  return (
    <>
      <Hero
        compact
        kicker="Our kitchens"
        title={clean(data.blocks[0].html)}
        image={covers[kind]}
        subtitle={labels[kind] + " kitchens, crafted to your designs."}
      />
      <div className="wrap category-navigation" aria-label="Kitchen categories">
        {categories.map((k) => (
          <NavLink key={k} to={"/" + k}>
            {labels[k]} Kitchens
          </NavLink>
        ))}
      </div>
      <section className="section wrap">
        <SectionHead
          kicker="Selected projects"
          title={clean(data.blocks[1].html)}
        />
        <div className="project-grid">
          {data.modernKitchens.map((p, i) => (
            <article key={p.title} className="project">
              <button
                className="project-image"
                onClick={() => onGallery(p.images, p.title)}
                aria-label={"Open " + p.title + " gallery"}
              >
                <Photo
                  src={p.coverImage}
                  alt={p.title}
                  sizes="(max-width: 700px) 100vw, 50vw"
                />
                <span className="image-link">
                  <Arrow />
                </span>
              </button>
              <div className="project-caption">
                <div>
                  <span className="index">
                    0{i + 1} / {labels[kind]}
                  </span>
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                </div>
                <button
                  className="text-link"
                  onClick={() => onGallery(p.images, p.title)}
                >
                  View gallery <Arrow />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="section category-story">
        <div className="wrap story-grid">
          <div>
            <Eyebrow>Designed by you. Crafted by Dller.</Eyebrow>
            <h2>
              {labels[kind]} style.
              <br />
              <em>Bespoke possibilities.</em>
            </h2>
          </div>
          <Rich html={data.blocks[2].html} />
        </div>
      </section>
      <Consultation onBrochure={onBrochure} />
    </>
  );
}
function Services({ onBrochure }) {
  return (
    <>
      <Hero
        compact
        kicker="Our services"
        title={
          <>
            Your vision.
            <br />
            <em>Our expertise.</em>
          </>
        }
        image="/Images/m1.jpg"
        subtitle="Manufacturing only or collaborative design. Support shaped around your business."
      />
      <section className="section wrap">
        <SectionHead
          kicker="Dller services"
          title={clean(get("Services.js", 1))}
        />
        <div className="service-teasers">
          {[2, 4].map((n, i) => (
            <a
              className="service-teaser"
              key={n}
              href={"#" + (i ? "collaboration" : "manufacturing")}
            >
              <span className="index">0{i + 1}</span>
              <h3>{clean(get("Services.js", n))}</h3>
              <Rich html={get("Services.js", n + 1)} />
              <span className="text-link">
                Discover more <span aria-hidden="true">↓</span>
              </span>
            </a>
          ))}
        </div>
      </section>
      <section id="manufacturing" className="section wrap service-feature">
        <Photo
          src="/Images/cd.jpg"
          alt="Bespoke wooden cabinetry in production"
        />
        <div>
          <Eyebrow>01 / Manufacturing only</Eyebrow>
          <h2>{clean(get("Services.js", 7))}</h2>
          <Rich html={get("Services.js", 8)} />
          <h3>{clean(get("Services.js", 9))}</h3>
          <Rich html={get("Services.js", 10)} />
          <ButtonLink to="/contact?service=manufacturing">
            Discuss manufacturing
          </ButtonLink>
        </div>
      </section>
      <section id="collaboration" className="section category-story">
        <div className="wrap">
          <div className="service-feature reverse">
            <Photo
              src="/Images/ss4.jpg"
              alt="CAD modelling and collaborative kitchen design"
            />
            <div>
              <Eyebrow>02 / Collaborative design</Eyebrow>
              <h2>{clean(get("Services.js", 11))}</h2>
              <Rich html={get("Services.js", 12)} />
              <ButtonLink to="/contact?service=collaboration">
                Discuss your design
              </ButtonLink>
            </div>
          </div>
          <div className="process-grid">
            {[13, 15, 17].map((n, i) => (
              <article key={n}>
                <span className="index">0{i + 1}</span>
                <h3>{clean(get("Services.js", n))}</h3>
                <Rich html={get("Services.js", n + 1)} />
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section wrap story-grid">
        <div>
          <Eyebrow>Let’s start a conversation</Eyebrow>
          <h2>{clean(get("Services.js", 19))}</h2>
        </div>
        <div>
          <Rich html={get("Services.js", 20)} />
          <ButtonLink to="/contact">Arrange a consultation</ButtonLink>
        </div>
      </section>
      <Consultation onBrochure={onBrochure} />
    </>
  );
}
function About({ onBrochure }) {
  const history = content["AboutUs/Historty.js"],
    team = content["AboutUs/OurTeam.js"];
  return (
    <>
      <Hero
        compact
        kicker="About Dller"
        title={
          <>
            A lifetime of craft.
            <br />
            <em>A future of possibility.</em>
          </>
        }
        image="/Images/historycover.png"
        subtitle="Meet the people and the principles behind our handmade kitchens."
      />
      <div className="wrap category-navigation">
        <a href="#history">History</a>
        <a href="#craft">Our craft</a>
        <a href="#vision">Vision & Mission</a>
        <a href="#team">Our Team</a>
      </div>
      <section id="history" className="section wrap story-grid">
        <div>
          <Eyebrow>Our history</Eyebrow>
          <h2>{clean(history.blocks[1].html)}</h2>
        </div>
        <Rich html={history.blocks[2].html} />
      </section>
      <section id="craft" className="section category-story">
        <div className="wrap">
          <SectionHead
            kicker="Our craft"
            title={clean(history.blocks[3].html)}
          />
          <div className="craft-grid">
            {[4, 6, 8].map((n, i) => (
              <article key={n}>
                <Photo
                  src={
                    [
                      "/Images/at.JPG",
                      "/Images/modetool.png",
                      "/Images/enviro.png",
                    ][i]
                  }
                  alt={clean(history.blocks[n].html)}
                />
                <span className="index">0{i + 1}</span>
                <h3>{clean(history.blocks[n].html)}</h3>
                <Rich html={history.blocks[n + 1].html} />
              </article>
            ))}
          </div>
        </div>
      </section>
      <section id="vision" className="section wrap values-grid">
        {["Vission", "Mission"].map((name, i) => (
          <article key={name}>
            <Eyebrow>{i ? "Our mission" : "Our vision"}</Eyebrow>
            <h2>{clean(get("AboutUs/" + name + ".js", 1))}</h2>
            <Rich html={get("AboutUs/" + name + ".js", 2)} />
          </article>
        ))}
      </section>
      <section id="team" className="section team-section">
        <div className="wrap">
          <SectionHead kicker="Our team" title={clean(team.blocks[1].html)}>
            <Rich html={team.blocks[2].html} />
          </SectionHead>
          <div className="team-grid">
            {team.teamMembers.map((p) => (
              <article key={p.name}>
                <Photo
                  src={p.image}
                  alt={p.name + ", " + p.position}
                  sizes="(max-width: 700px) 100vw, 33vw"
                />
                <h3>{p.name}</h3>
                <p className="team-role">{p.position}</p>
                <p>{p.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Consultation onBrochure={onBrochure} />
    </>
  );
}
function Why({ onBrochure }) {
  const data = content["WhyDller.js"];
  const pictures = [
    "/Images/skl.png",
    "/Images/ss6.jpg",
    "/Images/c5.jpg",
    "/Images/cd.jpg",
    "/Images/enviro.png",
  ];
  return (
    <>
      <Hero
        compact
        kicker="Why Dller"
        title={
          <>
            The Dller
            <br />
            <em>difference.</em>
          </>
        }
        image="/Images/c5.jpg"
      />
      <section className="section wrap story-grid">
        <div>
          <Eyebrow>Your partner in production</Eyebrow>
          <h2>{clean(data.blocks[2].html)}</h2>
        </div>
        <Rich html={data.blocks[3].html} />
      </section>
      <section className="wrap process-grid why-pillars">
        {[4, 6, 8].map((n, i) => (
          <article key={n}>
            <span className="index">0{i + 1}</span>
            <h3>{clean(data.blocks[n].html)}</h3>
            <Rich html={data.blocks[n + 1].html} />
          </article>
        ))}
      </section>
      <div className="why-features wrap">
        {[10, 12, 14, 16, 18].map((n, i) => (
          <section
            className={"section service-feature " + (i % 2 ? "reverse" : "")}
            key={n}
          >
            <Photo src={pictures[i]} alt={clean(data.blocks[n].html)} />
            <div>
              <Eyebrow>0{i + 1} / The Dller difference</Eyebrow>
              <h2>{clean(data.blocks[n].html)}</h2>
              <Rich html={data.blocks[n + 1].html} />
            </div>
          </section>
        ))}
      </div>
      <section className="section category-story">
        <div className="wrap story-grid">
          <h2>{clean(data.blocks[20].html)}</h2>
          <Rich html={data.blocks[21].html} />
        </div>
      </section>
      <section className="section wrap closing-statement">
        <h2>{clean(data.blocks[22].html)}</h2>
      </section>
      <Consultation onBrochure={onBrochure} />
    </>
  );
}
export async function sendEnquiry(values) {
  return emailjs.send(configuration.service, configuration.template, values, {
    publicKey: configuration.publicKey,
  });
}
function Contact({ onBrochure }) {
  const form = useRef(null),
    sending = useRef(false);
  const location = useLocation();
  const [state, setState] = useState("idle");
  const initial = new URLSearchParams(location.search).get("service");
  async function submit(e) {
    e.preventDefault();
    if (sending.current) return;
    const fields = new FormData(form.current);
    sending.current = true;
    setState("sending");
    const company = fields.get("company"),
      type = fields.get("enquiry_type");
    try {
      await sendEnquiry({
        user_name: fields.get("user_name"),
        user_email: fields.get("user_email"),
        user_phone: fields.get("user_phone"),
        company,
        enquiry_type: type,
        message: `Company: ${company}\nEnquiry: ${type}\n\n${fields.get("message")}`,
      });
      setState("success");
      form.current.reset();
    } catch {
      setState("error");
    } finally {
      sending.current = false;
    }
  }
  return (
    <>
      <Hero
        compact
        kicker="Contact Dller"
        title={
          <>
            Great partnerships
            <br />
            <em>start with a conversation.</em>
          </>
        }
        image="/Images/e1.jpg"
        subtitle="Manufacturing support, collaborative design or simply exploring your options."
      />
      <section className="section wrap contact-grid">
        <div className="contact-intro">
          <Eyebrow>Get in touch</Eyebrow>
          <h2>
            A confidential conversation.
            <br />
            No obligation.
          </h2>
          <Rich html={get("ContactUs.js", 8)} />
          <div className="contact-details">
            <h3>Contact information</h3>
            <a href="mailto:enquiry@dller.com">
              Enquiry@dller.com <Arrow />
            </a>
            <a href="tel:+447779621607">
              +44 777 9621607 <Arrow />
            </a>
            <p>
              Dller Spinningfields
              <br />
              Manchester, M3 3AJ
            </p>
          </div>
          <ButtonLinkOrBrochure onClick={onBrochure} />
        </div>
        <div className="form-panel">
          <h3>Tell us about your project.</h3>
          <p>We’d be pleased to explore how we can help your business.</p>
          <form ref={form} onSubmit={submit} aria-label="Contact form">
            <div className="form-row">
              <label>
                Name <span>*</span>
                <input
                  name="user_name"
                  autoComplete="name"
                  required
                  maxLength="120"
                />
              </label>
              <label>
                Company
                <input
                  name="company"
                  autoComplete="organization"
                  maxLength="160"
                />
              </label>
            </div>
            <div className="form-row">
              <label>
                Email <span>*</span>
                <input
                  name="user_email"
                  type="email"
                  autoComplete="email"
                  required
                  maxLength="254"
                />
              </label>
              <label>
                Phone
                <input
                  name="user_phone"
                  type="tel"
                  autoComplete="tel"
                  maxLength="40"
                />
              </label>
            </div>
            <label>
              How can we help?
              <select
                name="enquiry_type"
                defaultValue={
                  initial === "manufacturing"
                    ? "Manufacturing Only"
                    : initial === "collaboration"
                      ? "Collaborative Design"
                      : initial === "callback"
                        ? "Schedule a Callback"
                        : initial === "meeting"
                          ? "Arrange an In-Person Meeting"
                          : "General Enquiry"
                }
              >
                <option>General Enquiry</option>
                <option>Manufacturing Only</option>
                <option>Collaborative Design</option>
                <option>Schedule a Callback</option>
                <option>Arrange an In-Person Meeting</option>
              </select>
            </label>
            <label>
              Message <span>*</span>
              <textarea name="message" required rows="5" maxLength="5000" />
            </label>
            <label className="check-label">
              <input type="checkbox" name="accept_policy" required />
              <span>
                I have read and accept the{" "}
                <Link to="/privacy-policy">Privacy Policy</Link>.
              </span>
            </label>
            <button
              className="button"
              disabled={state === "sending"}
              type="submit"
            >
              {state === "sending" ? "Sending…" : "Send enquiry"}
              <Arrow />
            </button>
            <div aria-live="polite">
              {state === "success" && (
                <p className="status success" role="status">
                  Thank you. We have received your request. One of our agents
                  will contact you shortly.
                </p>
              )}
              {state === "error" && (
                <p className="status error" role="alert">
                  We couldn’t send your message. Your details are still here.
                  Please try again or email Enquiry@dller.com.
                </p>
              )}
            </div>
          </form>
        </div>
      </section>
      <section className="wrap contact-map">
        <h2>Find us in Manchester.</h2>
        <iframe
          title="Dller Manchester location"
          loading="lazy"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d37989.24414639973!2d-2.3290645!3d53.4804733!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb1dc5639fb79%3A0x327fd04edc446cca!2sLeft%20Bank%2C%20Manchester%20M3%203AJ%2C%20UK!5e0!3m2!1sen!2ses!4v1733682306429!5m2!1sen!2ses"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
}
export function Gallery({ value, onClose }) {
  const [index, setIndex] = useState(0),
    touch = useRef(null);
  const images = value?.images || [];
  useEffect(() => {
    setIndex(0);
  }, [value]);
  const next = useCallback(
    (delta) => setIndex((i) => (i + delta + images.length) % images.length),
    [images.length],
  );
  return (
    <Dialog
      open={Boolean(value)}
      onClose={onClose}
      maxWidth={false}
      fullWidth
      aria-labelledby="gallery-title"
      className="gallery-dialog"
      PaperProps={{ className: "gallery-paper" }}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") next(1);
        if (e.key === "ArrowLeft") next(-1);
      }}
    >
      <div className="gallery-top">
        <h2 id="gallery-title">{value?.title}</h2>
        <span aria-live="polite">
          {index + 1} / {images.length}
        </span>
        <button
          className="icon-button"
          aria-label="Close gallery"
          onClick={onClose}
        >
          ×
        </button>
      </div>
      {images.length > 0 && (
        <>
          <div
            className="gallery-stage"
            onTouchStart={(e) => {
              touch.current = e.touches[0].clientX;
            }}
            onTouchEnd={(e) => {
              if (touch.current !== null) {
                const delta = e.changedTouches[0].clientX - touch.current;
                if (Math.abs(delta) > 50) next(delta < 0 ? 1 : -1);
                touch.current = null;
              }
            }}
          >
            <Photo
              src={images[index]}
              alt={`${value.title}, image ${index + 1} of ${images.length}`}
              loading="eager"
              sizes="100vw"
            />
            <button
              className="gallery-prev icon-button"
              aria-label="Previous image"
              onClick={() => next(-1)}
            >
              ←
            </button>
            <button
              className="gallery-next icon-button"
              aria-label="Next image"
              onClick={() => next(1)}
            >
              →
            </button>
          </div>
          <div className="gallery-thumbnails">
            {images.map((src, i) => (
              <button
                key={src + "-" + i}
                aria-label={"View image " + (i + 1)}
                aria-pressed={index === i}
                onClick={() => setIndex(i)}
              >
                <Photo src={src} alt="" sizes="90px" />
              </button>
            ))}
          </div>
        </>
      )}
    </Dialog>
  );
}
export function Brochure({ open, onClose }) {
  const [state, setState] = useState("idle"),
    lock = useRef(false);
  async function submit(e) {
    e.preventDefault();
    if (lock.current) return;
    lock.current = true;
    setState("sending");
    const f = new FormData(e.currentTarget);
    try {
      await sendEnquiry({
        user_name: f.get("user_name"),
        user_email: f.get("user_email"),
        message: "Dller brochure request",
        enquiry_type: "Brochure request",
      });
      setState("success");
    } catch {
      setState("error");
    } finally {
      lock.current = false;
    }
  }
  useEffect(() => {
    if (open) setState("idle");
  }, [open]);
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      aria-labelledby="brochure-title"
      PaperProps={{ className: "brochure-paper" }}
    >
      <button
        className="dialog-close icon-button"
        aria-label="Close brochure"
        onClick={onClose}
      >
        ×
      </button>
      <Eyebrow>Discover Dller</Eyebrow>
      <h2 id="brochure-title">
        Craftsmanship,
        <br />
        in detail.
      </h2>
      <p>
        Explore our kitchens, our manufacturing expertise and the way we work
        with your brand.
      </p>
      <a className="button" href="/Dller_Brochure.pdf" download>
        Download brochure <span aria-hidden="true">↓</span>
      </a>
      <div className="brochure-followup">
        <h3>Would you like to hear from us?</h3>
        <p>Leave your details to discuss a potential partnership.</p>
        <form onSubmit={submit}>
          <label>
            Name
            <input
              name="user_name"
              autoComplete="name"
              required
              maxLength="120"
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="user_email"
              autoComplete="email"
              required
              maxLength="254"
            />
          </label>
          <label className="check-label">
            <input type="checkbox" required />
            <span>
              I have read and accept the{" "}
              <Link to="/privacy-policy" onClick={onClose}>
                Privacy Policy
              </Link>
              .
            </span>
          </label>
          <button className="button outline" disabled={state === "sending"}>
            {state === "sending" ? "Sending…" : "Request a conversation"}
            <Arrow />
          </button>
          <div aria-live="polite">
            {state === "success" && (
              <p className="status success">
                Thank you. Your details have been received.
              </p>
            )}
            {state === "error" && (
              <p className="status error" role="alert">
                We couldn’t send your details. You can still download the
                brochure above, or email Enquiry@dller.com.
              </p>
            )}
          </div>
        </form>
      </div>
    </Dialog>
  );
}
function ContactAssistant({ onBrochure }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  useEffect(() => setOpen(false), [location]);
  return (
    <aside className="assistant" aria-label="Dller contact assistant">
      {open && (
        <div className="assistant-panel">
          <div className="assistant-heading">
            <h2>Let’s talk.</h2>
            <button
              className="icon-button"
              aria-label="Close contact assistant"
              onClick={() => setOpen(false)}
            >
              ×
            </button>
          </div>
          <p>
            Welcome to Dller! We’re here to help you. Choose how you’d like to
            continue.
          </p>
          <Link to="/contact?service=callback">
            Schedule a Callback <Arrow />
          </Link>
          <Link to="/contact?service=meeting">
            Arrange an In-Person Meeting <Arrow />
          </Link>
          <Link to="/services">
            Learn More <Arrow />
          </Link>
          <button
            onClick={() => {
              setOpen(false);
              onBrochure();
            }}
          >
            Download Brochure <span aria-hidden="true">↓</span>
          </button>
          <div className="assistant-channels">
            <a href="tel:+447779621607">Call</a>
            <a
              href="https://wa.me/447779621607?text=Hello%2C%20I%20am%20interested%20in%20more%20information%20about%20Dller"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
            <a href="mailto:chiles@dller.com">Email</a>
          </div>
        </div>
      )}
      <button
        className="assistant-toggle"
        aria-label={open ? "Close contact options" : "Open contact options"}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <svg
          viewBox="0 0 24 24"
          width="22"
          height="22"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <path d="M4 4h16v12H9l-5 4V4Z" />
          <path d="M8 8h8M8 12h5" />
        </svg>
        <span>Let’s talk</span>
      </button>
    </aside>
  );
}
export function saveConsent(analytics, marketing) {
  Cookies.set(
    "user-consent",
    analytics || marketing ? "accepted" : "rejected",
    {
      expires: 365,
      sameSite: "Lax",
      secure: window.location.protocol === "https:",
    },
  );
  Cookies.set("analytics-cookies", String(analytics), {
    expires: 365,
    sameSite: "Lax",
    secure: window.location.protocol === "https:",
  });
  Cookies.set("marketing-cookies", String(marketing), {
    expires: 365,
    sameSite: "Lax",
    secure: window.location.protocol === "https:",
  });
  window.dispatchEvent(new Event("dller-consent-updated"));
}
function CookieBanner() {
  const [show, setShow] = useState(!Cookies.get("user-consent"));
  const location = useLocation();
  useEffect(() => {
    const update = () => setShow(!Cookies.get("user-consent"));
    window.addEventListener("dller-consent-updated", update);
    return () => window.removeEventListener("dller-consent-updated", update);
  }, []);
  if (!show || location.pathname.startsWith("/configuracion-cookies"))
    return null;
  return (
    <section className="cookie-banner" aria-label="Cookie preferences">
      <div>
        <h2>Manage your cookie preferences</h2>
        <p>
          We use cookies to enhance your experience on our website. You can
          accept them all or configure them according to your preferences. For
          more information, see our{" "}
          <Link to="/configuracion-cookies">Cookie Policy</Link>.
        </p>
      </div>
      <div className="cookie-actions">
        <button
          className="button small"
          onClick={() => {
            saveConsent(true, true);
            setShow(false);
          }}
        >
          Accept All
        </button>
        <button
          className="button small outline"
          onClick={() => {
            saveConsent(false, false);
            setShow(false);
          }}
        >
          Reject All
        </button>
        <Link className="text-link" to="/configuracion-cookies">
          Configure Cookies
        </Link>
      </div>
    </section>
  );
}
function Legal({ cookies = false }) {
  const data = content[cookies ? "CookieSettings.js" : "PrivacyPolicy.js"];
  const [analytics, setAnalytics] = useState(
      Cookies.get("analytics-cookies") === "true",
    ),
    [marketing, setMarketing] = useState(
      Cookies.get("marketing-cookies") === "true",
    ),
    [saved, setSaved] = useState(false);
  return (
    <section className="section wrap legal">
      <Eyebrow>Dller / {cookies ? "Cookies" : "Privacy"}</Eyebrow>
      {data.blocks
        .filter(
          (b) =>
            !(
              cookies &&
              ["Manage Your Cookie Preferences"].includes(clean(b.html))
            ),
        )
        .map((b, i) => (
          <Rich
            key={i}
            html={b.html}
            as={
              b.kind === "h1"
                ? "h1"
                : b.kind === "h2"
                  ? "h2"
                  : b.kind === "p"
                    ? "p"
                    : "div"
            }
          />
        ))}
      {cookies && (
        <form
          className="consent-form"
          onSubmit={(e) => {
            e.preventDefault();
            saveConsent(analytics, marketing);
            setSaved(true);
          }}
        >
          <h2>Manage Your Cookie Preferences</h2>
          <label className="check-label">
            <input type="checkbox" checked disabled />
            <span>Essential cookies — always enabled</span>
          </label>
          <label className="check-label">
            <input
              type="checkbox"
              checked={analytics}
              onChange={(e) => {
                setAnalytics(e.target.checked);
                setSaved(false);
              }}
            />
            <span>Enable Analytical Cookies</span>
          </label>
          <label className="check-label">
            <input
              type="checkbox"
              checked={marketing}
              onChange={(e) => {
                setMarketing(e.target.checked);
                setSaved(false);
              }}
            />
            <span>Enable Marketing Cookies</span>
          </label>
          <button className="button">
            Save Preferences <Arrow />
          </button>
          {saved && (
            <p role="status">Your cookie preferences have been saved.</p>
          )}
        </form>
      )}
    </section>
  );
}
function PageEffects() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    const route = pathname.replace(/\/$/, "") || "/";
    document.title = (titles[route] || "Page not found") + " | Dller";
    const update = (selector, value) => {
      document.querySelector(selector)?.setAttribute("content", value);
    };
    update('meta[name="description"]', description);
    update('meta[property="og:title"]', document.title);
    update('meta[property="og:url"]', "https://www.dller.com" + route);
    document
      .querySelector('link[rel="canonical"]')
      ?.setAttribute("href", "https://www.dller.com" + route);
    if (hash) {
      let id;
      try {
        id = decodeURIComponent(hash.slice(1));
      } catch {
        id = hash.slice(1);
      }
      requestAnimationFrame(() =>
        document.getElementById(id)?.scrollIntoView(),
      );
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}
export function Site() {
  const [gallery, setGallery] = useState(null),
    [brochure, setBrochure] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setGallery(null);
    setBrochure(false);
  }, [location.pathname]);
  const props = {
    onBrochure: () => setBrochure(true),
    onGallery: (images, title) =>
      setGallery({ images: [...new Set(images)], title }),
  };
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <PageEffects />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home {...props} />} />
          {categories.map((k) => (
            <Route
              key={k}
              path={"/" + k}
              element={<Kitchens kind={k} {...props} />}
            />
          ))}
          <Route path="/about" element={<About {...props} />} />
          <Route path="/services" element={<Services {...props} />} />
          <Route path="/why-dller" element={<Why {...props} />} />
          <Route path="/contact" element={<Contact {...props} />} />
          <Route path="/privacy-policy" element={<Legal />} />
          <Route path="/configuracion-cookies" element={<Legal cookies />} />
          <Route
            path="*"
            element={
              <section className="section wrap not-found">
                <Eyebrow>404 / Dller</Eyebrow>
                <h1>This page couldn’t be found.</h1>
                <ButtonLink to="/">Return to Dller</ButtonLink>
              </section>
            }
          />
        </Routes>
      </main>
      <Footer onBrochure={props.onBrochure} />
      <ContactAssistant onBrochure={props.onBrochure} />
      <CookieBanner />
      <Gallery value={gallery} onClose={() => setGallery(null)} />
      <Brochure open={brochure} onClose={() => setBrochure(false)} />
    </>
  );
}
export default function App() {
  return (
    <BrowserRouter>
      <Site />
    </BrowserRouter>
  );
}
