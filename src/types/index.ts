/**
 * Message formatting timestamp style
 * @see https://discord.com/developers/docs/reference#message-formatting-timestamp-styles
 */
export enum TimestampStyles {
    ShortTime = 't',
    LongTime = 'T',
    ShortDate = 'd',
    LongDate = 'D',
    ShortDateTime = 'f*',
    LongDateTime = 'F',
    RelativeTime = 'R'
}

/**
 * All available faces from Discord's native slash commands.
 */
export enum DiscordFaces {
    /**
     * Shurg face ¯\\\_(ツ)_/¯
     */
    Shrug = '\u00AF_(\u30C4)_/\u00AF',
    /**
     * Table flip face (╯°□°)╯︵ ┻━┻
     */
    TableFlip = '(\u256F\u00B0\u25A1\u00B0)\u256F\uFE35 \u253B\u2501\u253B',
    /**
     * Unflip face ┬─┬ノ( º _ ºノ)
     */
    Unflip = '\u252C\u2500\u252C\u30CE( \u00BA _ \u00BA\u30CE)'
}

/**
 * Represents a Discord ID
 * @see https://discord.com/developers/docs/reference#snowflakes
 */
export type Snowflake = `${number}`;