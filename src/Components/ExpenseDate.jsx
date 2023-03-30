import './ExpenseDate.css';
const ExpenseDate=({date})=>{
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
console.log("shubham",date)
    const newDate = new Date(date);
    console.log(newDate);
    const month = newDate.getMonth();
    console.log(month);
    return(
        <div className='dateSection'>
            <p className='expense-date__month'>{monthNames[month]}</p>
            <p className='expense-date__year'>{newDate.getFullYear()}</p>
            <p className='expense-date__day'>{newDate.getDate()}</p>
        </div>
    );
}

export default ExpenseDate;