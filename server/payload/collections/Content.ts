import { CollectionConfig } from 'payload';

export const Stories: CollectionConfig = {
  slug: 'stories',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [
      async ({ doc, operation, req }) => {
        if (operation === 'create' || (operation === 'update' && doc._status === 'published')) {
          // Webhook trigger for Facebook automation
          const webhookUrl = process.env.FACEBOOK_WEBHOOK_URL;
          if (webhookUrl) {
            try {
              await fetch(webhookUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  title: doc.title,
                  image: doc.image,
                  link: `${process.env.FRONTEND_URL}/stories/${doc.id}`,
                  event: 'story_published',
                }),
              });
            } catch (error) {
              console.error('Failed to trigger Facebook webhook:', error);
            }
          }
        }
      },
    ],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'publishedDate',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'tags',
      type: 'select',
      hasMany: true,
      options: [
        { label: 'Thembi', value: 'Thembi' },
        { label: 'Health', value: 'Health' },
        { label: 'Education', value: 'Education' },
      ],
    },
  ],
};

export const Staff: CollectionConfig = {
  slug: 'staff',
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
      name: 'role',
      type: 'text',
      required: true,
    },
    {
      name: 'bio',
      type: 'textarea',
    },
    {
      name: 'photo',
      type: 'upload',
      relationTo: 'media',
    },
  ],
};

export const Media: CollectionConfig = {
  slug: 'media',
  upload: true,
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
    },
  ],
};
