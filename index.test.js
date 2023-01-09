const hideDBPassword = require(`./index.js`);

test('hide empty password', () => {
  expect(hideDBPassword('www.root&password= ')).toBe('www.root&password=');
});

describe('tests for hideDBPassword function' , () => {
  it('hide words', () => {
    expect(hideDBPassword('www.root&password=abcd')).toBe('www.root&password=****');
  })
  it('hide numbers', () => {
    expect(hideDBPassword('www.root&password=12345')).toBe('www.root&password=*****');
  })
  it('hide symbols', () => {
    expect(hideDBPassword('www.root&password=$^&#')).toBe('www.root&password=****');
  })
})