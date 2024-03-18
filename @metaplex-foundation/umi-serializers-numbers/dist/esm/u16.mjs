import { numberFactory } from './utils.mjs';

const u16 = (options = {}) => numberFactory({
  name: 'u16',
  size: 2,
  range: [0, Number('0xffff')],
  set: (view, value, le) => view.setUint16(0, Number(value), le),
  get: (view, le) => view.getUint16(0, le),
  options
});

export { u16 };
//# sourceMappingURL=u16.mjs.map
