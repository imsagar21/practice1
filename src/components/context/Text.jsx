import React, { useContext } from "react";
import { GlobalContext } from "../Context";

const Text = () => {
  const { theme } = useContext(GlobalContext);
  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "black" : "grey",
        color: theme === "light" ? "white" : "red",
      }}
    >
      hello Welcome Sagar 
    </div>
  );
};

export default Text;
