import React from 'react'
import './list.scss'
import { Navbar,Sidebar,Datatable } from '../../components'

const List = () => {
    return (
      <div className="list">
        <Sidebar/>
        <div className="listContainer">
          <Navbar/>
          <Datatable/>
        </div>
      </div>
    )
  }
  
  export default List