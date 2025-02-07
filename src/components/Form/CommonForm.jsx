import React from "react";
import CommonInput from "./CommonInput";

const INPUT = "input";
const TEXTAREA = "textarea";
const SELECT = "select";

const CommonForm = ({
  formControls = [],
  buttonText,
  formData,
  setFormData,
  handleSubmit
}) => {
  function renderComponent(getItem) {
    
    let content = null;

    switch (getItem.componentType) {
      case INPUT:
        content = (
          <CommonInput
            name={getItem.name}
            type={getItem.type}
            label={getItem.label}
            id={getItem.id}
            placeholder={getItem.placeholder}
            value={formData[getItem.name]}
            key={getItem.id}
            onChange={(e)=>{
                setFormData({
                    ...formData,
                    [e.target.name] : e.target.value
                })
            }}
          />
        );

      default:
        return content;
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      {formControls.map((item) => {
        return renderComponent(item);
      })}
      <button type="submit">{buttonText || "Enter your Value"}</button>
    </form>
  );
};

export default CommonForm;
