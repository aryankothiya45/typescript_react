import React from 'react';
import { JSX } from "react/jsx-runtime";

// export default function TodoItem({ item, onToggle }) {
//     let start = performance.now();
//     while (performance.now() - start < 5) {
// }
// console.log('rendering', item.id);

// return(
//     <div>
//         <input type="checkbox" checked={item.completed} onChange={() => onToggle(item.id)} />
//         {item.text}
//     </div>
// );
// }

type TodoBase = {
    id: number;
    text: string;
    completed: boolean;
}

type TodoItemProps<T extends TodoBase> = {
    item: T;
    onToggle: (id: number) => void;
}

const TodoItem = React.memo(<T extends TodoBase>({ item, onToggle } : TodoItemProps<T>) => {
    let start = performance.now();
    while (performance.now() - start < 5) {
    }
    console.log('rendering', item.id);

    return(
        <div>
            <input
                type="checkbox"
                checked={item.completed}
                onChange={() => onToggle(item.id)}
            />
            {item.text}
        </div>
    );
})as <T extends TodoBase>(props: TodoItemProps<T>) => JSX.Element;

export default TodoItem;