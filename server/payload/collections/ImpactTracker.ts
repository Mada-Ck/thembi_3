import { CollectionConfig } from 'payload';

export const ImpactTracker: CollectionConfig = {
  slug: 'impact-tracker',
  admin: {
    useAsTitle: 'programName',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'programName',
      type: 'text',
      required: true,
    },
    {
      name: 'beneficiaryCount',
      type: 'number',
      required: true,
      defaultValue: 0,
    },
    {
      name: 'description',
      type: 'textarea',
    },
  ],
};
