export const exerciseOptions= {
    method: 'GET',
    params: {limit: '10'},
    headers: {
      'X-RapidAPI-Key': '7ebec5c1f0msh7a8f118ddf95409p16b68fjsn141b5d71c625',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '7ebec5c1f0msh7a8f118ddf95409p16b68fjsn141b5d71c625',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};
export const fetchData=async(url,options)=>{
    const response=await fetch(url,options);
    const data=await response.json();
    return data;
}