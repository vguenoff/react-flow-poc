import { Handle, Position } from 'reactflow'
import { useState, type MouseEvent } from 'react'

import type { NodeProps } from 'reactflow'

// export type Props = {
//   onClickHandler: () => {}
// }

export type CounterData = {
  initialCount?: number
  label: string
  onClickHandler: () => {}
}

export default function CounterNode(props: NodeProps<CounterData>) {
  const [count, setCount] = useState(props.data?.initialCount ?? 0)

  // export default function CustomNode({ data, onClickHandler }: NodeProps<Props>) {
  // const customNodeClickHandler = (e: MouseEvent) => console.log('123', e.target)

  return (
    <div
      className="rounded-lg border-2 bg-white p-5"
      onClick={props.data?.onClickHandler}
    >
      <h1>{props.data?.label}</h1>
      <Handle type="target" position={Position.Left} id="l1" />
      <Handle
        type="source"
        position={Position.Right}
        id="r1"
        style={{ top: '30%', transform: 'translateY(-30%)' }}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="r2"
        style={{ top: '70%', transform: 'translateY(-70%)' }}
      />
    </div>
  )
}
