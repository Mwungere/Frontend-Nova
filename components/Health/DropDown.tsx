import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import { MoreVert } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import StyledMenu from './StyledMenu';
export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <IconButton
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        color="success"
      >
        <MoreVert />
      </IconButton>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} disableRipple>
          Disease Identification
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          Plant Detection
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={handleClose} disableRipple>
          Health Detection
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          Health condition
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          Disinfectant
        </MenuItem>
      </StyledMenu>
    </div>
  );
}