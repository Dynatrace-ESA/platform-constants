"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dynatraceV2TokenFormatRegex = exports.dynatraceV1TokenFormatRegex = exports.dynatraceTokenRegex = exports.dynatraceSaaSUrlRegex = exports.dynatraceUrlRegex = void 0;
/**
 * Assert if a string is a Dynatras SaaS url, Managed URL, or ActiveGate URL (incl. localhost).
 */
exports.dynatraceUrlRegex = /^(https?:\/\/)?([a-z]{3}[0-9]{5}\.(sprint|live|dev)\.(dynatrace|dynatracelabs)\.com|.+?\/e\/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}|(127\.0\.0\.1|localhost|\[::1\]|.+?):9999\/e\/([a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}|[a-z]{3}\d{5}))\/?$/;
/**
 * Assert if a string is a Dynatrace SaaS url.
 */
exports.dynatraceSaaSUrlRegex = /^(https?:\/\/)?[a-z]{3}[0-9]{5}\.(sprint|live|dev)\.(dynatrace|dynatracelabs)\.com\/?$/;
/**
 * Assert if a string is either a V1 or V2 API token format.
 */
exports.dynatraceTokenRegex = /^([A-Za-z0-9-_]{21}|dt\d\w\d{2}\.[A-Z\d]{24}\.[A-Z\d]{64})$/;
/**
 * Assert if a string matches the Dynatrace V2 Token format.
 *  - <...>21
 */
exports.dynatraceV1TokenFormatRegex = /^dt\d\w\d{2}\.[A-Z\d]{24}\.[A-Z\d]{64}$/;
/**
 * Assert if a string matches the Dynatrace V2 Token format.
 *  - dt0c01.<...>24.<...>64
 */
exports.dynatraceV2TokenFormatRegex = /^dt\d\w\d{2}\.[A-Z\d]{24}\.[A-Z\d]{64}$/;
