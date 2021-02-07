const baseUrl = "https://www.themealdb.com/api/json/v1/1/";
const inputField = document.getElementById("search-field");
const searchButton = document.getElementById("search-btn");
const displayArea = document.getElementById("display");
const detailsArea = document.getElementById("details-area");

searchButton.addEventListener("click", () => {
    searchFoodByName(inputField.value);
})
const searchFoodByName = keyword => {
    if (keyword != "") {
        showLoader(displayArea, true);
        let url = `${baseUrl}search.php?s=${keyword}`;
        fetch(encodeURI(url))
            .then(data => data.json())
            .then(data => {
                showLoader(displayArea, false);
                displayFood(data);
            });
    }
}
const displayFood = data => {
    if (data.meals == null) {
        showNotFoundMessage();
    } else {
        displayArea.innerHTML = createFoodCard(data)
    }
}
// 