class TestApi {
    constructor() {
        this._apiBase = "https://api.openweathermap.org/data/2.5/forecast"
        this._apiKey = "4cb49cf028751bd372922abb584f8d95"
    }

    async getForecast(cityName) {
        const response = await fetch(`${this._apiBase}?q=${cityName}&appid=${this._apiKey}`)

        if(!response.ok) {
            console.log("Error")
        }

        return await response.json()
    }
}

export default new TestApi()