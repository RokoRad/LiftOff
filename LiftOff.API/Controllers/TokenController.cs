using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace LiftOff.API.Controllers
{
	[RoutePrefix("api/token")]
	public class TokenController : ApiController
	{
		[Authorize]
		[Route("Validate")]
		public IHttpActionResult Get()
		{
			return Ok();
		}
	}
}
