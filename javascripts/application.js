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
    if (signUpInformation.style.display == "inline-block"){
      signUpInformation.style.display = "none"
    }
    else {
      signUpInformation.style.display = "inline-block"
    }
  }
}

var highlightFields = function(){
    for(x = 0; x < document.getElementsByTagName('input').length; x++){
      var inputField = document.getElementsByTagName('input').item(x)
      var errorMessage = document.getElementById('sign_up_error_message')
      if(document.getElementsByTagName('input').item(x).value == ''){
        inputField.style.border = "2px solid #e8a8a7"
        inputField.style.backgroundColor = "#f9eded";
        errorMessage.style.display = "block"
        return false
       }
       else{
        inputField.style.border = "1px solid #d1d1d0"
        inputField.style.backgroundColor = "#fefff1"
       }
     }
     return true;
  }