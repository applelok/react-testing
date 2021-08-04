const TodoList = ({ todos }) => (
    <div>
        {todos.map((t, i) => (
            <div key={i}>{t.title}</div>
        ))}
    </div>
);
export default TodoList;
