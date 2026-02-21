import useDocumentTitle from "../hooks/useDocumentTitle";

const HomePage = () => {
    useDocumentTitle("Home Page");

    return(
        <div>
            <h1>Home Page</h1>
            <p>Welcome to the Home Page</p>
        </div>
    );
}
export default HomePage