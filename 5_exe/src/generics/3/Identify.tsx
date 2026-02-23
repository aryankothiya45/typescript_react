type Identifiable = {
    id: number;
}

class Repository<T extends Identifiable> {
    private items: T[] = [];
    add(item: T): void {
        this.items.push(item);
    }
    findById(id: number): T | undefined {
        return this.items.find(item => item.id === id);
    }
    getAll(): T[] {
        return this.items;
    }
}

const Identify = () => {
    const userRepository = new Repository<{id: number, name: string}>();
    userRepository.add({id: 1, name: "Alice"});
    userRepository.add({id: 2, name: "Bob"});

    const productRepository = new Repository<{id: number, title: string}>();
    productRepository.add({id: 1, title: "Book"});

    return(
        <div>
            <h2>User</h2>
            <p>{JSON.stringify(userRepository.findById(1))}</p>
            <p>{JSON.stringify(userRepository.getAll())}</p>
            <h2>Product</h2>
            <p>{JSON.stringify(productRepository.findById(1))}</p>
            <p>{JSON.stringify(productRepository.getAll())}</p>
        </div>
    );

}
export default Identify;