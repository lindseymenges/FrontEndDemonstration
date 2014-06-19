window.onload = function(){
  view = new View();
  controller = new Controller(view);
  controller.bindEvents();
};

Controller = function(view){
  view = view;
};

Controller.prototype = {
  bindEvents: function(){
    displaySignUpButton = document.getElementById('display_sign_up_button')
    displaySignUpButton.onclick = view.displaySignUpInfo;
  },

  highlightFields: function(){
    var errorMessage = document.getElementById('sign_up_error_message')
    errorArray = []
    for(x = 0; x < document.getElementsByTagName('input').length; x++){
      var inputField = document.getElementsByTagName('input').item(x)
      if(inputField.value == ''){
        view.markInputAsIncorrect(inputField);
        view.errorMessageDisplay(errorMessage);
        return false
        // push "false" into errorArray
       }
       else{
        view.removeIncorrectClass(inputField)
       }
     }
     // if errorArray[0] OR errorArray.contain "false" return false, otherwise return true
     return true;
  }
}