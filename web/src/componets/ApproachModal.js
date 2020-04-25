import React from 'react'
import {Tabs, Space, Row, Col, Typography, List, Statistic} from 'antd'
import ImageModal from './ImageModal'
const {Text}= Typography
const {Title}= Typography
const {Paragraph}= Typography

const {Tabpane} = Tabs

const CustomList = ({data}) => {

return(
    <div>
    { data.lists.map((list, idx) => {
        const title = !Array.isArray(list) && Object.keys(list).includes('title') ? list.title:''
        let dataList = Array.isArray(list) ? list:list.data
        return (
        <div className={idx !== 0? 'mt-3':''}>
        <List
        bordered
        header={title !== '' ? <Text strong>{title}</Text>:null}
        dataSource={dataList}
        renderItem={item =>{
                return( 
                    <List.Item>
                        {item.type === 'link' ?(
                            <a href={item.link} target="_blank">{item.text}</a>    
                        ):item.type === 'value' ?(
                        item.text
                        ):item.type === 'image' ? (
                            <Row justify="center">
                            <Col className="text-center">
                            <Row justify="center">
                            <Col className="text-center">
                                <Text strong style={{whiteSpace: "pre-line"}}>{item.text}</Text>        
                            </Col>
                            </Row>                              
                            <Row justify="center">
                                <Col className="text-center">
                                    <img src={item.link}  className="img-fluid"  style={{maxWidth:'100%!important'}}alt=""/>
                                </Col>
                            </Row>
                            </Col>                              
                            </Row>                       
                        ):item.type === 'json' ?(
                            <>
                            <Row>
                                <Col span={24}>
                                <Text strong>{item.text}</Text>                                    
                                </Col>
                                <Col span={24}>
                                <Text code>{item.code}</Text>
                                </Col>
                            </Row>                            
                            </>
                        ):item.type === 'title' ?(
                            <Text strong>{item.text}</Text>
                        ):''}
                        
                    </List.Item>
                )
        }}
    />
    </div>
    )})}
    </div>

)
}
export default class CardTabs extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            motivation:props.motivation,
            problems:props.problems,
            methodology:props.methodology,
            results:props.results,
            hypothesis:props.hypothesis,
            conclusions:props.conclusions

        }
    }
    render(){
        return(
            <div className="py-3">
                <div>
                <Title level={3}>
                    {this.state.motivation.title}
                </Title>
                <Paragraph className="text-justify">
                    {this.state.motivation.text}
                </Paragraph>
                </div>
                <div>
                <Title level={3}>
                    {this.state.problems.title}
                </Title>
                {Object.keys(this.state.problems).includes('lists') ? (
                    <CustomList data={this.state.problems}/>
                ):(
                    <Paragraph className="text-justify">
                        {this.state.problems.text}
                    </Paragraph>
                )}
                </div>
                <div className="mt-3">
                <Title level={3}>
                    {this.state.hypothesis.title}
                </Title>
                <Paragraph className="text-justify">
                    {this.state.hypothesis.text}
                </Paragraph>
                </div>
                <div className="mt-3">
                <Title level={3}>
                    {this.state.methodology.title}
                </Title>
                <CustomList data={this.state.methodology}></CustomList>
                </div>
                {
                    Object.keys(this.state.results).length !== 0?(
                        <div className="mt-3">
                        <Title level={3}>
                            {this.state.results.title}
                        </Title>
                        <CustomList data={this.state.results}></CustomList>
                        </div>
                    ):''
                }
                {
                    Object.keys(this.state.conclusions).length !== 0 ? (
                        <div className="mt-3">
                        <Title level={3}>
                            {this.state.conclusions.title}
                        </Title>

                        {Object.keys(this.state.conclusions).includes('text') ?(
                            <Paragraph className="text-justify">
                                {this.state.conclusions.text}
                            </Paragraph>
                        ):(Object.keys(this.state.conclusions).includes('lists') ?(
                            <CustomList data={this.state.conclusions}>

                            </CustomList>
                        ):(
                            <Row justify="center" align="middle" gutter={[16,16]}>
                                {Object.keys(this.state.conclusions.statistics).map((key) => (
                                    <Col className="text-center">
                                        <Statistic title={key} precision={2} value={this.state.conclusions.statistics[key]}/>
                                    </Col>
                                ))}
                            </Row>
                        ))}
                        </div>
                    ):''
                }
            </div>
        ) 
    }
   
}