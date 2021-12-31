import FetchLyrics from "./FetchLyrics";

export default function GenerateAPICallFromSearchTerms(props){
    
    function processStringWithSpaces(wordsWithSpaces) {
        const words = wordsWithSpaces.split(' ')
        const stringWithPercent = words.map((word) => {
            if (word === words.at(-1)) {
                return word
            } else {
                return `${word}%20`
            }
        }).join('')
        return stringWithPercent
    }

    const artist = processStringWithSpaces(props.inputs.artist)
    const song = processStringWithSpaces(props.inputs.song)

    const apiCallWithInputData = `https://api.lyrics.ovh/v1/${artist}/${song}`
    
    return (
        <div>
            <FetchLyrics 
                apiCall = {apiCallWithInputData}
                song = {props.song}
                artist = {props.artist}
                soughtWord = {props.inputs.soughtWord}
            />
        </div>  
    )
}