package com.hasitha.main;

public class Points extends Handler {

    @Override
    public double applyPoints(User user) {
        return successor.applyPoints(user);
    }
}
