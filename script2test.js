const chocolaterie = document.getElementById("chocolaterie");
const caviste = document.getElementById("caviste");
let typeCommerce = document.getElementById("yourTypeId"); // Replace ‘yourTypeId’ with the actual ID of your typeCommerce element
let url = `https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/coronavirus-commercants-parisiens-livraison-a-domicile/records?limit=20&refine=type_de_commerce%3A%22${typeCommerce.value}%22`;
function onChange() {
    let value = typeCommerce.value;
    let text = typeCommerce.options[typeCommerce.selectedIndex].text;
    // Update the URL with the new value
    url = `https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/coronavirus-commercants-parisiens-livraison-a-domicile/records?limit=20&refine=type_de_commerce%3A%22${value}%22`;
    fetch(url)
        .then(response => response.json())
        .then(response2 => {
            console.log(response2);
            // Assuming shops is a property of response2, adjust accordingly if not
            let shops = response2.shops;
            console.log("test", shops);
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
}
// Initial call to onChange
onChange();
// Assign the event listener to the onchange event of typeCommerce
typeCommerce.onchange = onChange;
// Console log after onChange
console.log("jeux = " + typeCommerce.value);