import React, { useEffect, useState} from 'react';
import './Home.css';
import DiaryHome from '../../Components/DiaryHome/DiaryHome';
import NavBar from '../../Components/NavBar/NavBar';
import RingLoader from 'react-spinners/RingLoader';
import { useSelector, useDispatch } from 'react-redux';
import {getAllCards } from '../../redux/actions/actions';
const Home = () => {
    const dispatch =useDispatch();
    const data =useSelector((state)=>state.diaryCardReducer);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        dispatch(getAllCards());
        if(data.loading){
            setLoading(true);
        }
        else{
            setLoading(false);
        }
    }, [dispatch]);

    return ( 
        <div className="Home" id="home">
            { loading &&
                <div className="loader">
                <RingLoader
                    className="spinner"
                    size={100}
                    color={'#FFFF'}
                    loading={setLoading}
                />
                </div>
            }
            {!loading && 
                <div>
                <NavBar />
                <DiaryHome/>
                </div>
            }   
        </div>
     );
}
 
export default Home;