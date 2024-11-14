import ApiModel from "../core/ApiModel";

export default class TestApi extends ApiModel {
  constructor(cookieUser) {
    super(cookieUser);
    this.resourceUrl = 'check';
  }

  async check(payload) {
    return await this.http.post(`${this.resourceUrl}/check`, payload);
  }
}