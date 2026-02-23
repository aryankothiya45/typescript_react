class StateManager<T extends object> {
    private state: T;

    constructor(initialState: T) {
        this.state = initialState;
    }
    getState(): T {
        return this.state;
    }
    update(newState: Partial<T>): void {
        this.state = { ...this.state, ...newState };
    }
}
const StateManage = () => {
    const userState = new StateManager<{ name: string, age: number, isAdmin: boolean }>
    ({ name: "Alice", age: 30, isAdmin: true });

    const productState = new StateManager<{ title: string, price: number, stock: number }>
    ({ title: "Book", price: 20, stock: 100 });

    productState.update({ price: 18, stock: 90 });

    return (
        <div>
            <h2>User State</h2>
            <p>{JSON.stringify(userState.getState())}</p>
            <h2>Product State</h2>
            <p>{JSON.stringify(productState.getState())}</p>
        </div>
    );
}
export default StateManage;