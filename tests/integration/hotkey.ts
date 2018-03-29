const { suite, test } = intern.getPlugin('interface.tdd');
// const { assert } = intern.getPlugin('chai');

export default suite('hotkey', () => {
  test('Test 1', tst => {
    return tst.remote
      .get('http://localhost:9000/tests/data/frame.html')
      .pressKeys('');
  });
});
