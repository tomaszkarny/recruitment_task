
import React from 'react';

import { StyledHero, StyledH1, StyledP } from './Hero.styles';



import zebatka from "../../assets/zebatka.svg"




export const Hero = () => {

return(
 <StyledHero>
   <StyledH1>Obszary naszych kompetencji</StyledH1>
   <StyledP>Pomagamy uczyć się na błędach innych. Wspieramy i rekomendujemy wartościowe rozwiązania biznesowe.</StyledP>
   <StyledP>Zarządzanie projektami</StyledP>
   <div>
    
     <img src={zebatka} alt ="zebatka" width="500"/>
   </div>
 </StyledHero>
)

}