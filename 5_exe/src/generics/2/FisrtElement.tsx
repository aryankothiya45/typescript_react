const getFirstElement = <T,>(arr: T[]): T => {
    return arr[0];
}

const Example2 = () => {
    const numbers = [1, 2, 3, 4, 5];
    const sentences = ["Hello", "World", "Generics"];

    return(
        <div>
            <h2>First Number</h2>
            <p>{getFirstElement(numbers)}</p>
            <h2>First Sentence</h2>
            <p>{getFirstElement(sentences)}</p>
        </div>
    );
}
export default Example2;