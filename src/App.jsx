import './App.css'
import Users from './Effects';
import Counter from './counter';
import Friends from './friends';


function App() {
   
  function handleClick(){
    alert('button clicked');
  }

  const handleClick2 = () => {
    alert('btn click')
  }

  const handleClick3 = (num) =>{
    alert(num+4);
  }

  return (
    <>
      <h1>React core concepts 2</h1>
      <Friends></Friends>
      <Users></Users>
      <Counter></Counter>
      <button onClick={handleClick}>click</button>
      <button onClick={() => {alert('clicked')}}>click</button>
      <button onClick={handleClick2}>click me</button>
      <button onClick={() => handleClick3(4)}>click</button>
    </>
  )
}

export default App
