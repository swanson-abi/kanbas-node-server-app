import db from "../Database/index.js";

let { enrollments } = db;

export const enrollUserInCourse = (userId, courseId) => {
    const newEnrollment = { _id: Date.now(), userId, courseId };
    enrollments = [...enrollments, newEnrollment];
    return newEnrollment;
};

export const findAllEnrollments = () => enrollments;

export const findEnrollmentsForUser = (userId) =>
    enrollments.filter((enrollment) => enrollment.userId === userId);

export const findEnrollmentsForCourse = (courseId) =>
    enrollments.filter((enrollment) => enrollment.courseId === courseId);

export const unenrollUserFromCourse = (userId, courseId) => {
    enrollments = enrollments.filter(
        (enrollment) => !(enrollment.userId === userId && enrollment.courseId === courseId)
    );
};
