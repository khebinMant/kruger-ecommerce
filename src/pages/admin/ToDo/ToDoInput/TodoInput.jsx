import React from "react";
import "./TodoInput.scss";

const TodoInput = () => {
  return (
    <div className="input-group">
      <input
        type="text"
        className="input"
        id="text"
        name="text"
        placeholder="Crear ToDo"
        autocomplete="off"
      />
      <input className="button--submit" value="+" type="submit" />
    </div>
  );
};

export default TodoInput;
