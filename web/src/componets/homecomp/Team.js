import React from 'react'
import {Row, Col, Typography, Divider, List} from 'antd'
import MemberList from '../MemberList'

const images = require.context('../../assets/', true);
const {Title} = Typography
const  {Text} = Typography
const {Paragraph} = Typography
export default function Approach(props){
    return(
        <>
        <Row>
            <Col>
            <Title level={2}>{props.text.title0}</Title>
            </Col>
        </Row>
        <Row>
            <Col>
            <Title level={4}>{props.text.title1}</Title>
            </Col>
        </Row>
        <Row justify="center">
            <Col>
            <MemberList team={props.data}></MemberList>        
            </Col>
        </Row>
        <Row>
            <Col>
            <Title level={4}>{props.text.title2}</Title>
            </Col>
        </Row>
        <Row justify="center" align="bottom">
            <Col xs={24} md={8} className="text-center">
                <img src={images('./' + props.text.logo1)} alt="" className="img-fluid"/>
            </Col>
            <Col xs={24} md={8} className="text-center">
                <img src={images('./' + props.text.logo2)} alt="" className="img-fluid"/>
            </Col>
            <Col xs={24} md={8} className="text-center">
                <img src={images('./' + props.text.logo3)} alt="" className="img-fluid"/>
            </Col>                                                        
        </Row>
        <Divider></Divider>
        </>        
    )
}