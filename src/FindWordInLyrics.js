//filters out punctuation, 
//and then counts how many times the 'soughtWord' occurs in the song
//filter out '\r' and '\n' as well
//account for lyrics with 'paroles de la chanson {song} par {artist} 


export default function FindWordInLyrics(props){
  
  function replaceNewLineWithSpace(characters){
      return characters.replace(/\n/g,' ')
  }
  
  function RemovePunctuation() {
    const punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~\r'
    const lyricsNoNewLines = replaceNewLineWithSpace(props.rawLyrics)
    const splitLyrics = lyricsNoNewLines.split('')
    const filteredLyrics = splitLyrics.filter((letter) => {
        return punctuation.indexOf(letter) === -1
        })
      console.log(filteredLyrics)
      return filteredLyrics.join('')
    }

  function main(){
    const lyricsWithNoPunctuation = RemovePunctuation()
    const splitLyrics = lyricsWithNoPunctuation.split(' ')
    const returnArray = splitLyrics.filter((word) =>{
      return word === props.soughtWord
    })
    return returnArray.length
  }

  const numberOfOccurences = main();

  return( 
    <>
    <br></br>
    <br></br>
    The word "{props.soughtWord.toUpperCase()}" appears {numberOfOccurences} times in this song. 
    </>
  )
}