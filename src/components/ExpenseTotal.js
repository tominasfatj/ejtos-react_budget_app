import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const ExpenseTotal = () => {
    const { expenses , currency} = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
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
        <div className='alert alert-primary'>
            <span>Spent so far: {getCurrencySymbol(currency)}{totalExpenses}</span>
        </div>
    );
};
export default ExpenseTotal;
