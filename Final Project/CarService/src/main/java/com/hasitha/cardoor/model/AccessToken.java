package com.hasitha.cardoor.model;

import lombok.Data;

@Data
public class AccessToken {

    private String access_token;
    private String token_type;
    private String refresh_token;
    private Integer expires_in;
    private String scope;

    public AccessToken() {
    }

    public AccessToken(String access_token, String token_type, String refresh_token, Integer expires_in, String scope) {
        this.access_token = access_token;
        this.token_type = token_type;
        this.refresh_token = refresh_token;
        this.expires_in = expires_in;
        this.scope = scope;
    }
}