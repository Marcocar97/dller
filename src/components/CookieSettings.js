import React, { useState } from 'react';
import Cookies from 'js-cookie';

function CookieSettings() {
  const [analytics, setAnalytics] = useState(Cookies.get('analytics-cookies') === 'true');
  const [marketing, setMarketing] = useState(Cookies.get('marketing-cookies') === 'true');

  const handleSave = () => {
    Cookies.set('analytics-cookies', analytics ? 'true' : 'false', { expires: 365 });
    Cookies.set('marketing-cookies', marketing ? 'true' : 'false', { expires: 365 });
    alert('Configuración guardada');
  };

  return (
    <div>
      <h1>Cookies Settings</h1>
      <div>
        <label>
          <input type="checkbox" checked={analytics} onChange={e => setAnalytics(e.target.checked)} />
          Cookies de Análisis
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" checked={marketing} onChange={e => setMarketing(e.target.checked)} />
          Cookies de Marketing
        </label>
      </div>
      <button onClick={handleSave}>Guardar configuración</button>
    </div>
  );
}

export default CookieSettings;
