import React, { useState, useEffect } from 'react';
import TodoForm from '../../components/Todo-form';
import TodoList from '../../components/TodoList';
import { Todo } from '../../models/todo';

const TodosPage = () => {

    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem('todos') || '[]') as Todo[];
        setTodos(savedTodos);
    }, []);


    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const onAdd = (title: string): void => {
        const newTodo: Todo = {id: Date.now(), label: title, completed: false};
        setTodos(prev => [newTodo, ...prev]);
    }

    const toggleHandler = (todoId: number): void  => {
        const newTodos: Todo[] = todos.map(todo => {
            if(todo.id === todoId){
                todo.completed = !todo.completed;
            }
            return todo;
        });
        setTodos(newTodos);
    }

    const removeHandler = (todoId: number): void => {
        const shouldRemove: boolean = window.confirm('Are you sure?');
        if(shouldRemove){
            setTodos(prev => prev.filter(todo => todo.id !== todoId));
        }
    }

    return(
        <>
            <TodoForm
                onAdd={onAdd}
            />
            <TodoList
                todos={todos}
                onToggle={toggleHandler}
                onRemove={removeHandler}
            />
        </>
    )
}

export default TodosPage;