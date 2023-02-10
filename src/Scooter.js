class Scooter{
  constructor(charge, isBroken) {
    this.charge = charge;
    this.isBroken = isBroken;
    this.user = null;
    this.station = null;
  }

  rent() {
    if (this.charge > 20 && !this.isBroken) {
      this.user = "User";
      this.station = null;
      console.log("Scooter checked out to user.");
    } else if (this.charge <= 20) {
      throw new Error("Scooter needs to charge.");
    } else if (this.isBroken) {
      throw new Error("Scooter needs repair.");
    }
  }

  dock(station) {
    this.station = station;
    this.user = null;
    console.log("Scooter returned to station.");
  }

  recharge() {
    let intervalId = setInterval(() => {
      if (this.charge < 100) {
        this.charge += 10;
        console.log(`Scooter charged to ${this.charge}%.`);
      } else {
        clearInterval(intervalId);
        console.log("Scooter fully charged.");
      }
    }, 1000);
  }

  requestRepair() {
    let intervalId = setInterval(() => {
      this.isBroken = false;
      console.log("Repair completed.");
      clearInterval(intervalId);
    }, 5000);
  }
}
// When a new person downloads the app and registers, a new User object is created to store user information in the system.

// In a real world scenario, this object would also store credit card information, rental history, etc.

// Each User has the following properties:

// username: String

// password: String

// age: In years

// loggedIn: boolean

// username, password, and age are provided to the constructor as arguments. loggedIn represents whether the user is currently logged in. A user is NOT logged in when they first register.

// Each User has the following methods (each called by ScooterApp):

// login(password)

// If password is correct, logs the User in. If not, throws incorrect password error.

// logout()

// Logs the User out.



module.exports = Scooter
