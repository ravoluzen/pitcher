import { useQuery } from "react-query"
export default function useData(promptValues){

    const { pitchType, orgType, role, skills, tone, additionalInfo } = promptValues;

    let prompt = `Write me a convincing pitch for asking a ${pitchType} at a ${orgType} for a ${role} position. My skills are ${skills}. Tone: ${tone}. Word Limit: 150. ${additionalInfo}`

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + String(process.env.NEXT_PUBLIC_OPENAI_API_KEY)
      },
      body: JSON.stringify({
        'prompt': prompt,
        'temperature': 0.7,
        'max_tokens': 200,
        'top_p': 1,
        'frequency_penalty': 0,
        'presence_penalty': 0,
      })
    };

    const fetchData = async () => {
      const data = await fetch('https://api.openai.com/v1/engines/text-davinci-003/completions', requestOptions)
        .then(response => response.json());
      return data;
    }

    return useQuery('data', fetchData, {enabled: false, refetchOnMount: false, staleTime:1000});
}