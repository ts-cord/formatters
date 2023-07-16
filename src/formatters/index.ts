import { Snowflake } from '../types';

export const blockQuote = <C extends string>(content: C): `>>> ${C}` => {
    return `>>> ${content}`;
};

export const bold = <C extends string>(content: C): `**${C}**` => {
    return `**${content}**`;
};

export const channelURL = <C extends Snowflake>(channelId: C): `https://discord.com/channels/@me/${C}` => {
    return `https://discord.com/channels/@me/${channelId}`;
};

export const channelMention = <C extends Snowflake>(channelId: C): `<#${C}>` => {
    return `<#${channelId}>`;
};

export const codeBlock = <C extends string>(content: C): `\`\`\`\n${C}\n\`\`\`` => {
    return `\`\`\`\n${content}\n\`\`\``;
};

export const formatEmoji = <C extends Snowflake, A extends boolean = false>(emojiId: C, animated?: A): A extends true ? `<a:_:${C}>` : `<:_:${C}>` => {
    return (animated ? `<a:_:${emojiId}` : `<:_:${emojiId}>`) as A extends true ? `<a:_:${C}>` : `<:_:${C}>`;
};

export const hideLinkEmbed = <C extends string>(url: C): `<${C}>` => {
    return `<${url}>`;
};

export const hyperlink = <C extends string, U extends string>(content: C, url: U): `[${C}](${U})` => {
    return `[${content}](${url})`;
};

export const inlineCode = <C extends string>(content: C): `\`${C}\`` => {
    return `\`${content}\``;
};

export const italic = <C extends string>(content: C): `_${C}_` => {
    return `_${content}_`;
};

export const quote = <C extends string>(content: C): `> ${C}` => {
    return `> ${content}`;
};

export const roleMention = <I extends Snowflake>(roleId: I): `<@&${I}>` => {
    return `<@&${roleId}>`;
};

export const userMention = <I extends Snowflake>(userId: I): `<@${I}>` => {
    return `<@${userId}>`;
};

export const spoiler = <C extends string>(content: C): `||${C}||` => {
    return `||${content}||`;
};

export const strikethrough = <C extends string>(content: C): `~~${C}~~` => {
    return `~~${content}~~`;
};

export const underscore = <C extends string>(content: C): `__${C}__` => {
    return `__${content}__`;
};
