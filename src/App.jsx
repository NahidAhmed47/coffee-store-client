import React from 'react';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div className='max-w-[1200px] mx-auto mt-28'>
      <Link to="/add_coffee"><button className='my-btn mb-10'>Add Coffee</button></Link>
      

    </div>
  );
};

export default App;