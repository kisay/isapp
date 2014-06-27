//资源发布

Meteor.publish('conversations', function(conversation_id){
   // return Conversations.find({_id:conversation_id, 'uids':this.userId});
    return Conversations.find({});
});

Meteor.publish('friends', function(){
    return Friends.find({uid:this.userId});
});

//指定用户名查询
Meteor.publish('allusers', function(){
    return Meteor.users.find({},{_id:1,username:1})
})

//通知
//Meteor.publish('notifications', function(userid){
//    return Notifications.find({rec_uid:id},{sort: {sendtime: -1}, limit:10});
//})
