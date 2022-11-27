Hi folks!

This is my API application on Python, and I'm using [Open Weather Map](https://openweathermap.org/api)'s API. In this mini-project, I'm trying to use an API from Open Weather Map. First of all, of course, I imported a few libraries that will support my code; I'm using the requests and datetime libraries. The Requests library is used to get which API I'm going to use, and the datetime library is used to rephrase the date and time into my customized format.

Since I'm a free user, I can access the "5-day, 3-hour weather forecast." In this mini-project, I've created 2 functions: the "getDailyForecast" function, which is a function to get the forecast for 5 days (today and 4 days later), and the "getHourlyForecast" function, which is the function to get the forecast for n_days (starting from 1 to 5). This function will provide you with the weather forecast for every 3 hours (00.00, 03.00, 06.00,.., 21.00).

In my Jupyter notebook, I've included examples of the result. 
