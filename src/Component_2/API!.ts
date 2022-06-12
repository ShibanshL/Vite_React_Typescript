export interface api1{
    base: string
    clouds: {all: number}
    cod: number
    coord: {lon: number, lat: number}
    dt: number
    id: number
    main: {
      feels_like: number
      grnd_level: number
      humidity: number
      pressure: number
      sea_level: number
      temp: number
      temp_max: number
      temp_min: Number}
    name: string
    sys: {type: number, id: number, country: string, sunrise: number, sunset: number}
    timezone: number
    visibility: number
    weather: [{id:number, main: string, description: string, icon: string}]
    wind: {speed:number, deg: number, gust: number}
}