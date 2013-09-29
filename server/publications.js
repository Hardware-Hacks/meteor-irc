Meteor.publish('ircMessages', function(channel, limit) {
  console.log(channel, limit);
  var count = IRCMessages.find({channel: channel}).count();
  var boundary = 0;

  //calculate boundary, the messages we pull from the end of the collection
  if(count > limit) {
    boundary = count-limit;
  }
  return IRCMessages.find({channel: channel}, {sort: {date_time: 1}, skip: boundary});
});

Meteor.publish('ircChannels', function() {
  return IRCChannels.find({});
});