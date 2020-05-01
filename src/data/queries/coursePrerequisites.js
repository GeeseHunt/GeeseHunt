import CoursePrerequisitesType from '../types/CoursePrerequisitesType';

const coursePrerequisites = {
  type: CoursePrerequisitesType,
  resolve(rootValue, args, { clients }) {
    const { subject, catalogNumber } = rootValue;

    // sample prerequisites_parsed: ["CS240",[1,"MATH239","MATH249"]]
    // converts prerequisites_parsed to string for simpler object schema
    return clients.uwDataClient
      .getCoursePrerequisites(subject, catalogNumber)
      .then(obj =>
        Object.assign(
          {
            prerequisitesParsed: JSON.stringify(obj.prerequisites_parsed),
          },
          obj,
        ),
      );
  },
};

export default coursePrerequisites;
