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
    displayInfoButton = document.getElementById('display_info_button')
    displaySignUpButton = document.getElementById('display_sign_up_button')
    displayInfoButton.onclick = view.displayInformation;
    displaySignUpButton.onclick = view.displaySignUpInfo;
  }
}

View = function(){
};

View.prototype = {
  displayInformation: function(){
    var displayInfoButton = document.getElementById('display_info_button')
    var companyInformation = document.getElementById('main_left')
    if (companyInformation.style.display == "none"){
      companyInformation.style.display = "inline-block"
      displayInfoButton.innerText = "Hide Information"
    }
    else {
      companyInformation.style.display = "none"
      displayInfoButton.innerText = "Show Company, inc. Information"
    }
  },

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
      if(document.getElementsByTagName('input').item(x).value == ''){
        var inputField = document.getElementsByTagName('input').item(x)
        var errorMessage = document.getElementById('sign_up_error_message')
        inputField.style.border = "2px solid #efc7c7"
        inputField.style.backgroundColor = "#f9eded";
        errorMessage.style.display = "block"
        return false
       }
     }
     return true;
  }