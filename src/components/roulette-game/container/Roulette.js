import React from 'react';
import './Roulette.css';
import Weel from '../weel/Weel';
import RouletteTable from '../table/Table';
import { Container, Row, Col } from 'react-bootstrap';

class Roulette extends React.Component {
  state = {
    num: '',
    arr: [],
    //compare: this.props.compare,
    count: 0,
    wins: 0,
    chip: 10,
    coins: 300,
    losses: 0,
    message: "Nothing to say"
  }


  updateNum = (num) => {

    this.setState({ num });

    this.setState({ count: this.state.count + 1 });

    if (this.state.num !== "") {
      //single number win/loss
      if (this.state.arr.includes(this.state.num.toString())) {
        //if i win
        let newCoinsCount = 35 * parseInt(this.state.chip)
        this.setState((prevState) => ({ wins: prevState.wins + 1 }))
        this.setState({ message: `You won ${newCoinsCount} coins!` });
        this.setState({coins: this.state.coins + newCoinsCount})
        /* this.setState({ wins: this.state.wins +1 }, () => {
          this.props.updateWins(this.state.wins)
        }) */
      } else {
        console.log("looser");
        this.setState({ message: `You loose :(` });
        this.setState((prevState) => ({ losses: prevState.losses + 1 }));
        
        // this.setState({losses: 1})
      }
    }
  }
  updateArr = (arr) => {
    this.setState({ arr })
  }

  updateCoins = (coins) => {
    this.setState({ coins })
  }

  /*   updateRes = (action) => {
      switch (action) {
        case "win":
          this.setState({wins: this.state.wins + 1})
          break;
        case "lost":
          this.setState({losses: this.state.losses + 1})
          break;
        default:
          break;
      }
      this.setState({count: this.state.count + 1})
    } */


  render() {
    return (
      <Container fluid className="table">
        <Row className="align-items-start">
          <Col>
            <RouletteTable
              updateArr={this.updateArr}
              updateCoins={this.updateCoins}
              num={this.state.num}
              arr={this.state.arr}
              count={this.state.count}
              coins={this.state.coins}
              chip={this.state.chip}
            />
            <Container>
              <Row className="bg-red bg-bets">
                <Col md={12}>
                  <div className="bets text-left">
                    <p>Your coins: <span>{this.state.coins}</span></p>
                    <p>Your bets: <span>{this.state.arr.join(", ")}</span></p>
                  </div>
                </Col>
              </Row>
              <Row className="bg-red bg-verdict">
                <Col md={4}>
                  <div className="text-center mt-2">
                    <h6>Spins: {this.state.count}</h6>
                    <h6>Wins: {this.state.wins}</h6>
                    <h6>Losses: {this.state.losses}</h6>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="text-center mt-2">
                    <p>{this.state.message}</p>
                  </div>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col className="align-self-center justify-content-center">
            <Weel
              updateNum={this.updateNum}
              num={this.state.num}
              arr={this.state.arr}
              count={this.state.count}
            />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Roulette;


/* //winning number: 35 to 1
  //Split: 17 to 1
  //Corner(one of four) 8 to 1

  //0, 00, 1, 2, or 3: To take this bet, place a chip on the outside line that divides the 0 and 1. You will be paid 6 to 1 if any of these numbers come up.

  //This is betting that one of six numbers in two adjacent rows will come up. Place a chip in between two rows on the outside line. If the ball lands on any number in the two rows, you will be paid 6 to 1.


  //red: 1:1
  //black: 1:1
  //even: 1:1
  //odd: 1:1
  //1 to 18: 1:1
  //19 to 36: 1:1
  //1st 12: 2:1
  //2nd 12: 2:1
  //3rd 12: 2:1
  //2 to 1: 2:1 */