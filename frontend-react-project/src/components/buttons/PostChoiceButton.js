import * as React from 'react'
import {
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
  } from '@chakra-ui/react'

  
const PostChoiceButton = (props) => {
    function choose(e) {
     {
        props.setSportName(e.target.value);
     }
    }
    return (
        <select onChange={choose} value={props.value}>
          <option >Football</option>
          <option >Tennis Table</option>
          <option >Tennis</option>
          <option>Golf</option>
        </select>
     
    
    )
  }
  
  export default PostChoiceButton