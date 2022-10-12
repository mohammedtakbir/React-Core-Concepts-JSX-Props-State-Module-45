import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { findByText } from '@testing-library/react';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <LoadComments></LoadComments>
    </div>
  );
}

function LoadComments(){
  const [comments, setComments] = useState([]);

  useEffect( () => {
    fetch(`https://jsonplaceholder.typicode.com/comments`)
    .then(res => res.json())
    .then(data => setComments(data))
  }, []);

  return(
    <div>
      <h2>total comments: {comments.length}</h2>
      {
        comments.map(comment => <Comment email={comment.email} body={comment.body}></Comment>)
      }
    </div>
  )
}
function Comment(props){
  return(
    <div className="comments">
      <h4>Email: {props.email}</h4>
      <p>Comment: {props.body}</p>
    </div>
  )
}

function Counter(){
  //* first step
  const [count, setCount] = useState(0);
  //* second step
  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);
  return (
    <div>
      <h1>{count}</h1>
      {/* third step */}
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}

export default App;
