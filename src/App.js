
import React from 'react';
import { AppBar, Stack, Container, Toolbar, Typography, TextField, ThemeProvider, Autocomplete, CssBaseline } from '@mui/material';
import ResultCard from './ResultCard';
import theme from './theme';
import data from './formatedData.json'

function App() {
  const [result, setResult] = React.useState('')
  const allergyData = data.data

  const handleSearch = (newResult) => {
    setResult(newResult)
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="App" color="#d1c4e9">
        <CssBaseline/>
        <AppBar position="static">
          <Container maxwidth="xl">
            <Toolbar>
              <Typography variant="h5" color="white">
                What <b>CAN</b> Gourdy Eat
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
        <Stack 
          spacing={12} 
          justifyContent="center"
          alignItems="center"
          sx={{position: 'relative', top: '100px'}}>
          <Container>
            <Autocomplete 
              freeSolo 
              options={Object.keys(allergyData).map(name => name)}
              renderInput={params => <TextField {...params} label="Search"/>}
              onChange={(event, newResult) => handleSearch(newResult)}
              sx={{marginLeft: 'auto', marginRight: 'auto', backgroundColor: '#fff'}}
              maxwidth="md"
            />
          </Container>
          {result && result in allergyData && <ResultCard data={allergyData} result={result}/>}
        </Stack>
      </div>
    </ThemeProvider>
  );
}

export default App;
