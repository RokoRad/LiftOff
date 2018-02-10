using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LiftOff.API.Models.Dynamic
{
    //Model za transfer podataka mobilnog uredaja
    public struct TokenDroneDTO
    {
        public string Token { get; set; }
        public string DroneName { get; set; }
    }
}