

export default function EnrollmentRoutes(app) {
    app.get("/api/enrollments/:userId", async (req, res) => {
        const { userId } = req.params;
        const enrollments = await enrollmentsDao.getEnrollmentsForUser(userId);
        res.send(enrollments);
    });

    app.post("/api/enrollments", async (req, res) => {
        const { user, course } = req.body;
        const newEnrollment = await enrollmentsDao.enrollUserInCourse(user, course);
        res.send(newEnrollment);
    });

    app.delete("/api/enrollments/:enrollmentId", async (req, res) => {
        const { enrollmentId } = req.params;
        const status = await enrollmentsDao.deleteEnrollment(enrollmentId);
        res.send(status);
    });
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
