package com.hasitha.main;

public class User {

    private String username;
    private double points;
    private double score;

    public User(String username, double score) {
        this.username = username;
        this.score = score;
    }

    public String getUsername() {
        return username;
    }

    public double getPoints() {
        return points;
    }

    public double getScore() {
        return score;
    }

    public void setPoints(double points) {
        this.points = points;
    }
}
