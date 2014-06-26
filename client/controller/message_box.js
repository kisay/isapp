Template.messageBox.helpers({
    currentChat: function(){
        return Conversations.findOne(Session.get('current_conversation'));

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
        return Conversations.update(this._id,{"$push":{"messages":{sender:Meteor.user().emails[0].address,'pub_time':234242,'content':content}}});
    }

});
