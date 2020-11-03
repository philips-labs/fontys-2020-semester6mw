db.createUser(
    {
        user: "ctadmin",
        pwd: "ctpassword123",
        roles: [
            {
                role: "readWrite",
                db: "ProfileDB"
            }
        ]
    }
)