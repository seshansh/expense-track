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

    const [filterYear, setFilterYear] = useState('2023');

    // const filteredExpenses = props.expenseList.filter(items=>{
    //     return items.date.getFullYear().toString() === filterYear;
    // });
    
    function checkFilter(item){
        if(item.date.getFullYear()===2023){
            return item
        }
    }
    

    return(
        <div className='expenses-Details '>
            <h2>sesa</h2>
            <ExpenseFilter setFilterYear={setFilterYear} onSelectYear={filterYear}/>
           {props.expenseList.length===0 ? <p className='no-data'>No Data Found!</p> 
           
           : props.expenseList.filter((item,index)=>{
            return(
                <ExpenseDetail description={item.description} amount={item.amount} date={item.date}
                onFilter={filterYear} key={index} id={index}/>

            );
           })} 
           
           {/* {props.expenseList.map((item,index)=>{
            return(
                <ExpenseDetail description={item.description} amount={item.amount} date={item.date}
                onFilter={filterYear} key={index} id={index}/>

            );
           })}             */}
        </div>
    );
}

export default Expenses;