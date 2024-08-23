function TodoList({todos}) {
    return ( 
    <>
        <ul>
            {todos.map((row) => (
                <li
                    key = {row.id}
                    style = {{
                        textDecoration: row.checked
                            ? 'line-through'
                            : 'none',
                    }}
                >
                    <input type = "checkbox" checked = {row.checked} />
                    {row.id} / {row.text} / <button>🗑️</button>
                </li>
            ))}
        </ul>
    </>
);
}

export default TodoList;