import { useState, useEffect } from "react";

const useGet = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  var abort = new AbortController();

  useEffect(() => {
    try {
      	fetch(url, { signal: abort })
        	.then((response) => {
          		if (!response.ok)
		  		{
            		throw Error("Unable to complete request");
          		}
        	})
        	.then((data) => 
			{
          		setData(data);
        	});
    	return abort.abort();
    }
	catch (err) 
	{
      setError(err);
    }
  }, []);

  return {data, error};
};

export { useGet };
