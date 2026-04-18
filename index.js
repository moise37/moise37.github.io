



checkList()
const myImage = document.querySelector("img");
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `${myName} is cool, `;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Hello, ${storedName}`;
}


reqFlowers();



myButton.addEventListener("click", () => {
  setUserName();
});




myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  const consoleLog = document.querySelector("p");
  if (mySrc === "images/bae.png") {
    myImage.setAttribute("src", "images/curl.png");
  } else {
    myImage.setAttribute("src", "images/bae.png");
  }
});


function checkList(){
  const listItems = document.querySelectorAll("li");
  listItems.forEach((item) => {
    item.addEventListener("click", (e)=>{
      if (!e.target.className) {
          e.target.className = "done";
      } else {
          e.target.className = "";
      }
    });
  });
}
function reqFlowers(){
  const flw = document.querySelector("img");
  const myRequest = new Request("images/flowers.jpg");

  fetch(myRequest)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error, status = ${response.status}`);
      }
      return response.blob();
    })
    .then((myBlob) => {
      const objectURL = URL.createObjectURL(myBlob);
      flw.src = objectURL;
    })
    .catch((error) => {
      const p = document.createElement("p");
      p.appendChild(document.createTextNode(`Error: ${error.message}`));
      document.body.insertBefore(p, flw);
    });
}
