//filters out punctuation, 
//and then counts how many times the 'soughtWord' occurs in the song

export default function FindWordInLyrics(props){
  const punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
  const lyricsWithNoPunctuation = RemovePunctuation()
  
  function RemovePunctuation() {
      return props.rawLyrics.split('')
      .filter((letter) => {
        return punctuation.indexOf(letter) === -1
        }).join('')
    }

  function main(){
    return lyricsWithNoPunctuation.split(' ').filter((word) =>{
      return word.toLowerCase() === props.soughtWord.toLowerCase()
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