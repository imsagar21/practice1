import React, { useState } from "react";
import CommonForm from "./CommonForm";
import { RegisterComponentElements } from "./Config";

const initialRegisterState = {
    name : '',
    email : '',
    password : ''
}

const RegisterComponent = () => {
  const [registerData, setRegisterData] = useState(initialRegisterState);

    function handleRegisterSubmit(e){
        e.preventDefault()
        console.log(registerData);
        setRegisterData(initialRegisterState)
        
    }
  return (
    <div>
      <h1>RegisterComponent</h1>
      <CommonForm
        formControls={RegisterComponentElements}
        formData={registerData}
        setFormData={setRegisterData}
        buttonText='Register'
        handleSubmit={handleRegisterSubmit}
      />
    </div>
  );
};

export default RegisterComponent;
