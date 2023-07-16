import { Snowflake } from '../types/index';

/**
 * Formats the content into a block quote.
 * 
 * @param {C} content - The content to format.
 * @returns {`>>> ${C}`} The formatted content.
 * @since 0.0.1
 */
export function blockQuote<C extends string>(content: C): `>>> ${C}` {
    return `>>> ${content}`;
}

/**
 * Formats the content into a bold text.
 * 
 * @param {C} content - The content to format.
 * @returns {`**${C}**`} - The formatted content.
 * @since 0.0.1
 */
export function bold<C extends string>(content: C): `**${C}**` {
    return `**${content}**`;
}

/**
 * Formats the channel Id for a direct message channel.
 * 
 * @param {C} channelId - The content to format.
 * @returns {`https://discord.com/channels/@me/${C}`} - The formatted content.
 * @since 0.0.1
 */
export function channelURL<C extends Snowflake>(channelId: C): `https://discord.com/channels/@me/${C}` {
    return `https://discord.com/channels/@me/${channelId}`;
}

/**
 * Formats a channel Id into a channel mention.
 * 
 * @param {C} channelId - The channel Id to use.
 * @returns {`<#${C}>`} - The formatted content.
 * @since 0.0.1
 */
export function channelMention<C extends Snowflake>(channelId: C): `<#${C}>` {
    return `<#${channelId}>`;
}

/**
 * Formats the content and tha language into a code block
 * 
 * @param {C} content - The content to format.
 * @param {L} language - The language to add (e.g. ts)
 * @returns {L extends string ? `\`\`\`${L}\n${C}\n\`\`\`` : `\`\`\`\n${C}\n\`\`\``} - The formatted content.
 * @since 0.0.1
 */
export function codeBlock<C extends string, L extends string>(content: C, language?: L): L extends string ? `\`\`\`${L}\n${C}\n\`\`\`` : `\`\`\`\n${C}\n\`\`\`` {
    return (language ? `\`\`\`${language}\n${content}\n\`\`\`` : `\`\`\`\n${content}\n\`\`\``) as L extends string ? `\`\`\`${L}\n${C}\n\`\`\`` : `\`\`\`\n${C}\n\`\`\``;
}

/**
 * Formats the emojiId into a emoji format.
 * 
 * @param {C} emojiId - The channel Id to use.
 * @param {A} animated - Whether the emoji is animated.
 * @returns {A extends true ? `<a:_:${C}>` : `<:_:${C}>`}
 */
export function formatEmoji<C extends Snowflake, A extends boolean = false>(emojiId: C, animated?: A): A extends true ? `<a:_:${C}>` : `<:_:${C}>` {
    return (animated ? `<a:_:${emojiId}` : `<:_:${emojiId}>`) as A extends true ? `<a:_:${C}>` : `<:_:${C}>`;
}

/**
 * Formats the url into a hiden url.
 * 
 * @param {C} url - The url to use.
 * @returns {`<${C}>`} - The formatted content.
 * @since 0.0.1
 */
export function hideLinkEmbed<C extends string>(url: C): `<${C}>` {
    return `<${url}>`;
}

/**
 * Formats the content and url into a hyperlink
 * 
 * @param {C} content - The content to use.
 * @param {U} url - The url to use.
 * @returns {`[${C}](${U})`} - The formatted content.
 * @since 0.0.1
 */
export function hyperlink<C extends string, U extends string>(content: C, url: U): `[${C}](${U})` {
    return `[${content}](${url})`;
}

/**
 * Wraps the content inside backticks which formats it as inline code.
 * 
 * @param {C} content - The content to use.
 * @returns {`\`${C}\``} - The formatted content.
 * @since 0.0.1
 */
export function inlineCode<C extends string>(content: C): `\`${C}\`` {
    return `\`${content}\``;
}

/**
 * Formats the content into a italic text.
 * 
 * @param {C} content - The content to use.
 * @returns {`_${C}_`} - The formatted content.
 * @since 0.0.1
 */
export function italic<C extends string>(content: C): `_${C}_` {
    return `_${content}_`;
}

/**
 * Formats the content into a quote.
 * 
 * @param {C} content - The content to use.
 * @returns {`> ${C}`} - The formatted content.
 * @since 0.0.1
 */
export function quote<C extends string>(content: C): `> ${C}` {
    return `> ${content}`;
}

/**
 * Formats the role Id into a role mention.
 * 
 * @param {I} roleId - The role Id.
 * @returns {`<@&${I}>`}
 * @since 0.0.1
 */
export function roleMention<I extends Snowflake>(roleId: I): `<@&${I}>` {
    return `<@&${roleId}>`;
}

/**
 * Formats the user Id into a user mention.
 * 
 * @param {I} userId - The user Id.
 * @returns {`<@${I}>`} - The formatted content.
 * @since 0.0.1
 */
export function userMention<I extends Snowflake>(userId: I): `<@${I}>` {
    return `<@${userId}>`;
}

/**
 * Formats the content into a spoiler text.
 * 
 * @param {C} content - The content to use.
 * @returns {`||${C}||`} - The formatted content.
 * @since 0.0.1
 */
export function spoiler<C extends string>(content: C): `||${C}||` {
    return `||${content}||`;
}

/**
 * Formats the content into a strikethrough text.
 * 
 * @param {C} content - The content to use.
 * @returns {`~~${C}~~`} - The formatted content.
 * @since 0.0.1
 */
export function strikethrough<C extends string>(content: C): `~~${C}~~` {
    return `~~${content}~~`;
}

/**
 * Formats the content into underlined text.
 * 
 * @param {C} content - The content to use.
 * @returns {`__${C}__`} - The formatted content.
 * @since 0.0.1
 */
export function underscore<C extends string>(content: C): `__${C}__` {
    return `__${content}__`;
}