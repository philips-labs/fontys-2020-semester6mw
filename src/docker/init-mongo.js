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

db = db.getSiblingDB('matches_db')
db.createUser(
    {
        user: 'matches_db_user',
        pwd: 'matches1234',
        roles: [{ role: 'readWrite', db: 'matches_db' }],
    },
);
db.createCollection('matches');

print('End ################################################################################')