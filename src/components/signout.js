import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

export default function Signout() {
  const navigate = useNavigate();
  function deleteAllCookies() {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i];
      if (cookie.includes("=")) {
        let eqPos = cookie.indexOf("=");
        let name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=None; Secure";
      }
    }
    navigate('../');
    window.location.reload();
  }

  useEffect(() => {
    deleteAllCookies();
    navigate('../');
    window.location.reload();
  }, [deleteAllCookies, navigate]);

  return (
    <div className="container">
      <h1>Signout Successful</h1>
    </div>
  )
}