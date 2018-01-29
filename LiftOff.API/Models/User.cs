using System.ComponentModel.DataAnnotations;

namespace LiftOff.API.Models
{
	//Klasa koja definira User objekt za bazu podataka
	public class User
	{
		[Required]
		public string UserName { get; set; }

		[Required]
		[DataType(DataType.Password)]
		public string Password { get; set; }

		[Required]
		[DataType(DataType.EmailAddress)]
		public string Email { get; set; }
    }
}