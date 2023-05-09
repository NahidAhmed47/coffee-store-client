import React from 'react';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div className='max-w-[1200px] mx-auto'>
      <Link to="/add_coffee"><button className='my-btn'>Add Coffee</button></Link>
    </div>
  );
};

export default App;