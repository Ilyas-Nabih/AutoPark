const config = {
  voitures: [
    { id: 1, 
      marque: "Dacia",   
      modele: "Sandero", 
      immatriculation: "AUTO-001", 
      categorie: "Citadine", 
      prixJour: 250, 
      statut: "Disponible" 
    },
    { id: 2, 
      marque: "Renault", 
      modele: "Clio",    
      immatriculation: "AUTO-002", 
      categorie: "Citadine", 
      prixJour: 300, 
      statut: "Disponible" 
    },
    { id: 3, 
      marque: "Dacia",   
      modele: "Duster",  
      immatriculation: "AUTO-003", 
      categorie: "SUV",      
      prixJour: 450, 
      statut: "Disponible" 
    },
  ],
};

function choixVoiture (conf) {
  const container = document.getElementById("voitures");
  if (!container) {
    return;
  }
  
  conf.voitures.forEach((voiture) => {
    const article = document.createElement("article");
    article.classList.add("cards");
    const input = document.createElement("input");
    input.type = "radio";
    input.name = "voiture_choix";
    input.id = `voi_${voiture.id}`;
    input.value = voiture.id;
    input.classList.add("sr-only");


    const label = document.createElement("label");
    label.classList.add("labels");
    label.htmlFor = input.id;

    const cardTop = document.createElement("span")
    cardTop.classList.add("card-top");

    const badge = document.createElement("span");
    badge.classList.add("badge");
    badge.textContent = voiture.categorie;

    const radioIcon = document.createElement("span");
    radioIcon.classList.add("radio-icon");
    radioIcon.setAttribute("aria-hidden", "true");

    cardTop.append(badge, radioIcon);

    const carTitle = document.createElement("span");
    carTitle.classList.add("car-title");
    carTitle.textContent = `${voiture.marque} ${voiture.modele}`;

    const statusSpan = document.createElement("span");
    statusSpan.classList.add("status");
    statusSpan.textContent = voiture.statut;

    const priceSpan = document.createElement("span");
    priceSpan.classList.add("price");
    priceSpan.textContent = `${voiture.prixJour} MAD / jour` ;

    label.append(cardTop, carTitle, statusSpan, priceSpan)
    article.append(input,label);
    container.appendChild(article);
  })
}


choixVoiture (config)