import { JSX, useState } from 'react';
import Panel from './Panel';

const Accordion = () : JSX.Element => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return(
    <div>
      <Panel
        title="Panel 1"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      > This is the content of panel 1
      </Panel>
      <Panel
        title="Panel 2"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      > This is the content of panel 2
      </Panel>
      
    </div>
  );
}

export default Accordion;
