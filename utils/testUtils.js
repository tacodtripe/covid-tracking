const findByTestAtr = (component, atr) => {
  const wrapper = component.find(`[data-test='${atr}']`);
  return wrapper;
};

export default findByTestAtr;
