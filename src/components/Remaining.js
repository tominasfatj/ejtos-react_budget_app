import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Remaining = () => {
    const { expenses, budget, currency } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
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
    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';
    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining: {getCurrencySymbol(currency)}{budget - totalExpenses}</span>
        </div>
    );
};
export default Remaining;
