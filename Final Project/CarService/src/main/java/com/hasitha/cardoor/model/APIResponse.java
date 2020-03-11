package com.hasitha.cardoor.model;

import lombok.Data;

@Data
public class APIResponse {

    private int status;
    private String message;
    private AccessToken accessTokens;

    public APIResponse() {
    }

    public APIResponse(int status, String message) {
        this.status = status;
        this.message = message;
    }

    public APIResponse(int status, String message, AccessToken accessTokens) {
        this.status = status;
        this.message = message;
        this.accessTokens = accessTokens;
    }
}