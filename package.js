Package.describe({
  summary: 'An IRC API specifically designed for use with Meteor'
});

Package.on_use(function (api) {
  api.use('standard-app-packages', ['client', 'server']);
  api.add_files('lib/collections.js', ['client','server']);
  api.add_files([
    'server/irc.js'
    ], 'server');
  api.export('IRC', 'server');
  api.export([
    'IRCMessages',
    'IRCChannels',
    'IRCConnections',
    'IRCLinks'
    ], ['server','client']);
});