/*this file is used to configure and manage third party services (facebook) like to  make sure that there are not duplicated accounts*/
ServiceConfiguration.configurations.remove({});
ServiceConfiguration.configurations.insert({
    service: 'facebook',
    appId: 'id',
    secret: 'secret'
});