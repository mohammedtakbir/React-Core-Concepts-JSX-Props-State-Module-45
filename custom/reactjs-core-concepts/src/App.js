import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

const cars = ['Porsche 911', 'RR Ghost', 'Audi RS7', 'BMW M8', 'Benz S class'];
const cars2 = [
  {name: 'GTR34 Skyline', price: '$75K'},
  {name: 'Mark IV', price: '$115K'},
  {name: 'Rx7', price: '$90K'},
  {name: 'Lancer', price: '$55K'}
]
const style = {
  fontSize: '3rem',
  color: 'yellow'
}
function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <LoadComments></LoadComments>
    </div>
  );
}
function Counter(){
  const [count, setCount] = useState(0);
  const increaseHandler = () => setCount(count + 1);
  const decreaseHandler = () => setCount(count - 1);
  return(
    <div>
      <h1>{count}</h1>
      <button className="btn" onClick={increaseHandler}>Increase</button>
      <button onClick={decreaseHandler}>Decrease</button>
    </div>
  )
}

function LoadComments(){
  const [comments, setComments] = useState([]);
  // console.log(comments, setComments)
  useEffect( () =>{
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => setComments(data))
  }, [])
  return(
    <div>
      <h1>total comments: {comments.length}</h1>
      {
        comments.map(comment => <Comment email={comment.email} body={comment.body}></Comment>)
      }
    </div>
  )
}
function Comment(props){
  return(
    <div className="cars">
      <h2>Email: {props.email}</h2>
      <h3>comments: {props.body}</h3>
    </div>
  )
}











export default App;







































//* counter
// <Counter></Counter>

/* function Counter(){
  const [count, setCount] = useState(0);
  const increaseHandler = () => setCount(count + 1);
  const decreasehandler = () => setCount(count - 1);
  return(
    <div>
      <h1>{count}</h1>
      <button className="btn" onClick={increaseHandler}>Increase</button>
      <button onClick={decreasehandler}>Decrease</button>
    </div>
  )
} */













/* 

{
      cars2.map(car => <li>{car.name}</li>)
      }
      {
        cars.map(car => <Cars name={car}></Cars>)
      }
      {
        cars2.map(car => <Cars2 name={car.name} price={car.price}></Cars2>)
      }
      <Cars name="M8 Competition" price="$170K"></Cars>
      <Cars name="Porsche 911 Turbo S" price="$199K"></Cars>
      <h1>Lambo Adventator SVJ</h1>
      <JDMcars name="Nissan GTR 34 Skyline" price="$75K"></JDMcars>
      <JDMcars name="Toyota Mark IV" price="$120K"></JDMcars>

*/

// function Cars(props){
//   // return <h1>Nissan GTR34 Skyline!</h1>
//   /* return <div>
//     <h1>Nissan GTR34 Skyline!</h1>
//     <h3>Realese year: 2010</h3>
//   </div> */
//   /* return <>
//     <h1>Audi RS7</h1>
//     <h3>color: Matte black</h3>
//   </> */
//   return (
//     <div className="cars">
//       <h1>{props.name}</h1>
//       {/* <h3>Price: {props.price}</h3> */}
//     </div>
//   )
// }

// function Cars2(props){
//   return(
//     <div className='jdm-cars'>
//       <h1 style={style}>{props.name}</h1>
//       <p>price: {props.price}</p>
//     </div>
//   )
// }
