import React from 'react';
import './Styles.css';
import { Container, Row, Col } from 'react-bootstrap';
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
        <Col md={12}>
          <div className="bets text-center">
            Your bets: <b>{bets.join(", ")}</b>
          </div>
        </Col>
      </Row>
      <Row className="bg-red bg-verdict">
        <Col md={12}>
          <div className="text-center mt-2">
            <Winner compare={compare} />
          </div>

        </Col>
      </Row>


    </Container>
  )
}
export default Calc;