Meteor.subscribe('ircMessages', Session.get('channel'), Session.get('limit'));
Meteor.subscribe('ircChannels');
