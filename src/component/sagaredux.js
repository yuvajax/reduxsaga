import React,{useState,useEffect} from 'react';
import {fetchuserrequest,fetchusersuccess} from '../actions/sagaactions';
import { useSelector, useDispatch }  from 'react-redux'
import Cardsaga from './Cardsaga';
import './sagaredux.css'

function Sagaredux() {

    const [states,setStates] = useState([])
    const [user,setUser] = useState([])

    const loading = useSelector(state => state.reducer.loading)
    console.log(loading)
    const usedetail = useSelector(state => state.reducer.user)
    console.log("userdetail",usedetail)
    const dispatch = useDispatch()

    
    useEffect(() => {
        dispatch(fetchuserrequest())
    },[]);

    useEffect(() => {
        setStates(usedetail)
        console.log("states",states)
        setUser(usedetail)
    },[usedetail]);


    const changehandle = (e) =>{
        const value = e.target.value;
        const filtered = user.filter((item) =>{
            return `${item.name.first} ${item.name.last}`.toLowerCase()
            .includes(value.toLowerCase())
            console.log("3",filtered) 
        })
         setStates(filtered)      
    }


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
            <input type="text"  placeholder="search..." onChange={changehandle} />
            </div>
            <div className="userapi">
            {states.map((users, index) => (
                <Cardsaga users={users} key={index}/>
            ))}
            </div>
        </div>

    )     
    }

export default Sagaredux
