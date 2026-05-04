let projectForm = document.getElementById("projectSubmission");
projectForm.addEventListener('submit', checkForm);

function checkForm(event) {
   let validText = true;
   if (projectForm.first_name.value == "") {
      projectForm.first_name.style.backgroundColor = "lightpink";
      validText = false;
      event.preventDefault();
   }

   if (projectForm.last_name.value == "") {
      projectForm.last_name.style.backgroundColor = "lightpink";
      validText = false;
      event.preventDefault();
   }

   if (projectForm.user_project.value == "") {
      projectForm.user_project.style.backgroundColor = "lightpink";
      validText = false;
      event.preventDefault();
   }

   if(validText){
        event.preventDefault();
        alert("Project submitted successfully!");
        projectForm.first_name.style.backgroundColor = "white";
        projectForm.last_name.style.backgroundColor = "white";
        projectForm.user_project.style.backgroundColor = "white";
        projectForm.first_name.value = "";
        projectForm.last_name.value = "";
        projectForm.user_project.value = "";
   }
   else if(!validText){
        event.preventDefault();
        alert("There is an error with your information, please corrrect the highlighted values.");
   }
}
