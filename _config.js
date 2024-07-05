var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://maubinehemiah:kemmy1998@gallery.wc344.mongodb.net/darkroom?retryWrites=true&w=majority',
    development: 'mongodb+srv://maubinehemiah:kemmy1998@gallery.wc344.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
    test: 'mongodb+srv://maubinehemiah:kemmy1998@gallery.wc344.mongodb.net/darkroom-test?retryWrites=true&w=majority',
}
module.exports = config;
module.exports = {
    mongoURI: 'mongodb+srv://<USERNAME>:<PASSWORD>@cluster0.mongodb.net/<DBNAME>?retryWrites=true&w=majority',
    secretOrKey: 'secret'
};
