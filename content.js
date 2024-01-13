let offersContainer = [];

if (document.getElementById("offersGridOfferContainer")) {
  offersContainer = Array.from(
    document.getElementById("offersGridOfferContainer").children
  );
}

// filter the children of type "article"
let offers = offersContainer.filter((child) => child.tagName === "ARTICLE");

offers.forEach((of) => {
  let company =
    of.querySelector("[offer-grid-article-company-url]")?.text || "Unknown";
  let isBairesOffer = company === "BairesDev SA";
  if (isBairesOffer) {
    of.remove();
    console.log("Hidding offer from XDXD" + company);
  }

  let publicationDate = of.querySelector(".fc_aux")?.innerText || "Unknown";
  let isOld = publicationDate === "Más de 30 días";
  if (isOld) {
    of.remove();
    console.log("Hidding old offer");
  }
});

// remove ads
let ads = offersContainer.filter(
  (child) => child.tagName === "DIV" && child.id.includes("dfpgrid")
);

ads.forEach((ad) => { 
  ad.remove();
  console.log("Hidding ad");
});
