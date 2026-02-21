
import { useState } from 'react';
import { JSX } from 'react/jsx-runtime';

const ScientistList = ({ scientists }: { scientists: { id: number; name: string }[] }) : JSX.Element => {
  const [list, setList] = useState(scientists);

  const addScientist = (): void => {
    const newScientist = { id: Date.now(), name: 'New Scientist ' };
    setList([ newScientist, ...list]);
  }

    return(
      <div>
        <h2>Famous Scientists</h2>
        <button onClick={addScientist}>Add Scientist</button>
        <ul>
          {list.map(scientist => (
            <li key={scientist.id}>{scientist.name}</li>
          ))}
        </ul>
      </div>
    );
}
export default ScientistList;