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
        //Dodatne konfiguracije za realtime
        static void Main(string[] args)
        {
            GlobalHost.Configuration.ConnectionTimeout = TimeSpan.FromSeconds(110);
			GlobalHost.Configuration.DisconnectTimeout = TimeSpan.FromSeconds(30);
            GlobalHost.Configuration.KeepAlive = TimeSpan.FromSeconds(10);
        }
    }

	//Potrebne pocetne konfiguracije
    public class Startup
	{
		public void Configuration(IAppBuilder app)
		{
            HttpConfiguration config = new HttpConfiguration();

			ConfigureOAuth(app);

            //Dodatne konfiguracija autentikacije
			WebApiConfig.Register(config);
			app.UseCors(Microsoft.Owin.Cors.CorsOptions.AllowAll);
			app.UseWebApi(config);

            //Realtime konfiguracija
            var hubConfiguration = new HubConfiguration();
            hubConfiguration.EnableDetailedErrors = true;
            app.MapSignalR(hubConfiguration);
		}

        //Konfiguracija autentikacije
        public void ConfigureOAuth(IAppBuilder app)
		{
			OAuthAuthorizationServerOptions OAuthServerOptions = new OAuthAuthorizationServerOptions()
			{
				AllowInsecureHttp = true,
				TokenEndpointPath = new PathString("/api/account/get-token"),
				AccessTokenExpireTimeSpan = TimeSpan.FromDays(1),
				Provider = new SimpleAuthorizationServerProvider()
			};

            app.UseOAuthAuthorizationServer(OAuthServerOptions);
			app.UseOAuthBearerAuthentication(new OAuthBearerAuthenticationOptions());
		}
	}
}