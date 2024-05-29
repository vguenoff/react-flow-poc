'use client'
import { useCallback, useState } from 'react'
import ReactFlow, {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  Background,
  BackgroundVariant,
  Controls,
  Edge,
  MiniMap,
  Node,
  OnConnect,
  OnEdgesChange,
  OnNodesChange,
  Position,
} from 'reactflow'

import 'reactflow/dist/style.css'

import CustomNode from './CustomNode'

const initialNodes = [
  {
    id: 'node-0',
    type: 'customNode',
    position: { x: -300, y: 0 },
    data: { value: 123 },
  },
  {
    id: 'node-1',
    type: 'customNode',
    position: { x: -50, y: 0 },
    data: { value: 123 },
  },
  {
    id: 'node-2',
    targetPosition: Position.Left,
    position: { x: 200, y: -100 },
    data: { label: 'node 2' },
  },
  {
    id: 'node-3',
    targetPosition: Position.Left,
    position: { x: 200, y: 100 },
    data: { label: 'node 3' },
  },
]

const initialEdges = [
  { id: 'edge-0', source: 'node-0', target: 'node-1' },
  { id: 'edge-1', source: 'node-1', target: 'node-2' },
  { id: 'edge-2', source: 'node-1', target: 'node-3' },
]

// we define the nodeTypes outside of the component to prevent re-renderings
// we could also use useMemo inside the component
const nodeTypes = { customNode: CustomNode }

function Flow() {
  const [nodes, setNodes] = useState<Node[]>(initialNodes)
  const [edges, setEdges] = useState<Edge[]>(initialEdges)

  const onNodesChange: OnNodesChange = useCallback(
    changes => setNodes(nds => applyNodeChanges(changes, nds)),
    [setNodes],
  )

  const onEdgesChange: OnEdgesChange = useCallback(
    changes => setEdges(eds => applyEdgeChanges(changes, eds)),
    [setEdges],
  )

  const onConnect: OnConnect = useCallback(
    connection => setEdges(eds => addEdge(connection, eds)),
    [setEdges],
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
        <MiniMap />
        <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
      </ReactFlow>
    </>
  )
}

export default Flow
