Router.configure({
    layoutTemplate : 'layout',
    loadingTemplate: 'loading',
    yieldTemplates: {
        'header': {to: 'header'},
        'footer': {to: 'footer'}
    }

});

Router.map(function() {
  this.route('home', {path: '/'});
  this.route('about',{
    'path': '/about',
    'template': 'about'     //指定模板，否则自动加载与route名字对应的模板
  });
  this.route('searchResult',{'template':'search'});
});
