import React,{Component} from 'react'
import Firework from '../firework/firework'
import './app.css'
import ViewO from '../ViewO/ViewO'
import ViewT from '../ViewT/ViewT'

export default class App extends Component {
  
  state = {
    which:0
  }

  handlewhich (which) {
    this.setState({
      which: which
    })
  }

  render(){
    const { which } = this.state
    return(
      <div>
        <div className="phone">
          <div className="screen">
            <div className="top-title">
              <div className="hd">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div className="time"> 10.10 PM</div>
              <div className="battery"></div>
            </div>
            <div className='outline'>
              {which?<ViewO />:<ViewT />}
            </div>
          </div>
        </div>
        <div className="butch">
          <div onClick={this.handlewhich.bind(this,1)}>单View</div>
          <div onClick={this.handlewhich.bind(this,0)}>双View</div>
        </div>
        <Firework />
      </div>
    )
  }
}