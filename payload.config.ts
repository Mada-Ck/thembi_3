import { buildConfig } from 'payload';
import { postgresAdapter } from '@payloadcms/db-postgres';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import path from 'path';
import { fileURLToPath } from 'url';

import { Districts, TAs, Facilities } from './server/payload/collections/Geography';
import { ClinicalSessions } from './server/payload/collections/ClinicalSessions';
import { Stories, Staff, Media } from './server/payload/collections/Content';
import { ImpactTracker } from './server/payload/collections/ImpactTracker';
import { HeroSlideshow } from './server/payload/globals/HeroSlideshow';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  cors: [process.env.FRONTEND_URL || 'http://localhost:5173'].filter(Boolean),
  csrf: [process.env.FRONTEND_URL || 'http://localhost:5173'].filter(Boolean),
  admin: {
    user: 'users',
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    {
      slug: 'users',
      auth: true,
      admin: {
        useAsTitle: 'email',
      },
      fields: [
        {
          name: 'role',
          type: 'select',
          required: true,
          defaultValue: 'user',
          options: [
            { label: 'Admin', value: 'admin' },
            { label: 'Health Personnel', value: 'health-personnel' },
            { label: 'User', value: 'user' },
          ],
        },
      ],
    },
    Districts,
    TAs,
    Facilities,
    ClinicalSessions,
    Stories,
    Staff,
    Media,
    ImpactTracker,
  ],
  globals: [HeroSlideshow],
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET || 'YOUR_SECRET_HERE',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    push: false,
    pool: {
      connectionString: process.env.DATABASE_URL || 'postgres://localhost:5432/thembi',
    },
  }),
});
