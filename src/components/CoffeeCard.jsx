import React from 'react';
import { FaEye, FaPenSquare, FaTrashAlt } from "react-icons/fa";

const CoffeeCard = ({coffee}) => {
    const {_id, name, chef, photoUrl} = coffee
    return (
        <div className=''>
            
<a href="#" className="flex flex-col items-center justify-around bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={photoUrl} alt=""/>
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{chef}</p>
    </div>
    <div className='flex flex-col gap-3'>
        <FaEye className='w-5 h-5'></FaEye>
        <FaPenSquare className='w-5 h-5'></FaPenSquare>
        <FaTrashAlt className='w-5 h-5 text-red-500'></FaTrashAlt>
    </div>
</a>

        </div>
    );
};

export default CoffeeCard;