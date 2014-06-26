//资源发布

Meteor.publish('conversations', function(user_id,conversation_id){
    //return Conversations.find({_id:conversation_id, 'uids':user_id});
    return Conversations.find({});
});

Meteor.publish('friends', function(uid){
    return Friends.find({});
});


//通知
//Meteor.publish('notifications', function(userid){
//    return Notifications.find({rec_uid:id},{sort: {sendtime: -1}, limit:10});
//})
