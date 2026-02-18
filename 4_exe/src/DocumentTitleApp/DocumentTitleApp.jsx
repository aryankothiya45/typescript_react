import { useState } from "react";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";

export default function DocumentTitleApp() {
    const [page, setPage] = useState('home');

    function gotoHome() {
        setPage("home");
    }
    function gotoProfile() {
        setPage("profile");
    }

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