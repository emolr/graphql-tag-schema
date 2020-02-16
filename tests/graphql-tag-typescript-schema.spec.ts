import { validate } from '../src/index';
import { Types } from '@graphql-codegen/plugin-helpers';

const SHOULD_THROW_ERROR = 'SHOULD_THROW_ERROR';

describe('Schema AST', () => {
  describe('Validation', () => {
    it('Should enforce graphql extension when its the only plugin', async () => {
      const fileName = 'output.graphql';
      const plugins: Types.ConfiguredPlugin[] = [
        {
          'graphql-tag-schema': {},
        },
      ];

      try {
        await validate(null, null, null, fileName, plugins);

        throw new Error(SHOULD_THROW_ERROR);
      } catch (e) {
        expect(e.message).not.toBe(SHOULD_THROW_ERROR);
        expect(e.message).toBe('Plugin "graphql-tag-schema" requires extension to be ".ts" or ".js"!');
      }
    });

    it('Should not enforce graphql extension when its not the only plugin', async () => {
      const fileName = 'output.ts';
      const plugins: Types.ConfiguredPlugin[] = [
        {
          add: {},
        },
        {
          'graphql-tag-schema': {},
        },
      ];

      try {
        await validate(null, null, null, fileName, plugins);
      } catch (e) {
        expect(true).toBeFalsy();
      }
    });
  });
});
