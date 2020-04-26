import React from 'react'
import { Typography, Row, Col, Button,Modal,Carousel } from 'antd'
import PDFViewer from 'pdf-viewer-reactjs'
import {RiSlideshow2Line, RiArrowLeftLine, RiArrowRightLine, RiDownload2Line} from 'react-icons/ri'
const slidesImages = [
    'Drugs4Covid-EUvsVirus.pptx_page-0001.jpg',
    'Drugs4Covid-EUvsVirus.pptx_page-0002.jpg',
    'Drugs4Covid-EUvsVirus.pptx_page-0003.jpg',
    'Drugs4Covid-EUvsVirus.pptx_page-0004.jpg',
    'Drugs4Covid-EUvsVirus.pptx_page-0005.jpg',
    'Drugs4Covid-EUvsVirus.pptx_page-0006.jpg',
    'Drugs4Covid-EUvsVirus.pptx_page-0007.jpg',
    'Drugs4Covid-EUvsVirus.pptx_page-0008.jpg',
    'Drugs4Covid-EUvsVirus.pptx_page-0009.jpg',
    'Drugs4Covid-EUvsVirus.pptx_page-0010.jpg',
    'Drugs4Covid-EUvsVirus.pptx_page-0011.jpg',
    'Drugs4Covid-EUvsVirus.pptx_page-0012.jpg',
    'Drugs4Covid-EUvsVirus.pptx_page-0013.jpg',
    'Drugs4Covid-EUvsVirus.pptx_page-0014.jpg',
    'Drugs4Covid-EUvsVirus.pptx_page-0015.jpg',
    'Drugs4Covid-EUvsVirus.pptx_page-0016.jpg',
    'Drugs4Covid-EUvsVirus.pptx_page-0017.jpg',
    'Drugs4Covid-EUvsVirus.pptx_page-0018.jpg',
    'Drugs4Covid-EUvsVirus.pptx_page-0019.jpg',
    'Drugs4Covid-EUvsVirus.pptx_page-0020.jpg',
    'Drugs4Covid-EUvsVirus.pptx_page-0021.jpg',
    'Drugs4Covid-EUvsVirus.pptx_page-0022.jpg',
    'Drugs4Covid-EUvsVirus.pptx_page-0023.jpg',
    'Drugs4Covid-EUvsVirus.pptx_page-0024.jpg',
    'Drugs4Covid-EUvsVirus.pptx_page-0025.jpg'

]
const slides = require.context('../assets/data/slides/', true);
const {Title , Text, Paragraph} = Typography
export default class Slides extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            visible:false,
            numPages:null,
            pageNumber:1

        }
        this.carousel = React.createRef();
    }
    next() {
      this.carousel.next();
    }
    previous() {
      this.carousel.prev();
    }
    showModal = () => {
        this.setState({
          visible: true,
        });
      };
    
      handleOk = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
      };
    
      handleCancel = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
      };   onDocumentLoadSuccess = ({ numPages }) => {
            console.log("loaded!")
            this.setState({ numPages });
          }
    render(){
        return(
            <>
                    <Row align="middle" gutter={[16,16]}>
                        <Col>
                            <Text strong>
                                Here you can check our <a href="https://twitter.com/EUvsVirus" target="_blank">#EUvsVirus Hackathon</a> Status Update
                            </Text>
                        </Col>
                    </Row>
                    <Row align="middle" gutter={[16,16]}> 
                    <Col>
                        <Button type="primary" onClick={() => this.showModal()}>
                                Play <RiSlideshow2Line/>
                        </Button>
                        </Col>
                        <Col>
                        <Button href="https://delicias.dia.fi.upm.es/nextcloud/index.php/s/b3q6rpyyPfis8FF/download">
                                Download <RiDownload2Line/>
                        </Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                        <Modal
                        
                        title="EUvsVirus Status Update"
                        visible={this.state.visible}
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}
                        footer={null}
                        width={1000}
                        >
                        <Row align="middle">
                            <Col span={1} style={{cursor:'pointer'}} onClick={() => this.previous()}>
                                <h3>
                                    <RiArrowLeftLine/>
                                </h3>
                            </Col>
                            <Col span={22}>
                            <Carousel
                             ref={node => (this.carousel = node)}                             
                            dotPosition="bottom"
                            >
                            {
                                slidesImages.map((slide) => (
 
                                    <div>
                                    <img key={slide} src={slides('./' + slide)} className="image-fluid mb-3" alt=""/>
                                    </div>
                                ))
                            }
                            </Carousel>
                            </Col>
                            <Col span={1} style={{cursor:'pointer'}} onClick={() => this.next()}>
                                <h3>
                                    <RiArrowRightLine/>
                                </h3>
                            </Col>
                            </Row>
                        </Modal>
                        </Col>
                    </Row>                    
            </>
        )
    }
}