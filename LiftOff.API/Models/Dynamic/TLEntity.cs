using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LiftOff.API.Models.Dynamic
{
    public class TLEntity
    {
        public TimeLocation TimeLocation { get; set; }
        public DateTime LastRefresh { get; set; }
    }
}