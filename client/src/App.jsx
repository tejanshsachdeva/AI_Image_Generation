import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import {logo} from './assets';
import { Home, CreatePost } from './pages';


const App = () => {
  return (
    <BrowserRouter> 
     <header className="w-full flex justify-between items-center bg-[#074d43] sm:px-8 px-4 py-4 border-b-[#e6ebf4]">
      <Link to="/">
        <img src={logo} alt="logo" className="w-28 object-contain" />
      </Link>
      <Link to="/create-post" className=" font-inter font-medium bg-[#010608f2] text-white px-4 py-2 rounded-md">
        Create
      </Link>

     </header>
     <main className="sm:px-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[clac(100vh-73px)]">
        <Routes>
          <Route path="/" element={<CreatePost />} />
          <Route path="/create-post" element={<Home />} />

        </Routes>

     </main>
    </BrowserRouter>
    )
}

export default App