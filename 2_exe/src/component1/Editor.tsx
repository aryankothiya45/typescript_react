import { JSX } from "react/jsx-runtime";


const Editor = (): JSX.Element => {
  const handleBoldClick = (): void => {
    alert("Bold text");
  }

  const handleItalicClick = (): void => {
    alert("Italic text");
  }

  const handleSaveClick = (): void => {
    alert("Save draft");
  }

  return (
    <>
      <button onClick={handleBoldClick}>Bold text</button>
      <button onClick={handleItalicClick}>Italic text</button>
      <button onClick={handleSaveClick}>Save draft</button>
      <hr />
    </>
  );
}

export default Editor;