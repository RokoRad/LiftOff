using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LiftOff.API.Models.Dynamic
{
    //Model za pracenje unutar weatherer sistema
    public class TLEntity
    {
        public TimeLocation TimeLocation { get; set; }
        public DateTime LastRefresh { get; set; }
    }
}