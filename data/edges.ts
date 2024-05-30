import type { Edge } from 'reactflow'

export default [
  { id: 'edge-0', source: 'node-0', target: 'node-1' },
  { id: 'edge-1', source: 'node-1', target: 'node-2', sourceHandle: 'r1' },
  { id: 'edge-2', source: 'node-1', target: 'node-3', sourceHandle: 'r2' },
] as Edge[]
