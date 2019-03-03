let appkey = "545f13f841ca097329540c0a1d23bb0e";
let units = "imperial";
let searchtype, searchparam, country;

function getsearchtype(searchparam) {
  if (
    searchparam.length == 5 &&
    Number.parseInt(searchparam) + "" == searchparam
  )
    searchtype = "zip";
  else searchtype = "q";

  if (searchtype == 'zip')
    country = 'US';
  else country = "";
}


function search() {
  getsearchtype(searchparam);
  fetch(
      `http://api.openweathermap.org/data/2.5/weather?${searchtype}=${searchparam},${country}&units=${units}&APPID=${appkey}`
    )
    .then((result) => result.json())
    .then((result) => {
      parser(JSON.stringify(result));
    });
}

function parser(serverresult) {
  // switch (serverresult.weather[0].main) {
  //   case "Clear":

  //     break;
  //   case "Clouds":

  //     break;
  //   case "Rain":
  //     break;
  //   case "Drizzle":
  //     break;
  //   case "Thunderstorm":
  //     break;
  //   case "Snow":
  //     break;
  //   default:
  //     break;
  // }
}

let btn = document.getElementById("searching");
btn.addEventListener("click", () => {
  searchparam = document.getElementById("search").value;
  search();
});