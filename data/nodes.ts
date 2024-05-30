import { Position, type Node } from 'reactflow'

export default [
  {
    id: 'node-0',
    type: 'customNode',
    position: { x: -300, y: 0 },
    data: { label: 'node 0' },
  },
  {
    id: 'node-1',
    type: 'customNode',
    position: { x: -50, y: 0 },
    data: { label: 'node 1' },
  },
  {
    id: 'node-2',
    type: 'customNode',
    targetPosition: Position.Left,
    position: { x: 200, y: -100 },
    data: { label: 'node 2' },
  },
  {
    id: 'node-3',
    type: 'customNode',
    targetPosition: Position.Left,
    position: { x: 200, y: 100 },
    data: { label: 'node 3' },
  },
] as Node[]
