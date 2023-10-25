import { cityM } from "../models/city.js"
import { dailyForecastM } from "../models/dailyForecast.js"
import { hourlyForecastM } from "../models/hourlyForecast.js"

import { mainViewModel } from "../viewModels/mainViewModel.js"

const key = 'Input your key in here';

export const getNewDataAndUpdate = async (city) => {
  const NewCity = await getCity(city);
  const NewWeather = await getWeather(NewCity.key);
  const NewOneDayForecast = await getOneDayForecast(NewCity.key);
  const NewOneHourForecast = await getOneHourForecast(NewCity.key);
  const NewTwelveHoursForecast = await getTwelveHourForecast(NewCity.key);
  const NewFiveDayForecast = await getFiveDayForecast(NewCity.key);

  mainViewModel.getOneHourForecast().updateData(NewOneHourForecast);
  mainViewModel.getTwelveHoursForecast().updateData(NewTwelveHoursForecast);
  mainViewModel.getOneDayForecast().updateData(NewOneDayForecast);
  mainViewModel.getFiveDaysForecast().updateData(NewFiveDayForecast);
  mainViewModel.getCity().updateData(NewCity);
  mainViewModel.getWeather().updateData(NewWeather);
};

const getOneHourForecast = async (id) => {

  const base_url = 'http://dataservice.accuweather.com/forecasts/v1/hourly/1hour/';
  const query = `${id}?apikey=${key}&metric=${true}`;

  const response = await fetch(base_url + query);
  const data = await response.json();

  return new hourlyForecastM(data[0]);  
};

const getTwelveHoursForecast = async (id) => {

  const base_url = 'http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/';
  const query = `${id}?apikey=${key}&metric=${true}`;

  const response = await fetch(base_url + query);
  const data = await response.json();

  return data.map((oneHour) => {
    return new hourlyForecastM(oneHour);
  });  
};

const getOneDayForecast = async (id) => {

  const base_url = 'http://dataservice.accuweather.com/forecasts/v1/daily/1day/';
  const query = `${id}?apikey=${key}&metric=${true}`;

  const response = await fetch(base_url + query);
  const data = await response.json();

  return new dailyForecastM(data);
};

const getFiveDaysForecast = async (id) => {

  const base_url = 'http://dataservice.accuweather.com/forecasts/v1/daily/5day/';
  const query = `${id}?apikey=${key}&metric=${true}`;

  const response = await fetch(base_url + query);
  const data = await response.json();

  return data.map((oneDay) => {
    return new dailyForecastM(oneDay);
  });
};

const getWeather = async (id) => {

  const base_url = 'http://dataservice.accuweather.com/currentconditions/v1/';
  const query = `${id}?apikey=${key}`;

  const response = await fetch(base_url + query);
  const data = await response.json();

  return new hourlyForecastM(data[0]);
}; 

const getCity = async (city) => {

  const base_url = 'http://dataservice.accuweather.com/locations/v1/cities/search';
  const query = `?apikey=${key}&q=${city}`;

  const response = await fetch(base_url + query);
  const data = await response.json();

  return new cityM(data[0]);
};


