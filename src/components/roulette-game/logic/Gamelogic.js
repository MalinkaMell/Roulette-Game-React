import React from 'React';

class GameLogic extends React.Component {
  state = {

  }
  //winning number: 35 to 1
  //Split: 17 to 1 (still gotta do that!)
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
  //2 to 1: 2:1

  render() {
    return(
      <div>
        gamelogic
      </div>
    )
  }
}

export default GameLogic;