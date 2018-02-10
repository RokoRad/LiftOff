using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LiftOff.API.Models.Dynamic
{
    public enum RatingCategories { total, wind, conditions, visibility, temperatureLow, temperatureHigh, atmosphere, uv }
    public enum RatingStates { red, yellow, green, NA }

    //Model apstraktnog opisa stanja vremena
    public struct RatingCategoryState : IEquatable<RatingCategoryState>
    {
        public RatingCategories Category { get; set; }
        public RatingStates State { get; set; }

        public bool Equals(RatingCategoryState obj)
        {
            return Category == obj.Category && State == obj.State;
        }
    }
}