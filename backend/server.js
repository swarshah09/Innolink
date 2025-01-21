import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import passport from "passport";
import session from "express-session";
// import path from "path";


import "./passport/github.auth.js";

import userRoutes from "./routes/user.route.js";
import exploreRoutes from "./routes/explore.route.js";
import authRoutes from "./routes/auth.route.js";

import connectMongoDB from "./db/connectMongoDB.js";

dotenv.config();


const app = express();
const PORT = process.env.PORT || 8000;
// const __dirname = path.resolve();

// const httpServer = http.createServer(app);
// const io = new SocketServer(httpServer, {
//     cors: {
//         origin: "*", // Adjust if you have a specific domain for the frontend
//         methods: ["GET", "POST"]
//     }
// });

app.use(session({ secret: "keyboard cat", resave: false, saveUninitialized: false }));
// Initialize Passport!  Also use passport.session() middleware, to support
// persistent login sessions (recommended).
app.use(passport.initialize());
app.use(passport.session());

// Here we can remove the cors, it's not necessary in production because the frontend and backend are on the same domain.
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/explore", exploreRoutes);

app.listen(PORT, () => {
	console.log(`Server started on http://localhost:${PORT}`);
	connectMongoDB();
});
