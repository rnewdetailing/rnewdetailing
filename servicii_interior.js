const data_interior = [
  {
    serviciu: "Aspirare mochetă",
    ore_lucru: "0,5",
    consumabile: 20,
    multiplicabil: "DA"
  },
  {
    serviciu: "Aspirare preșuri",
    ore_lucru: "0,66",
    consumabile: 18,
    multiplicabil: "DA"
  },
  {
    serviciu: "Aspirare scaune și banchetă",
    ore_lucru: "0,5",
    consumabile: 16,
    multiplicabil: "DA"
  },
  {
    serviciu: "Aspirare portbagaj",
    ore_lucru: "0,25",
    consumabile: 10,
    multiplicabil: "DA"
  },
  {
    serviciu: "Curățare mochetă (standard)",
    ore_lucru: "1,5",
    consumabile: 35,
    multiplicabil: "DA"
  },
  {
    serviciu: "Curățare mochetă (detaliată)",
    ore_lucru: "3",
    consumabile: 55,
    multiplicabil: "DA"
  },
  {
    serviciu: "Curățare preșuri de cauciuc",
    ore_lucru: "0,7",
    consumabile: 20,
    multiplicabil: "DA"
  },
  {
    serviciu: "Curățare preșuri textile (standard)",
    ore_lucru: "1",
    consumabile: 25,
    multiplicabil: "DA"
  },
  {
    serviciu: "Curățare preșuri textile (detaliată)",
    ore_lucru: "2",
    consumabile: 40,
    multiplicabil: "DA"
  },
  {
    serviciu: "Suflare cu aer comprimat a habitaclului",
    ore_lucru: "1",
    consumabile: 30,
    multiplicabil: "DA"
  },
  {
    serviciu: "Curățare scaune și banchetă - textile (standard)",
    ore_lucru: "2",
    consumabile: 60,
    multiplicabil: "DA"
  },
  {
    serviciu: "Curățare scaune și banchetă - piele (standard)",
    ore_lucru: "2",
    consumabile: 75,
    multiplicabil: "DA"
  },
  {
    serviciu: "Curățare scaune și banchetă - textile (detaliată)",
    ore_lucru: "4",
    consumabile: 80,
    multiplicabil: "DA"
  },
  {
    serviciu: "Curățare scaune și banchetă - piele (detaliată)",
    ore_lucru: "4",
    consumabile: 95,
    multiplicabil: "DA"
  },
  {
    serviciu: "Curățare panouri laterale - textile (standard)",
    ore_lucru: "1",
    consumabile: 40,
    multiplicabil: "DA"
  },
  {
    serviciu: "Curățare panouri laterale - piele (standard)",
    ore_lucru: "1",
    consumabile: 50,
    multiplicabil: "DA"
  },
  {
    serviciu: "Curățare panouri laterale - textile (detaliată)",
    ore_lucru: "2",
    consumabile: 80,
    multiplicabil: "DA"
  },
  {
    serviciu: "Curățare panouri laterale - piele (detaliată)",
    ore_lucru: "2",
    consumabile: 100,
    multiplicabil: "DA"
  },
  {
    serviciu: "Tratament de hidratare și protectejare dedicat suprafețelor din piele",
    ore_lucru: "1,5",
    consumabile: 120,
    multiplicabil: "DA"
  },
  {
    serviciu: "Curățare planșă de bord și consolă centrală (standard)",
    ore_lucru: "0,25",
    consumabile: 12,
    multiplicabil: "DA"
  },
  {
    serviciu: "Curățare mânere, butoane, ornamente (standard)",
    ore_lucru: "0,25",
    consumabile: 15,
    multiplicabil: "DA"
  },
  {
    serviciu: "Curățare planșă de bord și consolă centrală (detaliată)",
    ore_lucru: "1",
    consumabile: 17,
    multiplicabil: "DA"
  },
  {
    serviciu: "Curățare mânere, butoane și ornamente (detaliată)",
    ore_lucru: "1",
    consumabile: 20,
    multiplicabil: "DA"
  },
  {
    serviciu: "Hidratare și protejare suprafețe din plastic / cauciuc",
    ore_lucru: "1",
    consumabile: 15,
    multiplicabil: "DA"
  },
  {
    serviciu: "Curățare compartimente (uși, cotieră, torpedou) (standard)",
    ore_lucru: "0,75",
    consumabile: 20,
    multiplicabil: "DA"
  },
  {
    serviciu: "Curățare compartimente (uși, cotieră, torpedou) (detaliată)",
    ore_lucru: "1,5",
    consumabile: 30,
    multiplicabil: "DA"
  },
  {
    serviciu: "Curățare portbagaj (simplă)",
    ore_lucru: "0,5",
    consumabile: 37,
    multiplicabil: "DA"
  },
  {
    serviciu: "Curățare portbagaj (detaliată)",
    ore_lucru: "1,5",
    consumabile: 48,
    multiplicabil: "DA"
  },
  {
    serviciu: "Curățare volan - spuma/plastic",
    ore_lucru: "0,25",
    consumabile: 10,
    multiplicabil: "DA"
  },
  {
    serviciu: "Curățare volan - piele",
    ore_lucru: "0,5",
    consumabile: 20,
    multiplicabil: "DA"
  },
  {
    serviciu: "Curățare plafon textil",
    ore_lucru: "1",
    consumabile: 35,
    multiplicabil: "DA"
  },
  {
    serviciu: "Curățare plafon alcantara",
    ore_lucru: "2",
    consumabile: 75,
    multiplicabil: "DA"
  },
  {
    serviciu: "Curățare centuri de siguranță",
    ore_lucru: "1",
    consumabile: 25,
    multiplicabil: "DA"
  },
  {
    serviciu: "Curățare suprafețe vitrate",
    ore_lucru: "0,75",
    consumabile: 16,
    multiplicabil: "DA"
  },
  {
    serviciu: "Curățare pedale",
    ore_lucru: "0,25",
    consumabile: 10,
    multiplicabil: "DA"
  },
  {
    serviciu: "Curățare păr de animale",
    ore_lucru: "1,5",
    consumabile: 15,
    multiplicabil: "DA"
  },
  {
    serviciu: "Curățare gumă de mestecat",
    ore_lucru: "0,5",
    consumabile: 12,
    multiplicabil: "DA"
  },
  {
    serviciu: "Curățare pată",
    ore_lucru: "1",
    consumabile: 18,
    multiplicabil: "DA"
  },
  {
    serviciu: "Curățare mochetă portbagaj",
    ore_lucru: "1",
    consumabile: 25,
    multiplicabil: "DA"
  },
  {
    serviciu: "Demontare scaune și banchetă",
    ore_lucru: "1,5",
    consumabile: 5,
    multiplicabil: "DA"
  }
]