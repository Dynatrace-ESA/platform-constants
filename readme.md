### Dynatrace Platform Constants

This package exports a number of predefined Regex, constants, and Enums for the Dynatrace platform and API.

Usage:
```ts
import { dynatraceSaaSUrlRegex } from "@dt-esa/platform-constants";

const mySaaSUrl = "foo.bar.baz";

const isSaaSUrl = dynatraceSaaSUrlRegex.test(mySaaSUrl);
// -> false

```
