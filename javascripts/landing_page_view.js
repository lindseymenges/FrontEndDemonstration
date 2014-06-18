View = function(){

};

View.prototype = {
  displaySignUpInfo: function(){
    var signUpInformation = document.getElementById('main_right')
    var displaySignUpButton = document.getElementById('display_sign_up_button')
    signUpInformation.style.display = "inline-block";
    displaySignUpButton.remove();
  },

  markInputAsIncorrect: function(element){
    element.className += " incorrect_input";
  },

  removeIncorrectClass: function(element){
    element.className = element.className.replace(/\bincorrect_input\b/g , '' );
  },

  errorMessageDisplay: function(errorMessage){
    errorMessage.className = errorMessage.className.replace(/\binvisible\b/, 'visible');
  }
}