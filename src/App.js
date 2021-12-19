import logo from './logo.svg';
import './App.css';
import Card from './TodoCard';
import { useState } from 'react';
import Todo from './TodoCart';
import './Style.css';


function App() {
  const [Todowords, setTodowords] = useState([

    {
      id: 1,
      name: 'Drink Water Daily'
    },
    {
      id: 2,
      name: 'Eat Healthy Food'
    },
    {
      id: 3,
      name: 'Do Exercise Daily'
    },
    {
      id: 4,
      name: 'Love Everyone'
    },
    {
      id: 5,
      name: 'Respect All'
    },
    {
      id: 6,
      name: 'Help Others'
    },
    {
      id: 7,
      name: 'Make Others Happy'
    },
    {
      id: 8,
      name: 'Think Positive'
    },
    {
      id: 9,
      name: 'Sleep Well'
    },
    {
      id: 10,
      name: 'Learn Something Daily'
    },



  ]);
  const [Cartitems, setcartTimes] = useState([])


  let HandleAddToCard = (pro) => {
    setcartTimes([...Cartitems, pro])

  }

  let handleRemoveCart = (pro) => {

    let removeItem = Cartitems.filter(obj => obj.id !== pro.id);
    setcartTimes([...removeItem])

  }

  return (

    <div className='container'>
      <h1 className='container1 mt-4'style={{"text-align" :"center"}}>--TO DO--</h1>
      <div className='row'>
        <div className='col-lg-7'>
          <div className='row'>

            {
              Todowords.map((pro) => <Card TodoData={pro} Cartitems={Cartitems} HandleClick={HandleAddToCard}></Card>)
            }

          </div>
        </div>
        <div className='col-lg-5'>
          <h1 className='Todolist'> Todo List</h1>
          <Todo Cartitems={Cartitems} handleRemove={handleRemoveCart}></Todo>

        </div>
      </div>
    </div>


  );

}
export default App;