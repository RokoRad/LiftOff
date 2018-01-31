using LiftOff.API.Providers;
using Microsoft.Owin;
using Microsoft.Owin.Security.OAuth;
using Owin;
using System;
using System.Web.Http;
using LiftOff.API.App_Start;
using Microsoft.AspNet.SignalR;

[assembly: OwinStartup(typeof(LiftOff.API.Startup))]
namespace LiftOff.API
{
	class Program
    {
        static void Main(string[] args)
        {
			//Long polling veze će čekati 110 sekunda za odgovor.
			//Kada vrijeme istekne pokrenuti će se komanda koja će pokušati ponovno spojiti klijenta.
            GlobalHost.Configuration.ConnectionTimeout = TimeSpan.FromSeconds(110);

			//Čekaj maksimalno 30 sekundi nakon što se veza izgubi 
			//prije nego se pokrene Disconnected event koji će ukinuti real-time vezu
			GlobalHost.Configuration.DisconnectTimeout = TimeSpan.FromSeconds(30);

			//Za transporte koji nisu long polling, posalji keepalive paket svako 10 sekunda
            //Vrijednost ne smije biti veća od 1/3 DisconnectTimeout vrijednosti
            GlobalHost.Configuration.KeepAlive = TimeSpan.FromSeconds(10);
        }
    }

	//Klasa koja sadrži sve potrebne konfiguracije
    public class Startup
	{
		public void Configuration(IAppBuilder app)
		{
            HttpConfiguration config = new HttpConfiguration();

			ConfigureOAuth(app);

			WebApiConfig.Register(config);
			app.UseCors(Microsoft.Owin.Cors.CorsOptions.AllowAll);
			app.UseWebApi(config);

            var hubConfiguration = new HubConfiguration();
            hubConfiguration.EnableDetailedErrors = true;
            app.MapSignalR(hubConfiguration);
		}

		public void ConfigureOAuth(IAppBuilder app)
		{
			OAuthAuthorizationServerOptions OAuthServerOptions = new OAuthAuthorizationServerOptions()
			{
				AllowInsecureHttp = true,
				TokenEndpointPath = new PathString("/token"),
				AccessTokenExpireTimeSpan = TimeSpan.FromDays(1),
				Provider = new SimpleAuthorizationServerProvider()
			};

            // Token Generation
            app.UseOAuthAuthorizationServer(OAuthServerOptions);
			app.UseOAuthBearerAuthentication(new OAuthBearerAuthenticationOptions());

		}
	}
}