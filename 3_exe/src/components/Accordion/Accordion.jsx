import React, { useState } from 'react';
import Panel from './Panel';

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);

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
