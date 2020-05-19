package com.hasitha.main;

public class Platinum extends Handler {

    @Override
    public double applyPoints(User user) {
        user.setPoints(user.getScore());

        System.out.println("PLATINUM REWARD!");

        if (user.getScore() >= 10000) {
            return user.getPoints();
        } else {
            return successor.applyPoints(user);
        }
    }
}
