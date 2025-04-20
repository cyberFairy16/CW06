import React from 'react';
import FilteredList from './FilteredList';  // Correct path for FilteredList.js
import List from './List';  // Correct path for List.js

const produce = [
  { name: "Apple", type: "fruit" },
  { name: "Banana", type: "fruit" },
  { name: "Carrot", type: "vegetable" },
  { name: "Spinach", type: "vegetable" },
  { name: "Mango", type: "fruit" }
];

function App() {
  return (
    <div className="App">
      <FilteredList items={produce} />
      <List items={produce} />
    </div>
  );
}

export default App;
