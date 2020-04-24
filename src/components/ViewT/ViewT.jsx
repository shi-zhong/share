import React,{Component} from 'react'
import './viewT.css'

export default class ViewT extends Component {
  state = {
    scrollTop: 0,
    transDis: 0,
    preTouch:0,
    animate: false
  }

  handleTouchStart (e) {
    this.setState({
      preTouch: e.touches[0].clientY,
      scrollTop: e.target.scrollTop
    })
  }

  handleTouch (e) {
    const { scrollTop, transDis, preTouch } = this.state
    const deltaY = e.touches[0].clientY - preTouch
    console.log(e.touches[0].clientY,'-',preTouch,'=',deltaY)
    if ( scrollTop === 0 && transDis<=40) {
      if (transDis +deltaY*0.4 < 40) {
        this.setState({ transDis: transDis + deltaY*0.4 })
      } else {
        this.setState({ transDis: 40})
      }
      e.preventDefault()
    }
    this.setState({
      preTouch: e.touches[0].clientY,
      scrollTop: e.target.scrollTop
    })
  }

  handleTouchEnd () {
    const { transDis } = this.state
    if (transDis === 40) {
      this.setState({
        animate: true
      }, () => {
        setTimeout(()=>{
          this.setState({
            transDis: 0,
            animate: false
          })
        },1000)})
    } else {
      this.setState({ transDis: 0 })
    }
  }

  render () {
    const { transDis, animate } = this.state
    const aniStyle = {
      transform: 'translateY(-' + (80-(transDis*2)) + 'px)'
    }
    const span = {
      animation: 'spaning 1s linear infinite'
    }
    return (
      <div className="pulldown1" style={aniStyle}>
        <div className="animate1">
          <div className="circle" style={animate?span:null}></div>
        </div>
        <div
          className="con1"
          onTouchStart={this.handleTouchStart.bind(this)}
          onTouchMove={this.handleTouch.bind(this)}
          onTouchEnd={this.handleTouchEnd.bind(this)}
        >
          <div className="content1">下拉刷新我也动</div>
          <div className="content1">2</div>
        </div>
      </div>
    )
  }
}