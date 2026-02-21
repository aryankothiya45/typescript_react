import ScientistList from "./ScientistList";
import { JSX } from "react/jsx-runtime";

const SCIENTISTS = [
  { id: 0, name: "Marie Curie" },
  { id: 1, name: "Albert Einstein" },
  { id: 2, name: "Isaac Newton" },
  { id: 3, name: "Charles Darwin" },
] as { id: number; name: string }[];

const App = (): JSX.Element => {
  return <ScientistList scientists={SCIENTISTS} />;
};
export default App;
