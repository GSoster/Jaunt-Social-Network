Accounts.onCreateUser(function (options, user) {
    user['profile'] = options.profile;
    user['totalPoints'] = 0;
    user['commentPoints'] = 0;
    user['postPoints'] = 0;
    user['achievements'] = [];
    user['challenges'] = [];
    return user;
});
