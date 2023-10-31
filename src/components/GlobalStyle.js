
import 'modern-normalize';
import { Global, css} from '@emotion/react'

export const globalStyles = css`
body {
  margin: 0;
  background-color: rgb(120, 112, 112);

  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

h1,
h2,

 {
  margin: 0;
}

ul {
  
  list-style: none;
}

button {
  cursor: pointer;
}

img {
  display: block;
  max-width: 100%;
  object-fit: cover;
}

`;

