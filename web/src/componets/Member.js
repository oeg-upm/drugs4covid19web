import React from 'react'
import {TwitterOutlined, LinkedinFilled, GithubOutlined, MailOutlined} from '@ant-design/icons'
import {Row, Col, Avatar,Tooltip, Typography, Tag} from 'antd'
const images = require.context('../assets/', true);

const {Text} = Typography
export default function Member({data, gId}){
    const groups = {
        DEV:{tooltip:'Developers Group', color:'magenta'},
        NLP:{tooltip:'Natural Language Processing Group', color:'purple'},
        KG:{tooltip:'Knowledge Graph Creation Group', color:'volcano'},
        Support:{tooltip:'Support and Advisory Group', color:'green'},
        CS:{tooltip:'Citizen Science Group', color:'cyan'}
    }
    const intstituions = {
        UPM:'#1f82c0',
        SERMAS:'#d10002'

    }
    const noSocialMedia = (data.linkedin.length === 0 && 
                            data.github.length === 0 &&
                            data.twitter.length === 0 &&
                            data.email.length === 0 );
    return(
        <>
        <Row justify="center">
            <Col>
                <Avatar size={150} src={images('./' + data.source)}></Avatar>
            </Col>
        </Row>
        <Row justify="center">
            <Col className="text-center">
                <Text strong>{data.name}</Text>
            </Col>
        </Row>        
        <Row justify="center" className="mt-1">
                <Col className="">
                    <Tooltip title={groups[data.group].tooltip}>
                        <Tag color={groups[data.group].color}>{data.group}</Tag>
                    </Tooltip>
                </Col>
                { data.institution.length !== 0 ?(
                <Col className="">
                    <Tag color={intstituions[data.institution]}>{data.institution}</Tag>
                </Col>
                ):''
                }
        </Row>        
        <Row justify="center" gutter={[8,8]}>
            {data.twitter.length !== 0 ? (
                <Col >
                    <a target="_blank" href={"https://twitter.com/" + data.twitter}>
                    <TwitterOutlined />
                    </a>
                </Col>
                ):''}
                {data.linkedin.length !== 0 ? (
                <Col >
                    <a target="_blank" href={data.linkedin}>
                    <LinkedinFilled />
                    </a>
                </Col>
                ):''}
                {data.github.length !== 0 ? (
                <Col >
                    <a target="_blank" href={"https://github.com/" + data.github}>
                    <GithubOutlined />
                    </a>
                </Col>
                ):''}
                {data.email.length !== 0 ? (
                <Col >
                    <a target="_blank" href={"mailto:" + data.email}>
                    <MailOutlined />
                    </a>
                </Col>                 
                ):''}
                {noSocialMedia ? (
                    <Col>
                    <MailOutlined style={{opacity:0}} />
                    </Col>
                ):''} 
        </Row>        
        </>
    )
}
