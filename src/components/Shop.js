import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index';

const Shop = () => {
  const dispatch = useDispatch();
  const {depositeMoney,withdrawMoney}=bindActionCreators(actionCreators,dispatch);
  const balance = useSelector(state=>state.amount);
  return (
    <>
    <h1>Deposite/Withdraw Money</h1>
        <div>
            <button className='btn btn-primary' onClick={()=>{withdrawMoney(100)}}>-</button>
            <span className='mx-4'>Current Balance ({balance})</span>
            <button className='btn btn-primary' onClick={()=>{depositeMoney(100)}}>+</button>
            {/* <button className='btn btn-primary' onClick={()=>{dispatch(actionCreators.withdrawMoney(100))}} >-</button>
            <span className='mx-4'>Update Balance</span>
            <button className='btn btn-primary' onClick={()=>{dispatch(actionCreators.depositeMoney(100))}}>+</button> */}
        </div>
    </>
  )
}

export default Shop
