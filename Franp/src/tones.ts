/**
 * The color tokens that can back a tinted surface.
 *
 * Adding a color takes three coordinated edits, all of them required:
 *   1. `--<name>` custom property in index.css
 *   2. `.tone-<name> { background-color: var(--<name>); }` in index.css
 *   3. the name in this union
 *
 * Miss (1) or (2) and the surface renders transparent with no error; miss (3)
 * and TypeScript rejects the usage.
 */
export type Tone =
  | 'ink'
  | 'brick'
  | 'ochre'
  | 'sky'
  | 'caracol'
  | 'terraverte'
  | 'cinnabar'
