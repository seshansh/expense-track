import React, { useState } from "react";
import './Header.css';
// import { TbCoinRupee } from "react-icons/tb";
import { RiHandCoinLine} from "react-icons/ri";
import AddExpense from './AddExpense';

const Header=(props)=>{
    // const [expenseList, setExpenseList] = useState([]);
    const [showAddForm, setShowAddForm]= useState(false);

    const handleAddClick=()=>{
        setShowAddForm(!showAddForm);
    }

    const addExpenseItem=(newItem)=>{
        props.addedItem(newItem);
    }
    return(
         <div className="nav-main" >
            <RiHandCoinLine size={40} color="#F1D00A" className='coin'/>
            <h2>Expense Tracker</h2>
            <div className='add-section'>
                <button onClick={handleAddClick}>Add Expense</button>
            </div>
            {showAddForm ? <AddExpense  setShowAddForm={setShowAddForm} onAdd={addExpenseItem} />: null}

        </div>
    );
}

export default Header;