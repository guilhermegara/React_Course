import React, { useState } from 'react';

import RenderExpenses from './components/Expenses/RenderExpenses';
import NewExpense from './components/NewExpense/NewExpense';

const expensesHook = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {  

  const [expenses, setExpensesHook] = useState(expensesHook);
  console.log('expensesHook' + expensesHook);

  const addExpenseHandler = (expense) => {

    setExpensesHook((prevExpenses) => {
      return [expense,... prevExpenses]
    });
    
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <RenderExpenses items={expenses}></RenderExpenses>
    </div>
  );
}

export default App;
