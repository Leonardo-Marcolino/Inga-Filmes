import { useParams } from "react-router-dom"
import style from "../Details/index.module.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export function Details() {

  const { id } = useParams()
  console.log(id)
  return (
    <>
      <Container>
        <Row>
          <Col>1 of 2</Col>
          <Col>2 of 2</Col>
        </Row>
      </Container>
    </>
  )
}

