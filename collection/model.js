//这里放server和client都用的collection

//会话
//{id:shf8923489,type:0, create_uid:123, uids:[1,2,3,4,5],messages:[{sender:uname,pub_time:20140101,content:'bla bla'}]}
Conversations = new Meteor.Collection('conversations');

//好友(以单个用户为单位)
//{uid:12345,friends:[{tag:'默认',fids:[1,2,3,4,5,6,7]}]}
Friends = new Meteor.Collection('friends');

//群组
//{gid:123,info:'sdfsdf',create_id, create_time:12313, notice:'通告',members:[1,23,444,343]}
Groups = new Meteor.Collection('groups');

//通知
Notifications = new Meteor.Collection('notifications');

