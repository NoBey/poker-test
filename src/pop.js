import React from 'react'
import Popover from 'reactable-popover';

// 花色0:方块
// 花色1:梅花
// 花色2:红桃
// 花色3:黑桃
// 花色5:春夏秋冬
// 花色6:梅兰竹菊


export default class Pop extends React.Component {

  render() {
    const {children, ok} = this.props
    const Pp = ({v, tv, t}) => <div onClick={()=>ok({v, tv, t})} style={{width: '40px',height: '100px',display: 'flex',background: '#ccc',margin:'3px'}}>{`${t}-${v}`}</div>

    return (
      <Popover toggleButton={children} position="top" leftOffset={10} topOffset={10} horizontalJustify="right">

        <div style={{background:'#fff', width: '600px', height: 'auto',position: 'absolute'}}>
        <div style={{width: '100%',display: 'flex'}}>
         {
           [1,2,3,4,5,6,7,8,9,10,11,12,13].map(a => <Pp key={a} v={a} tv={0} t={'方块'}/>)
         }
        </div>
          <div style={{width: '100%',display: 'flex'}}>
           {
             [1,2,3,4,5,6,7,8,9,10,11,12,13].map(a => <Pp key={a} v={a} tv={1} t={'梅花'}/>)
           }
          </div>
          <div style={{width: '100%',display: 'flex'}}>
           {
             [1,2,3,4,5,6,7,8,9,10,11,12,13].map(a => <Pp key={a} v={a} tv={2} t={'红桃'}/>)
           }
          </div>
          <div style={{width: '100%',display: 'flex'}}>
           {
             [1,2,3,4,5,6,7,8,9,10,11,12,13].map(a => <Pp key={a} v={a} tv={3} t={'黑桃'}/>)
           }
          </div>
          <div style={{width: '100%',display: 'flex'}}>
          <Pp v={1} tv={5} t={'春'}/>
          <Pp v={2} tv={5} t={'夏'}/>
          <Pp v={3} tv={5} t={'秋'}/>
          <Pp v={4} tv={5} t={'冬'}/>
          <Pp v={1} tv={6} t={'梅'}/>
          <Pp v={2} tv={6} t={'兰'}/>
          <Pp v={3} tv={6} t={'竹'}/>
          <Pp v={4} tv={6} t={'菊'}/>
          </div>

        </div>
      </Popover>
    );
  }
}
