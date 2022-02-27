import { Container } from './styles'

export function TransactionsTrable() {
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
            <td>Desenvolvimento web</td>
            <td className='deposit'>R$ 12.000</td>
            <td>TI</td>
            <td>21/12/2021</td>
          </tr>
          <tr>
            <td>Igreja</td>
            <td className='withdraw'>- R$ 3.000</td>
            <td>Oferta</td>
            <td>12/05/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}
