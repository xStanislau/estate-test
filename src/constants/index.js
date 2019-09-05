export default {
  header: {
    menu: {
      items: [
        { text: "Продажа", link: "/sales" },
        { text: "Аренда", link: "/rent" },
        { text: "Посёлки", link: "/towns" },
        { text: "О компании", link: "/about" }
      ]
    },
    phoneNumber: "+7(495)432-45-45",
    buttonText: "Обратный звонок"
  },
  warning: "Нет объектов",
  api: {
    baseUrl: "https://api.jqestate.ru",
    baseImgUrl: "https://images.jqestate.ru"
  },
  queryOptions: {
    rent: [
      {
        type: "filterNot",
        property: "rentOffer.isDisabled",
        value: "true"
      },
      {
        type: "filter",
        property: "rentOffer.price",
        value: "0.."
      }
    ],
    sales: [
      {
        type: "filterNot",
        property: "saleOffer.isDisabled",
        value: "true"
      },
      {
        type: "filter",
        property: "saleOffer.price",
        value: "0.."
      }
    ],
    pagination: { type: "pagination", property: "offset", value: 0 }
  }
};
