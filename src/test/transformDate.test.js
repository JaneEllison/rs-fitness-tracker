import transformDate from '../utils/transformDate';
import 'jest-extended';

describe('Transform date function:', () => {
  let date;
  beforeEach(() => {
    date = new Date();
  });

  jest.useFakeTimers();

  function doAsync(c) {
    setTimeout(() => {
      c(true);
    }, 1000);
  }

  it('should be defined', () => {
    expect(transformDate(date)).toBeDefined();
    expect(date).toBeDefined();
    expect(date).toBeDate();
  });

  it('should be run a time', () => {
    function callback1(date) {
      expect(transformDate(date)).toBeTruthy();
    }

    doAsync(callback1);
    jest.runAllTimers();
  });

  it('should be transform date', () => {
    const time = new Date();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const result = `${hours < 10 ? `0${hours}` : hours}:${
      minutes < 10 ? `0${minutes}` : minutes
    }`;
    expect(transformDate(date)).toBe(result);
  });
});
