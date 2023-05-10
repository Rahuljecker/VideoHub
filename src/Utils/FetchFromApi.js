import axios from "axios";

const BASE_URL="https://youtube-v31.p.rapidapi.com"
const options = {
    params: {
      maxResults: '50',
    },
    headers: {
      'content-type': 'application/octet-stream',
      'X-RapidAPI-Key': "fcee6b124dmshbefef3d8e21c960p1e1d1ajsnb0c212999b65",
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const FetchFromApi=async(url)=>{
   const {data}= await axios.get(`${BASE_URL}/${url}`,options);
    return data;
  }