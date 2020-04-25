import React from 'react'
import {Row, Col, Typography, Divider} from 'antd'
import Column from '../chartcomp/Column'
const {Title} = Typography
const  {Text} = Typography
const {Paragraph} = Typography
export default function Problem(props){
    return(
        <div  className="mt-xs-3 mt-md-5">
            <Title level={2}>{props.text.title0}</Title>
            <Row gutter={[16,16]} type="flex" align="middle" justify="center">
                <Col xs={24} md={12}>
                    <Title level={4}>{props.text.title1}</Title>
                    <Paragraph>
                        {props.text.text1}
                    </Paragraph>                
                </Col>
                <Col xs={24} md={12}>
                <Column data={props.data} text={props.text.graph1}/>                       
                </Col>
            </Row>
            <Divider></Divider>
        </div>
    )
}