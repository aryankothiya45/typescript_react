import Item from "./Item";
import { JSX } from "react/jsx-runtime";

const PackingList = () : JSX.Element => {
  return (
    <div>
      <h2>Packing List</h2>
      <Item name="Passport" isPacked={true} />
      <Item name="Sunglasses" isPacked={false} />
      <Item name="Toothbrush" isPacked={true} />
    </div>
  );
}
export default PackingList;