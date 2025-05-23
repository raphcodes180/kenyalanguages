import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Home from './components/Home';
import KikuyuDictionary from './components/KikuyuDictionary';
import KiswahiliDictionary from './components/KiswahiliDictionary';
import Phrases from './components/Phrases';
import Alphabet from './components/Alphabet';
import Grammar from './components/Grammar';
import Layout from './components/Layout';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#6a4a3e', // Earthy brown
    },
    secondary: {
      main: '#a97259', // Light brown
    },
    background: {
      default: '#f5f0e1', // Beige
      paper: '#f5f0e1',
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/kikuyu-dictionary" element={<KikuyuDictionary />} />
            <Route
              path="/kiswahili-dictionary"
              element={<KiswahiliDictionary />}
            />
            <Route path="/phrases" element={<Phrases />} />
            <Route path="/alphabet" element={<Alphabet />} />
            <Route path="/grammar" element={<Grammar />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
