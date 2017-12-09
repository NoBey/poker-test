import React from 'react'
import ReactDOM from 'react-dom'
import Pop from './pop.js'

const Aa = (props) => {
  console.log(props)
  const name = props.name||{};
  let r = '请选择'
  const t = name.t||''
  if(t){
    r = `${name.t}-${name.v}`
  }
  return<div style={{width: '100px', height: '150px', background: '#aaa', margin: '10px'}} {...props}>{r}</div>
}

class App extends React.Component {
  state = {
    a:[],
    b:[],
  }
    render() {
      const {a, b} = this.state
      const oka = (d, i) => {
        a[i] = d
        this.setState({a})
      }
      const okb = (d, i) => {
        b[i] = d
        this.setState({b})
      }
        return (
            <div style={{background:'#d5d5d5', width: '1000px', height: '400px'}}>
              <div style={{width: '100%',display: 'flex', alignItems: 'center'}}>
                第一幅
                <Pop ok={d => oka(d, 0)}><Aa name={a[0]} /></Pop>
                <Pop ok={d => oka(d, 1)}><Aa name={a[1]} /></Pop>
                <Pop ok={d => oka(d, 2)}><Aa name={a[2]} /></Pop>
                <Pop ok={d => oka(d, 3)}><Aa name={a[3]} /></Pop>
                <Pop ok={d => oka(d, 4)}><Aa name={a[4]} /></Pop>
              </div>
              <div style={{width: '100%',display: 'flex', alignItems: 'center'}}>
                第二幅
                <Pop ok={d => okb(d, 0)}><Aa name={b[0]} /></Pop>
                <Pop ok={d => okb(d, 1)}><Aa name={b[1]} /></Pop>
                <Pop ok={d => okb(d, 2)}><Aa name={b[2]} /></Pop>
                <Pop ok={d => okb(d, 3)}><Aa name={b[3]} /></Pop>
                <Pop ok={d => okb(d, 4)}><Aa name={b[4]} /></Pop>
              </div>
            </div>
        );
    }
}
ReactDOM.render(
    <App/>, document.getElementById('app'));
