// @ts-check

/**
 * 프로젝트를 초기화합니다
 * @param {object} config
 * @param {boolean} config.debug
 * @param {string} config.url
 * @returns {boolean}
 */
export function init(config) {
  return true;
}

/**
 * 프로그램을 종료합니다
 * @param {number} code
 * @returns {number}
 */
export function exit(code) {
  return code + 1;
}
