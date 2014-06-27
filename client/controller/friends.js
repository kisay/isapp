Template.leftMenu.helpers({
    friendList: function(){
        return Friends.findOne({});
    }
});

Template.leftMenu.events({
    'click .friends-list':function(event){
        //创建或者打开会话
        var cid;
        var conversation = Conversations.findOne({"$and":[{uids:Meteor.userId()},{uids:this.fid}]});
        if(conversation){
            cid = conversation._id;
        }else{
            cid = Conversations.insert({uids:[this.fid,this.userId], type:0});
        }
        Session.set('currentContact',cid);
    }

});

