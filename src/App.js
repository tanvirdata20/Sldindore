import Counter from "./component/counter/Counter";

function App() {
  return (
    <div className="App">
   Counter Application
   <Counter by={1}/> 
   <Counter by={2}/> 
   <Counter by={5}/> 
    </div>
  );
}

// function Playingwithprops(properties){
//   console.log(properties.property1);
//   console.log(properties.property2);
//   return(
//     <div>Props</div>
//   )
// }

// function Playingwithprops({property1, property2}){

//   console.log(property1);
//   console.log(property2);
//   return(
//     <div>Props</div>
//   )
// }

export default App;
