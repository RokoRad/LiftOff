using LiftOff.API.Data;
using LiftOff.API.Data.Repos;
using LiftOff.API.Models;
using Microsoft.AspNet.Identity;
using System.Threading.Tasks;
using System.Web.Http;

namespace LiftOff.API.Controllers
{
    [RoutePrefix("api/Account")]
	public class AccountController : ApiController
	{
		#region Dependancy management

		private AuthRepo _authRepo = null;

		public AccountController()
		{
			_authRepo = new AuthRepo();
		}

		protected override void Dispose(bool disposing)
		{
			if (disposing)
			{
				_authRepo.Dispose();
			}

			base.Dispose(disposing);
		}

        #endregion

        private readonly LiftOffContext _liftOffContext = new LiftOffContext();

		[AllowAnonymous]
		[Route("Register")]
		public async Task<IHttpActionResult> Register(User userModel)
		{
			IdentityResult result = await _authRepo.RegisterUser(userModel);

			if (result == null) return InternalServerError();
			if (!result.Succeeded) return BadRequest();
			else return Ok();
		}

        //[Authorize]
        //[Route("GetMyId")]
        //public IHttpActionResult GetMyId()
        //{
        //    return Ok(User.Identity.GetUserId());
        //}
    }
}
