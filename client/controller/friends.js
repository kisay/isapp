Template.leftMenu.helpers({
    friendList: function(){
        return Friends.findOne({});
    }
});

Template.leftMenu.events({
    'click .friends-list':function(event){
        //创建或者打开会话
        var cid;
        var userId = Meteor.userId();
        var conversation = Conversations.findOne({"$and":[{uids:userId},{uids:this.fid}]});
        if(conversation){
            cid = conversation._id;
        }else{
            cid = Conversations.insert({uids:[this.fid,userId], type:0});
        }
        Session.set('currentContact',cid);
    }

});

