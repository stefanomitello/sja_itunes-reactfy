import React from 'react';

import './App.css';
import Container from '@mui/material/Container';

import SimpleContainer from './components/container';
import { CssBaseline } from '@mui/material';
import Searchbar from './components/searchbar';
import SongCard from './components/card';

function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth={false} component='section' className='search-section'>
        <Searchbar />
      </Container>

      <Container maxWidth={false} component='section' sx={{}}>
        <SongCard />
        <SongCard />
        <SongCard />
        <SongCard />
        <SongCard />
        <SongCard />
      </Container>

    </>
  );
}

export default App;
