import React, { useState } from 'react';
import './Expenses.css';
import ExpenseDetail from './ExpenseDetail';
import ExpenseFilter from './ExpenseFilter';


const Expenses=(props)=>{
//     const [istory, setCurrentExpenses] = useState({});

//   const newExpense=(newItem)=>{
//     setCurrentExpenses((prevItem)=>{
//       return [...prevItem, newItem];
//     });
//   }

    // const currentFilterYear = new Date().getFullYear();

    const [filterYear, setFilterYear] = useState('');
    
    function checkFilter(item){
        const newDate =new Date(item.date)
        if(!filterYear || filterYear==='All'){
            return item
        }
        else if(newDate.getFullYear().toString()===filterYear){
            return item;
        }
    }
    const newArray=props.expenseList.filter(checkFilter);  

    return(
        <div className='expenses-Details '>
            <h2>sesa</h2>
            <ExpenseFilter setFilterYear={setFilterYear} onSelectYear={filterYear}/>
           {props.expenseList.length===0 ? <p className='no-data'>No Data Found!</p>
           : newArray.map((item,index)=>{
            return(
                <ExpenseDetail description={item.description} amount={item.amount} date={item.date}
                onFilter={filterYear} key={index} id={index}/>
            );
           })} 
        </div>
    );
}

export default Expenses;