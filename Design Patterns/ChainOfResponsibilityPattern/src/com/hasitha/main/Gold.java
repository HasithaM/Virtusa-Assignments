package com.hasitha.main;

public class Gold extends Handler {

    @Override
    public double applyPoints(User user) {
        user.setPoints(user.getScore());

        System.out.println("GOLD REWARD!");

        if (user.getScore() < 10000 && user.getScore() >= 8000) {
            return user.getPoints();
        } else {
            return successor.applyPoints(user);
        }
    }
}
