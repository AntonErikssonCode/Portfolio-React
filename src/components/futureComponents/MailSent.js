import React, { useEffect, useState } from "react";
import "./MailSent.css";

const MailSent = () => {
  const [showElement, setShowElement] = React.useState(true);
  useEffect(() => {
    setTimeout(function () {
      setShowElement(false);
    }, 3000);
  }, []);

  return (
    <div>
      {showElement ? (
        <div className="mailSent-backdrop">
          <div className="mailSent-modal">
            <h3>MAIL SENT</h3>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default MailSent;
