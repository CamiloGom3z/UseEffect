import React, { useEffect, useState } from 'react';
import './Counter.css';

export const Counter = () => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
      };
   

      useEffect(() => {
        if (count > 0) {
          document.title = `Count ${count}`;
        }
      }, [count]);


    return (
        <div className="counter-container">
            <h1 className="counter-heading">Contador es = {count}</h1>
            <button
                className="counter-button"
                onClick={incrementCount}>
                sumar
            </button>
        </div>
    )
}
