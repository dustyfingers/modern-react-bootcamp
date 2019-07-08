import useLocalStorageState from './useLocalStorageState';
import uuid from 'uuid';

export default initialTodos => {
    const [todos, setTodos] = useLocalStorageState('todos', initialTodos);

    return {
        todos,
        addTodo: newTodoText => {
            setTodos([...todos, { id: uuid.v4(), task: newTodoText, completed: false }])
        },
        removeTodo: todoId => {
            const updatedTodos = todos.filter(todo => todo.id !== todoId);
            setTodos(updatedTodos);
        },
        toggleTodo: todoId => {
            // toggle the 'completed' property on the todo where the id matches the passed in id, otherwise just return the todo as is
            const updatedTodos = todos.map(todo => todo.id === todoId ? { ...todo, completed: !todo.completed } : todo);
            setTodos(updatedTodos);
        },
        editTodo: (todoId, newTask) => {
            // add the nesTask as the task on the todo where the id matches the passed in id, otherwise just return the todo as is
            const updatedTodos = todos.map(todo => todo.id === todoId ? { ...todo, task: newTask } : todo);
            setTodos(updatedTodos);
        }
    };
}
