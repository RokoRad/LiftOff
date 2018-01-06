using LiftOff.API.Models;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Globalization;
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
                string json = "{ \"location\" : { \"latitude\" : " + LatTextBox.Text + ", \"longitude\" : " + LonTextBox.Text + " }, \"time\" : \""+ dateTimePicker1.Value.ToString(CultureInfo.InvariantCulture) +"\" }";

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

            WeatherRating weatherRating = JsonConvert.DeserializeObject<WeatherRating>(result);

            HumidityScoreLabel.Text     = string.Format("{0:N1}", (Math.Truncate(weatherRating.AtmosphereRating  * 10) / 10).ToString()); 
            WindScoreLabel.Text         = string.Format("{0:N1}", (Math.Truncate(weatherRating.WindRating        * 10) / 10).ToString()); 
            UVScoreLabel.Text           = string.Format("{0:N1}", (Math.Truncate(weatherRating.UVRating          * 10) / 10).ToString()); 
            ConditionsScoreLabel.Text   = string.Format("{0:N1}", (Math.Truncate(weatherRating.ConditionsRating  * 10) / 10).ToString()); 
            VisibilityScoreLabel.Text   = string.Format("{0:N1}", (Math.Truncate(weatherRating.VisibilityRating  * 10) / 10).ToString()); 
            TemperatureScoreLabel.Text  = string.Format("{0:N1}", (Math.Truncate(weatherRating.TemperatureRating * 10) / 10).ToString()); 
            TotalScoreLabel.Text        = string.Format("{0:N1}", (Math.Truncate(weatherRating.TotalRating * 10) / 10).ToString());
        }

        private void VisibilityScoreLabel_Click(object sender, EventArgs e)
        {

        }
    }
}
