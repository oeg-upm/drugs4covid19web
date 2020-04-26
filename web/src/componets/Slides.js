import React from 'react'
import pdfSlides from '../assets/data/slides.pdf'
import { Typography, Row, Col, Button } from 'antd'
import { Document, Page } from 'react-pdf'; 
import {RiSlideshow2Line} from 'react-icons/ri'
const {Title , Text, Paragraph} = Typography
export default class Slides extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            show:false,
            pdf:'../assets/data/slides.pdf',
            numPages:null,
            pageNumber:1

        }
    }

    componentDidMount(){

    }
        onDocumentLoadSuccess = ({ numPages }) => {
            this.setState({ numPages });
          }
    render(){
        return(
            <>
            <Row>
                <Col>
                    <Text>Our #EuVsVirus status update</Text>                
                </Col>
            </Row>
                <Button data-toggle="modal" data-target="#slideModal">
                    Check It <span className="badge"><RiSlideshow2Line/></span>
                </Button>
            <div class="modal fade" id="slideModal" tabindex="-1" role="dialog" aria-labelledby="slideModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        </button>
                    </div>
                    <div class="modal-body">
                        <Document
                        file={this.state.pdf}
                        onLoadSuccess={this.onDocumentLoadSuccess}
                        >
                        <Page pageNumber={this.state.pageNumber} />
                        </Document>
                        <p>Page {this.state.pageNumber} of {this.numPages}</p>
                    </div>
                    </div>
                </div>
            </div>                
            </>
        )
    }
}