import {
  MAIN_FILTER,
  nextCountries,
  nextElements,
  NEXT_ELEMENTS,
  setMainFilter,
  SET_COUNTRIES_TO_SHOW,
  showDetails,
  SHOW_DETAILS,
  sortList,
  SORT_LIST,
} from './dataReducer';

describe('Action creators', () => {
  test('nextElement()', () => {
    const data = ['a', 'b', 'c'];
    const action = nextElements(data);
    expect(action.type).toEqual(NEXT_ELEMENTS);
    expect(action.payload).toEqual(data);
  });

  test('nextCountries()', () => {
    const data = ['a', 'b', 'c'];
    const action = nextCountries(data);
    expect(action.type).toEqual(SET_COUNTRIES_TO_SHOW);
    expect(action.payload).toEqual(data);
  });

  test('setMainFilter()', () => {
    const data = ['a', 'b', 'c'];
    const action = setMainFilter(data);
    expect(action.type).toEqual(MAIN_FILTER);
    expect(action.payload).toEqual(data);
  });

  test('sortList()', () => {
    const data = ['a', 'b', 'c'];
    const action = sortList(data);
    expect(action.type).toEqual(SORT_LIST);
    expect(action.payload).toEqual(data);
  });

  test('showDetails()', () => {
    const data = ['a', 'b', 'c'];
    const action = showDetails(data);
    expect(action.type).toEqual(SHOW_DETAILS);
    expect(action.payload).toEqual(data);
  });
});
