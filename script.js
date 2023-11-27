const typeCommerce = document.getElementById("typeCommerce")
const jeux = document.getElementById("jeux")
const librairie = document.getElementById("librairie")
const fleuriste = document.getElementById("fleuriste")
const disquaire = document.getElementById("disquaire")
const chocolaterie = document.getElementById("chocolaterie")
const caviste = document.getElementById("caviste")

const onChange = async () => {
    let shops;
    let value = typeCommerce.value;
    console.log("valeur = "+value);
    let text = typeCommerce.options[typeCommerce.selectedIndex].text;
    console.log("texte =" +text);
    let url = `https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/coronavirus-commercants-parisiens-livraison-a-domicile/records?limit=20&refine=type_de_commerce%3A%22${typeCommerce.value}%22`

    console.log(url)
    
    await fetch(url)
    .then(response => response.json())
    .then(response2 => {
       shops = response2.results;
        console.log("test", shops)

        //document.getElementById("adresses").innerHTML = 
        shops.map((shop) => {
            //console.log(shop.adresse)

            document.getElementById("nom_du_commerce").innerHTML +=shop.nom_du_commerce
            document.getElementById("adresses").innerHTML +=shop.adresse
            document.getElementById("code_postal").innerHTML +=shop.code_postal
            document.getElementById("site_internet").innerHTML +=shop.site_internet
            document.getElementById("telephone").innerHTML +=shop.telephone
        //<div id=${results.adresse}>
        //<div/>
         }
        )
    })
}

const newSelect = async () => {
            document.getElementById("nom_du_commerce").innerHTML = ""
            document.getElementById("adresses").innerHTML =""
            document.getElementById("code_postal").innerHTML =""
            document.getElementById("site_internet").innerHTML =""
            document.getElementById("telephone").innerHTML =""

    let value = typeCommerce.value;
        console.log("valeur = "+value);
        let text = typeCommerce.options[typeCommerce.selectedIndex].text;
        console.log("texte =" +text);
        let url = `https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/coronavirus-commercants-parisiens-livraison-a-domicile/records?limit=20&refine=type_de_commerce%3A%22${typeCommerce.value}%22`

    console.log(url)
    
    await fetch(url)
    .then(response => response.json())
    .then(response2 => {
       shops = response2.results;
        console.log("test", shops)

        //document.getElementById("adresses").innerHTML = 
        shops.map((shop) => {
            //console.log(shop.adresse)
            document.getElementById("nom_du_commerce").innerHTML +=shop.nom_du_commerce + `<br>`
            document.getElementById("adresses").innerHTML +=shop.adresse  + `<br>`
            document.getElementById("code_postal").innerHTML +=shop.code_postal + `<br>`
            document.getElementById("site_internet").innerHTML +=shop.site_internet + `<br>`
            document.getElementById("telephone").innerHTML +=shop.telephone + `<br>`
            }

        
        //<div id=${results.adresse}>
        //<div/>
        )
    })
}

onChange();




