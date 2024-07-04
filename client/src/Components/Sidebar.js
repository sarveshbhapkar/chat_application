import React from 'react'
import './myStyles.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import NightlightIcon from '@mui/icons-material/Nightlight';
import SearchIcon from '@mui/icons-material/Search';
import ConversationsItems from './ConversationsItems';

function Sidebar() {
  return (
    <div className='sidebar-container'>
      <div className='sb-header'>


        <div className=''>
        <IconButton>
        <AccountCircleIcon/>
        </IconButton>
        </div>
        
        <div>
        <IconButton>
         <PersonAddIcon/>
        </IconButton>

        <IconButton>
          <GroupAddIcon/>
        </IconButton>

        <IconButton>
          <AddCircleIcon/>
        </IconButton>

        <IconButton>
          <NightlightIcon/>
        </IconButton>
        </div>
        
      </div>


      <div className='sb-search'>
        <IconButton>
        <SearchIcon/>
        </IconButton>
        <input placeholder='search' className='search-box'/>

      </div>

      <div className='sb-conversations' >
        <ConversationsItems/>

      </div>
    </div>
  )
}

export default Sidebar
