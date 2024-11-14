import CountriesApi from "./features/CountriesApi";
import StatesApi from "./features/StatesApi";
import CitiesApi from "./features/CitiesApi";
import UserApi from "./features/UserApi";
import ProductsApi from "./features/ProductsApi";


const api = {
  countries: () => new CountriesApi(),
  states: () => new StatesApi(),
  cities: () => new CitiesApi(),
  user: () => new UserApi(),
  products: () => new ProductsApi(),
}

export default api;