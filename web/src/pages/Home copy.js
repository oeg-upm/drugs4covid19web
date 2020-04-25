import React from 'react'
import Layout from '../componets/Layout'
import Graph from '../componets/Graph'
import Team from '../componets/Team'
import { Bar,Bubble,Radar, Line, Pie, Doughnut} from 'react-chartjs-2';
import Card from '../componets/Card'
import data from '../assets/data/chartdata'
const images = require.context('../assets/', true);
export default function Home(props){
    let lang = null
    try{
         lang = props.match.params.lang

    }catch(err){
        console.log(err)
    }
    let text = lang === 'EN'? data.languages[1]:data.languages[0]
    return(
        <Layout>
            <span id="info"></span>
            <div className="container-fluid" data-spy="scroll" data-target="#navbar-example2" data-offset="0">
                <section id="" className="px-lg-5">
                <div className="row mt-5">
                    <div className="col-xs-12 col-lg-6">
                        <h3 className="title text-left">{text.info.title1}</h3>
                        <h5 className="text-justify montserrat">
                            { text.info.text1}
                        </h5>
                    </div>
                    <div className="col-xs-12 col-lg-6 float-right">
                    <div class="embed-responsive embed-responsive-16by9">
                        <iframe class="embed-responsive-item" src={text.info.videoLink} allowfullscreen></iframe>
                    </div>
                    </div>
                </div>
                </section>
                <span id="problem"></span>
                <section id="" className="fullScreenSection px-lg-5">
                    <div className="row mt-5">
                        <div className=" col-xs-12 col-lg-8">
                            <h3 className="title  text-left">{text.problems.title0}</h3>
                        </div>
                    </div>
                    <div className="row mt-5 h-100">
                    <div className="col-xs-12 col-lg-6 align-self-center">
                            <h4 className="subtitle text-left">
                                {text.problems.title1}
                            </h4>
                            <p className="text-justify montserrat">
                                {text.problems.text1}
                            </p>
                        </div>                        
                        <div className="col-xs-12 col-lg-6">                            
                        <Bar data={data.bar}/>                       
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-10 col-lg-9 py-3 mx-auto">
                        <hr className="blue"/>
                        </div>
                    </div>                
                </section>
                <span id="solution"></span>
                <section id="" className="fullScreenSection px-lg-5">
                    <div className="row mt-5">
                        <div className="col-xs-12 col-lg-6">
                        <h3 className="title text-left">
                            {text.resources.title0}
                        </h3>
                        </div>
                    </div>

                    <div className="row mt-5 h-100">
                        <div className="col-xs-12 col-lg-6 align-self-center">
                            <h5 className="subtitle text-left">
                                {text.resources.title1}
                            </h5>
                            <p className="montserrat text-justify my-auto">
                                {text.resources.text1}
                        </p>  
                        </div>
                      
                    </div>
                    <div className="row-mt-5">
                        <div className="col-xs-12 col-lg-6 ">
                          <h3 className="subtitle text-left">
                              {text.resources.title2}
                          </h3>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-xs-12 col-lg-6">
                        <Line data={data.line}></Line>
                            <h5 className="montserrat mt-2 text-center">
                            {text.resources.graphtitle3}
                            </h5>
                        </div>
                        <div className="col-xs-12 col-lg-6">
                            <Bubble data={data.bubble} options={{aspectRatio:1}}></Bubble>
                            <h5 className="montserrat text-center">
                                {text.resources.graphtitle1}
                            </h5>
                        </div>                                                                                          
                    </div>
                </section>
                <section id="approach" className="fullScreenSection px-lg-5">
                    <div className="row mt-5">
                        <div className="col-xs-12 col-lg-6">
                            <h3 className="text-left title">
                                {text.approach.title0}
                            </h3>
                        </div>
                    </div>
                    <div className="card-deck mt-5">
                    {data.approach.map((card) => {
                        return(
                                <Card data={card}></Card>
                        )
                    })}
                    </div>
                </section>
                <span id="team"></span>
                <section id="" className="fullScreenSection px-lg-5 mb-5">
                    <div className="row mt-5">
                        <div className="col-xs-12 col-lg-6">
                            <h3 className="title text-left">{text.team.title0}</h3>
                        </div>
                    </div>
                    <div className="mt-5">
                        <div className="row mt-5">
                            <div className="col-xs-12 col-lg-6 text-left">
                                <h4 className="title">{text.team.title1}</h4>
                            </div>
                        </div>
                    <div className="mt-3">
                        <Team team={data.teamData}></Team>
                    </div>
                    </div>
                    <div className="mt-5">
                        <div className="row">
                            <div className="col-xs-12 col-lg-6 text-left">
                                <h4 className="title">{text.team.title2}</h4>
                            </div>
                        </div>
                        <div className="row h-100 mt-3">
                            <div className="col-xs-12 col-lg-4 align-self-center text-center">
                                <img src={images('./' + text.team.logo1)} alt="" className="img-fluid"/>
                            </div>
                            <div className="col-xs-12 col-lg-4 align-self-center text-center">
                                <img src={images('./' + text.team.logo2)} alt="" className="img-fluid"/>
                            </div>
                            <div className="col-xs-12 col-lg-4 align-self-center text-center">
                                <img src={images('./' + text.team.logo3)} alt="" className="img-fluid"/>
                            </div>                                                        
                        </div>
                    </div>                    
                </section>
            </div>
        </Layout>
    )
}