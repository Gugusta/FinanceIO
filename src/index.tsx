import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs'
import { App } from './App';

createServer({

  models: {
    transactions: Model, 
  },

  seeds(server) { 
    server.db.loadData({
      transactions: [
        {
        id: 1,
        title: 'Gastos Com Carro',
        category: 'Gastos',
        type: 'withdraw',
        amount: 850, 
        createdAt: new Date ('2021-05-24 09:00:00')
      },
      {
        id: 2,
        title: 'Pagamento',
        category: 'Pagamento de Salario',
        type: 'deposit',
        amount: 4500, 
        createdAt: new Date ('2021-05-24 14:00:00')
      }
    ]
    })
   },

  routes(){
    this.namespace = 'api'

    this.get('/transactions', () => {
      return this.schema.all('transactions')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)


      return schema.create('transactions', data)
    })

  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

 