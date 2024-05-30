'use client'
import { useState } from 'react'

import useStore from '@/data/store'

export default function SideMenu() {
  const { nodes, currentNodeId, updateNodeTitle } = useStore(state => ({
    nodes: state.nodes,
    currentNodeId: state.currentNodeId,
    updateNodeTitle: state.updateNodeTitle,
  }))

  const currentNodeTitle = nodes.filter(node => node.id === currentNodeId)[0]
    ?.data.title

  const [toggle, setToggle] = useState(true)

  const handleToggle = () => setToggle(!toggle)

  return (
    <div
      className={`absolute right-0 h-screen flex-col  bg-gray-400  p-8 ${toggle ? 'w-80' : 'w-20'} duration-300`}
    >
      <div className="relative flex items-center justify-between">
        <button className="absolute right-0 p-4" onClick={handleToggle}>
          |||
        </button>
      </div>

      <div
        className={`${toggle ? 'opacity-100' : 'opacity-0'} w-60 pt-8 duration-300`}
      >
        <h1>Node List</h1>
        <ul>
          {nodes.map(node => (
            <li className="list-disc" key={node.id}>
              {node.data.title}
            </li>
          ))}
        </ul>
        <div className=" pt-10">
          <h2>Current node:</h2>
          {currentNodeTitle && (
            <input
              type="text"
              value={currentNodeTitle}
              onChange={evt =>
                updateNodeTitle(currentNodeId!, evt.target.value)
              }
            />
          )}
        </div>
      </div>
    </div>
  )
}
