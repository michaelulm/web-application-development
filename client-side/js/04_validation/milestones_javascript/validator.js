// Defining a function to display error message
function printError(elemId, hintMsg) {
  document.getElementById(elemId).innerHTML = hintMsg;
}

// Defining a function to validate form
function validateForm() {
  // Retrieving the values of form elements
  var project = document.milestonesForm.project.value;
  var email = document.milestonesForm.email.value;
  var person = document.milestonesForm.person.value;
  var task = document.milestonesForm.task.value;

  // Defining error variables with a default value
  var projectErr = (emailErr = personErr = true);

  // Validate project
  if (project == "") {
    printError("projectErr", "Please enter the name of the project.");
  } else {
    var regex = /^[a-zA-Z\s]+$/;
    if (regex.test(project) === false) {
      printError(
        "projectErr",
        "Please enter a valid project name with min. 3 characters."
      );
    } else {
      printError("projectErr", "");
      projectErr = false;
    }
  }

  // Validate task
  if (task == "") {
    printError("taskErr", "Please enter a task.");
  } else {
    var regex = /^[a-zA-Z\s]+$/;
    if (regex.test(task) === false) {
      printError(
        "taskErr",
        "Please enter a valid task with min. 3 characters."
      );
    } else {
      printError("taskErr", "");
      taskErr = false;
    }
  }

  // Validate responsible person
  if (person == "") {
    printError(
      "personErr",
      "Please enter the responsible person of the project."
    );
  } else {
    var regex = /^[a-zA-Z\s]+$/;
    if (regex.test(person) === false) {
      printError("personErr", "Please enter a valid name.");
    } else {
      printError("personErr", "");
      personErr = false;
    }
  }
  // Validate email address
  if (email == "") {
    printError("emailErr", "Please enter your email address");
  } else {
    // Regular expression for basic email validation
    var regex = /^\S+@\S+\.\S+$/;
    if (regex.test(email) === false) {
      printError("emailErr", "Please enter a valid email address");
    } else {
      printError("emailErr", "");
      emailErr = false;
    }
  }

  // Prevent the form from being submitted if there are any errors
  if ((projectErr || emailErr || personErr || taskErr) == true) {
    return false;
  } else {
    // Creating a string from input data for preview
    var dataPreview =
      "You've entered the following details: \n" +
      "Projectname: " +
      project +
      "\n" +
      "Task: " +
      task +
      "\n" +
      "Responsible person: " +
      person +
      "\n";
    "Email Address: " + email + "\n";
    // Display input data in a dialog box before submitting the form
    alert(dataPreview);
  }
}
