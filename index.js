function say(type, anything) {
  return {
    string: () => `${anything}`,
    number: () => anything,
    any: () => anything,
    array: () => anything,
    object: () => anything,
    boolean: () => !!anything,
    null: () => null,
    undefined: () => undefined,
    func: () => (typeof anything === 'function' ? anything() : anything),
  }[type]?.() ?? anything;
}
