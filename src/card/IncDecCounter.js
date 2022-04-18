import { useState } from 'react';

function IncDecCounter() {
  let [num, setNum] = useState(0);
  let incNum = () => {
    if (num < 10) {
      setNum(Number(num) + 1);
    }
  };
  let decNum = () => {
    if (num > 0) {
      setNum(num - 1);
    }
  };
  let handleChange = (e) => {
    setNum(e.target.value);
  };
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div>
        <button class="btn btn-outline-primary" type="button" onClick={decNum}>
          -
        </button>
      </div>
      <div>
        <input
          style={{ maxWidth: '20px' }}
          type="text"
          class="form-control"
          value={num}
          onChange={handleChange}
        ></input>
      </div>
      <div>
        <button class="btn btn-outline-primary" type="button" onClick={incNum}>
          +
        </button>
      </div>
    </div>
  );
}
export default IncDecCounter;
