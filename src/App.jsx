import { useState } from 'react'
import './App.css'
import Background from './components/Background'
import ButtonAppBar from './components/ButtonAppBar'

import { Box } from '@mui/material'
import Index from './components/Index'
import Preview from './components/Preview'



function App() {
  const [count, setCount] = useState(0)

  return (
    <Box >
    <ButtonAppBar/>
    <Index></Index>
    <Preview>
    </Preview>
    </Box>
  )
}

export default App