/**
 * Check whether the given input is a Javascript Object Literal
 * @param {unknown} variable Any value
 * @returns {Boolean}
 */
export const isObject = (variable: unknown) =>
  typeof variable === 'object' && !Array.isArray(variable) && variable !== null;
