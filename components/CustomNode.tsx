import { Handle, Position } from 'reactflow'
import type { MouseEvent } from 'react'

export default function CustomNode() {
  const customNodeClickHandler = (e: MouseEvent) => console.log('123', e.target)

  return (
    <div
      className="rounded-lg border-2 bg-white p-5"
      onClick={customNodeClickHandler}
    >
      <h1>Custom node</h1>
      <Handle type="target" position={Position.Left} id="left" />
      <Handle type="source" position={Position.Right} id="right" />
    </div>
  )
}
