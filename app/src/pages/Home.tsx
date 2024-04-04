import * as React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Link from '@mui/material/Link'
import { GitHub, LinkedIn, Email } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import Stack from '@mui/material/Stack'
import Avatar from '@mui/material/Avatar'
import { purple } from '@mui/material/colors'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'

export default function Home (): JSX.Element {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        paddingTop: '50px'
      }}
    >
      <CssBaseline />

      <Container maxWidth="sm">
        <Stack
          sx={{ marginBottom: '60px' }}
          justifyContent="space-between"
          direction="row">
          <Stack direction="row">
            <Avatar
              src="https://avatars.githubusercontent.com/u/33275002?v=4"
              sx={{
                width: 72,
                height: 72,
                backgroundColor: 'rgb(152, 160, 250)'
              }}/>
            <Stack sx = {{ marginLeft: '25px' }}
              direction="column" spacing={0.1}>
              <Typography
                variant="h1" component="h1" gutterBottom>
                Andrew Desousa
              </Typography>
              <Stack justifyContent="flex-start" direction="row">
                <IconButton
                  size="small"
                  href="https://github.com/andrewldesousa" color="inherit">
                  <GitHub fontSize="small" />
                </IconButton >

                <IconButton
                  size="small"
                  href="https://www.linkedin.com/in/andrewldesousa/" color="inherit">
                  <LinkedIn fontSize="small" />
                </IconButton>

                <IconButton
                  size="small"
                  href="mailto:desousa.andrew11@gmail.com" color="inherit">
                  <Email fontSize="small" />
                </IconButton>
              </Stack>
              </Stack>
            </Stack>

          </Stack>

        <Typography variant="body1">
          Some things about me:
        </Typography>
        <List>
        <ListItem>
          <ListItemIcon>
            <FiberManualRecordIcon fontSize="small" style={{ fontSize: 10 }} />
          </ListItemIcon>
          <ListItemText primary="I am based in San Francisco, California" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <FiberManualRecordIcon fontSize="small" style={{ fontSize: 10 }} />
          </ListItemIcon>
          <ListItemText primary="I grew up in South Florida" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <FiberManualRecordIcon fontSize="small" style={{ fontSize: 10 }} />
          </ListItemIcon>
          <ListItemText primary="I currently work as a Software Engineer at Microsoft building retrieval augmented generation (RAG) systems for business use-cases" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <FiberManualRecordIcon fontSize="small" style={{ fontSize: 10 }} />
          </ListItemIcon>
          <ListItemText primary="I am really interested in Machine Learning technology!" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <FiberManualRecordIcon fontSize="small" style={{ fontSize: 10 }} />
          </ListItemIcon>
          <ListItemText primary="I earned Computer Science degrees from the Technical University of Munich and the University of Miami" />
        </ListItem>
        {/* Add more ListItem components for more interests */}
      </List>
      </Container>
    </Box>
  )
}
