'use client'

import React, { useState, useEffect } from 'react'
import Editor from './components/Editor'

const page = () => {

  const [html, setHtml] = useState('')
  const [css, setCss] = useState('')
  const [js, setJs] = useState('')  
  const [srcDoc, setSrcDoc] = useState('')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `)
    }, 250)

    return () => clearTimeout(timeout)
  }, [html, css, js])

  return (
    <>
        <div className='bg-black flex'>
          <Editor
            language="xml"
            displayName="HTML"
            value={html}
            onChange={setHtml}
          />
          <Editor
            language="css"
            displayName="CSS"
            value={css}
            onChange={setCss}
          />
          <Editor
            language="javascript"
            displayName="JS"
            value={js}
            onChange={setJs}
          />
        </div>
        <div>
            <iframe
                srcDoc={srcDoc}
                title='output'
                sandbox='allow-scripts'
                width="100%"
                className=' border-none h-screen'
            />    
        </div>
    </>
  )
}

export default page