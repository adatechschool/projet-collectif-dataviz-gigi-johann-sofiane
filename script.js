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

        document.getElementById("table").innerHTML = ""

        //document.getElementById("adresses").innerHTML = 
        shops.map((shop) => {
            //console.log(shop.adresse)
            const trElement = document.createElement("tr")
            const code_postalElement = document.createElement("td")
            const nom_du_commerceElement = document.createElement("td")
            const adressesElement = document.createElement("td")
            const site_internetElement = document.createElement("td")
            const telephoneElement = document.createElement("td")

            trElement.appendChild(code_postalElement)
            trElement.appendChild(nom_du_commerceElement)
            trElement.appendChild(adressesElement)
            trElement.appendChild(site_internetElement)
            trElement.appendChild(telephoneElement)

            document.getElementById("table").appendChild(trElement)
            
            code_postalElement.innerText =shop.code_postal 
            nom_du_commerceElement.innerText = shop.nom_du_commerce
            adressesElement.innerText = shop.adresse         
            site_internetElement.innerText =shop.site_internet
            telephoneElement.innerText = shop.telephone
        //<div id=${results.adresse()}>
        //<div/>
         }
        )
    })
}

const newSelect = async () => {
            /*document.getElementById("nom_du_commerce").innerHTML = ""
            document.getElementById("adresses").innerHTML =""
            document.getElementById("code_postal").innerHTML =""
            document.getElementById("site_internet").innerHTML =""
            document.getElementById("telephone").innerHTML =""*/

            document.getElementById("table").innerHTML = ""

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
            const trElement = document.createElement("tr")
            const code_postalElement = document.createElement("td")
            const nom_du_commerceElement = document.createElement("td")
            const adressesElement = document.createElement("td")
            const site_internetElement = document.createElement("td")
            const telephoneElement = document.createElement("td")

            trElement.appendChild(code_postalElement)
            trElement.appendChild(nom_du_commerceElement)
            trElement.appendChild(adressesElement)
            trElement.appendChild(site_internetElement)
            trElement.appendChild(telephoneElement)

            document.getElementById("table").appendChild(trElement)
            
            code_postalElement.innerText =shop.code_postal
            nom_du_commerceElement.innerText = shop.nom_du_commerce
            adressesElement.innerText = shop.adresse          
            site_internetElement.innerText =shop.site_internet
            telephoneElement.innerText = shop.telephone
        //<div id=${results.adresse()}>
        //<div/>
         }
        )
    })
}

onChange();




