import React, { useState, useCallback } from 'react';

const App = (props) => {
  const [counter, setCounter] = useState({ value: 0, dummy: true });

  const cbValue1 = useCallback(() => {
    return 'counter.value (dep counter.value): ' + counter.value;
  }, [counter.value]);
  const cbValue2 = useCallback(() => {
    return 'counter.value (dep counter.dummy): ' + counter.value;
    debugger;
  }, [counter.dummy]);

  let prevCbValue;
  let prevCbDummy;

  return (
    <>
      <h1>{props.heading}</h1>
      <p>counter.value {counter.value}</p>
      <p>counter.dummy {counter.dummy.toString()}</p>
      <button
        onClick={() => {
          console.log('-------- clicked --------');
          setCounter({
            value: counter.value + 1,
            dummy: counter.value % 3 === 0 ? !counter.dummy : counter.dummy,
          });
          console.log(cbValue1());
          console.log(cbValue2());
        }}
      >
        +1
      </button>
    </>
  );
};
export default App;
