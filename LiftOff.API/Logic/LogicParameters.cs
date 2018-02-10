using LiftOff.API.Models;
using LiftOff.API.Models.Dynamic;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using LiftOff.API.Models.Persistent;

namespace LiftOff.API.Logic
{
    public static class LogicParameters
    {
        //Korelacija ID-a vremenskih prilika i ocjene
        public static Dictionary<int, double> WeatherIdToRating = new Dictionary<int, double>()
            {
                { 200, 0.7 }, { 201, 0.3 }, { 202, 0.0 }, { 210, 1.3 }, { 211, 0.2 }, { 212, 0.0 }, { 221, 0.0 }, { 230, 1.1 }, { 231, 0.5 }, { 232, 0 },
                { 300, 2.7 }, { 301, 2.2 }, { 302, 1.3 }, { 310, 1.0 }, { 311, 0.8 }, { 312, 0.5 }, { 314, 0.3 }, { 321, 0.2 },
                { 500, 1.8 }, { 501, 1.2 }, { 502, 0.7 }, { 503, 0.5 }, { 504, 0.2 }, { 511, 1.3 }, { 520, 0.6 }, { 522, 0.1 }, { 531, 0.0 },
                { 600, 3.1 }, { 601, 2.7 }, { 602, 1.7 }, { 611, 1.6 }, { 612, 1.3 }, { 615, 1.4 }, { 616, 0.8 }, { 620, 1.3 }, { 621, 0.4 }, { 622, 0.2 },
                { 701, 3.9 }, { 711, 3.7 }, { 721, 3.1 }, { 731, 2.4 }, { 741, 2.8 }, { 751, 2.1 }, { 761, 2.4 }, { 762, 1.9 }, { 771, 1.2 }, { 781, 0.0 },
                { 800, 5.0 }, { 801, 4.9 }, { 802, 4.8 }, { 803, 4.6 }, { 804, 3.9 },
                { 900, 0.0 }, { 901, 0.0 }, { 902, 0.0 }, { 903, 3.1 }, { 904, 3.5 }, { 906, 0.0 },
                { 951, 5.0 }, { 952, 4.7 }, { 953, 4.1 }, { 954, 3.5 }, { 955, 3.2 }, { 956, 2.8 }, { 957, 2.4 }, { 958, 2.1 }, { 959, 1.3 }, { 960, 0.7 }, { 961, 0.4 }, { 962, 0 }
            };

        //Koeficijenti polinoma 4. stupnja koji opisuju odnos parametra i ocjene
        public static double[] WindScoreCoefficients         = { 5,         -0.1366667,  0.012,        0.001033333,    0.00002 };
        public static double[] VisibilityScoreCoefficients   = { 0,         0.000942316, -3.136364e-7, 9.924242e-11,   -8.441558e-15};
        public static double[] TemperatureScoreCoefficients  = { 0.9960317, 0.401455,    0.009236111,  -0.00008796296, 0.000002083333};
        public static double[] AtmosphereScoreCoefficients   = { 5.000218,  0.7995152,   -0.0320649,   0.0004152064,   -0.000001795367 };
        public static double[] UVScoreCoefficients           = { 5,         5.103788,    -1.813636,    0.2001894,      -0.007386364 };

        //Koeficijenti polinoma 4. stupnja koji opisuju odnos ocjene i tezinskog koeficijenta
        public static double[] WindWeightCoefficients        = { 50, -36.75,    11.375,   -1.75,       0.125 };
        public static double[] ConditionsWeightCoefficients  = { 50, -28.35,    5.275,    -0.35,       0.025 };
        public static double[] VisibilityWeightCoefficients  = { 51, -42.23333, 15.01667, -2.566667,   0.1833333 };
        public static double[] TemperatureWeightCoefficients = { 20, -0.5,      -6.333333, 2,         -0.1666667 };
        public static double[] AtmosphereWeightCoefficients  = { 10, -5.733333, 0.5333333, 0.2333333, -0.03333333 };
        public static double[] UVWeightCoefficients          = { 15, -2.483333, -3.191667, 1.183333,  -0.1083333 };
        
