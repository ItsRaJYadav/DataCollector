import { Stack } from '@mui/system'
import React from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Button } from '@mui/material';


const DataVal = ({ Name, Email, index }) => {
  return (
    <div >

      <div className='dataValc'>
       
          <h4>{Name}</h4>
          <h4>{Email}</h4>
          <Stack>
          <Button variant="contained" color="error"><DeleteForeverIcon /></Button>
          </Stack>
          
          
      </div>


    </div>
  )
}

export default DataVal