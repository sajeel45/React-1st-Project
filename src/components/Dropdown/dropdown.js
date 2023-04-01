import React from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'
import './dropdown.css';
const DropdownMenu = () => {
  return (
  <>
 <ul id='nav'>
  <li><a href='#'>Home</a></li>
  <li><a href='#'>Services <i class="fa-sharp fa-solid fa-caret-down"></i></a>
  <ul>
    <li><a href='#'>Service-1</a></li>
    <li><a href='#'>Service-2</a></li>
    <li><a href='#'>Service-3 --</a>
    <ul>
      <li><a href='#'>Service-1</a></li>
      <li><a href='#'>Service-2</a></li>
      </ul>
    </li>
  </ul>
  </li>
  <li><a href='#'>About</a></li>
 </ul>
 
</>
)
}

export default DropdownMenu;