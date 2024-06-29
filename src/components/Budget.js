import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import '../App.css';

const Budget = () => {
    const { budget, expenses, currency, dispatch} = useContext(AppContext);
    
    const [newBudget, setNewBudget] = useState(budget);

    const [newCurrency] = useState(currency)
    
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const handleBudgetChange = (event) => {
        const value = parseInt(event.target.value, 10);
        if (value > 20000) {
            alert("The value cannot exceed 20000");
        }
        else if (value < totalExpenses){
            alert("The value cannot go lower than expenses");

        }
         else {
            setNewBudget(value);
            
        }
    };
    const handleCurrencyChange = (event) => {
        const newCurrency = event.target.value;
        dispatch({ type: 'CHG_CURRENCY', payload: newCurrency });
    };

    const getCurrencySymbol = (newCurrency) => {
        switch (newCurrency) {
            case 'dollar':
                return '$';
            case 'pound':
                return '£';
            case 'euro':
                return '€';
            case 'rupee':
                return '₹';
            default:
                return '$'; // Default to dollar if unknown
        }
    };
    return (
<div className='alert alert-secondary'>
<span>
Budget: {' '}
{getCurrencySymbol(currency)}
                <input
                    type="number"
                    step="10"
                    value={newBudget}
                    onChange={handleBudgetChange}
                />
               <select className = "currency-select" value={currency} onChange={handleCurrencyChange}>
                    <option value="dollar">Dollar ($)</option>
                    <option value="pound">Pound (£)</option>
                    <option value="euro">Euro (€)</option>
                    <option value="rupee">Rupee (₹)</option>
                </select>
                
            </span>

</div>
    );
};
export default Budget;