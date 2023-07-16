import { TimestampStyles } from '../types/index';

export function escapeBold<C extends string>(content: C): string {
    return content.replace(/\*\*(.*?)\*\*/g, '\\*\\*$1\\*\\*');
}

export function escapeCodeBlock(content: string): string {
    return content.replace(/```([^`]+)```/g, '\\`\\`\\`$1\\`\\`\\`');
}

export function escapeInlineCode(content: string): string {
    return content.replace(/`([^`]+)`/g, '\\`$1\\`');
}

export function escapeItalic(content: string): string {
    return content.replace(/_([^_]+)_/g, '\\_$1\\_');
}

export function escapeMaskedLink(content: string): string {
    // eslint-disable-next-line no-useless-escape
    return content.replace(/\[([^\[\]]+)\]\(((?:[\w-]+:)?\/\/(?:[\w-]+\.)+[a-zA-Z]{2}(?::\d+)?(?:\/[^\s]*)?)\)/g, '\\[$1\\]\\($2\\)');
}

export function escapeNumberedList(content: string): string {
    return content.replace(/^(\d+\.\s)/gm, '\\$1');
}

export function escapeSpoiler(content: string): string {
    return content.replace(/\|\|([\s\S]+?)\|\|/g, '\\|\\|$1\\|\\|');
}

export function escapeStrikethrough(content: string): string {
    return content.replace(/~~([^~]+)~~/g, '\\~\\~$1\\~\\~');
}

export function escapeUnderline(content: string): string {
    return content.replace(/__(.*?)__/g, '\\__$1\\__');
}

export function formatTime<D extends Date, S extends TimestampStyles = TimestampStyles>(time: D, style?: S): S extends TimestampStyles ? `<t:${number}:${S}>` : `<t:${number}>` {
    return `<t:${time.getTime() / 1000}${style ? ':' + style : ''}>` as S extends TimestampStyles ? `<t:${number}:${S}>` : `<t:${number}>`;
}

export function escapeEscape(content: string): string {
    return content.replace(/\\/g, '\\\\');
}
export function escapeBulletedList(content: string): string {
    return content.replace(/^( *)[-+*] /gm, '$1\\$&');
}

export function escapeHeadings(content: string): string {
    return content.replace(/(#{1,6}) /gm, '\\$1 ');
}