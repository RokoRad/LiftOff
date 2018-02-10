using MoreLinq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LiftOff.API.Models.Dynamic
{
    public class AdvisoryRating
    {
        public string Croatian { get; set; } = "";
        public string English { get; set; } = "";

        public int Lenght()
        {
            return (new List<string>() { Croatian, English }).MaxBy(str => str.Length).Length;
        }

        public void Append(AdvisoryRating advisoryRating)
        {
            Croatian += ((Croatian != "") ? ". " : "") + advisoryRating.Croatian;
            English += ((English != "") ? ". " : "") + advisoryRating.English;
        }
    }
}