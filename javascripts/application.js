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
    for(x = 0; x < document.getElementsByTagName('input').length; x++){
      var inputField = document.getElementsByTagName('input').item(x)
      if(inputField.value == ''){
        view.markInputAsIncorrect(inputField);
        view.errorMessageDisplay(errorMessage);
        return false
       }
       else{
        view.removeIncorrectClass(inputField)
       }
     }
     return true;
  }
}

View = function(){
  
};

View.prototype = {
  displaySignUpInfo: function(){
    var signUpInformation = document.getElementById('main_right')
    var displaySignUpButton = document.getElementById('display_sign_up_button')
      signUpInformation.style.display = "inline-block"
      displaySignUpButton.remove();
  },

  markInputAsIncorrect: function(element){
    element.className += " incorrect_input"
  },

  removeIncorrectClass: function(element){
    element.className = element.className.replace(/\bincorrect_input\b/g , '' )
  },

  errorMessageDisplay: function(errorMessage){
    errorMessage.className = errorMessage.className.replace(/\binvisible\b/, 'visible')
  }
}