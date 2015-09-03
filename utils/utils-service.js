angular.module('myApp.utils.service',[])
.factory('utils',function(){
  return{
  findById:function(a,id)
  {
    for (var i=0;i<a.contacts.length;i++)
    {
      if(a.contacts[i].id==id) return a.contacts[i];
    }
    return null;
  }
};
})
