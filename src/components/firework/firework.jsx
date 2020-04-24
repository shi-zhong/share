import React,{Component} from 'react'
import './firework.css'
// python -m SimpleHTTPServer

function particle (x,y,cx) {
  this.x = x;
  this.y = y;
  this.colorArr = ["rgba(229,77,66,", "rgba(243,123,29,", "rgba(251,189,8,", "rgba(141,198,63,", "rgba(57,181,74,", "rgba(28,187,180,", "rgba(0,129,255,", "rgba(103,57,182,", "rgba(156,38,176,", "rgba(224,57,151,"];
  this.init =function () {
    this.opacity = 1.5;
    this.radius = Math.floor(Math.random()*3)+2;
    this.dy = (1+Math.random())*(Math.floor(Math.random()*2)?1:-1);
    this.dx = (1+Math.random())*(Math.floor(Math.random()*2)?1:-1);
    this.color = this.colorArr[Math.floor(Math.random()*10)];
  }
  this.chgDeg = function (chgDeg) {
    if (chgDeg) {
      if (Math.floor(Math.random()*2)) {
        this.dx *= 0.1*(Math.random()*5);
      } else {
        this.dy *= 0.1*(Math.random()*5);
      }
      if (!Math.floor(Math.random()*2)) {
        this.dx *= 1.5+0.1*(Math.random()*5);
      } else {
        this.dy *= 1.5+0.1*(Math.random()*5);
      }
    } 
  }
  this.init();
  this.chgDeg(Math.floor(Math.random()*2));
  this.draw = function () {
    cx.beginPath();
    cx.arc(this.x,this.y,this.radius,0,Math.PI*2);
    cx.fillStyle = this.color + this.opacity +')';
    cx.fill();
    this.x += this.dx;
    this.y += this.dy;
    this.dy += 0.05;
    this.opacity-=0.05;
  }
}

export default class Refresh extends Component {

  constructor () {
    super()
    this.canvas = React.createRef()
    this.cx = null
    this.particleArr = []
  }

  componentDidMount () { 
    const canvas = this.canvas.current;
    this.cx = canvas.getContext('2d');

    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    this.animate(this.cx);
    window.onmousedown = (e) => {
      this.firework(e.clientX,e.clientY,this.cx)
      setTimeout(() => {
        this.particleArr.splice(0,50);
      },1000)
    }
    window.onresize = function () {
      canvas.height = window.innerHeight;
      canvas.width = window.innerWidth;
    }
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  
  firework = (x,y,cx) => {
    for (let i = 0; i<=49; i++){
      this.particleArr.push(new particle(x,y,cx))
    }
  }

  animate = () => {
    requestAnimationFrame(this.animate);
      this.canvas.current.getContext('2d').clearRect(0,0,this.canvas.current.width,this.canvas.current.height)
    for (let particles of this.particleArr) {
      particles.draw();
    }
  }

  render () {
    return (
      <canvas ref={this.canvas} id="canvas"></canvas>
    )
  }
}