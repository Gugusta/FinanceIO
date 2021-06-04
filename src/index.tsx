import React from 'react';
import { App } from './App';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs'

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
      {
        id: 1,
        title: 'Salário',
        type: 'deposit',
        category: 'Developer',
        amount: 4500,
        createdAt: new Date('2021-02-12 09:00:00')
      },
      {
        id: 2,
        title: 'Gastos com Carro',
        type: 'withdraw',
        category: 'Carro',
        amount: 950,
        createdAt: new Date('2021-02-14 11:00:00')
      },
    ]
    })
  },

  routes() {
    this.namespace = 'api';
    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create('transaction', data)
    })

  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);