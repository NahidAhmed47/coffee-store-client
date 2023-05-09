import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CoffeeCard from './components/CoffeeCard';

const App = () => {
  const coffees = useLoaderData();
  return (
    <div className='max-w-[1200px] mx-auto mt-28'>
      <Link to="/add_coffee"><button className='my-btn mb-10'>Add Coffee</button></Link>
      <div className='grid grid-cols-2 gap-5'>
      {
        coffees.map((coffee) => <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>)
      }
      </div>
    </div>
  );
};

export default App;