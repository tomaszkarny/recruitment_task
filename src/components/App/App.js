import { Hero } from "../Hero/Hero"
import { Global } from '@emotion/react';

import {globalStyles} from "../../styles/globalStyles"



const App = () =>  {
  return (
  <>
<Global styles={globalStyles} />
    <Hero />
      
    </>
  );
}

export default App;
