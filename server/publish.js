//资源发布

Meteor.publish('conversations', function(userid){
    return Conversations.find({});
});

Meteor.publish('friends', function(userid){
    return Friends.find({});
});
