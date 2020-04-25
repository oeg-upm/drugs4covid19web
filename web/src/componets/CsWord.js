import React, {useState, useEffect} from 'react'
import {Tag} from 'antd'

export default class csWord extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            active:false
        }
    }
    changeStatus(){
        const next = !this.state.active
        this.setState({active:next})
        this.props.selected()
    }
    render(){
        return(
        <Tag color={this.state.active ?'blue':''}  onClick={() => this.changeStatus()}>{this.props.word}</Tag>
        )
    }
    
}