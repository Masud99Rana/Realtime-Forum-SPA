class Token{
	
	isValid(token){
		const payload = this.payload(token);
		if(payload){
			return payload.iss =="http://realtimeapp2.mr/login/auth/login" || "http://realtimeapp2.mr/api/auth/signup" ? true : false
		}

		return false
	}

	payload(token){
		const payload = token.split('.')[1]

		return this.decode(payload);
	}

	decode(payload){
		if(this.isBase64(payload)){

			return JSON.parse(atob(payload))
		}
		return false
	}

	//exception handling
	isBase64(str){
		try{
			return btoa(atob(str)).replace(/=/g,"") == str
		}
		catch(err){
			return false
		}
	}
}


export default Token = new Token()