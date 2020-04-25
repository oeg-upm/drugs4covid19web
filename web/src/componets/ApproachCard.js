import React from 'react'
import ReactMarkdown from 'react-markdown'
import CardTabs from './ApproachModal'
import {Button} from 'antd'
const images = require.context('../assets/', true);

export default function Card({data, buttonText}){
    console.log(data.info)
    return(
        <div class="card fullCard">
            <img src={images('./'+data.source)} class="card-img-top img-fluid p-2"/>
            <div class="card-body text-left d-flex flex-column">
                <div className="mt-auto">
                <h5 class="card-title title pt-2 ">{data.step}) {data.title}</h5>
                <p class="card-text text-justify montserrat ">{data.content}</p>
                </div>
            </div>
            <div className="card-footer whiteBg">
            <Button type="primary" className="float-right" data-toggle="modal" data-target={"#modal-" + data.step}>{buttonText}</Button>
            </div>
            <div class="modal fade" id={"modal-" + data.step} tabindex="-1" role="dialog" aria-labelledby={"modal-label-" + data.step} aria-hidden="true">
            <div class="modal-dialog modal-xl modal-dialog-scrollable" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h2 class="modal-title" id={"modal-label-" + data.step}>{data.title}</h2>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body  text-left">
                <CardTabs 
                motivation={data.info.motivation}
                hypothesis={data.info.hypothesis}
                problems={data.info.problems}
                methodology={data.info.methodology}
                results={data.info.results}
                conclusions={data.info.conclusions}
                />
                </div>
                </div>
            </div>
            </div>
      </div>
    )
}