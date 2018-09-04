const report = (data) => {};

let reporter = {
  test() {
    report({ event: 'test_click' });
  }
};

export default reporter;
