import React from 'react';
import './Roulette.css';
import Weel from '../weel/Weel';
import RouletteTable from '../table/Table';
import { Container, Row, Col } from 'react-bootstrap';
import Winner from '../winner/Winner';
// import Calc from '../calc/Calc';


class Roulette extends React.Component {
  state = {
     num : '',
     arr: [],
     compare: this.props.compare
  }

  updateNum = (num) => {
    this.setState({num})
  }
  updateArr = (arr) => {
    this.setState({arr})
  }


  render() {
    return (
      <Container fluid className="table">
        <Row className="align-items-start">
          <Col className="col-md-8">
            <RouletteTable updateArr={this.updateArr} num={this.state.num} arr={this.state.arr} />
          </Col>
          <Col className="col-md-4">
            <Weel updateNum={this.updateNum} num={this.state.num} arr={this.state.arr}  />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Roulette;