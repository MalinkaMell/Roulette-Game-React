import React from 'react';
import './App.css';

import Weel from './components/weel/Weel';
import RouletteTable from './components/table/Table';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { GiDiamonds } from 'react-icons/gi';

import firstRow from './components/table/rows/FirstRow.json';
import firstBorder from './components/table/rows/FirstBorder.json';
import secondRow from './components/table/rows/SecondRow.json';
import secondBorder from './components/table/rows/SecondBorder.json';
import thirdRow from './components/table/rows/ThirdRow.json';
import thirdBorder from './components/table/rows/ThirdBorder.json';
import fourthRow from './components/table/rows/FourthRow.json';
import fifthRow from './components/table/rows/FifthRow.json';
import columnLeft from './components/table/rows/ColumnLeft.json';
import columnRight from './components/table/rows/ColumnRight.json';


class App extends React.Component {

  state = {
    num: "", //winning number
    arr: [], //array of bets
    count: 0, //spins count
    wins: 0, //wins count
    chip: 10, //chip value
    coins: 100000, //coins count
    losses: 0, //losses count
    spinning: false, //the wheel is spinning?
    message: "Put your bets and spin the wheel!", //message
    extArr: [], //little trick: pushing number here if user win, so if it's empty, user loose
    //my JSON rows
    firstRow, firstBorder, secondRow, secondBorder, thirdRow, thirdBorder, fourthRow, fifthRow, columnLeft, columnRight
  }

  //declaring here all the combinations, easier this way
  twoByOneFirst = ["3", "6", "2", "12", "15", "18", "21", "24", "27", "30", "33", "36"];
  twoByOneSecond = ["2", "5", "8", "11", "14", "17", "20", "23", "26", "29", "32", "35"];
  twoByOneThird = ["1", "4", "7", "10", "13", "16", "19", "22", "25", "28", "31", "34"];
  firstTwelves = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
  secondTwelves = ["13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24"];
  thirdTwelves = ["25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36"];
  oneToEighteen = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18"];
  nineteenToThirtySix = ["19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36"];
  black = ["2", "4", "6", "8", "10", "11", "13", "15", "17", "20", "22", "24", "26", "28", "29", "31", "33", "35"];
  red = ['1', '3', '5', '7', '9', '12', '14', '16', '18', '19', '21', '23', '25', '27', '30', '32', '34', '36'];
  even = ["2", "4", "6", "8", "10", "12", "14", "16", "18", "20", "22", "24", "26", "28", "30", "32", "34", "36"];
  odd = ['1', '3', '5', '7', '9', '11', '13', '15', '17', '19', '21', '23', '25', '27', '29', '31', '33', '35'];


  componentDidMount() {
    //grab here user data from database and set state with that data
  }
  
  isSpinning = (isspinning) => {
    isspinning === true ? this.setState({spinning: true}) : this.setState({spinning: false})
  }

  //handling losing
  userLost = () => {
    //update state for message and losses 
    this.setState({
      message: `No luck this time!`,
      losses: this.state.losses + 1,
    }, () => {
      //creating the object to send to mongodb and putting in callback to make sure the state is updated before sending data to database
     

      //and reseting the game
      this.resetGame();
    });

  }

  //handling winning

  //passing multiplier to calcolate how much our user win
  userWin = (multi) => {
    //updating state for message, wins and coins
    this.setState({
      message: `You win ${multi * parseInt(this.state.chip)} coins!`,
      wins: this.state.wins + 1,
      coins: this.state.coins + (multi * parseInt(this.state.chip))
    }, () => {
      //creating the object to send to mongodb and putting in callback to make sure the state is updated before sending data to database
      

      //and reseting the game
      this.resetGame();
    });


  }

  //reset game function: emtying the array and setting all the chips to invisible state
  resetGame = () => {
    this.setState({
      arr: [],
      spinning: false,
      num: "",
      firstRow: firstRow.map(num => {
        num.visible = false;
        return num;
      }),
      firstBorder: firstBorder.map(num => {
        num.visible = false
        return num;
      }),
      secondRow: secondRow.map(num => {
        num.visible = false;
        return num;
      }),
      secondBorder: secondBorder.map(num => {
        num.visible = false;
        return num;
      }),
      thirdRow: thirdRow.map(num => {
        num.visible = false;
        return num;
      }),
      thirdBorder: thirdBorder.map(num => {
        num.visible = false;
        return num;
      }),
      fourthRow: fourthRow.map(num => {
        num.visible = false;
        return num;
      }),
      fifthRow: fifthRow.map(num => {
        num.visible = false;
        return num;
      }),
      columnLeft: columnLeft.map(num => {
        num.visible = false;
        return num;
      }),
      columnRight: columnRight.map(num => {
        num.visible = false;
        return num;
      })
    });
  }

  //finding out if winning number is in any of the arrays
  determineValidBets = (length, element, num, multiplier) => {
    let extArr = [...this.state.extArr];
    let lunghezza = element.length;
    if (lunghezza === length) {
      let filtering = element.filter(isItMyNum => isItMyNum == num);
      if (filtering == num) {
        extArr.push(num);
        this.setState({ extArr });
        this.userWin(multiplier);
        console.log(this.state.extArr);
      }
    }
  }

  //little different here, checking by name and not the length of the array
  determineValidBetsColFive = (name, element, arrName, num, multiplier) => {
    let extArr = [...this.state.extArr];
    if (element === name) {
      let filtered = arrName.filter(item => item == num);
      if (filtered == num) {
        extArr.push(num);
        this.setState({ extArr })
        this.userWin(multiplier)
        console.log(this.state.extArr);
      }
    }
  }

