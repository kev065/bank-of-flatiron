import React, {useState, useEffect} from 'react';
import DisplayTransactions from '../transactions/DisplayTransactions';
import SearchTransaction from '../transactions/SearchTransaction';
import AddingTransaction from '../transactions/AddingTransaction';


function OutputShowing (){

    

    const[transaction, setTransaction] = useState ([])
    const [query, setQuery] = useState ("")

    useEffect(()=>{

        fetch("http://localhost:3000/transactions" + query)
            .then((res)=>res.json())
            .then(transaction => setTransaction(transaction))
            }, [query])
  

    function searchHandling(e){
        setQuery(e.target.value)
    }

    return(
        <div>
            <SearchTransaction searchHandling={searchHandling}/>
            <AddingTransaction/>
            <DisplayTransactions transactions={transaction}/>
        </div>
    )

}
export default OutputShowing