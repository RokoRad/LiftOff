using LiftOff.API.Models.Dynamic;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LiftOff.API.Logic.Alexa
{
    public class Alexa
    {
        public static string AlexsizeRating(WeatherRating weatherRating)
        {
            return $"The Flysafe Rating is {(Math.Truncate(((double)weatherRating.TotalRating) * 10) / 10)}. {weatherRating.AdvisoryRating.English}"; 
        } 
    }
}