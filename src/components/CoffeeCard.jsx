import React from 'react';
import { FaEye, FaPenSquare, FaTrashAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({coffee}) => {
    const {_id, name, chef, photoUrl} = coffee;
    const handleDelete = (id) =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(`http://localhost:5000/coffee/${id}`, {
                method: 'DELETE'
              })
              .then(res => res.json())
              .then(data => {
                if(data.deletedCount > 0) {
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                }
              })
            }
          })
    }
    return (
        <div className=''>
            
<div className="flex flex-col items-center justify-around bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={photoUrl} alt=""/>
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{chef}</p>
    </div>
    <div className='flex flex-col gap-3'>
        <FaEye className='w-5 h-5'></FaEye>
       <Link to={`/update_coffee/${_id}`}><FaPenSquare className='w-5 h-5'></FaPenSquare></Link>
        <FaTrashAlt onClick={()=> handleDelete(_id)} className='w-5 h-5 text-red-500'></FaTrashAlt>
    </div>
</div>

        </div>
    );
};

export default CoffeeCard;