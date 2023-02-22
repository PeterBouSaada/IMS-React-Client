/**
 * 
 * @returns a function that takes in a url, a function that runs on success, a function that runs on failure, and headers and does a GET HTTP Request
 * 
 */
const useGet = (abortController) => {

	function retfunc(url, onSuccess, onFailure, {headers = null}) {
		
    	var requiredHeaders = {'Content-Type': 'application/json'};

		const requestOptions = {
			method: 'GET',
			headers: { ...requiredHeaders, ...headers } ,
			signal: abortController.signal
		};

		(async () => 
		{
			try 
			{
			  	const response = await fetch(url, requestOptions);

				if (!response.ok) {
					onFailure(response.status);
					return;
				}
				
				const data = await response.json();
				onSuccess(data);
			
			} 
			catch (error)
			{
			  	onFailure(error.message);
			}
		  })();

	}
	
	return retfunc;
};


/**
 * 
 * @returns a function that takes in a url, a function that runs on success, a function that runs on failure, headers, and a body, and does a POST HTTP Request
 * 
 */
const usePost = (abortController) => {

	function retfunc(url, onSuccess, onFailure, {headers = null, body = null}) {
		
    	var requiredHeaders = {'Content-Type': 'application/json'};

		const requestOptions = {
			method: 'POST',
			headers: { ...requiredHeaders, ...headers } ,
			body: JSON.stringify(body),
			signal: abortController.signal
		};

		(async () => 
		{
			try 
			{
			  	const response = await fetch(url, requestOptions);

				if (!response.ok) {
					onFailure(response.status);
					return;
				}
				
				const data = await response.json();
				onSuccess(data);
			
			} 
			catch (error)
			{
			  	onFailure(error.message);
			}
		  })();

	}

	return retfunc;

};

const useDelete = (abortController) => {

	function retfunc(url, onSuccess, onFailure, id, {headers = null}) {
		
    	var requiredHeaders = {'Content-Type': 'application/json'};
		
		let finalURL = url;

		// Add Forward Slash if it wasnt included in the url
		if(url.slice(-1) === '/')
		{
			finalURL += id
		}
		else
		{
			finalURL += '/' + id;
		}

		const requestOptions = {
			method: "DELETE",
			headers: { ...requiredHeaders, ...headers } ,
			signal: abortController.signal
		};

		(async () => 
		{
			try 
			{
			  	const response = await fetch(finalURL, requestOptions);

				if (!response.ok) {
					onFailure(response.status);
					return;
				}
				
				const data = await response.json();
				onSuccess(data);
			} 
			catch (error)
			{
			  	onFailure(error.message);
			}
		  })();
	}
	return retfunc;
};

const usePut = (abortController) => {
	
	function retfunc(url, onSuccess, onFailure, id, {headers = null, body = null}) {
		
    	var requiredHeaders = {'Content-Type': 'application/json'};
		
		let finalURL = url;

		// Add Forward Slash if it wasnt included in the url
		if(url.slice(-1) === '/')
		{
			finalURL += id
		}
		else
		{
			finalURL += '/' + id;
		}
		
		const requestOptions = {
			method: "PUT",
			headers: { ...requiredHeaders, ...headers } ,
			body: JSON.stringify(body),
			signal: abortController.signal
		};

		(async () => 
		{
			try 
			{
			  	const response = await fetch(finalURL, requestOptions);

				if (!response.ok) {
					onFailure(response.status);
					return;
				}
				
				const data = await response.json();
				onSuccess(data);
			
			} 
			catch (error)
			{
			  	onFailure(error.message);
			}
		})();

	}
	return retfunc;
}

export { useGet, usePost, useDelete, usePut };