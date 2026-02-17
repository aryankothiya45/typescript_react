export default function TodoItem({todo , dispatch }){
    function handleTextChange(e) {
        dispatch({
            type: 'changed',
            id: todo.id,
            updates: { text: e.target.value }
        });
    }
    function handleToggle(e){
        dispatch({
            type: 'changed',
            id: todo.id,
            updates: { done: e.target.checked }
        });
    }
    function handleDelete() {
        dispatch({
            type: 'deleted',
            id: todo.id,
        });
    }
    return(
        <div>
            <input 
                type="checkbox"
                checked={todo.done}
                onChange={handleToggle}
            />
            <input 
                type="text"
                value={todo.text || ''}
                onChange={handleTextChange}  
            /> 
            <button onClick={handleDelete}>
                Delete
            </button>
        </div>
    );
}