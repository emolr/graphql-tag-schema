import { GraphQLSchema, printSchema } from 'graphql';
import { PluginFunction, PluginValidateFn, Types } from '@graphql-codegen/plugin-helpers';
import { extname } from 'path';

export const plugin: PluginFunction = async (schema: GraphQLSchema): Promise<string> => {
  return `
import gql from 'graphql-tag'

export const schema = gql\`
  ${printSchema(schema)}
\`

export default schema
`
};

export const validate: PluginValidateFn<any> = async (schema: GraphQLSchema, documents: Types.DocumentFile[], config: any, outputFile: string, allPlugins: Types.ConfiguredPlugin[]) => {
  const singlePlugin = allPlugins.length === 1;

  if (singlePlugin && !['.js', '.ts'].includes(extname(outputFile)) ) {
    throw new Error(`Plugin "graphql-tag-schema" requires extension to be ".ts" or ".js"!`);
  }
};
