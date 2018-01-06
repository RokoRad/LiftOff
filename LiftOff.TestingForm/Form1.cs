using LiftOff.API.Models;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace LiftOff.TestingForm
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            var httpWebRequest = (HttpWebRequest)WebRequest.Create("http://localhost:52037/api/weather/getScore");
            httpWebRequest.ContentType = "application/json";
            httpWebRequest.Method = "POST";

            using (var streamWriter = new StreamWriter(httpWebRequest.GetRequestStream()))
            {
                string json = "{ \"location\" : { \"latitude\" : " + LatTextBox.Text + ", \"longitude\" : " + LonTextBox.Text + " }, \"time\" : \"2012-04-23T18:25:43.511Z\" }";

                streamWriter.Write(json);
                streamWriter.Flush();
                streamWriter.Close();

                System.Diagnostics.Debug.WriteLine(json);
            }

            string result = "";
            var httpResponse = (HttpWebResponse)httpWebRequest.GetResponse();
            using (var streamReader = new StreamReader(httpResponse.GetResponseStream()))
            {
                result = streamReader.ReadToEnd();
            }

            OldWeatherRating weatherRating = JsonConvert.DeserializeObject<OldWeatherRating>(result);

            HumidityScoreLabel.Text     = string.Format("{0:N2}", (Math.Truncate(weatherRating.AtmosphereRating  .Score * 100) / 100).ToString()); 
            WindScoreLabel.Text         = string.Format("{0:N2}", (Math.Truncate(weatherRating.WindRating        .Score * 100) / 100).ToString()); 
            UVScoreLabel.Text           = string.Format("{0:N2}", (Math.Truncate(weatherRating.UVRating          .Score * 100) / 100).ToString()); 
            ConditionsScoreLabel.Text   = string.Format("{0:N2}", (Math.Truncate(weatherRating.ConditionsRating  .Score * 100) / 100).ToString()); 
            VisibilityScoreLabel.Text   = string.Format("{0:N2}", (Math.Truncate(weatherRating.VisibilityRating  .Score * 100) / 100).ToString()); 
            TemperatureScoreLabel.Text  = string.Format("{0:N2}", (Math.Truncate(weatherRating.TemperatureRating  .Score * 100) / 100).ToString()); 
            
        }

        private void VisibilityScoreLabel_Click(object sender, EventArgs e)
        {

        }
    }
}
