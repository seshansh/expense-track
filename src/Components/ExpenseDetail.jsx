import './ExpenseDetail.css';
import ExpenseDate from './ExpenseDate';
// import { useState } from 'react';

const ExpenseDetail=(props)=>{
    // const [item,setItem] = useState(props.title)
    const handleEdit=()=>{
        // return setItem("updated");
    }
    return(
        <div className='expense-item'>
            <ExpenseDate date={props.date}/>            
            <h2 className='expense-item__description'>{props.description}</h2>
            <p className='expense-item__price '>${props.amount}</p>
            <button onClick={handleEdit}>edit</button>
        </div>
    );
}

export default ExpenseDetail;

