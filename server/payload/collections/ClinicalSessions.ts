import { CollectionConfig } from 'payload';

export const ClinicalSessions: CollectionConfig = {
  slug: 'clinical-sessions',
  admin: {
    useAsTitle: 'id',
  },
  fields: [
    {
      name: 'facility',
      type: 'relationship',
      relationTo: 'facilities',
      required: true,
    },
    {
      name: 'date',
      type: 'date',
      required: true,
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
        },
      },
    },
    {
      name: 'ageCohort',
      type: 'select',
      required: true,
      options: [
        { label: '0-9', value: '0-9' },
        { label: '10-14', value: '10-14' },
        { label: '15-19', value: '15-19' },
        { label: '20-24', value: '20-24' },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'booked',
          type: 'number',
          required: true,
          defaultValue: 0,
        },
        {
          name: 'attended',
          type: 'number',
          required: true,
          defaultValue: 0,
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'newEntrants',
          type: 'number',
          required: true,
          defaultValue: 0,
        },
        {
          name: 'vlSamplesCollected',
          type: 'number',
          required: true,
          defaultValue: 0,
        },
        {
          name: 'vlResultsSuppressed',
          type: 'number',
          required: true,
          defaultValue: 0,
        },
      ],
    },
    {
      name: 'retentionRate',
      type: 'number',
      admin: {
        readOnly: true,
        description: 'Calculated as (Attended / Booked) * 100',
      },
      hooks: {
        beforeValidate: [
          ({ data }) => {
            if (data?.booked && data?.attended) {
              return (data.attended / data.booked) * 100;
            }
            return 0;
          },
        ],
      },
    },
    {
      name: 'suppressionPercentage',
      type: 'number',
      admin: {
        readOnly: true,
        description: 'Calculated as (VL Results Suppressed / VL Samples Collected) * 100',
      },
      hooks: {
        beforeValidate: [
          ({ data }) => {
            if (data?.vlSamplesCollected && data?.vlResultsSuppressed) {
              return (data.vlResultsSuppressed / data.vlSamplesCollected) * 100;
            }
            return 0;
          },
        ],
      },
    },
  ],
};
