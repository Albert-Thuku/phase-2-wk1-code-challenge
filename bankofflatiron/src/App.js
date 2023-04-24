import './App.css';
import DisplayTransactions from './DisplayTransactions';
import AddTransaction from './AddTransaction';
import SearchTransaction from './SearchTransaction';

function App() {
  return (
    <>
      <div id="Header">
        <h1>Bank Of Flatiron</h1>
        <SearchTransaction />
      </div>
      <section>
        <DisplayTransactions />
      </section>
      <section>
        <AddTransaction />
      </section>
    </>
  );
}


export default App;
