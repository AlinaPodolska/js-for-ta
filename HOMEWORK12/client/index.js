const baseURL = "http://localhost:4000";

const makeXhrRequest = ({ method = "GET", route, callback }) => {
  const xhr = new XMLHttpRequest();

  xhr.open(method, `${baseURL}/${route}`);
  xhr.onload = function () {
    if (this.status === 200) {
      callback(this);
    }
  };
  xhr.send();
};

// ----------- task-1 -----------
const voteBtn = document.getElementById("vote_btn");

const vote = () =>
  makeXhrRequest({
    route: "vote",
    callback: (response) => {
      voteBtn.innerText = response.responseText;
    },
  });

voteBtn.addEventListener("click", vote);

// ----------- task-2 -----------
const downloadBtn = document.getElementById("download_btn");
const booksOutput = document.getElementById("books");

const downloadBooks = () =>
  makeXhrRequest({
    route: "books",
    callback: (response) => {
      const books = JSON.parse(response.responseText);

      booksOutput.innerHTML = null;

      books.forEach((book) => {
        const p = document.createElement("p");
        p.innerText = book;
        booksOutput.appendChild(p);
      });
    },
  });

downloadBtn.addEventListener("click", downloadBooks);
