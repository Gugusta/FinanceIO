import React from 'react';
import ReactDOM from 'react-dom';
import { createServer } from 'miragejs'
import { App } from './App';

createServer({
  routes(){
    this.namespace = 'api'

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          name: 'Transaction 1',
          amount: 400,
          type: 'deposit',
          category: 'Food',
          createdAt: '14/08/1998'

        }
      ]
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

 