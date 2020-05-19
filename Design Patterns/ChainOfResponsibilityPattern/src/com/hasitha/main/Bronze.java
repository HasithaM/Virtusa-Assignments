package com.hasitha.main;

public class Bronze extends Handler {

    @Override
    public double applyPoints(User user) {
        user.setPoints(user.getScore());

        System.out.println("BRONZE REWARD!");

        if (user.getScore() < 6000 && user.getScore() >= 2000) {
            return user.getPoints();
        } else {
            return successor.applyPoints(user);
        }
    }
}
