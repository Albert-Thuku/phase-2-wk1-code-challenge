import React, { useState } from "react";

function SearchTransaction(){

    const [transactions, settransactions] = useState([])
    const [searchQuery, setSearchQuery] = useState('')
    
    function search(e){
        e.preventDefault();
        fetch(`http://localhost:3000/transactions?q=${searchQuery}`)
            .then(resp => resp.json())
            .then(data => settransactions(data))
    }
    
    function handleSearchQueryChange(event) {
        setSearchQuery(event.target.value)
    }
    
    return (
        <form onSubmit={search} id="SearchForm">
            <input 
                type="text" 
                id="searchBar" 
                placeholder="Search Description" 
                value={searchQuery} 
                onChange={handleSearchQueryChange}
            />
            <button type="submit">Search</button>
            <ul>
                {transactions.map(transaction => (
                    <li key={transaction.id}> Date:{transaction.date} - Description: {transaction.description} - Category: {transaction.category} - Amount: {transaction.amount}</li>
                ))}
            </ul>
        </form>
    )
    
}

export default SearchTransaction