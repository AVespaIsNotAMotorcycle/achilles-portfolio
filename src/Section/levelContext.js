import { createContext } from 'react';

const LevelContext = createContext({
  level: 2,
  lineage: [],
});
export { LevelContext }; // eslint-disable-line
