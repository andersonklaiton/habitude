import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    outline:0;
}
button{
    cursor:pointer;
}
a{
    text-decoration:none;
}

:root{
    --green:#80A26B;
    --red:#CA513C;
    --light-blue:#94B9E1;
    --blue:#4D98C7;
    --pink:#FB5793;
    --yellow:#FDE09A;
}
`;
