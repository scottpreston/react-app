export const MyActions = {
  INIT: 'INIT',
  DO_IT: 'DO_IT'
};

export function initAction(init) {
  return { type: MyActions.INIT, init };
};

export function doItAction(obj) {
  return { type: MyActions.DO_IT, obj }
};