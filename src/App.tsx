import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
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
      <>
        <Header onOpenOpenNewTransactionModal={handleOpenNewTransactionModal}/>
        <Dashboard />
        <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
        />
        <GlobalStyle/>
      </>
    )
  }