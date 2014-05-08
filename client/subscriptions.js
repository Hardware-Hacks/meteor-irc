Deps.autorun(function() {
  Meteor.subscribe('ircMessages', Session.get('ircChannel'), Session.get('ircLimit'));
});
Meteor.subscribe('ircChannels');
Meteor.subscribe('ircConnections');
