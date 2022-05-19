//calls lyric data from lyric API and then returns them.

import { useEffect, useState } from 'react';
import FindWordInLyrics from './FindWordInLyrics';

export default function FetchLyrics(props) {
    console.log("hello from FetchLyrics")
    console.log(props.apiCall)

    const [lyrics, setLyrics] = useState('');
      useEffect(() => {
          fetch(props.apiCall)
            .then((response) => response.json())
            .then((data) => setLyrics(data.lyrics))
            .catch((console.log('lyrics bad')))
        })

    return (
        <div>
            <br></br>
            {lyrics}
                <FindWordInLyrics
                    rawLyrics = {lyrics.toLowerCase()}
                    soughtWord = {props.soughtWord.toLowerCase()}
                />
        </div>
    )        
}