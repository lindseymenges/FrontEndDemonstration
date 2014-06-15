window.onload = function(){
  console.log("Work dammit")
  view = new View();
  controller = new Controller(view);
  controller.bindEvents();
};

Controller = function(view){
  view = this.view;
};

Controller.prototype = {
  bindEvents: function(){
    console.log("This is bindEvents")
    submitButton = document.getElementById("sign_up_button")
    submitButton.onclick = this.checkForm;
  },

  checkForm: function(e){
    e.preventDefault();
    console.log("You are in checkForm")
    for(x = 0; x < document.getElementsByTagName('input').length; x++){
      if(document.getElementsByTagName('input').item(x).value == ''){
        document.getElementsByTagName('input').item(x).style.border = "2px solid #efc7c7"
        document.getElementsByTagName('input').item(x).style.backgroundColor = "#f9eded";
        document.getElementById('sign_up_error_message').style.display = "block"
      }
    }
  }
}

View = function(){

};

View.prototype = {
  showErrorMessage: function(){
    console.log("This is the error message")
  }
}