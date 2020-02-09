import React from 'react';
import { Button, Image } from 'react-bootstrap';
import './Weel.css';
import options from '../options.json';


class Weel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spinAngleStart: Math.random() * 10 + 10,
      spinTimeTotal: Math.random() * 3 + 4 * 1000,
      startAngle: 0,
      spinTime: 0,
      arc: Math.PI / (options.length / 2),
      text: ""
    }
    this.spinTimer = null;
    this.baseSize = 200;
    this.handleOnClick = this.handleOnClick.bind(this);
    this.spin = this.spin.bind(this);
    this.rotate = this.rotate.bind(this);
  }

  componentDidMount() {
    this.drawRouletteWheel();
  }

  componentWillUnmount() {
    this.stopRotateWheel()
  }

  drawRouletteWheel() {
    const baseSize = this.baseSize;
    let { startAngle, arc } = this.state;
    let ctx;
    const canvas = this.refs.canvas;
    if (canvas.getContext) {
      const outsideRadius = baseSize - 45;
      const textRadius = baseSize - 65;
      const insideRadius = baseSize - 85;
      const innderOutline = baseSize - 125;
      ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, 600, 600);

      ctx.font = '14px Helvetica, Arial';
      for (let i = 0; i < options.length; i++) {
        const angle = startAngle + i * arc;
        ctx.fillStyle = options[i].color;
        ctx.beginPath();
        ctx.arc(baseSize, baseSize, outsideRadius, angle, angle + arc, false);
        ctx.arc(baseSize, baseSize, insideRadius, angle + arc, angle, true);
        ctx.fill();
        ctx.save();
        ctx.fillStyle = 'white';
        ctx.translate(baseSize + Math.cos(angle + arc / 2) * textRadius,
          baseSize + Math.sin(angle + arc / 2) * textRadius);
        ctx.rotate(angle + arc / 2 + Math.PI / 2);
        const text = options[i].number;
        ctx.fillText(text, -ctx.measureText(text).width / 2, 0);
        ctx.restore();
      }
      //Arrow
      ctx.strokeStyle = 'yellow'; //arrow
      ctx.lineWidth = 2; //arrow
      ctx.fillStyle = 'red';
      ctx.beginPath();
      ctx.lineTo(baseSize + 10, baseSize - (outsideRadius + 20));
      ctx.lineTo(baseSize + 0, baseSize - (outsideRadius - 5));
      ctx.lineTo(baseSize - 10, baseSize - (outsideRadius + 20));
      ctx.fill();
      ctx.stroke();
    }
  }

  spin() {
    this.spinTimer = null;
    this.setState({ spinTime: 0 }, () => this.rotate());
  }

  rotate() {
    const { spinAngleStart, spinTime, startAngle, spinTimeTotal } = this.state;
    if (spinTime > 2800) {
      clearTimeout(this.spinTimer);
      this.stopRotateWheel();
    } else {
      const spinAngle = spinAngleStart - this.easeOut(spinTime, 0, spinAngleStart, spinTimeTotal);
      this.setState({
        startAngle: startAngle + spinAngle * Math.PI / 180,
        spinTime: spinTime + 10,
      }, () => {
        this.drawRouletteWheel();
        clearTimeout(this.spinTimer);
        this.spinTimer = setTimeout(() => this.rotate(), 30);
      })
    }
  }

  stopRotateWheel() {
    let { startAngle, arc } = this.state;
    const baseSize = this.baseSize;
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext('2d');
    const degrees = startAngle * 180 / Math.PI + 90;
    const arcd = arc * 180 / Math.PI;
    const index = Math.floor((360 - degrees % 360) / arcd);
    ctx.save();
    ctx.font = 'bold 50px Helvetica, Arial';
    const text = options[index].number;
    this.setState({ text })
    ctx.fillText(text, baseSize - ctx.measureText(text).width / 2, baseSize);
    ctx.restore();
    this.props.updateNum(this.state.text);
  }


  easeOut(t, b, c, d) {
    const ts = (t /= d) * t;
    const tc = ts * t;
    return b + c * (tc + -3 * ts + 3 * t);
  }

  handleOnClick() {
    
      this.spin();
    

  }

  SpinButton() {
    
      return (
        <div>
          <input type="button" value="spin" className="btn btn-primary p-2 m-2" id="spin" onClick={this.handleOnClick} />
        </div>
      );
    
  }

  renderBtnText = () => {
    if (this.state.text !== "") {
      return (
        <div>
          <h1>{this.state.text}</h1>
          <p>Click to Spin!</p>
        </div>

      )
    } else {
      return (<h5>Click to Spin!</h5>)
    }
  }

  render() {

    console.log(this.props.arr)
    return (
      <React.Fragment>
        <Image src="/resources/shic_logo2.png" alt="Casino S.C.I.C" className="mx-auto d-block w-50 mb-4"/>
        
        <div className="roulette-container  align-self-center">
          <canvas ref="canvas" width={this.baseSize * 2} height={this.baseSize * 2} className="roulette-canvas"></canvas>
          {this.props.arr.length !== 0 ?
            <Button
              onClick={this.handleOnClick}
              className="m-2 spin-button"
              size="lg"
              block variant="danger">
              {this.renderBtnText()}
            </Button>
            :
            <Button
              className="m-2 spin-button text-small"
              size="lg"
              block variant="danger">
              Please make your bets before spinning
            </Button>
            
          }

        </div>
        <div className="text-center mt-4 text-gold">instructions</div>
      </React.Fragment>

    );
  }
}


export default Weel;
