const data_servicii = [
  {
    serviciu: "curățare exterior - întreținere",
    ore_lucru: "1,5",
    consumabile: 20,
    multiplicabil: "da"
  },
  {
    serviciu: "curățare exterior - detaliată",
    ore_lucru: 3,
    consumabile: 40,
    multiplicabil: "da"
  },
  {
    serviciu: "curățare detaliată jante",
    ore_lucru: 4,
    consumabile: 15,
    multiplicabil: "da"
  },
  {
    serviciu: "curățare compartiment motor",
    ore_lucru: 2,
    consumabile: 10,
    multiplicabil: "da"
  },
  {
    serviciu: "decontaminare chimică",
    ore_lucru: 1,
    consumabile: 15,
    multiplicabil: "da"
  },
  {
    serviciu: "decontaminare mecanică (vitrate)",
    ore_lucru: 1,
    consumabile: 30,
    multiplicabil: "da"
  },
  {
    serviciu: "decontaminare mecanică (caroserie)",
    ore_lucru: 2,
    consumabile: 50,
    multiplicabil: "da"
  },
  {
    serviciu: "lustruire 1 pas (fină)",
    ore_lucru: 5,
    consumabile: 70,
    multiplicabil: "da"
  },
  {
    serviciu: "lustruire 1 pas (3 in 1)",
    ore_lucru: 6,
    consumabile: 20,
    multiplicabil: "nu"
  },
  {
    serviciu: "lustuire 2 pași (medie - fină)",
    ore_lucru: 9,
    consumabile: 40,
    multiplicabil: "nu"
  },
  {
    serviciu: "lustruire 3 pași (hard - medie - fină)",
    ore_lucru: 12,
    consumabile: 80,
    multiplicabil: "da"
  },
  {
    serviciu: "șlefuire lac",
    ore_lucru: 12,
    consumabile: 20,
    multiplicabil: "da"
  },
  {
    serviciu: "corectare zgârieturi piano black",
    ore_lucru: 1,
    consumabile: 40,
    multiplicabil: "da"
  },
  {
    serviciu: "corectare zgârietură fină",
    ore_lucru: 1,
    consumabile: 15,
    multiplicabil: "da"
  },
  {
    serviciu: "corectare zgârietură medie",
    ore_lucru: "1,5",
    consumabile: 10,
    multiplicabil: "da"
  },
  {
    serviciu: "corectare zgârietură adâncă",
    ore_lucru: 2,
    consumabile: 15,
    multiplicabil: "da"
  },
  {
    serviciu: "corectare punct de rugină",
    ore_lucru: 2,
    consumabile: 20,
    multiplicabil: "da"
  },
  {
    serviciu: "întreținere faruri/stopuri",
    ore_lucru: "1,5",
    consumabile: 40,
    multiplicabil: "da"
  },
  {
    serviciu: "restaurare faruri/stopuri (standard)",
    ore_lucru: 2,
    consumabile: 15,
    multiplicabil: "da"
  },
  {
    serviciu: "restaurare faruri/stopuri (totală)",
    ore_lucru: 8,
    consumabile: 10,
    multiplicabil: "da"
  },
  {
    serviciu: "tratament de protecție de lungă durată dedicat farurilor",
    ore_lucru: 1,
    consumabile: 15,
    multiplicabil: "da"
  },
  {
    serviciu: "tratament glaze (extra strălucire și mascare zgârieturi)",
    ore_lucru: "1,5",
    consumabile: 30,
    multiplicabil: "da"
  },
  {
    serviciu: "tratament de protecție de scurtă durată",
    ore_lucru: 1,
    consumabile: 50,
    multiplicabil: "da"
  },
  {
    serviciu: "tratament de protecție cu sealant",
    ore_lucru: 2,
    consumabile: 70,
    multiplicabil: "da"
  },
  {
    serviciu: "tratament de protecție cu ceară (standard)",
    ore_lucru: 2,
    consumabile: 20,
    multiplicabil: "da"
  },
  {
    serviciu: "tratament de protecție cu ceară (premium)",
    ore_lucru: 3,
    consumabile: 40,
    multiplicabil: "da"
  },
  {
    serviciu: "tratament de protecție cu coating ceramic",
    ore_lucru: 4,
    consumabile: 80,
    multiplicabil: "da"
  },
  {
    serviciu: "",
    ore_lucru: "",
    consumabile: "",
    multiplicabil: ""
  },
  {
    serviciu: "curățare interior (intreținere)",
    ore_lucru: 3,
    consumabile: 20,
    multiplicabil: "da"
  },
  {
    serviciu: "curățrare interior (detaliată)",
    ore_lucru: 8,
    consumabile: 40,
    multiplicabil: "da"
  },
  {
    serviciu: "aspirare habitaclu",
    ore_lucru: "1,5",
    consumabile: 80,
    multiplicabil: "da"
  },
  {
    serviciu: "suflare habitaclu cu aer comprimat",
    ore_lucru: 1,
    consumabile: 20,
    multiplicabil: "da"
  },
  {
    serviciu: "curățare preșuri - textil (injecție-extracție)",
    ore_lucru: "1,5",
    consumabile: 40,
    multiplicabil: "da"
  },
  {
    serviciu: "curățare preșuri - cauciuc",
    ore_lucru: 1,
    consumabile: 15,
    multiplicabil: "da"
  },
  {
    serviciu: "curățare mochetă (standard)",
    ore_lucru: "1,5",
    consumabile: 10,
    multiplicabil: "da"
  },
  {
    serviciu: "curățare mochetă (injecție-extracție)",
    ore_lucru: "2,5",
    consumabile: 15,
    multiplicabil: "da"
  },
  {
    serviciu: "curățare scaune și banchetă - textil (standard)",
    ore_lucru: "2,5",
    consumabile: 20,
    multiplicabil: "da"
  },
  {
    serviciu: "curățare scaune și banchetă - textil (injecție-extracție)",
    ore_lucru: "4,5",
    consumabile: 40,
    multiplicabil: "da"
  },
  {
    serviciu: "curățare scaune și banchetă - piele (standard)",
    ore_lucru: "1,5",
    consumabile: 15,
    multiplicabil: "da"
  },
  {
    serviciu: "curățare scaune și banchetă - piele (detaliată)",
    ore_lucru: "4,5",
    consumabile: 10,
    multiplicabil: "da"
  },
  {
    serviciu: "tratament de protecție pentru suprafețele din piele",
    ore_lucru: 1,
    consumabile: 15,
    multiplicabil: "da"
  },
  {
    serviciu: "hidratare suprafețe textile",
    ore_lucru: 1,
    consumabile: 20,
    multiplicabil: "da"
  },
  {
    serviciu: "curățare panouri laterale - textil",
    ore_lucru: "2,5",
    consumabile: 40,
    multiplicabil: "da"
  },
  {
    serviciu: "curățare panouri laterale - piele",
    ore_lucru: 2,
    consumabile: 80,
    multiplicabil: "da"
  },
  {
    serviciu: "curățare portbagaj (simplă)",
    ore_lucru: 1,
    consumabile: 20,
    multiplicabil: "da"
  },
  {
    serviciu: "curățare portbagaj (detaliată)",
    ore_lucru: "1,5",
    consumabile: 40,
    multiplicabil: "da"
  },
  {
    serviciu: "curățare volan din spuma/plastic",
    ore_lucru: "0,4",
    consumabile: 15,
    multiplicabil: "da"
  },
  {
    serviciu: "curățare volan din piele și tratament de protecție",
    ore_lucru: 1,
    consumabile: 10,
    multiplicabil: "da"
  },
  {
    serviciu: "curățare plafon textil",
    ore_lucru: "1,5",
    consumabile: 15,
    multiplicabil: "da"
  },
  {
    serviciu: "curățare plafon alcantara",
    ore_lucru: 2,
    consumabile: 20,
    multiplicabil: "da"
  },
  {
    serviciu: "curățare centuri de siguranță",
    ore_lucru: 3,
    consumabile: 40,
    multiplicabil: "da"
  },
  {
    serviciu: "curățare planșă de bord și consolă centrală",
    ore_lucru: "0,5",
    consumabile: 15,
    multiplicabil: "da"
  },
  {
    serviciu: "curățare mânere, butoane, ornamente / inserții plastic",
    ore_lucru: "0,3",
    consumabile: 10,
    multiplicabil: "da"
  },
  {
    serviciu: "curățare compartimente (uși, cotieră, torpedou)",
    ore_lucru: "1,5",
    consumabile: 15,
    multiplicabil: "da"
  },
  {
    serviciu: "tratament de protecție uv elemente din plastic / cauciuc",
    ore_lucru: 1,
    consumabile: 20,
    multiplicabil: "da"
  },
  {
    serviciu: "curățare suprafețe vitrate",
    ore_lucru: "0,7",
    consumabile: 40,
    multiplicabil: "da"
  },
  {
    serviciu: "curățare pedale",
    ore_lucru: "0,5",
    consumabile: 15,
    multiplicabil: "da"
  },
  {
    serviciu: "curățare păr de nimale",
    ore_lucru: "1,5",
    consumabile: 10,
    multiplicabil: "da"
  },
  {
    serviciu: "curățare gumă de mestecat",
    ore_lucru: "0,25",
    consumabile: 15,
    multiplicabil: "da"
  }
]