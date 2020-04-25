import React from 'react'
import { Row, Col, Divider, Carousel, Typography, Button} from 'antd'
import tools from '../../assets/approach/tools.svg'
import Icon, {LeftCircleFilled, RightCircleFilled, SearchOutlined} from '@ant-design/icons'
import SearchD4c from '../../assets/SearchIcon'
const {Title, Text, Paragraph} = Typography
export default class Tools extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            dots:[]
        }
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.carousel = React.createRef();
    }
    next() {
        this.carousel.next();
      }
      previous() {
        this.carousel.prev();
      }
    
    render(){
        const props = {
            dots:false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };
      
    return(
        <>
        <Row>
            <Col>
            <Title level={2}>{this.props.text.title0}</Title>
            </Col>
        </Row>
        <Row align="middle" className="mt-5">
            <Col xs={24} md={12}>
                <img src={tools} alt="" className="img-fluid"/>
            </Col>
            <Col xs={24} md={12}>
                <div>
                    <Title level={4}>{this.props.text.title1}</Title>
                    <Row>
                        <Col xs={24} >
                            <Paragraph className="text-justify">
                            {this.props.text.text1}
                            </Paragraph>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button size="large">Start to search <SearchOutlined/></Button>
                        </Col>
                    </Row>
                </div>
                <div className="mt-3">
                    <Title level={4}>{this.props.text.title2}</Title>
                    <Row>
                        <Col span={24}>
                            <Paragraph className="text-justify">
                                {this.props.text.text2}
                            </Paragraph>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button size="large">Start to search <SearchOutlined/></Button>
                        </Col>
                    </Row>
                </div>                
            </Col>
        </Row>
        <Divider></Divider>
        </>
    )
            }
}