using LiftOff.API.Models.Dynamic;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LiftOff.API.Logic.SmartWatch
{
    //Klasa koja sadrzava mehanizme uparivanja mobilne i smartwatch aplikacije
    public class SmartwatchPairer
    {
        #region Singleton

        private static SmartwatchPairer _instance;

        private SmartwatchPairer()
        {
            _initiateListCleaner();
        }

        public static SmartwatchPairer Instance
        {
            get
            {
                if (_instance == null)
                {
                    _instance = new SmartwatchPairer();
                }
                return _instance;
            }
        }

        #endregion

        public static List<MobileDevice> RegisteredDevices = new List<MobileDevice>();

        //Dodavanje mobilnog uredaja na dinamicki popis pracenih uredaja
        public void RegisterMobileDevice(string deviceID, string token, string droneName)
        {
            object lockObj = new object();
            lock (lockObj)
            {
                RegisteredDevices.RemoveAll(rd => rd.DeviceID == deviceID);

                RegisteredDevices.Add(new MobileDevice()
                {
                    DeviceID = deviceID,
                    Token = token,
                    DroneName = droneName,
                    TimeRegistered = DateTime.Now,
                });
            }
        }

        //Dohvacanje podataka potrebni smartwatchu registriranog mobilnog uredaja
        public TokenDroneDTO GetRegisteredMobileDeviceInfo(string deviceID)
        {
            var device = RegisteredDevices.FirstOrDefault(d => d.DeviceID == deviceID);

            return new TokenDroneDTO { Token = device.Token, DroneName = device.DroneName };
        }

        //Mehanizam ciscenja suvislih podataka
        private void _initiateListCleaner()
        {
            var startTimeSpan = TimeSpan.Zero;
            var periodTimeSpan = TimeSpan.FromHours(1);

            var timer = new System.Threading.Timer((e) =>
            {
                RegisteredDevices.RemoveAll(x => DateTime.Now - x.TimeRegistered > TimeSpan.FromDays(1));
            }, null, startTimeSpan, periodTimeSpan);
        }
    }
}