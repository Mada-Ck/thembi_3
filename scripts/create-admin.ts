import 'dotenv/config';
import payload from 'payload';
import config from '../payload.config';

async function createAdmin() {
    console.log('Initializing Payload...');
    await payload.init({
        config,
    });

    const email = 'admin@thembi.org';
    const password = 'AdminPassword2026!';

    console.log(`Checking if user ${email} exists...`);

    const existingUsers = await payload.find({
        collection: 'users',
        where: {
            email: {
                equals: email,
            },
        },
    });

    if (existingUsers.totalDocs > 0) {
        console.log('Admin user already exists.');
        process.exit(0);
    }

    console.log('Creating admin user...');
    await payload.create({
        collection: 'users',
        data: {
            email,
            password,
            role: 'admin',
        },
    });

    console.log('-----------------------------------------');
    console.log('Admin user created successfully!');
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
    console.log('-----------------------------------------');

    process.exit(0);
}

createAdmin().catch((err) => {
    console.error('Error creating admin:', err);
    process.exit(1);
});
