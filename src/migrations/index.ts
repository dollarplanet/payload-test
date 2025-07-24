import * as migration_20250724_161720 from './20250724_161720';

export const migrations = [
  {
    up: migration_20250724_161720.up,
    down: migration_20250724_161720.down,
    name: '20250724_161720'
  },
];
