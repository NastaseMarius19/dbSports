import * as React from 'react'
import { Textarea } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
function TextField() {
    let [value, setValue] = React.useState('')
  
    let handleInputChange = (e) => {
      let inputValue = e.target.value
      setValue(inputValue)
    }
    return (
      <>
        <Text mb='8px' className='posttitle'>Title: {value}</Text>
        <Textarea
          value={value}
          onChange={handleInputChange}
          placeholder='Here is a sample placeholder'
          size='sm'
        />
      </>
    )
  }

export default TextField