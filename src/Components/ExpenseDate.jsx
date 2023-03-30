import './ExpenseDate.css';
const ExpenseDate=({date})=>{
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
 
    const newDate = new Date(date);
   
    const month = newDate.getMonth();
 
    return(
        <div className='dateSection'>
            <p className='expense-date__month'>{monthNames[month]}</p>
            <p className='expense-date__year'>{newDate.getFullYear()}</p>
            <p className='expense-date__day'>{newDate.getDate()}</p>
        </div>
    );
}

export default ExpenseDate;