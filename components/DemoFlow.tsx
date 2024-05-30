'use client'
import ReactFlow, { Background, BackgroundVariant, Controls } from 'reactflow'
import { useShallow } from 'zustand/react/shallow'

import useStore from '@/data/store'

import 'reactflow/dist/style.css'

import CustomNode from './CustomNode'

const nodeTypes = { customNode: CustomNode }

// @ts-ignore state: any
const selector = state => ({
  nodes: state.nodes,
  edges: state.edges,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect,
})

function Flow() {
  const { nodes, edges, onNodesChange, onEdgesChange, onConnect } = useStore(
    useShallow(selector),
  )

  return (
    <>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
      >
        <Controls />
        <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
      </ReactFlow>
    </>
  )
}

export default Flow
