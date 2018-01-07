using LiftOff.API.Data;
using LiftOff.API.Models;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.Owin.Security.OAuth;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using System.Web;

namespace LiftOff.API.Data.Repos
{
	public class AuthRepo : IDisposable
	{
		#region dependancy management

		private LiftOffContext _context;

		private UserManager<IdentityUser> _userManager;

		public AuthRepo()
		{
			_context = new LiftOffContext();
			_userManager = new UserManager<IdentityUser>(new UserStore<IdentityUser>(_context));
		}

		public void Dispose()
		{
			_context.Dispose();
			_userManager.Dispose();
		}

		#endregion

		public async Task<IdentityResult> RegisterUser(User userModel)
		{
			IdentityUser user = new IdentityUser
			{
				UserName = userModel.UserName,
				Email = userModel.Email
			};

			var result = await _userManager.CreateAsync(user, userModel.Password);

            StatisticsUser statisticsUser = new StatisticsUser()
            {
                IdentityUserId = user.Id
            };

            _context.StatisticsUsers.Add(statisticsUser);
            _context.SaveChanges();

			return result;
		}

		public async Task<IdentityUser> FindUser(string userName, string password)
		{
			IdentityUser user = await _userManager.FindAsync(userName, password);

			return user;
		}

	}
}