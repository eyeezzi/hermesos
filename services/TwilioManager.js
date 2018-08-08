const axios = require('axios')

const TwilioManager = {

	requestSMS: (phone_number, country_code) => {
		const payload = {
			"api_key": process.env.TWILIO_API_KEY,
			"via": "sms",
			"code_length": 4,
			"phone_number": phone_number,
			"country_code": country_code
		}
		return axios.post('https://api.authy.com/protected/json/phones/verification/start', payload)
	},

	verifyCode: async (phone_number, country_code, verification_code) => {
		const params = {
			"api_key": process.env.TWILIO_API_KEY,
			"verification_code": verification_code,
			"phone_number": phone_number,
			"country_code": country_code
		}
		return axios.get('https://api.authy.com/protected/json/phones/verification/check', { params: params })
	}
}

module.exports = TwilioManager