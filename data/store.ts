import { create } from 'zustand'
import {
  Connection,
  Edge,
  EdgeChange,
  Node,
  NodeChange,
  addEdge,
  OnNodesChange,
  OnEdgesChange,
  OnConnect,
  applyNodeChanges,
  applyEdgeChanges,
} from 'reactflow'

import initialNodes from '@/data/nodes'
import initialEdges from '@/data/edges'

export type NodeData = {
  title: string
}

export type RFState = {
  nodes: Node<NodeData>[]
  edges: Edge[]
  onNodesChange: OnNodesChange
  onEdgesChange: OnEdgesChange
  onConnect: OnConnect
  setNodes: (nodes: Node[]) => void
  setEdges: (edges: Edge[]) => void
  // updateNodeColor: (nodeId: string, color: string) => void
  updateNodeTitle: (nodeId: string, title: string) => void
  currentNodeId?: string
  setCurrentNodeId: (nodeId: string) => void
}

// this is our useStore hook that we can use in our components to get parts of the store and call actions
const useStore = create<RFState>((set, get) => ({
  nodes: initialNodes,
  edges: initialEdges,
  currentNodeId: undefined,
  onNodesChange: (changes: NodeChange[]) => {
    set({
      nodes: applyNodeChanges(changes, get().nodes),
    })
  },
  onEdgesChange: (changes: EdgeChange[]) => {
    set({
      edges: applyEdgeChanges(changes, get().edges),
    })
  },
  onConnect: (connection: Connection) => {
    set({
      edges: addEdge(connection, get().edges),
    })
  },
  setNodes: (nodes: Node[]) => {
    set({ nodes })
  },
  setEdges: (edges: Edge[]) => {
    set({ edges })
  },
  updateNodeTitle: (nodeId: string, title: string) => {
    set({
      nodes: get().nodes.map(node => {
        if (node.id === nodeId) {
          // it's important to create a new object here, to inform React Flow about the changes
          node.data = { ...node.data, title }
        }
        return node
      }),
    })
  },
  setCurrentNodeId: (nodeId: string) => set({ currentNodeId: nodeId }),
}))

export default useStore
