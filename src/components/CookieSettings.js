import React, { useState } from "react";
import Cookies from "js-cookie";

function CookieSettings() {
  const [analytics, setAnalytics] = useState(
    Cookies.get("analytics-cookies") === "true"
  );
  const [marketing, setMarketing] = useState(
    Cookies.get("marketing-cookies") === "true"
  );

  const handleSave = () => {
    Cookies.set("analytics-cookies", analytics ? "true" : "false", {
      expires: 365,
    });
    Cookies.set("marketing-cookies", marketing ? "true" : "false", {
      expires: 365,
    });
    alert("Your cookie preferences have been saved.");
  };

  return (
    <div style={{
      maxWidth: "900px",
      margin: "auto",
      padding: "40px",
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#fff",
      borderRadius: "10px",
      boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
      border: "1px solid #ddd"
    }}>
      <h1 style={{ textAlign: "center", color: "#C8102E", fontSize: "32px", fontWeight: "bold" }}>
        Dller Cookie Policy
      </h1>
      <p style={{ textAlign: "center", color: "#555", fontSize: "16px" }}>
        <strong>Last Updated: 01/01/2025</strong>
      </p>

      <div style={{ backgroundColor: "#f9f9f9", padding: "20px", borderRadius: "8px", marginTop: "20px" }}>
        <h2 style={{ color: "#333", fontSize: "22px" }}>1. Introduction</h2>
        <p style={{ color: "#555", lineHeight: "1.6" }}>
          Our website <a href="https://www.dller.com" style={{ color: "#C8102E", textDecoration: "none" }}>www.dller.com</a>
           { } uses cookies and similar technologies to enhance user experience and analyze website traffic. This policy explains what cookies are, how we use them, and how you can manage them.
        </p>

        <h2 style={{ color: "#333", fontSize: "22px" }}>2. What Are Cookies?</h2>
        <p style={{ color: "#555", lineHeight: "1.6" }}>
          Cookies are small text files stored on your device when you visit our
          website. They help improve website functionality, security, analytics, and remember user preferences.
        </p>

        <h2 style={{ color: "#333", fontSize: "22px" }}>3. Types of Cookies We Use</h2>
        <ul style={{ color: "#555", lineHeight: "1.6" }}>
          <li><strong>Essential Cookies:</strong> Necessary for the website to function.</li>
          <li><strong>Analytical Cookies:</strong> Collect usage data to improve our services (e.g., Google Analytics).</li>
          <li><strong>Marketing Cookies:</strong> Used for displaying personalized advertisements.</li>
        </ul>

        <h2 style={{ color: "#333", fontSize: "22px" }}>4. How to Manage Cookies</h2>
        <p style={{ color: "#555", lineHeight: "1.6" }}>
          You can manage or disable cookies through your browser settings. To adjust cookie settings in different browsers, follow these guides:
        </p>
        <ul style={{ color: "#555", lineHeight: "1.6" }}>
          <li><a href="https://support.google.com/chrome/answer/95647?hl=en" style={{ color: "#C8102E", textDecoration: "none" }}>Google Chrome</a></li>
          <li><a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences" style={{ color: "#C8102E", textDecoration: "none" }}>Mozilla Firefox</a></li>
          <li><a href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac" style={{ color: "#C8102E", textDecoration: "none" }}>Safari</a></li>
          <li><a href="https://support.microsoft.com/en-us/help/4027947/microsoft-edge-delete-cookies" style={{ color: "#C8102E", textDecoration: "none" }}>Microsoft Edge</a></li>
        </ul>

        <h2 style={{ color: "#333", fontSize: "22px" }}>5. Changes to This Cookie Policy</h2>
        <p style={{ color: "#555", lineHeight: "1.6" }}>
          We may update this Cookie Policy as needed. Any changes will be posted on our website. For more information, contact us at
          <a href="mailto:enquiry@dller.com" style={{ color: "#C8102E", textDecoration: "none" }}> enquiry@dller.com</a>.
        </p>
      </div>

      <hr style={{ margin: "30px 0", borderColor: "#ddd" }} />

      <h1 style={{ textAlign: "center", color: "#C8102E", fontSize: "28px", fontWeight: "bold" }}>
        Manage Your Cookie Preferences
      </h1>
      <p style={{ textAlign: "center", color: "#555", marginBottom: "20px" }}>
        Adjust your cookie preferences below. Essential cookies cannot be disabled as they are required for the website to function properly.
      </p>

      <div style={{
        backgroundColor: "#fff",
        padding: "20px",
        borderRadius: "8px",
        border: "1px solid #ddd"
      }}>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "flex", alignItems: "center" }}>
            <input
              type="checkbox"
              checked={analytics}
              onChange={(e) => setAnalytics(e.target.checked)}
              style={{ width: "20px", height: "20px", marginRight: "10px" }}
            />
            <span style={{ color: "#333", fontSize: "16px" }}>Enable Analytical Cookies</span>
          </label>
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "flex", alignItems: "center" }}>
            <input
              type="checkbox"
              checked={marketing}
              onChange={(e) => setMarketing(e.target.checked)}
              style={{ width: "20px", height: "20px", marginRight: "10px" }}
            />
            <span style={{ color: "#333", fontSize: "16px" }}>Enable Marketing Cookies</span>
          </label>
        </div>

        <button
          onClick={handleSave}
          style={{
            width: "100%",
            backgroundColor: "#C8102E",
            color: "#fff",
            padding: "12px",
            borderRadius: "5px",
            fontSize: "18px",
            fontWeight: "bold",
            cursor: "pointer",
            border: "none",
            marginTop: "10px",
            transition: "background 0.3s"
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = "#A50D24"}
          onMouseOut={(e) => e.target.style.backgroundColor = "#C8102E"}
        >
          Save Preferences
        </button>
      </div>
    </div>
  );
}

export default CookieSettings;
