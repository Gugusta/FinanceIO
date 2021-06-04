import {createContext, ReactNode, useContext, useEffect, useState} from 'react'
import {api} from '../services/api'


interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;

}

interface TransactionInput {
    title: string;
    amount: number;
    type: string;
    category: string;
}

interface TransactionsProviderProps {
    children: ReactNode;
}

interface TransactionsContextData {
    transactions: Transaction[];
    createTransactions: (transaction: TransactionInput) => Promise<void>
}

export const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData); 

export function TransactionsProvider({children}: TransactionsProviderProps) {

    const [transactions, setTransactions] = useState<Transaction[]>([])

    useEffect(()=> {
     api.get('/transactions')
     .then(response => setTransactions(response.data.transactions))
    },[])

    async function createTransactions(transactionInput:TransactionInput){
      
        const response =  await api.post('/transactions', {
            ...transactionInput,
            createdAt: new Date()
        
        });

       const { transaction } = response.data

       setTransactions([...transactions, transaction]);
    }

    return (
        <TransactionsContext.Provider value={{ transactions, createTransactions }}>
            {children}
        </TransactionsContext.Provider>
    )
}

export function useTransactions() {
    const context = useContext(TransactionsContext)

    return context
}