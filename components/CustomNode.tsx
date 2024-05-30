import { Handle, Position } from 'reactflow'
import type { NodeProps } from 'reactflow'

import useStore, { NodeData } from '@/data/store'

export default function CounterNode({ id, data }: NodeProps<NodeData>) {
  const updateNodeTitle = useStore(state => state.updateNodeTitle)
  const setCurrentNodeId = useStore(state => state.setCurrentNodeId)

  return (
    <div
      className="rounded-lg border-2 bg-white p-5"
      onClick={() => setCurrentNodeId(id)}
    >
      <input
        type="text"
        value={data?.title}
        onChange={evt => updateNodeTitle(id, evt.target.value)}
        className="nodrag"
      />
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
