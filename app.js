
  'use strict';
  //'globals' : { 'ko': false};
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
      self.comments.push({array_element: self.textField()});
      //$('.comment-input input').val('');
    self.textField('');
   };
   self.check = function(data, event) {
        try {
            if (event.which === 13) {
                if (self.textField() !== '') {
                    var comment = {
                        comment: self.textField()
                    };
                    self.comments.push(comment);
                    self.textField('');
                }
                return false;
            }
            return true;
        } catch (e) {}
    };
}


ko.applyBindings(new ViewModel());
