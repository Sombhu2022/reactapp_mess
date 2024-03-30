import React from 'react'

function card({title,name,id ,college="panskura banamali college",valied= true }) {
  return (
      <div><p>{title}</p>
        <div style={{maxWidth:"auto",display:"flex",border:"solid 3px red"}}><p>id:{id}</p>
        <p>name:{name}</p><br></br>
        <p>college:{college}</p><br/>
        </div>
    </div>
  )
}

export default card