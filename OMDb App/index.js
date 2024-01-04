let Api_Key = "4cfe87f2";
let searchButton = document.getElementById("search_button");
let maincontainer = document.getElementsByClassName("container2")[0];
//! when search any movie name data will show
function displayData(data) {
  // ! button click concepte start
  searchButton.addEventListener("click", function (event) {
    event.preventDefault();
    //! button click concepte end
    maincontainer.innerHTML = "";
    if (!data || data.length === 0) {
      maincontainer.textContent = "something wrong";
    } else {
      data.forEach((el) => {
        searchContent.style.display = "none";
        let cardDiv = document.createElement("div");
        cardDiv.className = "childCard";
        // image tag
        let poster = document.createElement("img");
        poster.src = el.Poster;
        // title tag
        let title = document.createElement("h4");
        title.textContent = `Title : ${el.Title}`;
        // year tag
        let year = document.createElement("p");
        year.textContent = `Year : ${el.Year}`;

        cardDiv.append(poster, title, year);
        maincontainer.append(cardDiv);
      });
    }
  });
}

//! when search movie name data will show div and div also visiable
let searchContent = document.getElementById("searchContent");
let searchMini = document.getElementById("searchmini");
function serchDiv(searchData) {
  searchMini.innerHTML = "";
  searchContent.style.display = "block";
  if (!searchData || searchData.length === 0) {
    searchContent.style.display = "none";
  } else {
    searchData.forEach(function (el) {
      let searchDivCart = document.createElement("div");
      searchDivCart.className = "searchDiv";

      // image tag
      let poster = document.createElement("img");
      poster.src = el.Poster;
      // title tag
      let title = document.createElement("h4");
      title.textContent = `Title : ${el.Title}`;
      // year tag
      let year = document.createElement("p");
      year.textContent = `Year : ${el.Year}`;
      searchDivCart.append(poster, title, year);
      searchMini.append(searchDivCart);
      searchContent.append(searchMini);
    });
  }
}

async function makeApi() {
  try {
    let search = document.getElementById("search").value;
    let data = await fetch(
      `http://www.omdbapi.com/?apikey=${Api_Key}&s=${search}`
    );
    let allData = await data.json();
    console.log(allData.Search);
    displayData(allData.Search);
    serchDiv(allData.Search);
  } catch (error) {
    console.log("something went wrong!");
  }
}

let timeid;
function debouncer(callBack, dealy) {
  if (timeid) {
    clearTimeout(timeid);
  }
  timeid = setTimeout(() => {
    callBack();
  }, dealy);
}
