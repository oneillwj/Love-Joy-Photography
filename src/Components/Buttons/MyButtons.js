import React from 'react'
import ButtonGroup from "@mui/material/ButtonGroup";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import Button from '@mui/material/Button';

//Cream #f3f036 
//Green #8f9779
//Orange #99431f

export default function headerButtons(){
    return(
        <ButtonGroup
        color="secondary"
        variant="text"
        aria-label="text button group"
        >
            <Button> Home </Button>
            <Button> Journal </Button>
            <Button> Pricing </Button>
            <Button> FAQ's </Button>
            <Button> Contact </Button>
            <Button>
                <CameraAltOutlinedIcon />
            </Button>
        </ButtonGroup>
    );
}

