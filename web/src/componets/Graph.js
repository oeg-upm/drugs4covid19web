import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import G6 from '@antv/g6';
const data = {
  nodes: [
    { id: 'node0', size: 150, label:'Principio Activo' },
    { id: 'node1', size: 70, label:'Nombre'},
    { id: 'node2', size: 75,label:'Nombre' },
    { id: 'node3', size: 75,label:'Nombre' },
    { id: 'node4', size: 75, isLeaf: true, label:'Nombre'},
    { id: 'node5', size: 75, isLeaf: true, label:'Nombre' },
    { id: 'node6', size: 50, isLeaf: true, label:'Nombre' },
    { id: 'node7', size: 50, isLeaf: true, label:'Nombre' },
  ],
  edges: [
    { source: 'node0', target: 'node1' },
    { source: 'node0', target: 'node2' },
    { source: 'node0', target: 'node3' },
    { source: 'node0', target: 'node4' },
    { source: 'node0', target: 'node5' },
    { source: 'node0', target: 'node6' },
    { source: 'node0', target: 'node7' },
  ],
};
export default function() {
  const ref = React.useRef(null);
  let graph = null;

  useEffect(() => {
    if (!graph) {
      graph = new G6.Graph({
        container: ReactDOM.findDOMNode(ref.current),
        width: 700,
        height: 300,
        fitViewPadding:[100,100,100,100],
        modes: {
          default: ['drag-canvas', 'zoom-canvas'],
        },
        layout: {
          type: 'force',
          preventOverlap: true,
          linkDistance: (d => {
            if (d.source.id === 'node0') {
              return 150;
            }
            return 100;
          }),
        },
        defaultNode: {
          type: 'node',
          size:'50',
          labelCfg: {
            style: {
              fill: '#000000A6',
              fontSize: 15,
            },
          },
          style: {
            stroke: '#72CC4A',
            width: 150,
          },
        },
        defaultEdge: {
          type: 'polyline',
        },
      });
    }
    graph.data(data);
    graph.render();
  }, []);

  return <div ref={ref}></div>;
}
