import React from 'react'
import { ColumnChart } from '@opd/g2plot-react'

export default function Column(props){
    const config = {
        title: {
            visible: true,
            text: props.text.title,
          },
          description: {
            visible: true,
            text: props.text.subtitle,
          },
          forceFit: true,
          data:props.data.values,
          padding: 'auto',
          xField: props.data.xField,
          yField: props.data.yField,
          xAxis:props.data.xAxis,
          color:'#0A7AA3',
          label: {
            visible: true,
            style: {
              fill: '#0A7AA3',
              fontSize: 12,
              fontWeight: 600,
              opacity: 0.6,
            }
          }
          }        
        return (<ColumnChart {...config}></ColumnChart>)
}