import { useState, useEffect } from "react";

let timer;
const Input = (props) => {
    const [data, setData] = useState("");

    const debounce = (val) => {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(
            (datas) => {
                console.log(val);
                clearTimeout(timer);
            },
            1000,
            data
        );
    };

    const update = ({ target: { value } }) => {
        setData(value);
        debounce(value);
    };

    return (
        <div>
            <input type="text" value={data} onChange={update} />
        </div>
    );
};

const App = () => {
    return (
        <div>
            <Input />
        </div>
    );
};

export default App;


// ******************************************

import { useState, useEffect } from "react";

let timer;
const Input = (props) => {
  const [data, setData] = useState("");

  const debounce = (Fn) => {
    return function ({ target: { value } }) {
      Fn.call(null, value);

      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout((_) => {
        console.log(value);
        clearTimeout(timer);
      }, 1000);
    };
  };

  const update = (value) => {
    setData(value);
  };

  return (
    <div>
      <input type="text" value={data} onChange={debounce(update)} />
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Input />
    </div>
  );
};

export default App;
