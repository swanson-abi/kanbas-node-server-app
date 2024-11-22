

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
}
