Meteor.startup(function(){
    //添加默认用户



    //默认添加好友
    if(Friends.find({uid:this.userId}).count() === 0){
        //Friends.insert({uid:Meteor.userId(),friend:[{}]});

    }


});
