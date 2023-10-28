import React, {useState} from "react"

function AddingTransaction(){
    const [date, setDate] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")
    const [amount, setAmount] = useState("")

    function submission (e){
        
        fetch("http://localhost:3000/transactions", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            }, 
            body:JSON.stringify({
                date: date,
                description: description,
                category:category,
                amount: amount,
            }),


        });
        alert('added successfully')
    }
    

        return(
            <div>
                <form onSubmit={submission}>
                    <div>
                        <input className="p-3 border border-gray-300" value={date} onChange={(e)=>{setDate(e.target.value)}} type="date" name="date"/>
                        <input className="border border-gray-300 rounded-lg bg-gray-50 mr-10 ml-8 p-3" value={description} onChange={(e)=>{setDescription(e.target.value)}} type="text" name="description" placeholder="description"/>
                        <input className="border border-gray-300 rounded-lg bg-gray-50 mr-10 ml-8 p-3" value={category} onChange={(e)=>{setCategory(e.target.value)}} type="text" name="category" placeholder="category"/>
                        <input className="border border-gray-300 rounded-lg bg-gray-50 mr-10 ml-8 p-3" value={amount} onChange={(e)=>{setAmount(e.target.value)}} type="text" name="amount" placeholder="amount" step="0.01"/>
                    </div>
                    <button type="submit" className="rounded-md shadow-lg shadow-indigo-500/50 bg-gray-400 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ... mt-10 mb-10 p-3">Add Transaction</button>
                </form>
            </div>
        )
    
}
export default AddingTransaction