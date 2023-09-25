import AppBar  from './components/AppBar';
import * as React from 'react';
import { createTheme,ThemeProvider } from '@mui/material';
import DialogBox from './components/DialogBox';
import Section from './components/Section';
import Categories from './components/Categories';
import { lightGreen } from '@mui/material/colors';


function App() {
  const greenTheme = createTheme({  //yazı stili icin theme kodumuz.
    palette: {
      primary:{
        light: "#58b74e",
        main: "#37aa2c",
        dark: "#1e8a17"
      }
    },
    typography:{
      fontFamily: 'Montserrat , sans-serif',
    }
  })
  return (
    <ThemeProvider theme={greenTheme}>
      <AppBar/>
      <Section/>
    </ThemeProvider>
    
  );
}

export default App;
