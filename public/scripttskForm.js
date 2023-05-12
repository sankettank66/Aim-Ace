 // get the form element
  let form = document.getElementById("tsk_form");
 const title = tsk_form.title;
  // Add an event listener to the submit button
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    // Get the form data
    let formData = new FormData(form);
    let container = document.createElement("div");
    container.id = "myContainer";
    container.classList.add("form-container")
    // Add the form data to the container
    for (const [key, value] of formData.entries()) {
      let formElement = document.createElement("p");
      formElement.innerHTML = key + ": " + value;
      container.appendChild(formElement);
    }
    // Add the container to the local storage
    if(localStorage.getItem("formContainers") === null){
      localStorage.setItem("formContainers", JSON.stringify([container.outerHTML]));
    }
    else{
      let containers = JSON.parse(localStorage.getItem("formContainers"));
      containers.push(container.outerHTML);
      localStorage.setItem("formContainers", JSON.stringify(containers));
    }
    // Redirect to the second page
    window.location.href = "tskcard.html    ";
  });


// let form = document.getElementById("tsk_form");
//   form.addEventListener("submit", function(event) {
//     event.preventDefault();
//     let Title = document.getElementById("title").value;
//     let Description = document.getElementById("desc").value;
//     let containers = JSON.parse(localStorage.getItem("formContainers")) || [];
//     let container = `<a href="${Title}">${Description}</a>`;
//     containers.push(container);
//     localStorage.setItem("formContainers", JSON.stringify(containers));
//     window.location.href = "tskcard.html";
//   });