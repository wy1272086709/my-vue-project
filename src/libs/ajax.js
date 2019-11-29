import axios from 'axios'
import qs from 'qs'
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

class Ajax {
	constructor(http) {
		this.http = http
	}	
	getData(url)
	{
		this.http.get(url).then(response=>{
			console.log('response');
			console.log(response);
		}).watch(function(err) {
			console.log(err);
		})
	}

	postData(url, json)
	{
		return new Promise((resolve, reject)=> {
			this.http.post(url, qs.stringify(json)).then(response=>{
				resolve(response.data)
			}).catch(err=> {
				reject(err.data)
			});
		});
	}
}

let ajax = new Ajax(axios)
export default ajax