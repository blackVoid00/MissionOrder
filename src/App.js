
import Routing from "./Routes";

import {Helmet} from "react-helmet";
import { GlobalStyle } from "./styles/globalStyles";
function App() {
  return (
    <>
    <GlobalStyle></GlobalStyle>
    <Helmet>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300&display=swap" rel="stylesheet"/>
    </Helmet>
    <Routing></Routing>
  </>
  );
}

export default App;
