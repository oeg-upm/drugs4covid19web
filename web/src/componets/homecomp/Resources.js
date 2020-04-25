import React from 'react'
import {Row, Col, Typography, Divider, List} from 'antd'
import Bar from '../chartcomp/Area'
const {Title} = Typography
const  {Text} = Typography
const {Paragraph} = Typography
export default function Resources(props){
    return(
        <div className="mt-xs-3 mt-md-5">
            <Title level={2}>{props.text.title0}</Title>
            <Row gutter={[16,16]}>
                <Col xs={24} md={12}>
                    <Title level={4}>{props.text.title1}</Title>
                    <Paragraph>
                        {props.text.text1}
                    </Paragraph>                
                </Col>
            </Row>
            <Row gutter={[16,16]} align="bottom" justify="center">
                <Col xs={24} md={12}>
                    <Bar data={props.data.Line} text={props.text.graph1}></Bar>
                    <Row justify="center">
                        <Col>
                        <Title level={4} type="secondary">{props.text.graphtext1}</Title>
                        </Col>
                    </Row>                
                </Col>
                <Col xs={24} md={12}>
                <List
                size="small"
                header={<Title level={4}>{props.data.List.title}</Title>}
                bordered
                dataSource={props.data.List.items}
                renderItem={item => ( 
                    <List.Item>
                    <List.Item.Meta
                      title={item.title}
                      description={item.description}
                    />
                  </List.Item>
                )}
                />
                <Row justify="center">
                    <Col>
                    <Title level={4} type="secondary">{props.text.graphtext2}</Title>

                    </Col>
                </Row>
                </Col>
            </Row>
            <Divider></Divider>
        </div>
    )
}