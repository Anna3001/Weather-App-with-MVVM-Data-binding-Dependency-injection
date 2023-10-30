import { city } from "../models/city.js"
import { dailyForecast } from "../models/dailyForecast.js"
import { hourlyForecast } from "../models/hourlyForecast.js"

import { mainVM } from "../viewModels/mainViewModel.js"

const key = 'AKwNW7aIjGTGZixyktAY4qzeBQDiGAlC';

export const getNewDataAndUpdate = async (cityy) => {
  const NewCity = await getCity(cityy);
  const NewWeather = await getWeather(NewCity.key);
  const NewOneDayForecast = await getOneDayForecast(NewCity.key);
  const NewOneHourForecast = await getOneHourForecast(NewCity.key);
  const NewTwelveHoursForecast = await getTwelveHoursForecast(NewCity.key);
  const NewFiveDayForecast = await getFiveDaysForecast(NewCity.key);

  mainVM.getOneHourForecast().updateData(NewOneHourForecast);
  mainVM.getTwelveHoursForecast().updateData(NewTwelveHoursForecast);
  mainVM.getOneDayForecast().updateData(NewOneDayForecast);
  mainVM.getFiveDaysForecast().updateData(NewFiveDayForecast);
  mainVM.getCity().updateData(NewCity);
  mainVM.getWeather().updateData(NewWeather);
};

const getOneHourForecast = async (id) => {

  const base_url = 'http://dataservice.accuweather.com/forecasts/v1/hourly/1hour/';
  const query = `${id}?apikey=${key}&metric=${true}`;

  const response = await fetch(base_url + query);
  const data = await response.json();

  return new hourlyForecast(data[0]);  
};

const getTwelveHoursForecast = async (id) => {

  const base_url = 'http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/';
  const query = `${id}?apikey=${key}&metric=${true}`;

  const response = await fetch(base_url + query);
  const data = await response.json();

  return data.map((oneHour) => {
    return new hourlyForecast(oneHour);
  });  
};

const getOneDayForecast = async (id) => {

  const base_url = 'http://dataservice.accuweather.com/forecasts/v1/daily/1day/';
  const query = `${id}?apikey=${key}&metric=${true}`;

  const response = await fetch(base_url + query);
  const data = await response.json();

  return new dailyForecast(data.DailyForecasts[0]);
};

const getFiveDaysForecast = async (id) => {

  const base_url = 'http://dataservice.accuweather.com/forecasts/v1/daily/5day/';
  const query = `${id}?apikey=${key}&metric=${true}`;

  const response = await fetch(base_url + query);
  let data = await response.json();
  data = data.DailyForecasts

  return data.map((oneDay) => {
    return new dailyForecast(oneDay);
  });
};

const getWeather = async (id) => {

  const base_url = 'http://dataservice.accuweather.com/currentconditions/v1/';
  const query = `${id}?apikey=${key}`;

  const response = await fetch(base_url + query);
  const data = await response.json();

  return new hourlyForecast(data[0]);
}; 

const getCity = async (cityy) => {

  const base_url = 'http://dataservice.accuweather.com/locations/v1/cities/search';
  const query = `?apikey=${key}&q=${cityy}`;

  const response = await fetch(base_url + query);
  const data = await response.json();

  return new city(data[0]);
};