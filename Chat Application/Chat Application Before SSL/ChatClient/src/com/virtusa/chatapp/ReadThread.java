package com.virtusa.chatapp;

import java.io.*;
import java.net.*;

public class ReadThread extends Thread {

    private BufferedReader bufferedReader;
    private Socket socket;
    private ChatClient chatClient;

    public ReadThread(Socket socket, ChatClient chatClient) {
        this.socket = socket;
        this.chatClient = chatClient;

        try {
            InputStream inputStream = socket.getInputStream();
            bufferedReader = new BufferedReader(new InputStreamReader(inputStream));
        } catch (IOException ex) {
            System.out.println("Error Getting InputStream : " + ex.getMessage());
            ex.printStackTrace();
        }
    }

    public void run() {
        while (true) {
            try {
                String response = bufferedReader.readLine();
                System.out.println("\n" + response);

                if (response.equals("Username is already Taken. Connect with Different Username.")) {
                    this.interrupt();
                    System.exit(0);
                } else if (response.equals("User " + chatClient.getUserName() + " has Quitted.")) {
                    this.interrupt();
                    System.exit(0);
                }

                if (chatClient.getUserName() != null) {
                    System.out.print("[" + chatClient.getUserName() + "] : ");
                }
            } catch (IOException ex) {
                System.out.println("Error Reading from Server : " + ex.getMessage());
                ex.printStackTrace();
                break;
            }
        }
    }
}