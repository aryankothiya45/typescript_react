type ApiResponse<T> = {
    status : string;
    data : T;
}

const response = <T,>(data: T):ApiResponse<T> => {
    return {
        status : "success",
        data : data
    }
}

const Example = () => {
    const user = response<{name : string, age : number}>({name : "John", age : 30});

    const product = response<{title : string, price : number}>({title : "Book", price : 20});

    return (
        <div>
            <h2>User</h2>
            <p>{JSON.stringify(user)}</p>
            <h2>Product</h2>
            <p>{JSON.stringify(product)}</p>
        </div>
    )
}
export default Example;
