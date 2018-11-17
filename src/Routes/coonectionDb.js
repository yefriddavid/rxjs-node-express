const admin = require("firebase-admin");
const os = require('os');


const serviceAccount = require(os.homedir() + "/Firebase/ServiceAccounts/phonetrack-5cf7c-firebase-adminsdk-nlbmt-a5dc28009a.json")


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://phonetrack-5cf7c.firebaseio.com"
})


//const ref = db.ref("restricted_access/secret_document")
/*ref.once("value", function(snapshot) {
  console.log(snapshot.val());
})*/


/*var usersRef = ref.child("ITX392");
usersRef.set({
  general: {
      date: "June 23, 1912",
      time: "12:00"
  },
  location: {
    lat: "123",
    long: "abc"
  }
});*/

const createLocation = (licencePlate, infoTrack) => {
    const db = admin.database()
    const ref = db.ref("locations/devices")
    const usersRef = ref.child(licencePlate)
    usersRef.set(infoTrack)

    return "location created successfully"


        /*usersRef.set({
      general: {
          date: "June 23, 1912",
          time: "12:00"
      },
      location: {
        lat: "123",
        long: "abc"
      }
    })*/
}

module.exports = {
    createLocation
}

//db.close()

