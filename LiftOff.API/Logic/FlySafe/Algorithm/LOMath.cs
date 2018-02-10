using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LiftOff.API.Logic.FlySafe.Algorithm
{
    public static class LOMath
    {
        public static double? ClampScore(double? val) => (!val.HasValue) ? null : (val < 0) ? 0 : ((val > 5) ? 5 : val);

        public static double? QuarticRegression(double? x, double[] functionCoeficients)
        {
            if (!x.HasValue) return null;
            return functionCoeficients.ToList().Select((coef, ind) => new { value = coef, index = ind }).Sum((coefObj) => coefObj.value * Math.Pow((double)x, coefObj.index));
        }

        public static double WeightedAverage(double?[] parameters, double?[] coeficients)
        {
            double total = parameters.ToList().Aggregate((double)0, (sum, next) => sum += next.HasValue ? (double)next * (double)coeficients[parameters.ToList().IndexOf(next)] : 0);
            double divisor = coeficients.ToList().Aggregate((double)0, (sum, next) => sum += next.HasValue ? (double)next : 0);

            return total / divisor;
        }
    }
}