'use client'
import React, { useState } from 'react'
import dynamic from 'next/dynamic';

const CodeMirror = dynamic(() => {
  import ('codemirror/lib/codemirror.css')
  import ('codemirror/theme/ayu-mirage.css')
  import ('codemirror/mode/xml/xml')
  import ('codemirror/mode/javascript/javascript')
  import ('codemirror/mode/css/css')
  import ('codemirror/addon/edit/closebrackets')
  import ('codemirror/addon/edit/closetag')
  import ('codemirror/addon/edit/matchtags.js')
  import ('codemirror/addon/edit/matchbrackets.js')
  return import('react-codemirror2').then((theModule) => theModule.Controlled ).catch((error) => console.log(error))
}, {ssr: false})

const Editor = (props) => {

  const {
    language,
    displayName,
    value,
    onChange
  } = props
  const [open, setOpen] = useState(true)

  function handleChange(editor, data, value) {
    onChange(value)
  }

  return (
    <>
      <div className='p-4 basis-0 flex-grow flex-col'>
          <div className=' text-white select-none bg-slate-900 py-2 px-3'>
            <span className=' p-1 text-lg font-mono font-semibold'>{displayName}</span>
          </div>
          <div>
          <CodeMirror
            onBeforeChange={handleChange}
            value={value}
            options={{
              lineWrapping: true,
              lint: true,
              mode: language,
              theme: 'ayu-mirage',
              lineNumbers: true,
              autoCloseBrackets: true,
              autoCloseTags: true,
              matchTags: true,
              matchBrackets: true,
            }}
          />
          </div>
      </div>
    </>
  )
}

export default Editor