import React, { useContext } from "react";
import { GlobalContext } from "../Context";

const Button = () => {
  const { theme, setTheme } = useContext(GlobalContext);
  //    function handleTheme(sagar){
  //         sagar === 'light' ? "dark" :"light"
  //         setTheme(sagar)
  //    }
  return (
    <div>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Change Theme
      </button>
    </div>
  );
};

export default Button;
