//filters out punctuation, 
//and then counts how many times the 'soughtWord' occurs in the song

export default function FindWordInLyrics(props){
  console.log("Hello from FindWord")
  const punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
    function RemovePunctuation() {
      return props.rawLyrics.split('')
      .filter((letter) => {
        return punctuation.indexOf(letter) === -1
        }).join('')
    }
  const lyricsWithNoPunctuation = RemovePunctuation()
  
  function main(){
    return lyricsWithNoPunctuation.split(' ').filter((word) =>{
      return word === props.soughtWord
    }).length
  }
  const numberOfOccurences = main();
  return( 
    <>
    <br></br>
    <br></br>
    The word {props.soughtWord} appears {numberOfOccurences} times in this song. 
    </>
  )
}