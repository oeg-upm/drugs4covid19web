import React from 'react'
import Slides from '../Slides'

import {Row, Col, Typography, Divider} from 'antd'
const {Title} = Typography
const  {Text} = Typography
const {Paragraph} = Typography

export default function Description(props){
    return(
        <section className="mt-xs-3 mt-md-5">
        <Row gutter={[16,16]}>
            <Col xs={24} md={14}>
                <Title level={2}>{props.text.title1}</Title>
                <Text>{props.text.text1}</Text>
            </Col>
            <Col xs={24} md={10}>
                <div class="embed-responsive embed-responsive-16by9">
                    <iframe class="embed-responsive-item" src={props.text.videoLink} allowfullscreen></iframe>
                </div>                
            </Col>
        </Row>
        <Slides></Slides>
        <Divider></Divider>
        </section>
    )
}