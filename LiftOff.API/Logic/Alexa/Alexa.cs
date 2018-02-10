using LiftOff.API.Models.Dynamic;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LiftOff.API.Logic.Alexa
{
    //Klasa za procese usko vezane uz Alexu
    public class Alexa
    {
        //Metoda za pretvaranje procjene vremena u format prikladan alexi
        public static string AlexsizeRating(WeatherRating weatherRating)
        {
            return $"The Flysafe Rating is {(Math.Truncate(((double)weatherRating.TotalRating) * 10) / 10)}. {weatherRating.AdvisoryRating.English}"; 
        } 
    }
}