/**
 * Script that fetches subject via uw api, and import them to database
 */

import config from '../src/config';
import configureDatabase from '../src/data/configureDatabase';
import UWDataClient from '../src/clients/uwDataClient';
import Course from '../src/data/models/Course';

configureDatabase(config.databaseUrl).then(connection => {
  const client = new UWDataClient({
    baseUrl: config.api.uwApiUrl,
    apiKey: config.apiKeys.uwApiKey,
  });

  Course.collection.drop();

  client
    .getCourses()
    .then(courses =>
      Course.create(courses).then(() => {
        // eslint-disable-next-line no-console
        console.log('Success');
      }),
    )
    .then(() => connection.close())
    .catch(err => {
      console.error(err);
      connection.close();
    });
});
