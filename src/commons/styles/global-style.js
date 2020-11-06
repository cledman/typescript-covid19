import { createGlobalStyle } from 'styled-components';
import CovidImg from '../../assets/images/covid.jpg';

const globalStyle = createGlobalStyle `
    *{
        outline:none;
        box-sizing:border-box;
    }

    body{
        line-height:normal;
    }

    html,body{
        display:flex;
        margin:0;
        min-height:100%;
        padding:0;
        width:100%;
    }

    #root{
        background:url(${CovidImg});
        background-size:cover;
        background-position:center center;
        height:100vh;
        width:100vw;
    }
`;

export default globalStyle;
