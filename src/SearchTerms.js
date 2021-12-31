import { useState } from "react";
import GenerateAPICallFromSearchTerms from "./GenerateAPICallFromSearchTerms";

export default function SearchTerms() {
  const [inputs, setInputs] = useState({});
  const [submitInputs, setSubmitInputs] = useState({artist: ''})

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitInputs(inputs)
  }

  const renderGenerateAPI = () => {
      if(submitInputs === inputs){
        return <GenerateAPICallFromSearchTerms inputs = {submitInputs}/>
      } else{
        return
      }
    }

  return (
    <div>
    <form onSubmit= {handleSubmit}>
      <label>Artist:
      <input 
        type="text" 
        name="artist" 
        value={inputs.artist || ""} 
        onChange={handleChange}
      />
      </label>
      <label>Song:
      <input 
        type="text" 
        name="song" 
        value={inputs.song || ""} 
        onChange={handleChange}
      />
      </label>
      <label> Word:
      <input
        type='text'
        name='soughtWord'
        value={inputs.soughtWord || ""}
        onChange={handleChange}
      />
      </label>
      <input type="submit" value="Submit" />
    </form>
    {console.log(submitInputs)}
    {console.log(inputs)}
      {renderGenerateAPI()}
    </div>
  )
}