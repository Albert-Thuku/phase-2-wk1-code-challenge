import { useState, useEffect } from 'react';

function DisplayTransactions() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/transactions')
      .then(resp => resp.json())
      .then(data => setTransactions(data));
  }, []);

  function deleteTransaction(id){
    fetch(`http://localhost:3000/transactions/${id}`, {
    method: 'DELETE'
    })
    .then(resp => {
    if(resp.ok){
    setTransactions(transactions.filter(transaction => transaction.id !== id));
    }
    })
    }


  return (
    <table id='Transaction'>
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(transaction => {
          return (
            <tr key={transaction.id}>
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td>{transaction.category}</td>
              <td>{transaction.amount}</td>
              <button onClick={() => deleteTransaction(transaction.id)}>Delete</button>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default DisplayTransactions;
