/* eslint-disable */

import { getEnvironmentVariables } from 'helpers/env';

const { NODE_ENV } = getEnvironmentVariables();

const write = (
  backgroundColor: string,
  fontColor: string,
  text: any,
  ...args: any[]
): void => {
  if (NODE_ENV !== 'development') {
    return;
  }

  const consoleArgs: string[] = [
    ``,
    `background: ${'#c8c8ff'};`,
    `background: ${'#9696ff'};`,
    `color: ${fontColor}; background: ${backgroundColor};`,
    `background: ${'#9696ff'};`,
    `background: ${'#c8c8ff'};`,
  ];

  const isString: boolean = typeof text === 'string';

  !isString && args.unshift(text);

  consoleArgs[0] = `%c %c %c ${isString ? text : 'log'} %c %c`;

  if (args.length) {
    console.groupCollapsed(...consoleArgs);

    for (const arg of args) {
      console.log(arg);
    }

    console.groupEnd();
  } else {
    console.log(...consoleArgs);
  }

  return;
};

export const logDebug = (...args: any[]): void =>
  write('#0000ff', '#ffffff', args.shift(), ...args);
export const logCall = (...args: any[]): void =>
  write('#9e9e9e', '#ffffff', args.shift(), ...args);
export const logError = (...args: any[]): void =>
  write('#ff0000', '#ffffff', args.shift(), ...args);
export const logReject = (...args: any[]): void =>
  write('#8B0000', '#ffffff', args.shift(), ...args);
export const logResponse = (...args: any[]): void =>
  write('#308751', '#ffffff', args.shift(), ...args);
export const logWarning = (...args: any[]): void =>
  write('#FFA500', '#000000', args.shift(), ...args);
