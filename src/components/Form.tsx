import { FormEvent, useState } from "react";

export const Form = () => {
    const [todoText, setTodoText] = useState<string>("");

    const submitHandler = (e: FormEvent) => {
        e.preventDefault();
    }

    const changeHandler = (e: FormEvent) => {
        const target = (e.target as HTMLInputElement).value;
        setTodoText(target);
    }

    return (
        <form onSubmit={submitHandler}>
            <input
                type="text"
                name="newTodoText"
                onChange={changeHandler} />
            <button type="submit">Create Todo</button>
        </form>
    )
}
