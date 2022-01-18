import React, { useState } from 'react';

import './ExpenseForm.css'

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const [newFormValue, setNewFormValue] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    const callNewExpenseFormHandler = () => {
        setNewFormValue(' ');
    }

    const cancelFormHandler = () => {
        setNewFormValue('');
    }

    const submitHandler = (event) => {

        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        props.onSaveExpenseData(expenseData);

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        setNewFormValue('');
    }

    if (newFormValue === '') {
        return (
            <div>
                <div >
                    <button onClick={callNewExpenseFormHandler}>Add New Expense</button>
                </div>
            </div>
        );
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" value={enteredTitle} autoFocus={true} onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__controls'>
                    <div className='new-expense__control'>
                        <label>Amount</label>
                        <input type="number" value={enteredAmount} onChange={amountChangeHandler} min='0.01' step='0.01' />
                    </div>
                </div>
                <div className='new-expense__controls'>
                    <div className='new-expense__control'>
                        <label>Date</label>
                        <input type="date" value={enteredDate} onChange={dateChangeHandler} min={Date.now()} />
                    </div>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button onClick={cancelFormHandler}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;