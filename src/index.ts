

/**
 * Assert if a string is a Dynatras SaaS url, Managed URL, or ActiveGate URL (incl. localhost).
 *  - https://abc012345.live.dynatrace.com/
 */
export const dynatraceUrlRegex = /^(?<protocol>https?:\/\/)?(?<saasTenantId>[a-z]{3}[0-9]{5}\.(?<saasStage>sprint|live|dev)\.(?<saasDomain>dynatrace|dynatracelabs)\.com|.+?\/e\/(?<managedTenantId>[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12})|(127\.0\.0\.1|localhost|\[::1\]|.+?):9999\/e\/(?<activeGateTenantId>[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}|[a-z]{3}\d{5}))\/?$/;

/**
 * Assert if a string is a Dynatrace SaaS url.
 *  - https://abc012345.live.dynatrace.com/
 * 
 * Groups: 
 * | Index | Item |
 * | ---   | ---  |
 * | 1 | Protocol |
 * | 2 | Tenant Id |
 * | 3 | Stage  |
 * | 4 | Domain |
 */
export const dynatraceSaaSUrlRegex = /^(?<protocol>https?:\/\/)(?<tenantId>[[a-z]{3}[0-9]{5})\.(?<saasStage>sprint|live|dev)\.(?<saasDomain>dynatrace|dynatracelabs)\.com\/?$/;

/**
 * Assert if a string is a Dynatrace SaaS host.
 *  - https://abc012345.live.dynatrace.com/
 * 
 * Groups: 
 * | Index | Item |
 * | ---   | ---  |
 * | 1 | Tenant Id |
 * | 2 | Stage  |
 * | 3 | Domain |
 */
export const dynatraceSaaSHostRegex = /^(?<tenantId>[a-z]{3}[0-9]{5})\.(?<saasStage>sprint|live|dev)\.(?<saasDomain>dynatrace|dynatracelabs)\.com\/?$/;

/**
 * Assert if a string is either a V1 or V2 API token format.
 * 
 * Groups (V2 format only): 
 * | Index | Item | Description |
 * | ---   | ---  | --- |
 * | 1 | Unique Prefix | Unique prefix identifying a Dynatrace API token |
 * | 2 | Public Portion of token | This is a 24-character public identifier of the token. This value can be safely displayed in the UI and can be used for logging purposes. |
 * | 3 | Secret Portion of token | This is a 64-character secret portion of the token, which can be treated like a password and therefore doesn’t need to be displayed in the Dynatrace web UI (following initial creation) or stored in log files. |
 */
export const dynatraceTokenRegex = /^(?<v1Token>[A-Za-z0-9-_]{21})$|^(?<v2Prefix>dt\d\w\d{2})\.(?<v2Public>[A-Z\d]{24})\.(?<v2Private>[A-Z\d]{64})$/;

/**
 * Assert if a string matches the Dynatrace V1 Token format.
 *  - <...>21
 * 
 * @deprecated The V1 token format is deprecated. Thus newly created tokens will _never_ have this format.
 * https://www.dynatrace.com/news/blog/further-enhance-security-by-easily-automating-your-api-token-protection/ 
 */
export const dynatraceV1TokenFormatRegex = /^[a-zA-Z0-9\-_]{21}$/;

/**
 * Assert if a string matches the Dynatrace V2 Token format.
 *  - dt0c01.<...>24.<...>64
 * 
 * Groups: 
 * | Index | Item | Description |
 * | ---   | ---  | --- |
 * | 1 | Unique Prefix | Unique prefix identifying a Dynatrace API token |
 * | 2 | Public Portion of token | This is a 24-character public identifier of the token. This value can be safely displayed in the UI and can be used for logging purposes. |
 * | 3 | Secret Portion of token | This is a 64-character secret portion of the token, which can be treated like a password and therefore doesn’t need to be displayed in the Dynatrace web UI (following initial creation) or stored in log files. |
 */
export const dynatraceV2TokenFormatRegex = /^(?<v2Prefix>dt\d\w\d{2})\.(?<v2Public>[A-Z\d]{24})\.(?<v2Private>[A-Z\d]{64})$/;

