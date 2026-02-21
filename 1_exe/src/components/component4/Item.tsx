import { JSX } from "react/jsx-runtime";

const Item = ({ name ,  isPacked } : { name : string, isPacked : boolean }): JSX.Element => {

  const text = isPacked ? name + 'yes' : name + 'no';
  return (
    <>
      <li>
        { isPacked ? <del>{text}</del> : text }
      </li>
    </>
  );
}

export default Item;