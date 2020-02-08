import React from 'react';
import './Styles.css';
import { Container, Row, Col } from 'react-bootstrap';
class Game extends React.Component {

  coins = this.props.coins
  state = {
    chip: 10,
    coins: 300,
    wins: 0,
    losses: 0,
    message: "Nothing to say"
  }

  
  componentWillUpdate() {
   // console.log("arr: " + this.props.arr);
  //  console.log("num: " + this.props.num);
    if (this.props.num !== "") {
      //single number win/loss
      if (this.props.arr.includes(this.props.num.toString())) {

        
        this.setState((prevState) => ({ wins: prevState.wins + 1 }))
        
        this.setState({message: `You won ${35 * parseInt(this.state.chip)} coins!`});
        /* this.setState({ wins: this.state.wins +1 }, () => {
          this.props.updateWins(this.state.wins)
        }) */
      } else {
        console.log("looser");
        this.setState({message: `You loose :()`});
        this.setState((prevState) => ({ losses: prevState.losses + 1 }))
       // this.setState({losses: 1})
      }
    }

    
  }

  componentWillUnmount() {

  }

  regularNumbersArray = ["00", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36"]

  doubleNumbersArray = [["3", "6"], ["6", "9"], ["9", "12"], ["12", "15"], ["15", "18"], ["18", "21"], ["21", "24"], ["24", "27"], ["27", "30"], ["30", "33"], ["33", "36"], ["3", "2"], ["6", "5"], ["9", "8"], ["12", "11"], ["15", "14"], ["18", "17"], ["21", "20"], ["24", "23"], ["27", "26"], ["30", "29"], ["33", "32"], ["36", "35"], ["2", "5"], ["5", "8"], ["8", "1"], ["11", "14"], ["14", "17"], ["17", "20"], ["20", "23"], ["23", "26"], ["26", "29"], ["29", "32"], ["32", "35"], ["2", "1"], ["5", "4"], ["8", "7"], ["11", "10"], ["14", "13"], ["17", "16"], ["20", "19"], ["23", "22"], ["26", "25"], ["29", "28"], ["32", "31"], ["35", "34"], ["1", "4"], ["4", "7"], ["7", "10"], ["10", "13"], ["13", "16"], ["16", "19"], ["19", "22"], ["22", "25"], ["25", "28"], ["28", "31"], ["31", "24"]]

  tripleNumbersArray = [["1", "2", "3"], ["4", "5", "5"], ["7", "8", "9"], ["10", "11", "12"], ["13", "14", "15"],
  ["16", "17", "18"], ["19", "20", "21"], ["22", "23", "24"], ["25", "26", "27"], ["28", "29", "30"], ["31", "32", "33"], ["34", "35", "36"]]

  sixNumbersArray = [["1", "2", "3", "4", "5", "6"], ["4", "5", "6", "7", "8", "9"], ["7", "8", "9", "10", "11", "12"], ["10", "11", "12", "13", "14", "15"], ["13", "14", "15", "16", "17", "18"], ["16", "17", "18", "19", "20", "21"], ["19", "20", "21", "22", "23", "24"], ["22", "23", "24", "25", "26", "27"], ["25", "26", "27", "28", "29", "30"], ["31", "32", "33", "34", "35", "36"]]

  whoByOne = [["3", "6", "2", "12", "15", "18", "21", "24", "27", "30", "33", "36"], ["2", "5", "8", "11", "14", "17", "20", "23", "26", "29", "32", "35"], ["1", "4", "7", "10", "13", "16", "19", "22", "25", "28", "31", "34"]]

  twelves = [["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"], ["13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24"], ["25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36"]]

  eighteen = [["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18"], ["19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36"]]

  blacks = ["2", "4", "6", "8", "10", "11", "13", "15", "17", "20", "22", "24", "26", "28", "29", "31", "33", "35"]
  reds = ['1', '3', '5', '7', '9', '12', '14', '16', '18', '19', '21', '23', '25', '27', '30', '32', '34', '36']


  /* singleNum = (num, bets) => {
    if (num !== "") {
      //single number win/loss
      if (bets.includes(num.toString())) {
        let newTotal = `You won ${35 * parseInt(this.state.chip)} coins!`;
        return newTotal;
      } else {
        return "You lost :( ";
      }
    }
  } */


  render() {
    let bets = this.props.arr;
    let num = this.props.num;
    return (
      <Container>
        <Row className="bg-red bg-bets">
          <Col md={12}>
            <div className="bets text-left">
              Your bets: <span>{this.props.arr.join(", ")}</span>
            </div>
          </Col>
        </Row>
        <Row className="bg-red bg-verdict">
          <Col md={4}>
            <div className="text-center mt-2">
              <h6>Spins: {this.props.count}</h6>
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


    );
  }


}


export default Game;

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