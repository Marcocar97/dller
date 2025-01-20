import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Link } from 'react-router-dom';

function CookiePopup() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const consent = Cookies.get("user-consent");
    if (!consent) {
      setShowModal(true);
    }
  }, []);

  const handleAccept = () => {
    Cookies.set("user-consent", "accepted", { expires: 365 });
    Cookies.set("analytics-cookies", "true", { expires: 365 });
    Cookies.set("marketing-cookies", "true", { expires: 365 });
    setShowModal(false);
  };

  const handleReject = () => {
    Cookies.set("user-consent", "rejected", { expires: 365 });
    Cookies.set("analytics-cookies", "false", { expires: 365 });
    Cookies.set("marketing-cookies", "false", { expires: 365 });
    setShowModal(false);
  };

  if (!showModal) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h2 style={styles.title}>Manage Your Cookie Preferences</h2>
        <p style={styles.text}>
          We use cookies to enhance your experience on our website. You can accept them all or configure them according to your preferences. For more information, please see our{" "}
          <Link to="/configuracion-cookies" style={styles.link}>
            Cookie Policy
          </Link>.
        </p>
        <div style={styles.buttons}>
          <button style={styles.acceptButton} onClick={handleAccept}>
            Accept All
          </button>
          <button style={styles.rejectButton} onClick={handleReject}>
            Reject All
          </button>
          <Link to="/configuracion-cookies" style={styles.settingsButton}>
            Configure Cookies
          </Link>
        </div>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  modal: {
    backgroundColor: "white",
    borderRadius: "8px",
    padding: "20px",
    maxWidth: "500px",
    textAlign: "center",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
  },
  title: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "15px",
    color: "#333",
  },
  text: {
    fontSize: "14px",
    marginBottom: "20px",
    color: "#555",
  },
  link: {
    color: "#007BFF",
    textDecoration: "none",
    fontWeight: "bold",
  },
  buttons: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    gap: "10px",
  },
  acceptButton: {
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    borderRadius: "5px",
    padding: "10px 15px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "bold",
  },
  rejectButton: {
    backgroundColor: "#dc3545",
    color: "white",
    border: "none",
    borderRadius: "5px",
    padding: "10px 15px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "bold",
  },
  settingsButton: {
    display: "block",
    marginTop: "10px",
    color: "#6c757d",
    textDecoration: "underline",
    fontSize: "14px",
  },
};

export default CookiePopup;
