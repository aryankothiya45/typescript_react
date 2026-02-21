import React from 'react';
import type { Todo } from './TodoList';

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

type TodoItemProps = {
    item: Todo;
    onToggle: (id: number) => void;
}

const TodoItem = React.memo(({ item, onToggle } : TodoItemProps) => {
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
});

export default TodoItem;