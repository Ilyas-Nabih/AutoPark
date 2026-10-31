import { voituresInitiales } from './data.js'
let voitures = [...voituresInitiales]
const listeVoitures = document.getElementById("liste-voitures");

const brand = document.getElementById("marque");
const model = document.getElementById("modele");
const registration = document.getElementById("immatriculation");
const category = document.getElementById("categorie");
const price = document.getElementById("prix-jour");
const status = document.getElementById("statut");
const button = document.getElementById('bouton-enregistrer')
const formulaire = document.getElementById("formulaire-voiture")

//fonction afficher
function afficherTableVoiture() {
    listeVoitures.replaceChildren()

    console.log(voitures);

    voitures.forEach((voiture) => {
        const tableRow = document.createElement('tr');
        listeVoitures.append(tableRow)

        const marque = document.createElement('td');
        const strong = document.createElement('strong');
        strong.textContent = voiture.marque
        tableRow.appendChild(marque);
        marque.appendChild(strong);

        const modele = document.createElement('td');
        modele.textContent = voiture.modele;
        tableRow.appendChild(modele);

        const immatriculation = document.createElement('td')
        const span = document.createElement('span');
        span.classList.add("registration");
        span.textContent = voiture.immatriculation;
        immatriculation.appendChild(span);
        tableRow.appendChild(immatriculation);

        const categorie = document.createElement('td');
        categorie.textContent = voiture.categorie;
        tableRow.appendChild(categorie);


        const prixJour = document.createElement('td');
        prixJour.classList.add("prix");
        prixJour.textContent = voiture.prixJour;
        const span2 = document.createElement('span');
        span2.textContent = " DH / jour";
        tableRow.appendChild(prixJour);
        prixJour.appendChild(span2);

        const statut = document.createElement('td');
        const span3 = document.createElement('span');
        span3.textContent = voiture.statut;
        if (voiture.statut === "Disponible") {
            span3.classList.add("badge", "badge-disponible");
        }
        else if (voiture.statut === "Louée") {
            span3.classList.add("badge", "badge-louee");
        }
        else {
            span3.classList.add("badge", "badge-maintenance");
        }
        tableRow.appendChild(statut);
        statut.appendChild(span3);

        const botonat = document.createElement("td");
        const div = document.createElement("div");
        div.classList.add("row-actions");
        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("button", "button-delete");
        deleteBtn.textContent = "Supprimer"
        const editBtn = document.createElement("button");
        editBtn.classList.add("button", "button-edit");
        editBtn.textContent = "Modifier"

        tableRow.appendChild(botonat);
        botonat.appendChild(div);
        div.appendChild(deleteBtn);
        div.appendChild(editBtn);

    })
}

afficherTableVoiture()

//fonction ajouter
function ajouter(event) {
    event.preventDefault();

    console.log(brand, model);
    let validation = true

    if (brand.value.trim() === "" || !(model.value.trim()) || !(registration.value.trim()) || !(category.value.trim()) || !(price.value) || !(status.value.trim())) {
        validation = false
    }
    if (validation === false) {
        alert("Vous devez remplire tout les champs!")
        return;
    }

     voitures.push({
            "id": voitures.length + 1,
            "marque": brand.value.trim(),
            "modele": model.value.trim(),
            "immatriculation": registration.value.trim(),
            "categorie": category.value.trim(),
            "prixJour": price.value.trim(),
            "statut": status.value.trim()
        });
    afficherTableVoiture();
    formulaire.reset();

    }

formulaire.addEventListener('submit', ajouter)
