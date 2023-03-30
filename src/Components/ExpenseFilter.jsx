// import { RiArrowDropDownLine } from "react-icons/ri";
import './ExpenseFilter.css';

const ExpenseFilter=(props)=>{

    const handleSelectedYear=(event)=>{
        const selectedYear = event.target.value;
        props.setFilterYear(selectedYear);
    }
    console.log("bBANDJS",props.setFilterYear)

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select value={props.onSelectYear} onChange={handleSelectedYear}>
                    <option value='2023'>2023</option>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                    <option value='2018'>2018</option>
                    <option value='2017'>2017</option>
                    <option value='2016'>2016</option>
                    <option value='2015'>2015</option>
                </select>
            </div>
        </div>
    );
}

export default ExpenseFilter;