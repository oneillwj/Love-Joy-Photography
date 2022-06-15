import React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import MyButtons from '../Buttons/MyButtons';


export default function ButtonAppBar() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 3 }}>
              Love + Joy Photography
            </Typography>
            {/* <ButtonGroup
              color="secondary"
              variant="text"
              aria-label="text button group"
            >
              <Button> Home </Button>
              <Button> Pricing </Button>
              <Button> Journal </Button>
              <Button> FAQ's </Button>
              <Button> Contact </Button>
              <Button>
                <CameraAltOutlinedIcon />
              </Button>
            </ButtonGroup> */}

            <MyButtons/>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }
  