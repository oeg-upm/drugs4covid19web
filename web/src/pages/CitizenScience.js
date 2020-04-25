import React from 'react'
import {Row, Col} from 'antd'
import CsWord from '../componets/CsWord'
import Dashboard from '../componets/Dashboard.js'
import Layout from '../componets/Layout'
const phrase = 'Ribavirin is gonadotoxic and teratogenic in multiple species.'
export default class CitizenScience extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      words:phrase.split(' '),
      selected:Array(phrase.split(' ').length).fill(false)
    }
  }
  selectedWord(idx){
    let newStates = this.state.selected
    newStates[idx] = !this.state.selected[idx]
    this.setState({selected:newStates})
  }
  render(){
    return(
      <Layout>
        <Dashboard></Dashboard>
      </Layout>
    )

  }
}