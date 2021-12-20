

/**
 * Assert if a string is a Dynatras SaaS url, Managed URL, or ActiveGate URL (incl. localhost).
 */
export const dynatraceUrlRegex = /^(https?:\/\/)?([a-z]{3}[0-9]{5}\.(sprint|live|dev)\.(dynatrace|dynatracelabs)\.com|.+?\/e\/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}|(127\.0\.0\.1|localhost|\[::1\]|.+?):9999\/e\/([a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}|[a-z]{3}\d{5}))\/?$/;

/**
 * Assert if a string is a Dynatrace SaaS url.
 */
export const dynatraceSaaSUrlRegex = /^(https?:\/\/)?[a-z]{3}[0-9]{5}\.(sprint|live|dev)\.(dynatrace|dynatracelabs)\.com\/?$/;

/**
 * Assert if a string is either a V1 or V2 API token format.
 */
export const dynatraceTokenRegex = /^([A-Za-z0-9-_]{21}|dt\d\w\d{2}\.[A-Z\d]{24}\.[A-Z\d]{64})$/;

/**
 * Assert if a string matches the Dynatrace V2 Token format.
 *  - <...>21
 */
export const dynatraceV1TokenFormatRegex = /^dt\d\w\d{2}\.[A-Z\d]{24}\.[A-Z\d]{64}$/;

/**
 * Assert if a string matches the Dynatrace V2 Token format.
 *  - dt0c01.<...>24.<...>64
 */
export const dynatraceV2TokenFormatRegex = /^dt\d\w\d{2}\.[A-Z\d]{24}\.[A-Z\d]{64}$/;