        //Korelacije apstraktnih opisa vremenske situacije i odgovarajucih opisa
        public static Dictionary<RatingCategoryState, AdvisoryRating> RatingCategoryStateToAdvisoryRating = new Dictionary<RatingCategoryState, AdvisoryRating>()
        {
            {new RatingCategoryState(){ Category = RatingCategories.total,           State = RatingStates.green },  new AdvisoryRating(){ English = "Ideal for flight",            Croatian = "Idealno za let"} },
            {new RatingCategoryState(){ Category = RatingCategories.total,           State = RatingStates.yellow }, new AdvisoryRating(){ English = "Situation not ideal",         Croatian = "Situacija nije idealna"} },
            {new RatingCategoryState(){ Category = RatingCategories.total,           State = RatingStates.red },    new AdvisoryRating(){ English = "Flight not advised",          Croatian = "Let se ne preporučuje"} },
            {new RatingCategoryState(){ Category = RatingCategories.wind,            State = RatingStates.red },    new AdvisoryRating(){ English = "Wind's too strong",           Croatian = "Vjetar je prejak"} },
            {new RatingCategoryState(){ Category = RatingCategories.conditions,      State = RatingStates.red },    new AdvisoryRating(){ English = "Weather prevents flight",     Croatian = "Vrijeme sprječava let"} },
            {new RatingCategoryState(){ Category = RatingCategories.visibility,      State = RatingStates.red },    new AdvisoryRating(){ English = "Visibility too poor",         Croatian = "Vidljivost je preslaba"} },
            {new RatingCategoryState(){ Category = RatingCategories.temperatureHigh, State = RatingStates.red },    new AdvisoryRating(){ English = "Hight temp hinders motors",   Croatian = "Visoka temperatura škodi motorima"} },
            {new RatingCategoryState(){ Category = RatingCategories.temperatureLow,  State = RatingStates.red },    new AdvisoryRating(){ English = "Low temp hinders battery",    Croatian = "Niska temperatura škodi bateriji"} },
            {new RatingCategoryState(){ Category = RatingCategories.atmosphere,      State = RatingStates.red },    new AdvisoryRating(){ English = "High humidity damages drone", Croatian = "Vlaga šteti dronu"} },
            {new RatingCategoryState(){ Category = RatingCategories.uv,              State = RatingStates.red },    new AdvisoryRating(){ English = "Possible UV interference",    Croatian = "Moguća UV interferencija"} },
            {new RatingCategoryState(){ Category = RatingCategories.wind,            State = RatingStates.yellow }, new AdvisoryRating(){ English = "Watch out for gusts of wind", Croatian = "Pazite na nalete vjetra"} },
            {new RatingCategoryState(){ Category = RatingCategories.conditions,      State = RatingStates.yellow }, new AdvisoryRating(){ English = "Weather's bad",               Croatian = "Vrijeme je loše"} },
            {new RatingCategoryState(){ Category = RatingCategories.visibility,      State = RatingStates.yellow }, new AdvisoryRating(){ English = "Impaired visibility",         Croatian = "Smanjena vidljivost"} },
            {new RatingCategoryState(){ Category = RatingCategories.wind,            State = RatingStates.green },  new AdvisoryRating(){ English = "Wind's calm",                 Croatian = "Vjetar je miran"} },
            {new RatingCategoryState(){ Category = RatingCategories.conditions,      State = RatingStates.green },  new AdvisoryRating(){ English = "Weather's great",             Croatian = "Vrijeme je super"} },
            {new RatingCategoryState(){ Category = RatingCategories.visibility,      State = RatingStates.green },  new AdvisoryRating(){ English = "Great visiblity",             Croatian = "Odlična vidljivost"} },
        };

        //Prosjecna brzina vjetra koji podnosi prosjecni dron
        public static double BaseWindSpeed = 30;
        public static int PivotTemperature = 20;
        public static double YellowScoreStateLimit = 2;
        public static double GreenScoreStateLimit = 4;

        //Podrzani dronovi
        public static List<Drone> SupportedDrones = new List<Drone>() {
            new Drone() { Name = "DJI Phantom 4 Pro", TopSpeed = 72 },
            new Drone() { Name = "DJI Phantom 4 Advanced", TopSpeed = 72 },
            new Drone() { Name = "DJI Phantom 3 SE", TopSpeed = 57.6 },
            new Drone() { Name = "DJI Mavic Air", TopSpeed = 68.4 },
            new Drone() { Name = "DJI Spark", TopSpeed = 50 },
            new Drone() { Name = "DJI Mavic Pro", TopSpeed = 65 },
            new Drone() { Name = "DJI Inspire 2", TopSpeed = 94 },
            new Drone() { Name = "Yuneec Typhoon H Pro", TopSpeed = 48.2 },
            new Drone() { Name = "Parrot Disco FPV", TopSpeed = 80.5 } };

        //NoFly zone
        public static List<NoFlyZone> NoFlyZones = new List<NoFlyZone>() {
            new NoFlyZone() { Location = new Coordinates(){ Latitude = 43.523102, Longitude = 16.425945}, Radius = 500 }, // vojna pomorska luka split
            new NoFlyZone() { Location = new Coordinates(){ Latitude = 43.538469, Longitude = 16.298218}, Radius = 500 }, // civilna zracna luka split
        };

        public static int NumberOfEntitesPerFetch = 30;
        public static double LatitudeLongitudeTolerance = 0.1;
        public static TimeSpan TimeTolerance = TimeSpan.FromHours(1.5);
        public static Coordinates MapParseDensity = new Coordinates() { Latitude = 0.009009009, Longitude = 0.01440776866 };
        public static int MapParseSize = 3;
        public static int MaxAdvisoryStringLenght = 105;
        public static TimeSpan MinimumHotSpotsDataAge = TimeSpan.FromDays(1);
        public static TimeSpan MaximumHotSpotsDataAge = TimeSpan.FromDays(30);
        public static double HotSpotsLongitudeTolerance = 0.720388433;
        public static double HotSpotsLatitudeTolerance = 0.45045045;

        public static string OpenWeatherAPIKey = "3939e3c3ea8f513efb798c6deb5f9857";
        public static string OpenWeatherAPIURL = "http://api.openweathermap.org/data/2.5/[api]?lat=[lat]&lon=[lon]&mode=[mode]&units=metric&appid=[apikey]";
    }
}