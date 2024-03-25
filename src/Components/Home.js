import React from 'react'
import style from '../Stylesheets/Home.module.css'

function Home() {
  return (
    <div className={style.contianer}>
      <div className={style.headtop}>
        <h1 className={style.h1}>The Codebreakers Club</h1>
        <p className={style.p}>Breaking codes , Creating minds !!</p>
      </div>
      {/* <div className={style.para}>
      </div> */}
    </div>
  )
}

export default Home
