import React from 'react'
import {Row, Col, Typography, Divider, List} from 'antd'
import ApproachCard from '../ApproachCard'
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
        <div className="card-deck mt-5">
        {props.data.map((card) => {
            return(
                    <ApproachCard data={card} buttonText={props.text.text1}/>
            )
        })}
        </div>
        <Divider></Divider>
        </>        
    )
}