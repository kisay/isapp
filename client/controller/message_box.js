Template.messageBox.helpers({
    currentChat: function(){
        return Conversations.findOne({});
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
        return Conversations.update(this._id,{"$push":{"messages":{sender:Meteor.user().username,senderId:Meteor.userId(),'pub_time':234242,'content':content}}});
    },
    'keypress #msgContent': function(event) {
        var msg = $('#msgContent').val();
        if (event.charCode == 10) {
            event.stopPropagation();
            $('#msgContent').val('');
            Session.set('typing','');
            return Conversations.update(this._id,{"$push":{"messages":{sender:Meteor.user().username,senderId:Meteor.userId(),'pub_time':234242,'content':msg}}});
        }else{
            Session.set('typing',msg);
        }
    },
});
