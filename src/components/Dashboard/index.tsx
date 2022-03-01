import { Summary } from "../Summary";
import { TransactionsTrable } from "../TransactionTable";
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