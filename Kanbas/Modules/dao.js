import Database from "../Database/index.js";
export function findModulesForCourse(courseId) {
    const { modules } = Database;
    return modules.filter((module) => module.course === courseId);
}export function findModulesForCourse(courseId) {
    return model.find({ course: courseId });
   }
   
export function createModule(module) {
    delete module._id
    return model.create(module);
   }
   
   export function deleteModule(moduleId) {
    return model.deleteOne({ _id: moduleId });
   }
   
export function updateModule(moduleId, moduleUpdates) {
    return model.updateOne({ _id: moduleId }, moduleUpdates);
}



