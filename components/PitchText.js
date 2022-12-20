import {useContext} from 'react'
import useData from '../hooks/useData'
import { PromptContext } from '../context/PromptContext'

const PitchText = () => {
  const {promptValues} = useContext(PromptContext)
  const {data, isLoading, isError} = useData(promptValues)
  //const { pitchType, orgType, role, skills, tone, additionalInfo } = promptValues

  if(isLoading) return <div>loading...</div>
  if(isError) return <div>{}</div>
  console.log(data)

  return (
    <div>{data ? (
        <div>{data.choices[0].text}</div>
    ) : <div>No data</div>}</div>
  )
}

export default PitchText