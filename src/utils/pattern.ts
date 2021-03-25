//some thing about pattern
export const camelizePattern = /([a-z]?)-([a-z])/g;

/**
 * 中划线转驼峰
 * @param str
 * @returns
 */
export const camelize = (str: string) => {
  return str.replace(camelizePattern, function (r, $1, $2) {
    if ($1) {
      return $2 ? $1 + $2.toUpperCase() : '';
    } else {
      return $2;
    }
  });
};

/**
 * 驼峰转中划线
 * @param str
 * @returns
 */
export const strikethrough = (str: string) => {
  return str.replace(/\B([A-Z])/g, '-$1').toLowerCase();
};
