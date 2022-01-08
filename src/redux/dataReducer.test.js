import { dataReducer, GET_DATA } from './dataReducer';

describe('Data reducer', () => {
  it('Should return default state', () => {
    const newState = dataReducer(undefined, {});
    expect(newState).toEqual([]);
  });

  it('Should return a new state if receiving type', () => {
    const data = [{ some: 'data' }, { some: 'data' }];
    const newState = dataReducer(undefined, {
      type: GET_DATA,
      payload: data,
    });
    expect(newState).toEqual(data);
  });
});
