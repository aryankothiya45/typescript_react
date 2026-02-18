import React from 'react';

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


const TodoItem = React.memo(function TodoItem({ item, onToggle }) {
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