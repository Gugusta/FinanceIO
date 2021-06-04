import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { Dashboard } from "./components/Dashboard";
import { TransactionsProvider} from "../src/hooks/useTransactions"
import { NewTransactionModal } from "./components/NewTransactionModal";

import Modal from 'react-modal';
import { useState } from "react";


Modal.setAppElement('#root')

  export function App() {

    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);
    function handleOpenNewTransactionModal () {
        setIsNewTransactionModalOpen(true)
    };
    function handleCloseNewTransactionModal () {
        setIsNewTransactionModalOpen(false)
    };

    return (
      <TransactionsProvider>
        <Header onOpenOpenNewTransactionModal={handleOpenNewTransactionModal}/>
        <Dashboard />
        <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
        />
        <GlobalStyle/>
      </TransactionsProvider>
    )
  }