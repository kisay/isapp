Template.search.helpers({
    searchResult: function(){
        var searchName = Session.get('searching');
        //搜索除了自己的用户
        return Meteor.users.find({username:searchName});
    }
});

Template.header.events({
    'submit #search': function(event){
        event.preventDefault();
        var searchName = $(event.target).find('[name=searchtext]').val();
        Session.set('searching', searchName);
        Router.go('searchResult');
    }
});

Template.search.events({
    'click .add-friends': function(event){
        Meteor.call('addFriends', this._id);
        alert('添加好友成功');
        Router.go('/');
    }
});
