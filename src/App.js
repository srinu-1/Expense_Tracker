import ExpenseItem from './Components/ExpenseItem';
import './App.css';

function App() {
  const expenses = [
    {id: 'e1', title: 'Bike Insurance', amount: 5000, date: new Date(2021, 11, 23)},
    {id: 'e2', title: 'TV', amount: 10000, date: new Date(2021, 11, 23)},
    {id: 'e3', title: 'Groceries', amount: 3500, date: new Date(2021, 11, 22)},
    {id: 'e4', title: 'Refrigerator', amount: 1200, date: new Date(2021, 11, 21)},
  ];
  return (
    <div className="wrapper">
      <start><h1>Expense Tracker</h1></start>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}/>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[0].date}/>
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}/>
      <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}/>
      
    </div>
  );
}

export default App;
