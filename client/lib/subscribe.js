//订阅发布的资源

//会话
Meteor.autorun(function(){
    Meteor.subscribe('conversations', Session.get('currentContact'));
});

//朋友
Meteor.subscribe('friends');

//群组
Meteor.subscribe('groups');

//通知
Meteor.subscribe('notifications');

Meteor.subscribe('allusers');
