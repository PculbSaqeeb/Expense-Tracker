import { useState } from 'react';
import './App.css';
import ExpenseTable from './Components/ExpenseTable';
import Input from './Components/Form';
// import data from './Data';

function App() {
  const data=[
    {
        id: crypto.randomUUID(),
        title: 'Milk',
        category: 'Grocery',
        amount: 40,
    },
    {
        id: crypto.randomUUID(),
        title: 'Shirt',
        category: 'Clothes',
        amount: 600,
    },
    {
        id: crypto.randomUUID(),
        title: 'Vegetables',
        category: 'Grocery',
        amount: 100,
    },
    {
        id: crypto.randomUUID(),
        title: 'Electricity Bill',
        category: 'Bills',
        amount: 80,
    },
]

  const [expense, setExpense] = useState(data);

  return (
    <div className="flex gap-20 h-screen mt-44 ml-64">
      <Input setExpense={setExpense}/>
      <ExpenseTable expense={expense} />
    </div>
  );
}

export default App;

