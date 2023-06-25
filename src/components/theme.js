
import lightBg from '../images/popcorn.jpg'; 
import darkBg from '../images/welcomepage.jpg';

export const lightTheme = Object.freeze({
    fonts: {
        primary: 'Segoe UI, sans-serif',
        secondary: 'Roboto, sans-serif',
        tertiary: 'Ubuntu, sans-serif',
        quaternary: 'Helvetica, sans-serif',
    },
    colors: {
        primaryDarkText: '#000000',
        secondaryDarkText: '#23262A',

        backgroundColor: '#e0e0e0',

        blackText: '#000000',

        primaryLightText: '#FAFAFA',
        secondaryLightText: '#e0e0e0',
        tertiaryLightText: 'rgba(224, 224, 224, 0.5)',

        whiteText: '#ffffff',
    
        redColor: '#bd0000',
    },
    images: {
        background: lightBg,
    },
}); 

export const darkTheme = Object.freeze({
    fonts: {
        primary: 'Segoe UI, sans-serif',
        secondary: 'Roboto, sans-serif',
        tertiary: 'Ubuntu, sans-serif',
        quaternary: 'Helvetica, sans-serif',
    },
    colors: {
        primaryDarkText: '#FAFAFA',
        secondaryDarkText: '#FAFAFA',

        blackText: '#FAFAFA',

        backgroundColor: '#23262A',

        primaryLightText: '#FAFAFA',
        secondaryLightText: '#e0e0e0',
        tertiaryLightText: '#454444',
        

        whiteText: '#ffffff',
        redColor: '#bd0000',
    },
    images: {
        background: darkBg,
    },
}); 

export const theme = {
  light: lightTheme,
  dark: darkTheme,
};