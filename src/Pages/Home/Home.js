import React from 'react';
import './Home.css';
import DiaryHome from '../../Components/DiaryHome/DiaryHome';
import NavBar from '../../Components/NavBar/NavBar';

const Home = () => {
    return ( 
        <div className="Home" id="home">
            <NavBar />
            <DiaryHome/>
        </div>
     );
}
 
export default Home;