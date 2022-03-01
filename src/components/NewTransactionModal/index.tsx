import ReactModal from 'react-modal'
import { Container, Radiobox, TransactionTypeContainer } from './styles'
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { FormEvent, useState, useContext } from 'react'
import { api } from '../../services/api'
import { TransactionsContext } from '../../TransactionsContext'

interface NewTransactionModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export function NewTransactionModal({
  isOpen,
  onRequestClose
}: NewTransactionModalProps) {
  const {createTransaction} = useContext(TransactionsContext)

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('deposit')

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault()

    await createTransaction({
      title,
      amount,
      category,
      type,
    })

    setTitle('');
    setCategory('');
    setAmount(0);
    setType('deposit')
    onRequestClose();
  }

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >

      <button type='button' onClick={onRequestClose} className="react-modal-close">
        <img src={closeImg} alt="Fecha modal" />
      </button>

      <Container onSubmit={handleCreateNewTransaction}>
      <h2>Cadastrar Transação</h2>

      <input type="text" placeholder='Título' value={title} onChange={event => setTitle(event.target.value)}/>

      <input type="number" placeholder='Valor' value={amount} onChange={event => setAmount(Number(event.target.value))}/>

      <TransactionTypeContainer>
        <Radiobox 
        type='button' 
        isActive={type === 'deposit'}
        onClick={ ()=> {setType('deposit')}}
        activeColor="green"
        >
          <img src={incomeImg} alt="Entrada" />
          <span>Entrada</span>
        </Radiobox>
        <Radiobox type='button' onClick={() => {setType('withdraw')}}
                  isActive={type === 'withdraw'}
                  activeColor="red"

                  >
          <img src={outcomeImg} alt="Saída" />
          <span>Saída</span>
        </Radiobox>
      </TransactionTypeContainer>

      <input  placeholder='Categoria'
       value={category} 
       onChange={event => setCategory(event.target.value)}/>
      <button  placeholder='enviar' type="submit">Enviar</button>

      </Container>
    </ReactModal>
  )
}
