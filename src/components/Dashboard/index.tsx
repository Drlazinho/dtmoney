import { Summary } from "../Summary";
import { TransactionsTrable } from "../Transaction";
import { Container } from "./styles";

export function Dashboard() {
  return(
    <>
      <Container>
        <Summary/>
        <TransactionsTrable/>
      </Container>
    </>
  )
}