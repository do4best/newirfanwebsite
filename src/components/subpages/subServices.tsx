import React from 'react';

import {Box, Typography} from "@mui/material";
type Services=
    {
        services:string,
        Icons : React.ElementType
    }

function SubServices({services,Icons}:Services) {
    return (
        <>
            <Box sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"25%",height:"30%",border:"solid 1px ",borderRadius:5,paddingX:5}}>
                <Icons sx={{fontSize:50}}/>
                <Typography variant="h4">{services}</Typography>
            </Box>
        </>
    );
}

export default SubServices;