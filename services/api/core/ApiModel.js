/* eslint-disable */

import Http from "../../http";

export default class ApiModel {
  constructor() {
    this.resourceUrl = null;
    this.http = new Http();
  }

  async getList(params={}) {
    return await this.http.get(`${this.resourceUrl}`, params);
  }

  async get(params={}) {
    return await this.http.get(`${this.resourceUrl}/list`, params);
  }

  async getById(id) {
    return await this.http.get(`${this.resourceUrl}/${id}`);
  }

  async getForEdit(id) {
    return await this.http.get(`${this.resourceUrl}/edit/${id}`);
  }

  async create(payload) {
    return await this.http.post(this.resourceUrl, payload);
  }

  async update(id, payload) {
    return await this.http.put(`${this.resourceUrl}/${id}`, payload);
  }

  async delete(id) {
    return await this.http.delete(`${this.resourceUrl}/${id}`);
  }
}
