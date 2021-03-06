import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin:0;
        padding:0;
        outline:0;
        box-sizing:border-box;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;;
    }
    html, body {
        max-width: 100vw;
        min-height: 100vh;
    }
    button {
        cursor:pointer;
        background: none;
        border: none;
        :focus {
            outline: none;
        }
    }
    a {
        text-decoration:none;
    }
    svg,
	svg path {
        margin: 0;
    }
    :root {
        --green:#80A26B;
        --red:#e2786a;
        --light-blue:#94B9E1;
        --blue:#4D98C7;
        --pink:#FB5793;
        --yellow:#FDE09A;
        --white: #FFFFFF;
        --black: #000000;
    }
`;
