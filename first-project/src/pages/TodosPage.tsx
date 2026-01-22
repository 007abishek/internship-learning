import TodoSection from "../components/TodoSection";
import "../styles/pages.css";
import "../styles/todos.css";

const TodosPage = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h2>Todo Manager</h2>
        <p>Track and manage your daily tasks</p>
      </div>

      <div className="page-card">
        <TodoSection />
      </div>
    </div>
  );
};

export default TodosPage;
