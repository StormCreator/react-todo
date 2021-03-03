import { MouseEvent } from 'react';
import { Todo } from "../../models/todo";


interface TodoListProps{
    todos: Todo[]
    onToggle(todoId: number):void
    onRemove(todoId: number): void
}

const TodoList = ({ todos, onToggle, onRemove }: TodoListProps) => {

    const removeHandler = (event: MouseEvent, todoId: number):void => {
        event.preventDefault();
        onRemove(todoId);
    }


    if(todos.length === 0){
        return <p className="center">Todo List is empty!</p>
    }

    return(
        <ul>
            {todos.map(todo => {
                return (
                    <li key={todo.id} className={todo.completed ? 'todo completed' : 'todo'}>
                        <label>
                            <input type="checkbox" defaultChecked={todo.completed} onChange={() => onToggle(todo.id)} />
                            <span>{todo.label}</span>
                            <i className="material-icons red-text" onClick={ event => removeHandler(event, todo.id)}>delete</i>
                        </label>
                    </li>
                )
            })}
        </ul>
    )
}

export default TodoList;