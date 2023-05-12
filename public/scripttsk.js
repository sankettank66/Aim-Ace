
  // // retrieve the container element from local storage
  // let containers = JSON.parse(localStorage.getItem("formContainers"));
  // let containerDiv = document.getElementById("form-container");
  // containers.forEach(function(container){
  //   let containerElement = document.createElement("div");
  //   containerElement.innerHTML = container;
  //   containerDiv.appendChild(containerElement);
  //   containerElement.innerHTML = container;
  // });

  let containers = JSON.parse(localStorage.getItem("formContainers"));
  let containerDiv = document.getElementById("form-container");
  containers.forEach(function(container, index){
    let containerElement = document.createElement("a");

    containerElement.href = '../index.html';
    containerElement.target = '_blank';
    containerElement.textContent = 'Link to Example.com';
  document.body.appendChild(containerElement);

    containerElement.innerHTML = container;
    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.addEventListener("click", function() {
      containers.splice(index, 1);
      localStorage.setItem("formContainers", JSON.stringify(containers));
      containerDiv.removeChild(containerElement);
    });
    containerElement.appendChild(deleteButton);
    containerDiv.appendChild(containerElement);

    
  
  });

