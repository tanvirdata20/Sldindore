function App() {
  return (
    <div className="App">
   MY Todo Application
   <FirstComponent />
   <SecondComponent />
   <MythirdComponent />
   <MufourthComponet />
    <MyfifthComponent />
    </div>
  );
}

function FirstComponent(){
  return(
    <div className="FirstComponet">This is my first Component</div>
  )
}

function SecondComponent(){
  return(
    <div className="SecondComponent">This is my second Component</div>
  )
}

function MythirdComponent(){
  return(
    <div className="MythirdComponent">This is my third Component</div>
  )
}

function MufourthComponet(){
  return(
    <div className="FourthComponent">This is my fourth Component</div>
  )
}

function MyfifthComponent(){
  return(
    <div className="FifthComponent">This is my fifth Component</div>
  )
}

export default App;
