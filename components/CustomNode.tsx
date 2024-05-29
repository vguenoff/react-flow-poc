import { Handle, Position } from 'reactflow'
import type { MouseEvent } from 'react'

import type { NodeProps } from 'reactflow'

export default function CustomNode({ data }: NodeProps) {
  const customNodeClickHandler = (e: MouseEvent) => console.log('123', e.target)

  return (
    <div
      className="rounded-lg border-2 bg-white p-5"
      onClick={customNodeClickHandler}
    >
      <h1>{data.label}</h1>
      <Handle type="target" position={Position.Left} id="l1" />
      <div>
        <Handle
          type="source"
          position={Position.Right}
          id="r1"
          style={{ top: '40%', transform: 'translateY(-40%)' }}
        />
        <Handle
          type="source"
          position={Position.Right}
          id="r2"
          style={{ top: '60%', transform: 'translateY(-60%)' }}
        />
      </div>
    </div>
  )
}
