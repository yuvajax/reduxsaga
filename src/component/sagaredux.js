import React,{useEffect} from 'react';
import {fetchuserrequest} from '../actions/sagaactions';
import { useSelector, useDispatch }  from 'react-redux'
import Cardsaga from './Cardsaga';
import './sagaredux.css'

function Sagaredux() {

    const loading = useSelector(state => state.reducer.loading)
    console.log(loading)
    const usedetail = useSelector(state => state.reducer.user)
    console.log("userdetail",usedetail)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchuserrequest())
    },[]);

    if(loading){
        return (
        <div className='loader'>
            <p></p>
            <p></p>
            <p></p>
            <h1>loading...</h1>
        </div>
        )}
    return(
        <div className='userapiheader'>
            <div className='user-inner'>
            <h1>USER CARD</h1>
            {/* <input type="text"  placeholder="search..." /> */}
            </div>
            <div className="userapi">
            {usedetail.map((users, index) => (
                <Cardsaga users={users} key={index}/>
            ))}
            </div>
        </div>

    )     
    }

export default Sagaredux
