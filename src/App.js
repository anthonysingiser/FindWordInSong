/*
1) objects are only for data (no methods, no storing variables)
2) The code must execute from 1 "top level" function called website()
3) You may not use the returns of any functions (or all functions must return null. whichever you please) 
structure in functions:

function Website (){
  callAPI();
}

object SearchTerms = {
  musicObject{
    artist: 'The Beatles',
    song: 'Hey Jude',
  }
}

function callAPI(){
  let lyrics = "";
  lyrics = getAPI.data.lyrics
  findWordInLyrics(lyrics, 'jude')
}

function findWordInLyrics(lyrics, soughtWord){
    lyrics.filter((word) =>{
      word === soughtWord
    }
    ).length
} 

Website();
*/

import './App.css';
import SearchTerms from './SearchTerms';
import React from 'react';

class App extends React.Component {
  render() {
    return(
      <div className="App">
          <SearchTerms />
      </div>
    )
  };
}
export default App;