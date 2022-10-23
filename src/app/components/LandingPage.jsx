import * as React from 'react'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'
import {LogIn} from "./LogIn";

export const LandingPage = () => {

    return (
        <Box
          display='flex'
          width='100%'
          height='100%'
        >
            <Box
              display='flex'
              backgroundColor='black'
              width='55%'
              height='70%'
              margin='auto'
              border='50px green inset'
              flexDirection='column'
            >
                <Box
                  display='flex'
                  justifyContent='center'
                  margin='20px'
                  sx={{ borderBottom: 1, borderColor: 'white', borderWidth:4}}
                  flexDirection='column'
                >
                    <Box 
                    justifyContent='center'
                    width='100%'
                    >
                        <Typography
                            textAlign='center'
                            sx={{ 
                                fontFamily:'Helvetica', 
                                fontSize:75,
                                color:'white',
                            }}                              >
                            Spotify With Friends
                        </Typography>
                    </Box>

                    <Box 
                    justifyContent='center'
                    width='100%'
                    >
                        <Typography
                            textAlign='center'
                            sx={{ 
                                fontFamily:'Prompt,serif',
                                fontSize:35,
                                color:'white',
                            }}
                            >
                            Login with Spotify to get started!
                        </Typography>
                    </Box>
                </Box>
                <Box
                  display='flex'
                  alignItems='center'
                  justifyContent='center'
                  height='60%'
                >
                    <LogIn></LogIn>
                </Box>
            </Box>
        </Box>
        
    )
}
