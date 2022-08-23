import { createGlobalStyle } from 'styled-components';
import cambria from './cambria.ttf';

export default createGlobalStyle`
    @font-face {
        font-family: 'Cambria Font';
        src: local('Cambria Font'), local('CambriaFont'),
        url(${cambria}) format('ttf');
        font-weight: 300;
        font-style: normal;
    }
`;
