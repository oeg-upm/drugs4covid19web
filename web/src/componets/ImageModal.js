import React from 'react'
import {Modal, Row, Col, Button} from 'antd'

export default class ImageModal extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            image:'',
            title:'',
            visible:false, 
            heigth:200
        }
    }
    componentDidMount(){
        this.setState({image:this.props.image, title:this.props.title})
    }
    makeId(text){
        const result = text.toString().replace(/([ ])+/g, '_')
        console.log(result)
        return result
    }
    changeImageSize(){
        const size = this.state.heigth === 200 ? 600:200
        this.setState({heigth:size})
    }
    render(){
        return(
            <div >
            <Row justify="center">
                <Col className="text-center">
                    <img src={this.state.image} className="img-fluid" style={{maxHeight:this.state.heigth}}/>                
                </Col>
            </Row>
            <Row justify="center">
                <Col className="text-center">
                        <Button onClick={() => this.changeImageSize()}>{this.state.heigth === 200 ?"Expand":"Collapse"} Image</Button>             
                </Col>
            </Row>
            </div>
        )
    }
}