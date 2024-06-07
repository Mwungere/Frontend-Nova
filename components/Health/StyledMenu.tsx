import React from 'react';
import Menu, { MenuProps } from '@mui/material/Menu';
import { styled } from '@mui/system';

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',           
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color: theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      '0 2px 10px 0 rgba(0, 0, 0, 0.2)',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        // color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),  
      },
      '&:active': {
        backgroundColor: theme.palette.action.selectedOpacity,
      },
    },
  },
}));

export default StyledMenu;
