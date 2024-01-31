import React from 'react';
import { sidebarIcons } from '../utils/constants';
import SidebarButton from './SidebarButton';
import Logo from '../utils/assets/images/logo.svg';
import IconTablerIconSearch from '../utils/assets/images/search.svg';
import Setting from '../utils/assets/images/setting.svg';
import Logout from '../utils/assets/images/logout.svg';
import Gustavo from '../utils/assets/images/gustavo.svg';
import Admin from '../utils/assets/images/Tagadmin.svg';

const Sidebar = () => {
  return (
    <div className='sidebar'>
    <div className='sidebar-upper'>
   
    <div className='logo'><img src={Logo} alt="logo" /></div>
    <div className="bar">
      <img src={IconTablerIconSearch} alt="search-bar" className="icon-from-tabler-io" color="#7D7D7D" />
      <div className="text-wrapper">Search</div>
    </div>
    {
      sidebarIcons.map(item =><SidebarButton btnImage={item.icon} btnName={item.name} key={item.name} extendable={item.expandable}/>
    
      )
    }
    
    </div>
    <div className="sidebar-lower">
       <div className='user'>
        <span className='user-img'>
          <img src={Gustavo} alt="user" />
        </span>
        <span className='user-des'>
         <div>Gustavo Xavier</div>
         <div><img src={Admin} alt="admin" /></div>

        </span>
        
       </div>
      <SidebarButton btnImage={Setting} btnName={"Setting"} />
      <SidebarButton btnImage={Logout} btnName={"Log Out"} style={{color:"#B01212"}}/>
    </div>
    </div>
  )
}

export default Sidebar
