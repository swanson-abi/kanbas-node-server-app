import session from "express-session";
import express from "express";
import UserRoutes from "./Kanbas/Users/routes.js";
import CourseRoutes from "./Kanbas/Courses/routes.js";
import ModuleRoutes from "./Kanbas/Modules/routes.js";
import EnrollmentRoutes from "./Kanbas/Enrollments/dao.js";
import Lab5 from "./Lab5/index.js";
import cors from "cors";
import "dotenv/config";
const app = express();
app.use(cors({
    credentials: true,
    origin: process.env.NETLIFY_URL || "http://localhost:3000",
  })
 );      
 const sessionOptions = {
    secret: process.env.SESSION_SECRET || "kanbas",
    resave: false,
    saveUninitialized: false,
  };
  if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
      sameSite: "none",
      secure: true,
      domain: process.env.NODE_SERVER_DOMAIN,
    };
  }
  app.use(session(sessionOptions));  
app.use(express.json());       
UserRoutes(app);
CourseRoutes(app);  
EnrollmentRoutes(app);
ModuleRoutes(app);
AssignmentRoutes(app);
Lab5(app);                          
app.listen(process.env.PORT || 4000)