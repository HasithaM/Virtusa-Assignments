package com.hasitha.main;

public class MusicPlayer {

    private static volatile MusicPlayer musicPlayer;
    private static volatile String song;

    private MusicPlayer() {
        if (musicPlayer != null) {
            throw new RuntimeException("Please use getMusicPlayer method!");
        }
    }

    public static MusicPlayer getMusicPlayer() {
        if (musicPlayer == null) {
            synchronized (MusicPlayer.class) {
                if (musicPlayer == null) {
                    musicPlayer = new MusicPlayer();
                }
            }
        }

        return musicPlayer;
    }

    public String playSong() {
        if (song == null) {
            synchronized (MusicPlayer.class) {
                if (song == null) {
                    song = "Programming.mp3";
                }
            }
        }

        return song;
    }
}
