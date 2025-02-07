import React from "react";

function PrivacyPolicy() {
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
        Dller Privacy Policy
      </h1>
      <p style={{ textAlign: "center", color: "#555", fontSize: "16px" }}>
        <strong>Updated Version – Compliant with UK GDPR and EU GDPR</strong><br />
        <strong>Effective Date: 01/01/2025</strong>
      </p>

      <div style={{ backgroundColor: "#f9f9f9", padding: "20px", borderRadius: "8px", marginTop: "20px" }}>
        <h2 style={{ color: "#333", fontSize: "22px" }}>1. Introduction</h2>
        <p style={{ color: "#555", lineHeight: "1.6" }}>
          Dller is committed to protecting the privacy and security of personal data in compliance with the
          <strong> UK General Data Protection Regulation (UK GDPR)</strong>, the
          <strong> EU General Data Protection Regulation (EU GDPR)</strong>, and the
          <strong> Data Protection Act 2018</strong>. This Privacy Policy explains how we collect, use, store, and protect
          personal data from business representatives in the kitchen manufacturing industry.
        </p>

        <h2 style={{ color: "#333", fontSize: "22px" }}>2. Scope</h2>
        <p style={{ color: "#555", lineHeight: "1.6" }}>
          This policy applies to personal data collected from <strong>business representatives</strong>, including 
          <strong> owners, directors, and managers of kitchen companies</strong> with a legitimate interest in our manufacturing services.
        </p>

        <h2 style={{ color: "#333", fontSize: "22px" }}>3. Personal Data We Collect</h2>
        <ul style={{ color: "#555", lineHeight: "1.6" }}>
          <li><strong>Identity Data:</strong> Name, job title, company name.</li>
          <li><strong>Contact Data:</strong> Business email, business phone number, company address.</li>
          <li><strong>Professional Data:</strong> Industry, business interests, interactions with our services.</li>
          <li><strong>Marketing Preferences:</strong> Communication records, marketing material preferences.</li>
        </ul>

        <h2 style={{ color: "#333", fontSize: "22px" }}>4. How We Collect Data</h2>
        <p style={{ color: "#555", lineHeight: "1.6" }}>
          We collect personal data through:
        </p>
        <ul style={{ color: "#555", lineHeight: "1.6" }}>
          <li><strong>Direct interactions:</strong> Phone calls, emails, meetings, trade shows, or website inquiries.</li>
          <li><strong>Publicly available sources:</strong> Company websites, industry directories, LinkedIn, and other platforms.</li>
          <li><strong>Third-party providers:</strong> Legitimate business data suppliers.</li>
        </ul>

        <h2 style={{ color: "#333", fontSize: "22px" }}>5. Legal Basis for Processing</h2>
        <ul style={{ color: "#555", lineHeight: "1.6" }}>
          <li><strong>Legitimate Interest:</strong> Processing contact details of business owners, directors, and managers to offer relevant B2B services.</li>
          <li><strong>Contractual Necessity:</strong> To fulfil contracts with customers or suppliers.</li>
          <li><strong>Legal Obligation:</strong> To comply with legal and regulatory requirements.</li>
        </ul>

        <h2 style={{ color: "#333", fontSize: "22px" }}>6. How We Use Personal Data</h2>
        <ul style={{ color: "#555", lineHeight: "1.6" }}>
          <li>Provide and promote our kitchen manufacturing services.</li>
          <li>Manage and maintain business relationships.</li>
          <li>Send marketing communications where legitimate interest exists.</li>
          <li>Respond to inquiries and provide customer support.</li>
          <li>Conduct market research and improve our services.</li>
          <li>Ensure compliance with legal and regulatory obligations.</li>
        </ul>

        <h2 style={{ color: "#333", fontSize: "22px" }}>7. Data Sharing & Disclosure</h2>
        <p style={{ color: "#555", lineHeight: "1.6" }}>
          We do not sell or rent personal data. However, we may share it with:
        </p>
        <ul style={{ color: "#555", lineHeight: "1.6" }}>
          <li><strong>Service Providers:</strong> Third-party vendors for marketing, IT support, or customer management.</li>
          <li><strong>Legal & Regulatory Authorities:</strong> If required by law or to protect our legal rights.</li>
          <li><strong>Business Partners:</strong> If necessary for delivering our services.</li>
        </ul>

        <h2 style={{ color: "#333", fontSize: "22px" }}>8. Contact Information</h2>
        <p style={{ color: "#555", lineHeight: "1.6" }}>
          If you have questions about this Privacy Policy or wish to exercise your data rights, contact us at:
        </p>
        <p style={{ color: "#333", fontWeight: "bold", lineHeight: "1.6" }}>
          <strong>Dller</strong><br />
          ul. Lotnicza 90, 26-001 Masłów Pierwszy, Świętokrzyskie Voivodeship<br />
          📧 Email: <a href="mailto:kontakt@dller.com" style={{ color: "#C8102E", textDecoration: "none" }}>kontakt@dller.com</a><br />
          📞 Phone: +447779621607
        </p>

        <p style={{ color: "#555", lineHeight: "1.6" }}>
          If you are unsatisfied with our response, you have the right to lodge a complaint with the 
          <a href="https://www.ico.org.uk" style={{ color: "#C8102E", textDecoration: "none" }}> UK Information Commissioner’s Office (ICO)</a>.
        </p>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
