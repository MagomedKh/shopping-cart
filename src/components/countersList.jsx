import React, { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
   const initialState = [
      { id: 0, value: 1, name: "Ненужная вещь", price: "300" },
      { id: 1, value: 2, name: "Ложка" },
      { id: 2, value: 3, name: "Вилка" },
      { id: 3, value: 4, name: "Тарелка" },
      { id: 4, value: 5, name: "Набор минималиста" },
   ];

   const [counters, setCounters] = useState(initialState);

   const handleDelete = (id) => {
      setCounters(counters.filter((counter) => counter.id !== id));
   };

   const handleReset = () => {
      setCounters(initialState);
   };

   const handleValueIncrement = (id) => {
      const modifiedCounters = JSON.parse(JSON.stringify(counters));
      const index = modifiedCounters.findIndex((count) => count.id === id);
      modifiedCounters[index].value++;

      setCounters(modifiedCounters);
   };
   const handleValueDecrement = (id) => {
      const modifiedCounters = JSON.parse(JSON.stringify(counters));
      const index = modifiedCounters.findIndex((count) => count.id === id);
      modifiedCounters[index].value--;

      setCounters(modifiedCounters);
   };

   return (
      <>
         {counters.map((count) => (
            <Counter
               key={count.id}
               onDelete={handleDelete}
               onIncrement={handleValueIncrement}
               onDecrement={handleValueDecrement}
               {...count}
            />
         ))}
         <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>
            Сброс
         </button>
      </>
   );
};

export default CountersList;
