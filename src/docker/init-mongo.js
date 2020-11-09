print('Start ################################################################################')

db = db.getSiblingDB('profile_db')
db.createUser(
    {
        user: 'profile_db_user',
        pwd: 'profile1234',
        roles: [{ role: 'readWrite', db: 'profile_db' }],
    },
);
db.createCollection('users');

print('End ################################################################################')