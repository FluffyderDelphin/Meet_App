import { loadFeature, defineFeature } from 'jest-cucumber';

const feature = loadFeature(
  './src/_tests_/features/filterEventsByCity.test.js'
);

defineFeature(feature, (test) => {});
