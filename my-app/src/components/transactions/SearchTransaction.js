import React from "react"
function SearchTransaction ({searchHandling}) {

    return(
        <div>
            <input className="block w-26 p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-3 mb-3" type="text" placeholder="Search Transaction" onChange={searchHandling}/>
            
        </div>
    )
}
export default SearchTransaction