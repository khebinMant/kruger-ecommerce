import React from "react";
import "./TodoInput.scss";

const TodoInput = () => {
  return (
    <div class="input-group">
      <input
        type="text"
        class="input"
        id="text"
        name="text"
        placeholder="Crear ToDo"
        autocomplete="off"
      />
      <input class="button--submit" value="+" type="submit" />
    </div>
  );
};

export default TodoInput;
