import { useState ,useCallback } from "react";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";


type Page = "home" | "profile";

const DocumentTitleApp = () => {
    const [page, setPage] = useState<Page>('home');

    const gotoHome = useCallback(() => {
        setPage("home");
    }, []);
    const gotoProfile = useCallback(() => {
        setPage("profile");
    }, []);

    return(
        <div>
            <h2>Document Title App</h2>
            <button onClick={gotoHome}>Go to Home</button>
            <button onClick={gotoProfile}>Go to Profile</button>
            <div>
                {page === "home" ? <HomePage /> : <ProfilePage />}
            </div>
        </div>
    );
}

export default DocumentTitleApp