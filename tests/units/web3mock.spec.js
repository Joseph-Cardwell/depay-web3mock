import { Web3Mock } from '../../src'

describe('Web3Mock', () => {
  
  it('should be a defined function', () => {

    expect(typeof(Web3Mock)).toBe('function');

  });

  it('does not change existing values in the passed window object', () => {

    let window = { someVar: 1, ethereum: { existedAlready: 1 } }

    Web3Mock({ window, mocks: ['ethereum'] });

    expect(window.someVar).toEqual(1)

    expect(window.ethereum.existedAlready).toEqual(1)

  });

  it('fails if no mock has been defined', () => {

    expect(() => {
      Web3Mock({ mocks: [] });
    }).toThrow('Web3Mock: No mocks defined!');

    expect(() => {
      Web3Mock({ mocks: undefined });
    }).toThrow('Web3Mock: No mocks defined!');

  });

  it('fails if mock has wrong type', () => {

    expect(() => {
      Web3Mock({ mocks: [1] });
    }).toThrow('Web3Mock: Unknown mock configuration type!');

  });

  it('fails if mock is empty', () => {

    expect(() => {
      Web3Mock({ mocks: [{}] });
    }).toThrow('Web3Mock: Mock configurations are empty!');

  });

  it('fails if the mocked blockchain has not been found', () => {

    expect(() => {
      Web3Mock({ mocks: ['nonexistingblockchain'] });
    }).toThrow('Web3Mock: Unknown blockchain!');

  });

  it('takes jest "global" automatically if there is no window but a global', () => {

    Web3Mock({ mocks: ['ethereum'] });

  });
});
