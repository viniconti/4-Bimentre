import React from "react";
import "./Input.css";

function Input({ placeholder, label, onChange, type = "text", value }) {
  return (
    <div className="inputs">
      <div className="cima">
        <label>{label}</label>
        <input
          className="input"
          type={type}
          placeholder={placeholder}
          onChange={onChange} 
          value={value}
        />
      </div>
    </div>
  );
}

export default Input;
