// const jwt_decode = require("jwt-decode");

// const User = require("../models/User");

// // Get data of user who logged in
// async function getLoggedinUser(req, res, next) {

//   let loggedinUser;
//   const token = req.headers.authorization;
//   if (token) {
//     const decoded = jwt_decode(token);
//     const userId = decoded.id;
//     try {
//       loggedinUser = await User.findById(userId);
//       if (!loggedinUser) {
//         return res.status(404).json({ error: "User not found" });
//       }
//     } catch (error) {
//       return res.status(500).json({ error: error.message });
//     }
//     res.loggedinUser = loggedinUser;
//     next();
//   } else {
//     res.loggedinUser = null;
//     next();
//   }
// }

// module.exports = { getLoggedinUser };


// -------------------------------------------------

const jwt_decode = require("jwt-decode");
const User = require("../models/User");

async function getLoggedinUser(req, res, next) {
  let loggedinUser = null; // Initialize to null
  const token = req.headers.authorization;
  // console.log(req.headers);
  if (token) {
    try {
      const decoded = jwt_decode.jwtDecode(token);
      console.log(decoded)
      const userId = decoded.id;
      loggedinUser = await User.findById(userId);

      if (!loggedinUser) {
        return res.status(404).json({ error: "User not found" });
      }
    } catch (error) {
      return res.status(500).json({ error: "Invalid token" });
    }
  }

  // Set the user on the response object regardless of whether a token exists
  res.loggedinUser = loggedinUser;
  next(); // Call next middleware
}

module.exports = { getLoggedinUser };
