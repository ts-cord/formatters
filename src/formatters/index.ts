import { Snowflake } from '../types/index';

export function blockQuote<C extends string>(content: C): `>>> ${C}` {
    return `>>> ${content}`;
}

export function bold<C extends string>(content: C): `**${C}**` {
    return `**${content}**`;
}

export function channelURL<C extends Snowflake>(channelId: C): `https://discord.com/channels/@me/${C}` {
    return `https://discord.com/channels/@me/${channelId}`;
}

export function channelMention<C extends Snowflake>(channelId: C): `<#${C}>` {
    return `<#${channelId}>`;
}

export function codeBlock<C extends string>(content: C): `\`\`\`\n${C}\n\`\`\`` {
    return `\`\`\`\n${content}\n\`\`\``;
}

export function formatEmoji<C extends Snowflake, A extends boolean = false>(emojiId: C, animated?: A): A extends true ? `<a:_:${C}>` : `<:_:${C}>` {
    return (animated ? `<a:_:${emojiId}` : `<:_:${emojiId}>`) as A extends true ? `<a:_:${C}>` : `<:_:${C}>`;
}

export function hideLinkEmbed<C extends string>(url: C): `<${C}>` {
    return `<${url}>`;
}

export function hyperlink<C extends string, U extends string>(content: C, url: U): `[${C}](${U})` {
    return `[${content}](${url})`;
}

export function inlineCode<C extends string>(content: C): `\`${C}\`` {
    return `\`${content}\``;
}

export function italic<C extends string>(content: C): `_${C}_` {
    return `_${content}_`;
}

export function quote<C extends string>(content: C): `> ${C}` {
    return `> ${content}`;
}

export function roleMention<I extends Snowflake>(roleId: I): `<@&${I}>` {
    return `<@&${roleId}>`;
}

export function userMention<I extends Snowflake>(userId: I): `<@${I}>` {
    return `<@${userId}>`;
}

export function spoiler<C extends string>(content: C): `||${C}||` {
    return `||${content}||`;
}

export function strikethrough<C extends string>(content: C): `~~${C}~~` {
    return `~~${content}~~`;
}

export function underscore<C extends string>(content: C): `__${C}__` {
    return `__${content}__`;
}