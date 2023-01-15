import { todoType } from "../types/types";

interface Props {
    todoList: Array<todoType>;
}

export const Todo = ({ todoList, }: Props) => {
    return (
            <ul>
                {
                    todoList.map((oneTodo) => {
                        return (
                            <li key={oneTodo.id}>
                                <h3>
                                    {oneTodo.text}
                                </h3>
                                <p>
                                    {oneTodo.date}
                                </p>
                            </li>
                        )
                    }
                    )
                }
            </ul>
    )
}
