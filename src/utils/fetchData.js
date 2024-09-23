export const exerciseOptions = {
    method:'GET',
	headers: {
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com' ,
	'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY1,
     },
    }

export const youtubeOptions = {
        method: 'GET',
        headers: {
            'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com',
            'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY2,
        }
    }

export const fetchData = async (url, options, limit = 200) => {
  const response = await fetch(`${url}?limit=${limit}`, {
  ...options,
  });
  return await response.json();
};
