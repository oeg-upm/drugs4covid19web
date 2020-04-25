import React from 'react'
import {Row, Col, Radio} from 'antd'
import CustomChart from './chartcomp/CustomChart'
import {getCharts} from '../api/requests'
export default class Dashboard extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:[],
            size:12
        }
    }
    render(){
        return(
            <>
                <Row justify="center" align="middle" gutter={[16,16]}>
                    {this.state.data.map((chart) => (
                        <Col className="text-center p-1" xs={24} md={this.state.size}>
                            <CustomChart data={chart}/>
                        </Col>
                    ))}
                </Row>
            </>
        )

    }
    componentDidMount(){
        getCharts().then((data) => {
            this.setState({data:data})
        })
    }
} 