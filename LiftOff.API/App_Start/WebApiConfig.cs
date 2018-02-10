using Newtonsoft.Json.Serialization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Formatting;
using System.Web.Http;

namespace LiftOff.API.App_Start
{
	public static class WebApiConfig
	{
        //Konfiguracija http ruta
		public static void Register(HttpConfiguration config)
		{
			config.MapHttpAttributeRoutes();

            //Princip mapiranje http ruta
			config.Routes.MapHttpRoute(
				name: "DefaultApi",
				routeTemplate: "api/{controller}/{id}",
				defaults: new { id = RouteParameter.Optional }
			);

            //Automatsko formatiranje izmedu JS (lower-case prvo) i C# (upper-case prvo) principa nazivlja polja
			var jsonFormatter = config.Formatters.OfType<JsonMediaTypeFormatter>().First();
			jsonFormatter.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
		}
	}
}
