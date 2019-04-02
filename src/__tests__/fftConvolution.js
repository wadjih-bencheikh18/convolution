import { fftConvolution } from '..';

describe('fft convolution', () => {
  it('fft with one value kernel', () => {
    expect(fftConvolution([0, 1, 2, 3], [0])).toStrictEqual([0, 0, 0, 0]);
    expect(fftConvolution([0, 1, 2, 3], [1])).toStrictEqual([0, 1, 2, 3]);
    expect(fftConvolution([0, 1, 2, 3], [2])).toStrictEqual([0, 2, 4, 6]);
  });

  // eslint-disable-next-line jest/expect-expect
  it('fft with three values kernel', () => {
    checkClose(fftConvolution([0, 1, 2, 3], [1, 1, 1]), [0, 1, 3, 6, 5, 3]);
    checkClose(fftConvolution([0, 1, 2, 3], [-1, 1, -1]), [0, -1, -1, -2, 1, -3]);
  });
});

function checkClose(result, expected) {
  for (let i = 0; i < result.length; i++) {
    expect(result[i]).toBeCloseTo(expected[i], Number.EPSILON);
  }
}
