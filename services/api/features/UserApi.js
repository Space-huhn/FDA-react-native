import ApiModel from "../core/ApiModel";

export default class UserApi extends ApiModel {
  constructor(cookieUser) {
    super(cookieUser);
    this.resourceUrl = 'user';
  }

  async login(payload) {
    console.log(`payload: ${payload.email}`)
    return await this.http.post(`${this.resourceUrl}/login`, {"email": payload.email, "password": payload.password});
  }

  async profile(id) {
    return await this.http.get(`${this.resourceUrl}/profile/${id}`);
  }

  async registration(payload) {
    return await this.http.post(`${this.resourceUrl}/registration`, payload);
  }

  async sendConfirmEmail(payload) {
    return await this.http.post(`${this.resourceUrl}/confirm-email`, {
      lang: payload.lang,
      token: payload.token
    });
  }

  async confirmEmail(payload) {
    return await this.http.get(`${this.resourceUrl}/confirm?token=${payload}`);
  }

  async check(payload) {
    return await this.http.post(`${this.resourceUrl}/check`, payload);
  }

  async edit(payload) {
    return await this.http.post(`${this.resourceUrl}/profile-edit`, payload);
  }
}