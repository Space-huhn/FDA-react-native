import ApiModel from "../core/ApiModel";

export default class CountriesApi extends ApiModel {
  constructor(cookieUser) {
    super(cookieUser);
    this.resourceUrl = 'countries';
  }

  async getCountriesList() {
    return await this.http.get(`${this.resourceUrl}/list`);
  }

  async getCountries() {
    return await this.http.get(`${this.resourceUrl}`);
  }

  async createCountrie(payload) {
    return await this.http.post(`${this.resourceUrl}`, payload);
  }

  async getCountrieByID(id) {
    return await this.http.post(`${this.resourceUrl}${id}`);
  }

  async updateCountriePut(id) {
    return await this.http.put(`${this.resourceUrl}${id}`);
  }

  async updateCountriePatch(id) {
    return await this.http.patch(`${this.resourceUrl}${id}`);
  }

  async deleteCountrie(id) {
    return await this.http.delete(`${this.resourceUrl}${id}`);
  }
}