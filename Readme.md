
# lr5-stringgen

This package provides a simple utility function to generate random alphanumeric strings of a specified length, leveraging the `lodash` library.

## Installation

To install the package, use npm:

```bash
npm install lr5-stringgen
```

or yarn:

```bash
yarn add lr5-stringgen
```

## Usage

Import the `getRandomString` function and use it to generate a random string of your desired length.

### Example

```javascript
import { getRandomString } from 'lr5-stringgen';

const randomString = getRandomString(10);
console.log(randomString); // Example output: "aB3xZ9kPqT"
```

### Parameters

- `length` *(number)*: The desired length of the random string.

### Returns

- *(string)*: A random alphanumeric string of the specified length.

## Requirements

This package uses `lodash` as a dependency. Ensure that it is properly installed alongside the package.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
