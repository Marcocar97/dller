import React, { useState, useEffect, useRef } from "react";
import emailjs from '@emailjs/browser';

function ChatbotPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      text: "Welcome to Dller! We're here to help you. Please choose one of the following options to continue:", 
      type: "bot", 
      options: ["Schedule a Callback", "Arrange an In-Person Meeting", "Learn More", "Download Brochure"] 
    },
  ]);
  const [userInput, setUserInput] = useState("");

    

  // Referencia para el contenedor de mensajes
  const messagesEndRef = useRef(null);

  // Función para hacer scroll hasta el final
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Ejecutar el scroll cada vez que los mensajes cambian
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Abrir automáticamente después de 5 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    if (option === "Download Brochure") {
      setAwaitingInput("name"); // Ahora espera el nombre del usuario
      setMessages((prev) => [
        ...prev,
        { text: option, type: "user" },
        { text: "Please enter your name:", type: "bot" }
      ]);
      return;
    }
  
    let botResponse;
    if (
      ["Schedule a Callback", "Arrange an In-Person Meeting", "Learn More"].includes(option.trim())
    ) {
      botResponse = { 
        text: "Great! How would you prefer to be contacted?", 
        type: "bot", 
        actions: ["Call", "Chat on Whatsapp", "Send an Email"] 
      };
    }
    setMessages((prev) => [...prev, { text: option, type: "user" }, botResponse]);
  };
  

  const handleActionClick = (action) => {
    if (action === "Call") {
      window.location.href = "tel:+447779621607";
    } else if (action === "Chat on Whatsapp") {
      window.location.href = "https://wa.me/+447779621607?text=Hello,+I+am+interested+in+more+information+about+your+company,+Dller";
    } else if (action === "Send an Email") {
      window.location.href = "mailto:chiles@dller.com?subject=Inquiry&body=Hello,%20I%20need%20some%20assistance";
    }
  };

  const [userDetails, setUserDetails] = useState({ name: "", email: "" });
const [awaitingInput, setAwaitingInput] = useState(null);

const handleUserMessage = (text) => {
  if (!text.trim()) return;

  setMessages((prev) => [...prev, { text, type: "user" }]);

  // Si el chatbot está esperando el nombre
  if (awaitingInput === "name") {
    setUserDetails((prev) => ({ ...prev, name: text }));
    setAwaitingInput("email"); // Ahora esperamos el correo
    setMessages((prev) => [
      ...prev,
      { text: "Thank you! Now, please enter your email:", type: "bot" }
    ]);
    return;
  }

  // Si el chatbot está esperando el correo
  if (awaitingInput === "email") {
    const updatedUserDetails = { ...userDetails, email: text };
    setUserDetails(updatedUserDetails);
    setAwaitingInput(null); // Se resetea, ya no esperamos más datos

    // Enviar datos con EmailJS
    emailjs.send(
      "service_8qd27im", // Reemplaza con tu servicio de EmailJS
      "template_luu9gag", // Reemplaza con tu plantilla de EmailJS
      { user_name: updatedUserDetails.name, user_email: updatedUserDetails.email },
      "q8SYdWtSShPPbGI8c" // Tu clave pública de EmailJS
    ).then(
      () => {
        setMessages((prev) => [
          ...prev,
          { text: "Thank you! Your brochure is being downloaded now.", type: "bot" }
        ]);

        // Iniciar la descarga del brochure
        const link = document.createElement("a");
        link.href = "/Dller_Brochure.pdf"; // Cambia esto por la URL de tu brochure
        link.download = "Dller_Brochure.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      },
      (error) => {
        console.error("Error sending email:", error);
        setMessages((prev) => [
          ...prev,
          { text: "Sorry, there was an error. Please try again later.", type: "bot" }
        ]);
      }
    );
    return;
  }

  // Respuesta por defecto si no estamos esperando nombre ni correo
  setMessages((prev) => [
    ...prev,
    { 
      text: "I'm sorry, I didn't quite catch that. Please select one of the available options:", 
      type: "bot", 
      options: ["Schedule a Callback", "Arrange an In-Person Meeting", "Learn More", "Download Brochure"] 
    }
  ]);
};

  

  return (
    <div style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: 1000 }}>
      {isOpen ? (
        <div
          style={{
            width: "300px",
            height: "400px",
            backgroundColor: "#fff",
            border: "1px solid #ccc",
            borderRadius: "8px",
            display: "flex",
            flexDirection: "column",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          {/* Encabezado */}
          <div
            style={{
              backgroundColor: "#c41230", // Color de marca
              padding: "10px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: "1px solid #a10f2a",
              fontWeight: "bold",
              color: "#fff",
            }}
          >
            <span>Virtual Assistant Dller</span>
            <button
              onClick={toggleChatbot}
              style={{
                backgroundColor: "#fff",
                border: "none",
                color: "#c41230",
                borderRadius: "50%",
                width: "30px",
                height: "30px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              ✕
            </button>
          </div>

          {/* Contenido del chat */}
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "10px",
              backgroundColor: "#f7f7f7",
            }}
          >
            {messages.map((msg, index) => (
              <div key={index} style={{ marginBottom: "10px" }}>
                <div
                  style={{
                    textAlign: msg.type === "bot" ? "left" : "right",
                    marginBottom: "5px",
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      padding: "8px 12px",
                      borderRadius: "16px",
                      backgroundColor: msg.type === "bot" ? "#f0f0f0" : "#007bff",
                      color: msg.type === "bot" ? "#333" : "#fff",
                    }}
                  >
                    {msg.text}
                  </span>
                </div>
                {msg.options && (
                  <div style={{ marginTop: "10px" }}>
                    {msg.options.map((option, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleOptionClick(option)}
                        style={{
                          padding: "10px",
                          backgroundColor: "#007bff",
                          color: "#fff",
                          border: "none",
                          borderRadius: "8px",
                          marginBottom: "5px",
                          cursor: "pointer",
                          width: "100%",
                        }}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
                {msg.actions && (
                  <div style={{ marginTop: "10px" }}>
                    {msg.actions.map((action, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleActionClick(action)}
                        style={{
                          padding: "10px",
                          backgroundColor: "#28a745",
                          color: "#fff",
                          border: "none",
                          borderRadius: "8px",
                          marginBottom: "5px",
                          cursor: "pointer",
                          width: "100%",
                        }}
                      >
                        {action}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {/* Elemento invisible para el scroll */}
            <div ref={messagesEndRef} />
          </div>

          {/* Input de texto */}
          <div
            style={{
              padding: "10px",
              borderTop: "1px solid #ccc",
              display: "flex",
              alignItems: "center",
              backgroundColor: "#fff",
            }}
          >
            <input
              type="text"
              placeholder="Write your message..."
              style={{
                flex: 1,
                padding: "8px",
                border: "1px solid #ccc",
                borderRadius: "16px",
              }}
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleUserMessage(userInput);
                  setUserInput("");
                }
              }}
            />
            <button
              style={{
                marginLeft: "8px",
                backgroundColor: "#c41230",
                border: "none",
                color: "#fff",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                cursor: "pointer",
              }}
              onClick={() => {
                handleUserMessage(userInput);
                setUserInput("");
              }}
            >
              ➤
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={toggleChatbot}
          style={{
            fontSize: "24px",
            cursor: "pointer",
            backgroundColor: "#c41230",
            color: "#fff",
            border: "none",
            borderRadius: "50%",
            width: "60px",
            height: "60px",
          }}
        >
          💬
        </button>
      )}
    </div>
  );
}

export default ChatbotPopup;
