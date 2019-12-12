import axios from 'axios'
import qs from 'qs'
const serverPort = 'http://jdtest.com'
const instance = axios.create({  
    baseURL: serverPort,  
    timeout: 20000,  
    validateStatus:function(status) {
        return status < 500;  
    },  
    headers: {  
        // 跨域请求 这个配置不能少  
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",  
        'Accept': 'application/json'  
    }  
}); 

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
			let params = '';
			if (typeof json!='string') {
				params =  qs.stringify(json);
			} 
			this.http.post(url,params).then(response=>{
				resolve(response.data)
			}).catch(err=> {
				reject(err.data)
			});
		});
	}

	postJsonData(url, json) {
		return new Promise((resolve, reject)=> {
			let params = '';
			if (typeof json!='string') {
				params =  qs.stringify(json);
			} 
			instance({
				url: url,
				method: 'POST',
				data: params
			}).then( response => {
				resolve(response.data)
			}).catch(err=> {
				reject(err.data)
			});
		});
	}
}

let ajax = new Ajax(axios)
export default ajax