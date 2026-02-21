import useDocumentTitle from "../hooks/useDocumentTitle";

const ProfilePage = ()  => {
    useDocumentTitle("Profile Page");

    return(
        <div>
            <h1>Profile Page</h1>
            <p>This is the profile page.</p>
        </div>
    );
}
export default ProfilePage