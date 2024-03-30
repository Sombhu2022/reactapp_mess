import React from 'react'
import Card from './card'
import '../style/about.scss'



function about({som,title}) {

  let obj=
    {
      title:"raj",
      id:1,
      name:"sombhu das",
      college:"PBC",
    }

  return (
    <>
    <div className='about' id='about'>about
 {som}{title}
        <h2>
            this is about page in this site 
        </h2>
<p>sombhu das</p>
<hr />
      <div className="card">
        <div className="card-content">
          <h1>Photo</h1>
          <img
            className="avatar"
            src="https://i.imgur.com/OKS67lhm.jpg"
            alt="Aklilu Lemma"
            width={70}
            height={70}
          />
        </div>
      </div>
      <Card title="som" valied="" name="sombhu das" id="1" college="pbc"/>
      <Card title="raj" valied="" name="rajes khanna" id="2" college="pbc"/>
      <Card title="dip" valied="" name="dip" id="3" college="pbc"/>
      <Card title="rai" valied="" name="rai" id="4" college=""/>
      <Card {...obj}/>
      </div>
    </>);
}

export default about;