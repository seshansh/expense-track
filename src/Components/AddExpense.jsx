import React, { useState } from 'react';
import './AddExpense.css';

const AddExpense=(props)=>{
    const currentDate = new Date();
    const [item, setItem] = useState({
        description:"",
        amount:"",
        date:currentDate
    })
   

    const handleAddItem=(event)=>{
        event.preventDefault();
        if(!item.description||!item.amount){
            return;
        }
        props.onAdd(item);
        setItem({
            description:"",
            amount:"",
            date:currentDate
        });
        props.setShowAddForm(false)
    }
    
    const handleCancel=()=>{
         props.setShowAddForm(false)
    }
    return (
                    <div className='new-expense__controls'>
                        <div className='amount-title'>
                            <div className='new-expense__control'>
                                <label>Description</label>
                                <input type="text" placeholder='Description'
                                 value={item.description}
                                onChange={(e)=>setItem({...item,description:e.target.value})} required={true}/>
                            </div>
                            <div className='new-expense__control'>
                                <label>Amount</label>
                                <input type="number" placeholder='Price'
                                value={item.amount}
                                onChange={(e)=>setItem({...item,amount:e.target.value})} required={true}
                                min="0.01" step="0.01"/>
                            </div>
                        </div>
                        <div className='new-expense__control'>
                            <label>Date</label>
                            <input type="date" placeholder='Enter amount'
                            value={item.date} 
                            onChange={(e)=>setItem({...item,date:e.target.value})}/>
                        </div>
                        <div className='new-expense__actions'>
                        <button className='buttAdd' onClick={handleAddItem}>Add Expense</button>
                        <button className='buttCan' onClick={handleCancel}>Cancel</button>
                        </div>
                    </div>
           
       
    );
}

export default AddExpense;