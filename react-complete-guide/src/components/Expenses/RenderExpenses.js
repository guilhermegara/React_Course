import ExpenseItem from "./ExpenseItem";
import './ExpenseItem.css'

function RenderExpenses(props) {
    
    return ( props.items.map((x) => {
        return <div key={x.id} className="expenses">
            <ExpenseItem title={x.title}
                amount={x.amount} date={x.date}></ExpenseItem> </div>
    }));

}

export default RenderExpenses;