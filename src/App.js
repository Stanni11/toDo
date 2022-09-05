import './App.css';
import List from './components/List'

let toDoList = [
  {
    task1: 'Hit the Gym'
  },
  {
    task2: 'Pay bills'
  },
  {
    task3: 'Meet George'
  },
  {
    task4: 'Buy eggs'
  },
  {
    task5: 'Read a book'
  },
  {
    task6: 'Organize office'
  }
]

const imgChecked = [

]

function App() {
  return (
    <div className="App">
      <List task1={toDoList[0].task1} task2={toDoList[1].task2} task3={toDoList[2].task3} task4={toDoList[3].task4} task5={toDoList[4].task5} task6={toDoList[5].task6} />

    </div>
  );
}


export default App;
