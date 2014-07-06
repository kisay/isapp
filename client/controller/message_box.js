Template.messageBox.helpers({
    currentChat: function(){
        return Conversations.findOne({_id:Session.get('currentContact')});
    },
    chatCount: function(){
        return  Conversations.findOne({_id:Session.get('currentContact')}).uids.count();
    }

});

Template.messageBox.events({
    'click #sendBtn': function(event){
        var content = $('#msgContent').val();
        if(!content){
            Session.set('notifier',{'error':1,'msg':'消息内容不能为空'});
            return;
        }
        $('#msgContent').val('');
        Session.set('temping','');
        return Conversations.update(Session.get('currentContact'),{"$push":{"messages":{sender:Meteor.user().username,senderId:Meteor.userId(),'pub_time':new Date().getTime(),'content':content}}});
    },
    'keypress #msgContent': function(event) {
        var msg = $('#msgContent').val();
        if (event.charCode == 10) {
            event.stopPropagation();
            $('#msgContent').val('');
            Session.set('typing','');
            return Conversations.update(this._id,{"$push":{"messages":{sender:Meteor.user().username,senderId:Meteor.userId(),'pub_time':new Date().getTime(),'content':msg}}});
        }else{
            Session.set('typing',msg);
        }
    },
});
