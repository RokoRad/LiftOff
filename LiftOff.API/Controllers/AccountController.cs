using LiftOff.API.Data;
using LiftOff.API.Data.Repos;
using LiftOff.API.Models;
using LiftOff.API.Models.Persistent;
using Microsoft.AspNet.Identity;
using System.Threading.Tasks;
using System.Web.Http;

namespace LiftOff.API.Controllers
{
    //Controller zadužen za funkcionalnosti vezane specifično uz korisnikov račun
    [RoutePrefix("api/account")]
	public class AccountController : ApiController
	{
        //Potrebne konekcije na bazu i njihova inicijacija i odlaganje 
		#region Dependancy management

		private readonly AuthRepo _authRepo;
        private readonly LiftOffRepo _liftOffRepo;

        public AccountController()
		{
			_authRepo = new AuthRepo();
            _liftOffRepo = new LiftOffRepo();
		}

		protected override void Dispose(bool disposing)
		{
			if (disposing)
			{
				_authRepo.Dispose();
                _liftOffRepo.Dispose();
			}

			base.Dispose(disposing);
		}

        #endregion

		//Ruta koja registrira novog korisnika u bazu
        [HttpPost]
		[AllowAnonymous]
		[Route("register")]
		public async Task<IHttpActionResult> Register(User userModel)
		{
			IdentityResult result = await _authRepo.RegisterUser(userModel);

			if (result == null) return InternalServerError();
			if (!result.Succeeded) return BadRequest();
			return Ok();
		}

        //Ruta koja korisniku vraća njegove trenutne statistike
        [HttpGet]
        [Authorize]
        [Route("get-user-data")]
        public IHttpActionResult GetUserData()
        {
            string userId = User.Identity.GetUserId();
            StatisticsUser user = _liftOffRepo.GetUserData(userId);

            if (user == null) return BadRequest();
            return Ok();
        }

        //Slijepa ruta za provjeravanje validnosti tokena
        [HttpGet]
        [Authorize]
        [Route("validate-token")]
        public IHttpActionResult Get()
        {
            return Ok();
        }
    }
}
