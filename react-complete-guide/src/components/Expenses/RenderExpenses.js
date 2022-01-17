import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../Card/Card";
import ExpensesFilter from "./ExpensesFilter";

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

                {filteredExpenses.map(expense => <ExpenseItem key={expense.id} title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />)}
            </Card>
        </div>
    );
}

export default RenderExpenses;