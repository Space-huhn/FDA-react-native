import ApiModel from "../core/ApiModel";

export default class StatesApi extends ApiModel {
  constructor(cookieUser) {
    super(cookieUser);
    this.resourceUrl = 'states';
  }

  async getStatesList() {
    return await this.http.get(`${this.resourceUrl}`);
  }

  async createNewState(payload) {
    return await this.http.post(`${this.resourceUrl}`, payload);
  }

  async getStateByID(id) {
    return await this.http.post(`${this.resourceUrl}${id}`);
  }

  async updateStatePut(id) {
    return await this.http.put(`${this.resourceUrl}${id}`);
  }

  async updateStatePatch(id) {
    return await this.http.patch(`${this.resourceUrl}${id}`);
  }

  async deleteState(id) {
    return await this.http.delete(`${this.resourceUrl}${id}`);
  }
}