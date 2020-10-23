import React from 'react'
import Layout from '../componets/Layout'
import data from '../assets/data/chartdata'
import Description from '../componets/homecomp/Description'
import Problem from '../componets/homecomp/Problem'
import Resources from '../componets/homecomp/Resources'
import Approach from '../componets/homecomp/Approach'
import Team from '../componets/homecomp/Team'
import Tools from '../componets/homecomp/Tools'

const images = require.context('../assets/', true);
export default function Home(props){
    let lang = null
    try{
         lang = props.match.params.lang
    }catch(err){
        console.log(err)
    }
    let text = lang === 'ES'? data.languages[0]:data.languages[1]
    return(
        <Layout text={text.acknowledgments}>
            <div className="" id="introduction"> 
            <Description text={text.info}></Description>
            </div>
            <div className="pt-5" id="problem"> 
            <Problem text={text.problems} data={data.MedicineStock}></Problem>
            </div>
            <div className="pt-5" id="resources"> 
            <Resources text={text.resources} data={{Line:data.ArticlesPerYear, List:data.List}}></Resources>
            </div>
            <div className="pt-5" id="approach"> 
            <Approach text={text.approach} data={text.approach.data}></Approach>
            </div>
            <div id="tools" className="pt-5">
                <Tools text={text.tools}></Tools>
            </div>
       
            <div id="team" className="pt-5">
            <Team text={text.team} data={data.teamData}></Team>
            </div>
        </Layout>
        )
}