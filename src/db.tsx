import Dexie, { type EntityTable } from 'dexie';

interface BackgroundSettings {
  id: string;
  colors: string[];
}

const db = new Dexie('LucidDatabase') as Dexie & {
  settings: EntityTable<BackgroundSettings, 'id'>;
};

// Schema declaration: 'id' is the primary key
db.version(1).stores({
  settings: 'id, colors'
});

export { db };