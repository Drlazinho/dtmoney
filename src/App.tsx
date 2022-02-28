import { useState } from "react";
import ReactModal from "react-modal";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { GlobalStyle } from "./styles/global";


ReactModal.setAppElement('#root')

export function App() {
  const [isNewTransactionModalOpen, setIsNewTranscationModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTranscationModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTranscationModalOpen(false);
  }
  
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard/>
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle/>
    </>
  );
}