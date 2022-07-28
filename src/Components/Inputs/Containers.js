import React from 'react'
import { Container } from "@material-ui/core"

function Containers() {
  return (
    <div>
<Container maxWidth="md" style={{backgroundColor:"blue"}}>hello world</Container>
<Container maxWidth="xs" style={{backgroundColor:"red"}}>helo hello hello</Container>
<Container maxWidth="lg" style={{backgroundColor:"green"}}>helo hello hello</Container>
<Container maxWidth="sm" style={{backgroundColor:"yellow"}}>helo hello hello</Container>
<Container fixed>helo hello hello</Container>
    </div>
  )
}

export default Containers