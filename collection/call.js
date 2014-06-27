//好友(以单个用户为单位)
//{uid:12345,friends:[{tag:'默认',fids:[1,2,3,4,5,6,7]}]}

Meteor.methods({
    addFriends: function(uid){
        var friend = Friends.findOne({uid:this.userId});
        if(friend){
            //Friends.update({uid:this.userId},{"$addToSet":{friends:{fid:uid}}},{ upsert: true });
            Friends.update({_id:friend._id},{"$addToSet":{friends:{fid:uid}}},{ upsert: true });
        }else{
            //好友列表为空
            Friends.insert({uid:this.userId, friends:[{fid:uid}]});
        }
   },
    searchFriends: function(username){
        var res = Meteor.users.find({username:username});
    }
});

