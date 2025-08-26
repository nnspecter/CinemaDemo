import { FormControlLabel, FormGroup, Switch } from '@mui/material'
import React from 'react'
import { alpha, styled } from '@mui/material/styles';
import { pink } from '@mui/material/colors'
const SwitchData = () => {
  const RedSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: '#d42b2bff',
    '&:hover': {
      backgroundColor: alpha('#d42b2bff', theme.palette.action.hoverOpacity),
    },
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: '#d42b2bff',
  },
}));

  return (
    <div>
        <FormGroup>
          <RedSwitch/>  
        </FormGroup>
    </div>
  )
}

export default SwitchData