import { TimestampStyles } from './types/index';

//#region escapers

export function escapeBold(content: string): string;
export function escapeCodeBlock(content: string): string;
export function escapeInlineCode(content: string): string;
export function escapeItalic(content: string): string;
export function escapeMaskedLink(content: string): string;
export function escapeNumberedList(content: string): string;
export function escapeSpoiler(content: string): string;
export function escapeStrikethrough(content: string): string;
export function escapeUnderline(content: string): string;
export function formatTime<D extends Date, S extends TimestampStyles = TimestampStyles>(time: D, style?: S): S extends TimestampStyles ? `<t:${number}:${S}>` : `<t:${number}>`;
export function escapeEscape(content: string): string;
export function escapeBulletedList(content: string): string;
export function escapeHeadings(content: string): string;

//#endregion

//#region formatters

export function blockQuote<C extends string>(content: C): `>>> ${C}`;
export function bold<C extends string>(content: C): `**${C}**`;
export function channelURL<C extends Snowflake>(channelId: C): `https://discord.com/channels/@me/${C}`;
export function channelMention<C extends Snowflake>(channelId: C): `<#${C}>`;
export function codeBlock<C extends string, L extends string>(content: C, language?: L): L extends string ? `\`\`\`${L}\n${C}\n\`\`\`` : `\`\`\`\n${C}\n\`\`\``
export function formatEmoji<C extends Snowflake, A extends boolean = false>(emojiId: C, animated?: A): A extends true ? `<a:_:${C}>` : `<:_:${C}>`;
export function hideLinkEmbed<C extends string>(url: C): `<${C}>`;
export function hyperlink<C extends string, U extends string>(content: C, url: U): `[${C}](${U})`;
export function inlineCode<C extends string>(content: C): `\`${C}\``;
export function italic<C extends string>(content: C): `_${C}_`;
export function quote<C extends string>(content: C): `> ${C}`;
export function roleMention<I extends Snowflake>(roleId: I): `<@&${I}>`;
export function userMention<I extends Snowflake>(userId: I): `<@${I}>`;
export function spoiler<C extends string>(content: C): `||${C}||`;
export function strikethrough<C extends string>(content: C): `~~${C}~~`;
export function underscore<C extends string>(content: C): `__${C}__`;

//#endregion