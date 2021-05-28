
import logoImg from '../../assets/logo.svg'
import { Container, Content} from './style'

interface HeaderProps {
    onOpenOpenNewTransactionModal: () => void;
}

export function Header({onOpenOpenNewTransactionModal}:HeaderProps){
    return (
        <Container>
            <Content>
            <img src={logoImg} alt="Finance IO" />
            <button type="button" onClick={onOpenOpenNewTransactionModal}>
                Nova Transação
            </button>
            </Content>
        </Container>
    )
} 