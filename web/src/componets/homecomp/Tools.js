import React from 'react'
import { Row, Col, Divider } from 'antd'
import tools from '../../assets/approach/tools.svg'

export default function Tools(props){
    return(
        <>
        <Row>
            <Col xs={24} md={12}>
                <img src={tools} alt="" className="img-fluid"/>
            </Col>
        </Row>
        <Divider></Divider>
        </>
    )
}