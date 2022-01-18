import React, { useState } from "react";

import Card from "../Card/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

import './ExpenseItem.css'

function RenderExpenses(props) {


    const [filteredYear, setFilteredYear] = useState('-- All --');

    const ExpenseFilterHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    let filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    if (filteredYear === '-- All --')
        filteredExpenses = [...props.items];

    

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter selected={filteredYear} onChangeFilter={ExpenseFilterHandler} />

                <ExpensesList items={filteredExpenses}/>
            </Card>
        </div>
    );
}

export default RenderExpenses;