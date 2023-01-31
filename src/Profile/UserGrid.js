import React from 'react';
import styled from 'styled-components';
import {ProfileImage} from './ProfileImage';

const UserGridStyled = styled.div`
  display: grid; 
  justify-content: center;
  margin-top: 80px; 
  margin-bottom: 50px;  
  gap: 15px; 
  grid-template-areas: "photo name"
                       "photo label" 
                       "photo description"; 
                       
  @media (max-width: 990px){
    grid-template-areas: "photo name"
                         "label . "
                         "description .";  
  }
`

export const MiniUserGrid = styled.div`
  display: grid; 
  justify-content: left; 
  grid-template-columns: auto auto; 
  gap: 10px; 
`

const Photo = styled.div`
  grid-area: photo; 
`

const Name = styled.div`
  grid-area: name; 
  font-size: 35px;
  align-self: center;  
`

const Label = styled.div`
  grid-area: label; 
  @media (max-width: 990px) {
    padding-left: 25px; 
  }
`
const Description = styled.div`
  grid-area: description; 
  max-width: 400px; 
  @media (max-width: 990px) {
    padding-left: 25px; 
    grid-column: 1 / 3; 
  }
`


export default function(){
  return <UserGridStyled>
    <Photo><ProfileImage/></Photo>
    <Name>GridGallery</Name>
    <Label><strong> 400 </strong>Followers</Label>
    <Description>
      Kickstarter man braid listicle, hoodie hot chicken pinterest pitchfork offal hella leggings. Pork belly knausgaard palo santo bicycle rights vegan. Subway tile crucifix irony selfies cred synth mixtape, normcore chambray. Migas hella disrupt XOXO raw denim hashtag.
    </Description>
  </UserGridStyled>
}
