import React from 'react'
import Member from './Member'
import {Row, Col} from 'antd'
function getMember(member){
    return(
    <h1>{member.name}</h1>
    )
}
export default function MemberList({team}){
    console.log("ESTE EL TEAM")
    console.log(team)
    return(
        <Row gutter={[16,16]}>
            {team.map((member) => {
                return(
                    <Col xs={12} md={8} lg={6} className="col-xs-6 col-md-4 col-lg-3 py-2 align-self-center">
                        <Member data={member}></Member>
                    </Col>
                )
            })}
        </Row>

    )
}

