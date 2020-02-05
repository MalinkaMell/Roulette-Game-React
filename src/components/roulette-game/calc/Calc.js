import React from 'react';
import './Styles.css';
import { ListGroup, Container, Row, Col } from 'react-bootstrap';
import Winner from '../winner/Winner'

const Calc = props => {

  let bets = props.selected;
  let number = props.number;
  let result;
  console.log(number);
  console.log(bets);

  const compare = () => {
    if (props.number) {
      if (props.selected) {
        bets = props.selected;
        result = bets.includes(props.number.toString()) ? <div>You won!</div> : <div>You loose!</div>
        return result;
      }
    }
  }

  return (
    <Container>
      <Row className="bg-red bg-bets">
        <Col>
          <ListGroup horizontal >
            <div className="bets text-center">
              Your bets: <b>{bets.join(", ")}</b>
            </div>
          </ListGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <Winner compare={compare} />
        </Col>
      </Row>


    </Container>
  )
}
export default Calc;