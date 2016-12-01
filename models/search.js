const search = {
  namespace: 'search',
  state: {
    /* initial values of state inside the model */
    criteria: '',
    searchList: [
      "Sausage",
      "Pepper",
      "Pepperoni",
      "Brocolli", 
      "Tomatoes",
      "Eggplant",
      "Meatballs",
      "Ham",
      "Pineapple",
      "Bacon"
    ]
  },
  reducers: {
    update: (data, state) => ({ criteria: data })
  }
}

module.exports = search
