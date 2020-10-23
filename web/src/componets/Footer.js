import React from 'react'
import {Row, Col, Avatar,Typography, Tooltip} from 'antd'
import {TwitterOutlined} from '@ant-design/icons'
import logo from '../assets/logo.svg'
const {Text} = Typography
const images = require.context('../assets/', true);

export default function Footer(props){
    return(
        <div className="mt-xs-3 mt-md-5">
            <Row justify="space-between" align="middle">
                <Col>
                    <div className="m-2">
                        <img src={logo} alt="DRUGS4COVID"   style={{ height: 50 }} className="img-fluid"/>
                    </div>
                </Col>
                <Col xs={12}>
                    <Row gutter={[16,16]} justify="center" align="bottom">
                        <Col span={8}>
                            <Text strong>{props.text.title1}</Text>
                            <img src={images('./' + props.text.logo1)} alt="" className="img-fuid"/>
                        </Col>
                        <Col span={12}>
                            <Text type="secondary" >{props.text.text1}</Text>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <Row style={{float:'right'}}>
                        <Col>

                        <Row gutter={[16,16]} justify="center" align="middle">
                            <Col>
                            <img src={images('./' + props.text.logo2)} alt="" className="img-fluid smallImage"/>
                            </Col>
                            <Col>
                            <img src={images('./' + props.text.logo3)} alt="" className="img-fluid smallImage"/>
                            </Col>
                            <Col>
                            <img src={images('./' + props.text.logo4)} alt="" className="img-fluid smallImage"/>
                            </Col>
                        </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}