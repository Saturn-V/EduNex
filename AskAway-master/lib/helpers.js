checkEmailIsValid = function (enteredEmail) {
    enteredEmail = enteredEmail || '';
    return enteredEmail.length > 1 && enteredEmail.indexOf('@') > -1;
  }

  checkPasswordIsValid = function (enteredPassword) {
    enteredPassword = enteredPassword || '';
    return enteredPassword.length > 7;
   }