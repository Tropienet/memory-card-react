import React, { useState } from 'react';
import beth from './images/bethSmith.png'
import jerry from './images/jerrySmith.png'
import morty from './images/mortySmith.jpeg'
import rick from './images/rickSanchez.jpeg'
import summer from './images/summerSmith.png'
import bp from './images/birdPerson.jpeg'
import jessica from './images/jessica.jpeg'
import tammy from './images/tammy.jpeg'
import squanchy from './images/squanchy.jpeg'
import mrP from './images/mrPoppy.png'
import evilMorty from './images/evilMorty.jpeg'
import evilBug from './images/evilBug.jpeg'
import ImageContainer from './styled-components/ImageContainer-styled';
import ImageStyle from './styled-components/ImageStyle-styled';


function Pictures() {
    
    const [picArray, setPicArray] = useState ([beth,jerry,morty,rick,summer, bp, jessica, tammy, squanchy, mrP, evilMorty, evilBug])
    const [score, setScore] = useState(0);
    const [usedPicArray, setUsedPicArray] = useState([]);
    const [highScore, setHighScore] = useState([0]);
    const [checkForSamePic, setCheckForSamePic] = useState(0);

    let i=0;
    
    
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

   const addPicToUsed = (source) => {
       
       for(let j = 0;j<usedPicArray.length;j++){
        if(usedPicArray[j]===source){
            setCheckForSamePic(1);
            if(score>highScore){
                setHighScore(score);
            }
            setScore(0);
            
        }
       }
       if(checkForSamePic===1){
        setUsedPicArray([]);
        setCheckForSamePic(0);
       }else{
        setUsedPicArray(usedPicArray.concat(source));
    }
        
   }

    return (
        <div>
            <p>Score: {score}</p>
            <p>High Score: {highScore}</p>
            <ImageContainer>
            
            {picArray.map((source) => (
                <div key={i++} onClick={() => addPicToUsed(source)}>
                    <ImageStyle src={source} alt="Jerry" onClick={incrementScoreAndShuffleArr}></ImageStyle>
                </div>
            ))}
            </ImageContainer>
        </div>
    )
}

export default Pictures;