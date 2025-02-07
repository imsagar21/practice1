import React, { useState } from "react";
import CommonForm from "./CommonForm";
import { LoginComponentElements } from "./Config";

const initialState = {
  email: "",
  password: "",
};

const LoginComponent = () => {
  const [loginFormData, setLoginFormData] = useState(initialState);
  function handleLoginSubmit(e) {
    e.preventDefault();
    console.log(loginFormData);
    setLoginFormData(initialState);
  }
  return (
    <div>
      <h1>LoginComponent</h1>
      <CommonForm
        formControls={LoginComponentElements}
        formData={loginFormData}
        setFormData={setLoginFormData}
        buttonText="Login"
        handleSubmit={handleLoginSubmit}
      />
    </div>
  );
};

export default LoginComponent;
