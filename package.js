Package.describe({
  summary: 'An IRC API specifically designed for use with Meteor'
});

Package.on_use(function (api) {
  api.add_files(['client/subscriptions.js', 'client/defaults.js'], 'client');
  api.add_files('lib/collections.js', ['client','server']);
  api.add_files([
    'server/irc.js'
    ,'server/publications.js'
    ,'server/security.js'
    ], 'server');
  api.export('IRC', 'server');
  api.export([
    ,'IRCMessages'
    ,'IRCChannels'
    ], ['server','client']);
});