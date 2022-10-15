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

  
const PostChoiceButton = () => {
    return (
        <>
        <Menu>
        <MenuButton as={Button}>
          Post in
        </MenuButton>
        <MenuList>
          <MenuItem>Football</MenuItem>
          <MenuItem>Basketball</MenuItem>
          <MenuItem>Table Tennis</MenuItem>
          <MenuItem>Swimming</MenuItem>
          <MenuItem>Badminton</MenuItem>
        </MenuList>
      </Menu>
        </>
    
    )
  }
  
  export default PostChoiceButton