  //gonna pass this function as props to my Weel.js, so i can update it back with the winning number and determine if user won or loose
  updateNum = (num) => {

    this.setState({ num, count: this.state.count + 1 }); //i'm getting number, that's one spin, updating state with this info

    //map the array of bets
    this.state.arr.map(item => {

      if (item === num) { //if it's just a single number
        this.userWin(35); //multiplier is 35, user win a bunch of coins
      }

      //here gonna filter the mini-arrays (borders, columns etc.) and see if winner number is present in any of them

      //if item is not string, means it's an array, so i am going to map it in my determineValidBets function
      if (typeof item !== "string") {

        this.determineValidBets(2, item, num, 17);
        this.determineValidBets(3, item, num, 11);
        this.determineValidBets(4, item, num, 8);
        this.determineValidBets(6, item, num, 5);
        //otherwise it's a string (even, odd etc), so before mapping i have to check if the element name is in my array and then map that element
      } else {
        this.determineValidBetsColFive("Even", item, this.even, num, 1);
        this.determineValidBetsColFive("Odd", item, this.odd, num, 1);
        this.determineValidBetsColFive("Black", item, this.black, num, 1);
        this.determineValidBetsColFive("Red", item, this.red, num, 1);
        this.determineValidBetsColFive("1 to 18", item, this.oneToEighteen, num, 1);
        this.determineValidBetsColFive("19 to 36", item, this.nineteenToThirtySix, num, 1);
        this.determineValidBetsColFive("3rd 12", item, this.thirdTwelves, num, 1);
        this.determineValidBetsColFive("2nd 12", item, this.secondTwelves, num, 1);
        this.determineValidBetsColFive("1st 12", item, this.firstTwelves, num, 1);
        this.determineValidBetsColFive("2:1:1", item, this.twoByOneFirst, num, 2);
        this.determineValidBetsColFive("2:1:2", item, this.twoByOneSecond, num, 2);
        this.determineValidBetsColFive("2:1:3", item, this.twoByOneThird, num, 2);
      }
    });

    //if there is nothing in existing numbers array, means user lost, firing the respective function
    if (this.state.extArr.length === 0) {
      this.userLost();
    }
  }

  //gonna pass this function as props to my Table.js, so i can update it back
  updateArr = (arr) => {
    this.setState({ arr })
  }

  //gonna pass this function as props to my Table.js, so i can update it back
  updateCoins = (coins) => {
    this.setState({ coins })
  }

  //gonna pass this function as props to my Table.js, so i can update it back
  updateRow = (row, val) => {
    this.setState({ [row]: val })
  }

  render() {
    return (
      <Container>
        <Row className="justify-items-center pt-2">
        <Image src="resources/shic_logo2.png" className="img-fluid mx-auto logo" />
          <Container fluid className="table">
            <Row>
              <Col className="mx-5">
                <RouletteTable
                  //ROWS//
                  firstRow={this.state.firstRow}
                  firstBorder={this.state.firstBorder}
                  secondRow={this.state.secondRow}
                  secondBorder={this.state.secondBorder}
                  thirdRow={this.state.thirdRow}
                  thirdBorder={this.state.thirdBorder}
                  fourthRow={this.state.fourthRow}
                  fifthRow={this.state.fifthRow}
                  columnLeft={this.state.columnLeft}
                  columnRight={this.state.columnRight}
                  //END ROWS//
                  updateRow={this.updateRow}
                  updateArr={this.updateArr}
                  updateCoins={this.updateCoins}
                  num={this.state.num}
                  arr={this.state.arr}
                  count={this.state.count}
                  coins={this.state.coins}
                  chip={this.state.chip}
                  spinning={this.state.spinning}
                />
                <Row className="bg-red bg-verdict align-items-center">
                  <Col md={4} className="d-flex align-items-center coins-col justify-content-center">
                    <h4 className="m-0">${this.state.coins}</h4>
                  </Col>
                  <Col md={8}>
                    <div className="text-center">
                      <h6 className="text-uppercase">{this.state.message}</h6>
                    </div>
                    <div className="text-center">
                      {/* <h6>Your bets: <span>{this.state.arr.join(", ")}</span></h6> */}
                      <div className="divider-line divider-line-center divider-line-linear-gradient w-100 mx-auto my-4">
                        <GiDiamonds className="diamond-line-icon" />
                      </div>
                      <ul className="list-inline">
                        <li className="list-inline-item">Spins: {this.state.count}</li>
                        <li className="list-inline-item">Wins: {this.state.wins}</li>
                        <li className="list-inline-item">Losses: {this.state.losses}</li>
                      </ul>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col className="align-self-center">
                <Weel
                  isSpinning={this.isSpinning}
                  updateNum={this.updateNum}
                  num={this.state.num}
                  arr={this.state.arr}
                  count={this.state.count}
                />
              </Col>
            </Row>
          </Container>
          <Container fluid className="table">
            <Row>
              <Col className="text-light-gold">
              Your bets: {this.state.arr.join(", ")}
              </Col>
            </Row>
            
          </Container>
        </Row>
      </Container>
    )
  }
}

export default App;



  //STILL NEED TO CREATE FUNCTIONALITY FOR 

  //Basket, or a five number bet, and allows players to bet on the zero, double zero, 1, 2, and 3. Payout – 6:1.

