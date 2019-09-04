export default {
  communicationTypes: [
    { translation: "Тип газа", communicationType: "gasSupply" },
    { translation: "Электричество", communicationType: "powerSupply" },
    { translation: "Источник воды", communicationType: "waterSupply" },
    { translation: "Канализация", communicationType: "sewerageSupply" }
  ],
  powerSupply: "кВт",

  gasSupply: {
    without_gas: "нет",
    near_border: "недалеко от трубопровода",
    mains: "магистральный газ"
  },

  sewerageSupply: {
    central: "центральная канализация"
  },

  waterSupply: {
    well: "колодец",
    central: "центральное водоснабжение"
  }
};
