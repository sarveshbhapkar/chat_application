import React from 'react'
import './myStyles.css'
import Workarea from './Workarea'
import Sidebar from './Sidebar'


function MainContainer() {
  return (
    <div className='main-container'>
         <Sidebar/>
        <Workarea/>
       

    </div>
  )
}

export default MainContainer
