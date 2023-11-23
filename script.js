const typeCommerce = document.getElementById("typeCommerce")
const jeux = document.getElementById("jeux")
const librairie = document.getElementById("librairie")
const fleuriste = document.getElementById("fleuriste")
const disquaire = document.getElementById("disquaire")
const chocolaterie = document.getElementById("chocolaterie")
const caviste = document.getElementById("caviste")

//let e = typeCommerce

//let url = `https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/coronavirus-commercants-parisiens-livraison-a-domicile/records?limit=20&refine=type_de_commerce%3A%22${typeCommerce.value}%22`

let url = `https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/coronavirus-commercants-parisiens-livraison-a-domicile/records?limit=20&refine=type_de_commerce%3A%22Librairie%22`



const onChange = async () => {
    //const ulElement = document.querySelector("ul")
    let shops;
    let value = typeCommerce.value;
    console.log("valeur = "+value);
    let text = typeCommerce.options[typeCommerce.selectedIndex].text;
    console.log("texte =" +text);
    console.log(url)
    await fetch(url)
    .then(response => response.json())
    .then(response2 => {
        shops=response2.shops;
        console.log("test", shops)
    })
}

console.log("test 2", shops)

onChange();

//e.onchange = onChange;

console.log("jeux = "+typeCommerce.value)


//let choiceCommerce = fetch(`https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/coronavirus-commercants-parisiens-livraison-a-domicile/records?limit=20&refine=type_de_commerce%3A%22${typeCommerce[0]}%22`)

/*const choiceCommerce = async () => {
    const typeCommerce = [jeux, librairie]
    //let url = `https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/coronavirus-commercants-parisiens-livraison-a-domicile/records?limit=20&refine=type_de_commerce%3A%22${e.value}%22`
    console.log("url : " + url)
    let commerce = await fetch (url)

    console.log (commerce)
    let response = await commerce.json()
    console.log (response)


} */

//fetch(`https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/coronavirus-commercants-parisiens-livraison-a-domicile/records?limit=20&refine=type_de_commerce%3A%22Chocolaterie%20-%20P%C3%A2tisserie%22`)

//chocolaterie.textContent = `#${response.id}`;
