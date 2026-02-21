import "./App.css";
import Editor from "./component1/Editor";
import Gallery from "./component2/Gallery";
import RequestTracker from "./component3/RequestTracker";
import UserForm from "./component4/UserForm";

export default function App() {
  return (
    <div>
      {/* 2.1...Task: craete a text editor with three buttons: */}
      <Editor />
      {/* 2.2...Task: Create a simple image gallery component............. */}
      <Gallery />
      {/* 2.3-4...Task: Create a RequestTracker component...... */}
      <RequestTracker />
      {/* 2.5...Task: Build a multi-field form for editing user information.  */}
      <UserForm />
    </div>
  );
}
