import React, { useState } from 'react';
import beth from './images/bethSmith.png'
import jerry from './images/jerrySmith.png'
import morty from './images/mortySmith.jpeg'
import rick from './images/rickSanchez.jpeg'
import summer from './images/summerSmith.png'
import ImageContainer from './styled-components/ImageContainer-styled';

function Pictures() {
    const imageArray = [beth, jerry, morty, rick, summer]
    const [picArray, setPicArray] = useState ([beth,jerry,morty,rick,summer])
    const [score, setScore] = useState(0);


    let i=0;
    const setImage = () => {
        setPicArray(imageArray);
    }
    
   const incrementScoreAndShuffleArr = () => {
       setScore(score+1);
       shuffle(picArray);
   }

   function shuffle(array) {
       let m = array.length, t, j;

       while(m){
           j = Math.floor(Math.random() * m--);

           t= array[m];
           array[m] = array[j];
           array[j] = t;

       }

       setPicArray(array);
   }

    return (
        <div>
            <p>{score}</p>
            <ImageContainer>
            
            {picArray.map((source) => (
                <div key={i++}>
                    <img src={source} alt="Jerry" onClick={incrementScoreAndShuffleArr}></img>
                </div>
            ))}
            </ImageContainer>
        </div>
    )
}

export default Pictures;