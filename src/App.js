import logo from './logo.svg'
import './App.css'
import { useState } from 'react'
import { Stats } from 'original-fs'

const fs = window.require('fs')
const pathModel = window.require('path')

const { app } = window.require('@electron/remote')

const formateSize = (size) => {
  var i = Math.floor(Math.log(size) / Math.log(1024))
  return (
    (size / Math.pow(1024, i)).toFixed(2) * 1 +
    ' ' +
    ['B', 'KB', 'MB', 'GB', 'TB'][i]
  )
}

function App() {
  const [path, setPath] = useState(app.getAppPath())

  const files = useMemo(
    () =>
      fs
        .readdirSync(path)
        .map((file) => {
          const state = fs.statSync(pathModel.join(path, file))
          return {
            name: file,
            size: stats.isFile() ? formateSize(stats.size ?? 0) : null,
            directory: stats.isDirectory(),
          }
        })
        .sort((a, b) => {
          if (a.directory === b.directory) {
            return a.name.localeCompare(b.name)
          }
          return a.directory ? -1 : 1
        }),
    [path],
  )

  const onBack = () => setPath(pathModel.dirname(path))
  const onOpen = (folder) => setPath(pathModel.join(path, folder))

  return (
    <div className="container mt-2">
      <div className="form-group mt-4 mb-2"></div>
    </div>
  )
}

export default App
