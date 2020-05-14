package com.hasitha.main;

public class Application {

    public static void main(String[] args) {
        long startTime;
        long endTime;

        startTime = System.currentTimeMillis();
        MusicPlayer musicPlayerOne = MusicPlayer.getMusicPlayer();
        endTime = System.currentTimeMillis();

        System.out.println("Time Elapsed musicPlayerOne: " + (endTime - startTime));

        startTime = System.currentTimeMillis();
        MusicPlayer musicPlayerTwo = MusicPlayer.getMusicPlayer();
        endTime = System.currentTimeMillis();

        System.out.println("Time Elapsed musicPlayerTwo: " + (endTime - startTime));

        String songName = musicPlayerOne.playSong();

        System.out.println("Now Playing in musicPlayerOne: " + songName);
    }
}