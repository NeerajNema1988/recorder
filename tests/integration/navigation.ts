const { suite, test } = intern.getPlugin('interface.tdd');

// Uncomment the line below to use chai's 'assert' interface.
// const { assert } = intern.getPlugin('chai');

// Export the suite to ensure that it's built as a module rather
// than a simple script.
export default suite('navigation', () => {
  test('Test 1', tst => {
    return tst.remote
      .get('http://localhost:9000/tests/data/elements.html')
      .findByXpath('id("b2")')
        .moveMouseTo(5, 11)
        .clickMouseButton(0)
        .end()
      .refresh()
      .get('http://localhost:9000/tests/data/frame.html')
      .get('http://localhost:9000/tests/data/frame.html#test')
      .get('http://localhost:9000/tests/data/elements.html');
  });
});
