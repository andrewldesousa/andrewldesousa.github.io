import * as React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Link from '@mui/material/Link'
import { GitHub, LinkedIn } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import Stack from '@mui/material/Stack'

const defaultTheme = createTheme({
  typography: {
    h2: {
      fontSize: '2rem',
      fontWeight: 500
    }
  }
})

export default function StickyFooter (): JSX.Element {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh'
        }}
      >
        <CssBaseline />
        <Container sx={{ mt: 8, mb: 2, marginTop: 0 }} disableGutters maxWidth={false}>
          <Container sx={{
            mt: 8,
            mb: 2,
            marginBottom: 3,
            borderBottom: '.5px solid #000000'
          }}
          disableGutters maxWidth={false}>
            <Container sx={{ mt: 8, mb: 2, marginBottom: '.2rem' }} maxWidth="sm">
              <Typography variant="h2" component="h1" gutterBottom>
                Andrew Desousa
              </Typography>

              <Stack direction="row" spacing={0.1}>
                <IconButton href="https://github.com/andrewldesousa" color="inherit" size="small">
                  <GitHub fontSize="small"/>
                </IconButton >

                <IconButton href="https://www.linkedin.com/in/andrewldesousa/" color="inherit" size="small">
                  <LinkedIn fontSize="small"/>
                </IconButton >
              </Stack>
            </Container>
          </Container>

          <Container component="main" sx={{ mt: 8, mb: 2, marginTop: '1rem' }} maxWidth="sm">
            <Typography variant="body1">
              I am a Software Engineer based in San Francisco, California.
              <br /><br />
              My technical interests are in Machine Learning, Computer Vision, and Large-scale Distributed Systems.
              <br /><br />
              Previously, I worked on an identity verification platform at <Link href="https://www.uber.com/">Uber</Link>. In 2022, I graduated from the Technical University of Munich with a Master's degree in Computer Science. The focus of my studies was on Machine Learning and Computer Vision. I did my thesis on Synthetic-to-Real Domain Adaptation for Computer Vision in cooperation with BMW Group. Prior to that, I worked part-time and as an intern at several other companies during my studies (see my LinkedIn for more details).
              <br /><br />

              Other interests: guitar, travel, video games, and reading.
            </Typography>
          </Container>
        </Container>
      </Box>
    </ThemeProvider>
  )
}
