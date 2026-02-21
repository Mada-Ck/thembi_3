import { CollectionConfig } from 'payload';

export const Districts: CollectionConfig = {
  slug: 'districts',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      unique: true,
    },
  ],
};

export const TAs: CollectionConfig = {
  slug: 'tas',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'district',
      type: 'relationship',
      relationTo: 'districts',
      required: true,
    },
  ],
};

export const Facilities: CollectionConfig = {
  slug: 'facilities',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'ta',
      type: 'relationship',
      relationTo: 'tas',
      required: true,
    },
  ],
};
