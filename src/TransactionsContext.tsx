import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "./services/api";


interface Transaction {
  id: number
  title: string
  amount: number
  type: string
  category: string
  createdAt: string
}

//Formas de tipagem

// interface TransactionInput {
//   title: string
//   amount: number
//   type: string
//   category: string
// }

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'> //Passando todas as proprieades do Transaction menos id e createdAt

//type TransactionInput = Pick<Transaction, 'title' | 'amount' | 'category' | 'type'> //Passando as props selecionadas

interface TransactionsProviderProps {
  children: ReactNode; //Aceita qualquer elemento filho no react
}

interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => void;
}

export const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
  //É um erro pra driblar o typescript, não vai ser utilizado, e vai substituido
  
  );

export function TransactionsProvider({children}: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    api
      .get('/transactions')
      .then(response => setTransactions(response.data.transactions))
  }, []);

  function createTransaction(transaction : TransactionInput) {

    api.post('/transactions', transaction)
  }

  return (
    <TransactionsContext.Provider value={{transactions, createTransaction}}>
      {children}
    </TransactionsContext.Provider>
  )
}