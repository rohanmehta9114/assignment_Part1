
  'use strict';
  'globals' : { 'ko': false};
  function ViewModel(){

   var self=this;
   self.textField= ko.observable('');

   self.commentArray=[
   {array_element: 'This is the first comment!'},
   {array_element: 'Here\'s the second one!'},
   {array_element: 'And this is one more.'},
   {array_element: 'Here is another one!'}
   ];


   self.comments=ko.observableArray([
       self.commentArray[0],
       self.commentArray[1],
       self.commentArray[2],
       self.commentArray[3]
   ]);

   self.AddComment=function(){
     if (self.textField().trim() !=='' && self.textField()!==undefined){
      self.comments.push({array_element: self.textField()});
      //$('.comment-input input').val('');
    self.textField('');
  }
   };
   /*self.onEnterPress = function () {
        if (self.textField()!=='' && self.textField()!==undefined){
            self.comments.push(new AddComments(self.textField()));
            self.textField('');
        }

    };*/

    ko.bindingHandlers.enterKey = {
        init: function (element, valueAccessor, allBindings, data, context) {
            var wrapper = function (data, event) {
                if (event.keyCode === 13) {
                  if (self.textField().trim() !=='' && self.textField()!==undefined){
                      self.comments.push({array_element: self.textField()});
                      self.textField('');
                  }
                  return false;
                }
            };
            ko.applyBindingsToNode(element, { event: { keyup: wrapper } }, context);
        }
    };

}


ko.applyBindings(new ViewModel());
