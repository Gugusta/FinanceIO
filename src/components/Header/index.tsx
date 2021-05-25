
import logoImg from '../../assets/logo.svg'
import { Container, Content} from './style'

export function Header(){
    return (
        <Container>
            <Content>
            <img src={logoImg} alt="Finance IO" />
            <button>
                Nova Transação
            </button>
            </Content>
        </Container>
    )
}