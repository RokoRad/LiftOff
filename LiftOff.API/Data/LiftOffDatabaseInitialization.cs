using LiftOff.API.Data;
using LiftOff.API.Logic;
using LiftOff.API.Logic.FlySafe.Algorithm;
using LiftOff.API.Models;
using System.Collections.Generic;
using System.Data.Entity;

namespace LiftOff.API.Data
{
	//Klasa zadužena za početnu inicijalizaciju baze podataka
	public class LiftOffDatabaseInitialization : DropCreateDatabaseIfModelChanges<LiftOffContext>
    {
        protected override void Seed(LiftOffContext context)
        {
			//Lista dronova koje LiftOff podržaje i koji se učitaju u bazu
            context.Drones.AddRange(LogicParameters.SupportedDrones);

            //Lista dosad registriranih zona zabranjenih letova
            context.NoFlyZones.AddRange(LogicParameters.NoFlyZones);

            context.SaveChanges();

            base.Seed(context);
        }
    }
}