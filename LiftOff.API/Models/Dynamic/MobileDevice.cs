using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LiftOff.API.Models.Dynamic
{
    public struct MobileDevice
    {
        public string DeviceID { get; set; }
        public string Token { get; set; }
        public string DroneName { get; set; }
        public DateTime TimeRegistered { get; set; }
    }
}