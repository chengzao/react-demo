import React, { useState, useCallback} from 'react'

// 自定义 hook
function useClientRect() {
  const [rect, setRect] = useState(null);
  const ref = useCallback(node => {
    if (node !== null) {
      setRect(node.getBoundingClientRect());
    }
  }, []);

  return [rect, ref];
}

function MeasureExample() {
  const [rect, ref] = useClientRect();
  return (
    <div>
      <h1 ref={ref}>useClientRect Hook</h1>
      {rect !== null &&
        <h2>The above header is {Math.round(rect.height)}px tall</h2>
      }
    </div>
  );
}

export default MeasureExample
