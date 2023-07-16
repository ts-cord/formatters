import { TimestampStyles } from '../types/index';

/**
 * Escapes bold formatting in the given content.
 *
 * @param {string} content - The content to format.
 * @returns {string} - The escaped content.
 * @since 0.0.1
 */
export function escapeBold(content: string): string {
    return content.replace(/\*\*(.*?)\*\*/g, '\\*\\*$1\\*\\*');
}

/**
 * Escapes code block formatting in the given content.
 *
 * @param {string} content - The content to format.
 * @returns {string} - The escaped content.
 * @since 0.0.1
 */
export function escapeCodeBlock(content: string): string {
    return content.replace(/```([^`]+)```/g, '\\`\\`\\`$1\\`\\`\\`');
}

/**
 * Escapes inline code formatting in the given content.
 *
 * @param {string} content - The content to format.
 * @returns {string} - The escaped content.
 * @since 0.0.1
 */
export function escapeInlineCode(content: string): string {
    return content.replace(/`([^`]+)`/g, '\\`$1\\`');
}

/**
 * Escapes italic formatting in the given content.
 *
 * @param {string} content - The content to format.
 * @returns {string} - The escaped content.
 * @since 0.0.1
 */
export function escapeItalic(content: string): string {
    return content.replace(/_([^_]+)_/g, '\\_$1\\_');
}

/**
 * Escapes masked link formatting in the given content.
 *
 * @param {string} content - The content to format.
 * @returns {string} - The escaped content.
 * @since 0.0.1
 */
export function escapeMaskedLink(content: string): string {
    // eslint-disable-next-line no-useless-escape
    return content.replace(/\[([^\[\]]+)\]\(((?:[\w-]+:)?\/\/(?:[\w-]+\.)+[a-zA-Z]{2}(?::\d+)?(?:\/[^\s]*)?)\)/g, '\\[$1\\]\\($2\\)');
}

/**
 * Escapes number list formatting in the given content.
 *
 * @param {string} content - The content to format.
 * @returns {string} - The escaped content.
 * @since 0.0.1
 */
export function escapeNumberedList(content: string): string {
    return content.replace(/^(\d+\.\s)/gm, '\\$1');
}

/**
 * Escapes spoiler formatting in the given content.
 *
 * @param {string} content - The content to format.
 * @returns {string} - The escaped content.
 * @since 0.0.1
 */
export function escapeSpoiler(content: string): string {
    return content.replace(/\|\|([\s\S]+?)\|\|/g, '\\|\\|$1\\|\\|');
}

/**
 * Escapes strikethrough formatting in the given content.
 *
 * @param {string} content - The content to format.
 * @returns {string} - The escaped content.
 * @since 0.0.1
 */
export function escapeStrikethrough(content: string): string {
    return content.replace(/~~([^~]+)~~/g, '\\~\\~$1\\~\\~');
}

/**
 * Escapes underline formatting in the given content.
 *
 * @param {string} content - The content to format.
 * @returns {string} - The escaped content.
 * @since 0.0.1
 */
export function escapeUnderline(content: string): string {
    return content.replace(/__(.*?)__/g, '\\__$1\\__');
}

/**
 * Formats the given time as a timestamp string.
 *
 * @template D - The type of the time value.
 * @template S - The style of the timestamp.
 * @param {D} time - The time value to format.
 * @param {S} [style] - The timestamp style.
 * @returns {S extends TimestampStyles ? `<t:${number}:${S}>` : `<t:${number}>`} - The formatted timestamp.
 * @since 0.0.1
 */
export function formatTime<D extends Date, S extends TimestampStyles = TimestampStyles>(time: D, style?: S): S extends TimestampStyles ? `<t:${number}:${S}>` : `<t:${number}>` {
    return `<t:${time.getTime() / 1000}${style ? ':' + style : ''}>` as S extends TimestampStyles ? `<t:${number}:${S}>` : `<t:${number}>`;
}

/**
 * Escapes escape characters in the given content.
 *
 * @param {string} content - The content to format.
 * @returns {string} - The escaped content.
 * @since 0.0.1
 */
export function escapeEscape(content: string): string {
    return content.replace(/\\/g, '\\\\');
}

/**
 * Escapes bulleted list formatting in the given content.
 *
 * @param {string} content - The content to format.
 * @returns {string} - The escaped content.
 * @since 0.0.1
 */
export function escapeBulletedList(content: string): string {
    return content.replace(/^( *)[-+*] /gm, '$1\\$&');
}

/**
 * Escapes headings formatting in the given content.
 *
 * @param {string} content - The content to format.
 * @returns {string} - The escaped content.
 * @since 0.0.1
 */
export function escapeHeadings(content: string): string {
    return content.replace(/(#{1,6}) /gm, '\\$1 ');
}