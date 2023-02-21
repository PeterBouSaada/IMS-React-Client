/**
 * 
 * @returns a function that takes in a url, a function that runs on success, a function that runs on failure, and headers and does a GET HTTP Request
 * 
 */
const useGet = () => {

	function retfunc(url, onSuccess, onFailure, {headers = null}) {
		
    	var requiredHeaders = {'Content-Type': 'application/json'};

		const requestOptions = {
			method: 'GET',
			headers: { ...requiredHeaders, ...headers } ,
		};

		try {
			fetch(url, requestOptions)
				.then((response) => 
				{
					if(!response.ok)
					{
						return Promise.reject(response);
					}				
					else 
					{
						return response.json();
					}
				})
				.then((data) => 
				{
					onSuccess(data);
				})
				.catch((response) => 
				{
					onFailure(response.status);
				});
		}
		catch (err)
		{
			onFailure(err);
		}
	}

	return retfunc;

};


/**
 * 
 * @returns a function that takes in a url, a function that runs on success, a function that runs on failure, headers, and a body, and does a POST HTTP Request
 * 
 */
const usePost = () => {

	function retfunc(url, onSuccess, onFailure, {headers = null, body = null}) {
		
    	var requiredHeaders = {'Content-Type': 'application/json'};

		const requestOptions = {
			method: 'POST',
			headers: { ...requiredHeaders, ...headers } ,
			body: JSON.stringify(body),
		};

		try {
			fetch(url, requestOptions)
				.then((response) => 
				{
					if(!response.ok)
					{
						return Promise.reject(response);
					}				
					else 
					{
						return response.json();
					}
				})
				.then((data) => 
				{
					onSuccess(data);
				})
				.catch((response) => 
				{
					onFailure(response.status);
				});
		}
		catch (err)
		{
			onFailure(err);
		}
	}

	return retfunc;

};

const useDelete = () => {
	throw new Error("not Implemented")
};

const useUpdate = () => {
	throw new Error("not Implemented");
}


// TODO: Add useDelete and useUpdate to exports.
export { useGet, usePost };