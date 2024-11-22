import * as enrollmentsDao from "./dao.js";

export default function EnrollmentRoutes(app) {
    const enrollUserInCourse = (req, res) => {
        const { userId, courseId } = req.body;
        const enrollment = enrollmentsDao.enrollUserInCourse(userId, courseId);
        res.json(enrollment);
    };
    app.post("/api/enrollments", enrollUserInCourse);
    const findAllEnrollments = (req, res) => {
        const enrollments = enrollmentsDao.findAllEnrollments();
        res.json(enrollments);
    };
    app.get("/api/enrollments", findAllEnrollments);
    const findEnrollmentsForUser = (req, res) => {
        const { userId } = req.params;
        const enrollments = enrollmentsDao.findEnrollmentsForUser(userId);
        res.json(enrollments);
    };
    app.get("/api/users/:userId/enrollments", findEnrollmentsForUser);
    const findEnrollmentsForCourse = (req, res) => {
        const { courseId } = req.params;
        const enrollments = enrollmentsDao.findEnrollmentsForCourse(courseId);
        res.json(enrollments);
    };
    app.get("/api/courses/:courseId/enrollments", findEnrollmentsForCourse);
    const unenrollUserFromCourse = (req, res) => {
        const { userId, courseId } = req.body;
        enrollmentsDao.unenrollUserFromCourse(userId, courseId);
        res.sendStatus(204);
    };
    app.delete("/api/enrollments", unenrollUserFromCourse);
}
