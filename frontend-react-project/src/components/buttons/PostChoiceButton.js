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
    React.useEffect(()=>{
      props.setSportName("Football");
    },[])
    function choose(e) {
     {
        props.setSportName(e.target.value);
     }
    }
    return (
        <select onChange={choose} value={props.value}>
          <option value="Football">Football</option>
          <option value="Tennis Table">Tennis Table</option>
          <option value="Tennis">Tennis</option>
          <option value="Golf">Golf</option>
        </select>
     
    
    )
  }
  
  export default PostChoiceButton