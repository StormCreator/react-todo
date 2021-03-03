import { ChangeEvent, KeyboardEvent, useState } from 'react';

interface TodoFormProps{
    onAdd(title: string):void
}


const TodoForm = ({ onAdd }: TodoFormProps) => {

    const [title, setTitle] = useState('');

    const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    }

    const keyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if(event.key === 'Enter'){
            onAdd(title);
            setTitle('');
            
        }
    }

    return(
        <div className="input-field mt2">
            <input 
                type="text" 
                value={title} 
                id="title" 
                placeholder="What are u thinking about?..."
                onChange={changeHandler}
                onKeyPress={keyPressHandler}
            />
            <label htmlFor="title" className="active">What are u thinking about?...</label>
        </div>
    )
}


export default TodoForm;
