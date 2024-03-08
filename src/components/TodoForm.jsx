import React from "react";

const TodoForm = ({ handleSubmit, todo, setTodo, editId }) => {
  return (
    <form className="todoFrom" onSubmit={handleSubmit}>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit">{editId ? "edit" : "Go"}</button>
    </form>
  );
};
export default TodoForm;
