/**
 * Script that fetches subject via uw api, and import them to database
 */

import config from '../src/config';
import configureDatabase from '../src/data/configureDatabase';
import UWDataClient from '../src/clients/uwDataClient';
import Subject from '../src/data/models/Subject';

configureDatabase(config.databaseUrl).then(connection => {
  const client = new UWDataClient({
    baseUrl: config.api.uwApiUrl,
    apiKey: config.apiKeys.uwApiKey,
  });

  Subject.collection.drop();

  client
    .getSubjects()
    .then(subjects =>
      Subject.create(subjects).then(() => {
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
