import React, { useState } from 'react';

const ExpenseTable = ({ expense }) => {
    const [category,setCategory]=useState('');
    
    const filter=expense.filter((expense)=>{
        return (expense.category.toLowerCase().includes(category));
    })
    // console.log(filter);
    return (
        <div className="flex mt-14">
            <table className="absolute rounded lg overflow-hidden border border-gray-300  shadow-lg h-1">
                <thead>
                    <tr className="bg-gray-200 text-gray-700">
                        <th className="pl-2 text-left border-2 border-b border-gray-300">Title</th>
                        <th className="h-14 text-left border-2 border-b border-gray-300">
                            <select className=" m-2 w-28 p-1" onChange={(e)=>setCategory(e.target.value)}>
                                <option hidden value="">
                                    All
                                </option>
                                <option value="grocery">Grocery</option>
                                <option value="clothes">Clothes</option>
                                <option value="education">Education</option>
                                <option value="medicine">Medicine</option>
                                <option value="bills">Bills</option>
                            </select>
                        </th>
                        <th className="pl-2 w-28 text-left border-b border-gray-300">Amount</th>
                    </tr>
                </thead>

                <tbody>
                    {filter.map((item,id) => {
                        return (
                            <tr key={id} className="hover:bg-gray-100 text-left h-12 ">
                                <td className="w-32 pl-2 border-2 border-b border-gray-300">{item.title}</td>
                                <td className="pl-2 border-2 border-b border-gray-300">{item.category}</td>
                                <td className="pl-2 border-2 border-b border-gray-300">{item.amount}</td>
                            </tr>
                        )

                    })}
                    <tr className="bg-gray-400 font-bold border-gray-700 h-10 ">
                        <td className="pl-2 border-2">Total</td>
                        <td className=" border-2"></td>
                        <td className="pl-2 border-2">₹100</td>
                    </tr>
                </tbody>
            </table>
        </div>

    );
};

export default ExpenseTable;
