import ApiModel from "../core/ApiModel";

export default class CitiesApi extends ApiModel {
  constructor(cookieUser) {
    super(cookieUser);
    this.resourceUrl = 'cities';
  }

  async getCitiesList() {
    return await this.http.get(`${this.resourceUrl}`);
  }

  async createNewCity(payload) {
    return await this.http.post(`${this.resourceUrl}`, payload);
  }

  async getCityByID(id) {
    return await this.http.post(`${this.resourceUrl}${id}`);
  }

  async updateCityPut(id) {
    return await this.http.put(`${this.resourceUrl}${id}`);
  }

  async updateCityPatch(id) {
    return await this.http.patch(`${this.resourceUrl}${id}`);
  }

  async deleteCity(id) {
    return await this.http.delete(`${this.resourceUrl}${id}`);
  }
}