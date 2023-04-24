import { useState, useEffect } from "react";

function AddTransaction(){
    const [transactions, setTransactions] = useState([]);
    const [id, setid] = useState('');
    const [date, setdate] = useState('');
    const [description, setdescription] = useState('');
    const [category, setcategory] = useState('');
    const [amount, setamount] = useState('');
    
    useEffect(() => {
        fetch('http://localhost:3000/transactions')
            .then(resp => resp.json())
            .then(data => setTransactions(data));
    }, []);
    
    function handleSubmit(){
        
        const formData = {
            id: id,
            date: date,
            description: description,
            category: category,
            amount: amount,
        };
        fetch('http://localhost:3000/transactions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then(resp => resp.json())
            .then(data => {
                const dataArray = [...transactions, data];
                setTransactions(dataArray);
            })
            .catch(error => console.error(error));
    
        setid('');
        setdate('');
        setdescription('');
        setcategory('');
        setamount('');
    }
    
    function handleChange(e){
        const { id, value } = e.target;
        switch (id) {
            case 'Date':
                setdate(value);
                break;
            case 'Description':
                setdescription(value);
                break;
            case 'Category':
                setcategory(value);
                break;
            case 'Amount':
                setamount(value);
                break;
            default:
                break;
        }
    }
    
    return (
        <form onSubmit={handleSubmit} id="AddTransactionForm">
            <label htmlFor="Date">Date</label>
            <input type="text" placeholder="Enter Date" id="Date" onChange={handleChange} value={date} required/>
            <label htmlFor="Description">Description</label>
            <input type="text" placeholder="Enter Description" id="Description" onChange={handleChange} value={description} required/>
            <label htmlFor="Category">Category</label>
            <input type="text" placeholder="Enter category" id="Category" onChange={handleChange} value={category} required/>
            <label htmlFor="Amount">Amount</label>
            <input type="text" placeholder="Enter amount" id="Amount" onChange={handleChange} value={amount} required/>
            <button type="submit">Add transaction</button>
        </form>
    )
    
}

export default AddTransaction;