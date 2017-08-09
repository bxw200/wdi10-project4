const initialState = [];//getcats();

export default function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_CATEGORY':
      return addCategory(state, action.payload);
    case 'ADD_CATEGORIES':
      return addCategories(state, action.payload);
    default:
      return state;
  }
}

function addCategory(state, payload){
  return [...state, payload];
}

function addCategories(state, payload){
  return [...state, ...payload];
}

function getcats(){
  const catJSON = localStorage.getItem('categories');
  let cats = [];
  try {
    cats = JSON.parse(catJSON);
  } catch (e) {
    console.error("Could not decode categories from localStorage. "+ e);
  }
  return Array.isArray(cats) ? cats : [];
}
