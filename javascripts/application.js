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
  }
}

var highlightFields = function(){
    for(x = 0; x < document.getElementsByTagName('input').length; x++){
      var inputField = document.getElementsByTagName('input').item(x)
      var errorMessage = document.getElementById('sign_up_error_message')
      if(inputField.value == ''){
        markInputAsIncorrect(inputField);
        errorMessageDisplay(errorMessage);
        return false
       }
       else{
        removeIncorrectClass(inputField)
       }
     }
     return true;
  }

var markInputAsIncorrect = function(element) {
  element.className += " incorrect_input"
}

var removeIncorrectClass = function(element){
  element.className = element.className.replace(/\bincorrect_input\b/g , '' )
}

var errorMessageDisplay = function(errorMessage){
  errorMessage.className = errorMessage.className.replace(/\binvisible\b/, 'visible')
}