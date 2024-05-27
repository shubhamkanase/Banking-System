// // src/pages/Transactions.js
// import React, { useState, useEffect } from 'react';
// // import api from '../services/api';
// // import { transactions } from '../data/data'

// const Transactions = () => {
//   const [transactions, setTransactions] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch('/data/transactions.json')
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setTransactions(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         setError(error);
//         setLoading(false);
//       });
//   }, []);

//   const getStatusColor = (status) => {
//     switch (status) {
//       case 'Completed':
//         return 'text-bg-success'
//       case 'Pending':
//         return 'text-bg-warning'
//       case 'Failed':
//         return 'text-bg-danger'


//     }
//   }
//   return (
//     <div>
//       <h2>Transactions</h2>
//       <table class="table">
//         <thead>
//           <tr>
//             <th scope="col">Transaction</th>
//             <th scope="col">Amount</th>
//             <th scope="col">Date</th>
//             <th scope="col">Status</th>

//           </tr>
//         </thead>
//         <tbody>
//           {transactions?.map((transaction, index) => (
//             <tr key={index}>
//               <th scope="row">{transaction.title}</th>
//               <td><span>&#8377;</span>{transaction.amount}</td>
//               <td>{transaction.date}</td>
//               <td>
//                 <span class={`badge ${getStatusColor(transaction.status)}`}>{transaction.status}</span></td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Transactions;


// src/pages/Transactions.js
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Transactions = () => {
  const [transactions, setTransactions] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/data/transactions.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setTransactions(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-success text-white';
      case 'Pending':
        return 'bg-warning text-dark';
      case 'Failed':
        return 'bg-danger text-white';
      default:
        return '';
    }
  };

  if (loading) {
    return <div className="text-center mt-5">Loading...</div>;
  }

  if (error) {
    return <div className="text-center mt-5 text-danger">Error: {error.message}</div>;
  }

  return (
    <div className="container mt-5 text-white bg-dark">
      <h2 className="text-center mb-4">Transactions</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Transaction</th>
            <th scope="col">Amount</th>
            <th scope="col">Date</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions?.map((transaction, index) => (
            <tr key={index}>
              <th scope="row">{transaction.title}</th>
              <td><span>&#8377;</span>{transaction.amount}</td>
              <td>{transaction.date}</td>
              <td>
                <span className={`badge ${getStatusColor(transaction.status)}`}>
                  {transaction.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
