import React from "react"
import { connect } from 'dva'

@connect(({credit,loading})=>({credit,loading}))
export default class Credit extends React.Component {
  constructor (props){
    super(props)
  }
  get=()=>{
    const {dispatch} = this.props
    dispatch({
      type:'school/getToken',
      payload:{
        organId:'998',
        serviceNo:'100001',
        type:'H5',
      },
    })
  };
  componentDidMount (){
    this.get()
  }
  render () {
    return (
      <div>
        <div>Credit Page</div>
      </div>
    )
  }
}
