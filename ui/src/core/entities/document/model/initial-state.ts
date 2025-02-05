import { type ModelState } from './types';

export const initialState: ModelState = {
  list: [],
  processes: {
    renaming: undefined,
  },
  effects: {
    getLocallyStored: {
      status: 'idle',
      firstExecution: true,
    },
    getWithRemotelyStored: {
      status: 'idle',
      firstExecution: true,
    },
    create: {
      status: 'idle',
      firstExecution: true,
    },
  },
};
