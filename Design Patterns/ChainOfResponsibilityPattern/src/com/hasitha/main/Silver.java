package com.hasitha.main;

public class Silver extends Handler {

    @Override
    public double applyPoints(User user) {
        user.setPoints(user.getScore());

        System.out.println("SILVER REWARD!");

        if (user.getScore() < 8000 && user.getScore() >= 6000) {
            return user.getPoints();
        } else {
            return successor.applyPoints(user);
        }
    }
}
