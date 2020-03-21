import {AccessTokens} from './access-tokens';

export class APIResponse {
  constructor(public status: number,
              public message: string,
              public parameter: string,
              public accessTokens: AccessTokens) {
  }
}
