import { TimestampStyles } from '../types';

export const escapeBold = <C extends string>(content: C): string => {
    return content.replace(/\*\*(.*?)\*\*/g, '\\*\\*$1\\*\\*');
};

export const escapeCodeBlock = (content: string): string => {
    return content.replace(/```([^`]+)```/g, '\\`\\`\\`$1\\`\\`\\`');
};

export const escapeInlineCode = (content: string): string => {
    return content.replace(/`([^`]+)`/g, '\\`$1\\`');
};

export const escapeItalic = (content: string): string => {
    return content.replace(/_([^_]+)_/g, '\\_$1\\_');
};

export const escapeMaskedLink = (content: string): string => {
    // eslint-disable-next-line no-useless-escape
    return content.replace(/\[([^\[\]]+)\]\(((?:[\w-]+:)?\/\/(?:[\w-]+\.)+[a-zA-Z]{2}(?::\d+)?(?:\/[^\s]*)?)\)/g, '\\[$1\\]\\($2\\)');
};

export const escapeNumberedList = (content: string): string => {
    return content.replace(/^(\d+\.\s)/gm, '\\$1');
};

export const escapeSpoiler = (content: string): string => {
    return content.replace(/\|\|([\s\S]+?)\|\|/g, '\\|\\|$1\\|\\|');
};

export const escapeStrikethrough = (content: string): string => {
    return content.replace(/~~([^~]+)~~/g, '\\~\\~$1\\~\\~');
};

export const escapeUnderline = (content: string): string => {
    return content.replace(/__(.*?)__/g, '\\__$1\\__');
};

export const formatTime = <D extends Date, S extends TimestampStyles = TimestampStyles>(time: D, style?: S): S extends TimestampStyles ? `<t:${number}:${S}>` : `<t:${number}>` => {
    return `<t:${time.getTime() / 1000}${style ? ':' + style : ''}>` as S extends TimestampStyles ? `<t:${number}:${S}>` : `<t:${number}>`;
};

export const escapeEscape = (content: string): string => {
    return content.replace(/\\/g, '\\\\');
};
export const escapeBulletedList = (content: string): string => {
    return content.replace(/^( *)[-+*] /gm, '$1\\$&');
};

export const escapeHeadings = (content: string): string => {
    return content.replace(/(#{1,6}) /gm, '\\$1 ');
};