import { version as _version } from '../package.json';

/**
 * The [@ts-cord/formatters](https://www.npmjs.com/package/@ts-cord/formatters) version that you are currently using.
 */
export const version: string = _version;

export * from './escapers/index';
export * from './formatters/index';
export { DiscordFaces, TimestampStyles } from './types';