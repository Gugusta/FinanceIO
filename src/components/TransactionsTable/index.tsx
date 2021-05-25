import { useEffect } from 'react'
import { api } from '../../services/api'
import { Container } from './style'

export function TransactionsTable() {

    useEffect(()=> {
     api.get('/transactions')
     .then(response => console.log(response.data))
    },[])

    return (
        <Container>
            <table>

                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td> Desenvolvimento de Website </td>
                        <td className="deposit">+  R$13.000 </td>
                        <td> Desenvolvimento </td>
                        <td> 22/03/05 </td>
                    </tr>

                    <tr>
                        <td> Aluguel </td>
                        <td className="withdraw"> - R$3.000 </td>
                        <td> despesa </td>
                        <td> 22/03/05 </td>
                    </tr>

                </tbody>
            </table>
        </Container>
    )
}