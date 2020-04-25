import React from 'react'
import Scrollspy from 'react-scrollspy'
import {Link} from 'react-router-dom'
import data from '../assets/data/chartdata'
import logo from '../assets/logo.svg'
import logoMin from '../assets/logo.min.svg'
import {MdMenu} from 'react-icons/md'
const text = document.location.href.toString().slice(-2) !== 'EN' ? data.navText[1]:data.navText[0]
export default class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text:document.location.href.toString().slice(-2) !== 'EN' ? data.navText[1]:data.navText[0]
        }
    }
    changeText(lan){
        let newText = lan !== 'EN' ? data.navText[1]:data.navText[0]
        this.setState(newText)
    }
    render(){
    return(
        <div id="top" className="navbar navbar-expand-lg blueBg header sticky-top">
        <div className="d-flex flex-grow-1">
            <span className="w-100 d-lg-none d-block"></span>
            <a className="navbar-brand d-none d-lg-inline-block" href="#">
                <img src={logoMin} className="img-fluid" alt=""/>
            </a>
            <a className="navbar-brand-two mx-auto d-lg-none d-inline-block" href="#">
                <img src={logoMin} class="img-fluid" alt=""/>
            </a>
            <div className="w-100 text-right">
                <button className="navbar-toggler text-white" type="button" data-toggle="collapse" data-target="#myNavbar">
                   <MdMenu></MdMenu>
                </button>
            </div>
        </div>
        <div className="collapse navbar-collapse flex-grow-1 text-right" id="myNavbar">
            <ul className="navbar-nav ml-auto flex-nowrap">
            <li className="nav-item">
                <a className="nav-link m-2 menu-link" href="#info">{this.state.text.introduction}</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link m-2 menu-link " href="#problem">{this.state.text.problem}</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link m-2 menu-link " href="#solution">{this.state.text.resources}</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link m-2 menu-link " href="#approach">{this.state.text.approach}</a>
                </li>     
                <li className="nav-item">
                    <a className="nav-link m-2 menu-link " href="#team">{this.state.text.team}</a>
                </li>
                <li className="nav-item">
                            <a className="nav-link m-2 menu-link " href={this.state.text.path}>
                               <button onClik={() => this.changeText(this.state.text.btn)}className="btn btn-outline-light btn-sm">
                               {this.state.text.btn}
                               </button>
                            </a>
                </li>                                    
            </ul>
        </div>
    </div>

    )
}

}