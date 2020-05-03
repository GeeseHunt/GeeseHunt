import {
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
} from 'graphql';

const SubjectType = new ObjectType({
  name: 'Subject',
  fields: {
    subject: { type: StringType },
    description: { type: StringType },
    unit: { type: StringType },
    group: { type: StringType },
  },
});

export default SubjectType;
