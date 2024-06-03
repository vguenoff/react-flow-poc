'use client'
import { useState } from 'react'
import { PlusIcon } from '@heroicons/react/20/solid'
import { nanoid } from 'nanoid'

import useStore from '@/data/store'

export default function SideMenu() {
  const { nodes, currentNodeId, updateNodeTitle, setNodes } = useStore(
    state => ({
      nodes: state.nodes,
      currentNodeId: state.currentNodeId,
      updateNodeTitle: state.updateNodeTitle,
      setNodes: state.setNodes,
    }),
  )

  const currentNodeTitle = nodes.filter(node => node.id === currentNodeId)[0]
    ?.data.title

  const [toggle, setToggle] = useState(false)

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
        <button
          type="button"
          className="relative right-2 mb-10 inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600
          "
          onClick={() => {
            setNodes([
              ...nodes,
              {
                id: nanoid(),
                type: 'customNode',
                position: { x: -100, y: -100 },
                data: { title: 'Placeholder title' },
              },
            ])

            handleToggle()
          }}
        >
          <PlusIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
          New Node
        </button>
        <h1 className="font-semibold">Node List</h1>
        <ul>
          {nodes.map(node => (
            <li className="list-inside list-disc" key={node.id}>
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
