// src/pages/DepositWithdraw.js
import React, { useState } from 'react';
// import api from '../services/api';

const DepositWithdraw = () => {
  const [totalAmount, setTotalAmount] = useState(20000);
  const [amount, setAmount] = useState();
  const [type, setType] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (type === 'deposit') {
      addAmount()
    } else if (type === 'withdraw') {
      subtractAmount()
    } else {
      alert('Select type')
    }
 
  };

  const addAmount = () => {
    setTotalAmount(Number(amount + totalAmount))
    setAmount(0)
    setType('')
  }
  const subtractAmount = () => {
    setTotalAmount(Number(totalAmount - amount))
       setAmount(0)
    setType('')
  }
  return (
    <div>
      <h2 >Deposit/Withdraw</h2>
      <div class="container-fluid text-center">
        <div class="row">
          <div class="col-3">
            <div class="card text-bg-secondary">
              <div class="card-body">
                <h5 class="card-title">Total Ammount</h5>
                <h6 class="card-text">{totalAmount.toLocaleString('en-IN')}</h6>
              </div>
            </div>
          </div>
          <div class="col-7 ">
            <div class="card text-white bg-dark">
              <div class="card-body">
                <h5 class="card-title">Deposit/Withdraw</h5>
                <h6 class="card-text">
                  <form >
                    <div className='row'>
                      <div className='col-6'>
                        <input class="form-control" type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} placeholder="Amount" aria-label="default input example"></input>
                      </div>
                      <div className='col-6'>
                        <select class="form-select" value={type} onChange={(e) => setType(e.target.value)}>
                          <option>Select the type</option>
                          <option value="deposit">Deposit</option>
                          <option value="withdraw">Withdraw</option>
                        </select>
                      </div>

                      <div className='col-12'>
                        <button type="button" class="btn btn-primary mt-3" onClick={handleSubmit}>Submit</button>
                      </div>
                    </div>
                  </form>
                </h6>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default DepositWithdraw;
