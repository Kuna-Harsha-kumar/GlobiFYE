function CounterFn(){
		const[count,setCount] = useState(0);

	const increment = () => {
		setCount(count+1);
};
	const decrement = () => {
		setCount(count-1);
	};

	 return (
    <div>
      <h1>CounterFn: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;


//Rendering counter component from index file or common file
	
	import React from 'react';
import Counter from './Counter'; // Import the Counter component

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
