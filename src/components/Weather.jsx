import React from "react";
import { Icon } from "@iconify/react";
export const Weather = ({ weatherData }) => {
  return (
    <div className="w-full h-full">
      {weatherData.weather ? (
        <div className="w-[500px] h-[250px] bg-gray-300 shadow-lg rounded-xl m-auto relative px-6 top-[10%] animate-fade-down">
          <div className="flex justify-between w-full  ">
            <div className="w-1/2 my-4 mx-auto flex justify-between items-center">
              <div className="flex flex-col items-start justify-between h-full">
                <div>
                  <p className="text-xl">
                    {weatherData.name},{weatherData.sys.country}
                  </p>
                  <p className="text-xs uppercase">
                    {weatherData.weather[0].description}
                  </p>
                </div>
                <div>
                  <h1 className="text-6xl font-semibold">
                    {weatherData.main.temp.toFixed()} °C
                  </h1>
                </div>
              </div>
            </div>

            <div className="w-1/2 flex flex-col justify-between items-end">
              <div className="relative">
                <img
                  src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                  alt=""
                  className="w-[120px]"
                />
              </div>
              {weatherData.name !== undefined ? (
                <div className="flex flex-col justify-evenly gap-y-2 my-4 mx-auto text-xs">
                  <div className="flex justify-between gap-x-2">
                    <Icon
                      icon="carbon:temperature-celsius"
                      className="logoStyle"
                    />
                    <p>Sensación</p>
                    <p className="font-bold w-20">
                      {weatherData.main.feels_like.toFixed()} °C
                    </p>
                  </div>
                  <div className="flex justify-between gap-x-2">
                    <Icon icon="carbon:humidity" className="logoStyle" />
                    <p>Humedad</p>
                    <p className="font-bold w-20">
                      {weatherData.main.humidity} %
                    </p>
                  </div>
                  <div className="flex justify-between gap-x-2">
                    <Icon icon="carbon:windy-strong" className="logoStyle" />
                    <p>Viento</p>
                    <p className="font-bold w-20">
                      {weatherData.wind.speed.toFixed()} km/h
                    </p>
                  </div>
                  <div className="flex justify-between gap-x-2">
                    <Icon
                      icon="carbon:stress-breath-editor"
                      className="logoStyle"
                    />
                    <p>Presión</p>
                    <p className="font-bold w-20">
                      {weatherData.main.pressure} hPa
                    </p>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
