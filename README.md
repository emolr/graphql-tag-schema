# Graphql-tag Schema

`graphql-tag-schema` plugin prints the merged schema as graphql-tag in a `.ts` or `.js` to be used with eg. Apollo Client. If multiple schemas are provided, they will be merged and printed as one schema.

> The `.ts` or `.js` file exposes a JavaScript template literal tag that parses GraphQL query strings into the standard GraphQL AST. Make sure to have [graphql-tag](https://github.com/apollographql/graphql-tag) installed in the application you are using the output.

## Installation

```sh
$ yarn add -D graphql-tag-schema
```

## Examples

```yaml
# ...
schema:
  - 'http://localhost:3000/graphql'
  - './src/**/*.graphql'
generates:
  path/to/file.ts:
    plugins:
      - graphql-tag-schema
  path/to/file.js:
    plugins:
      - graphql-tag-schema
```

## Result

```typescript
import gql from 'graphql-tag'

export const schema = gql`
    type ExampleType {
        example: Boolean!
    }
`

export default schema

```

