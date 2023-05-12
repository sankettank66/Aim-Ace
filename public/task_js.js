var form = document.querySelector("#myform");
form.addEventListener("submit", function(event) {
  event.preventDefault();
  var title = document.querySelector("#title").value;
  var description = document.querySelector("#description").value;
  var output = document.querySelector("#content_container");

  // Create a new card element
  var card = document.createElement("div");
  card.classList.add("card");

  // Add the title and description entered by the user to the card
  var titleElement = document.createElement("h2");
  titleElement.innerHTML = title;
  card.appendChild(titleElement);

  var descriptionElement = document.createElement("p");
  descriptionElement.innerHTML = description;
  card.appendChild(descriptionElement);

  // Append the card to the output element
  content_container.appendChild(card);

  // Clear the form input fields
  document.querySelector("#title").value = "";
  document.querySelector("#description").value = "";
});
