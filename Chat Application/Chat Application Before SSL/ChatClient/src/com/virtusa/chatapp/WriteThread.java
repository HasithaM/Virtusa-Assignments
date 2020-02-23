package com.virtusa.chatapp;

import java.io.*;
import java.net.*;
import java.util.Scanner;

public class WriteThread extends Thread {

    private Socket socket;
    private PrintWriter printWriter;
    private ChatClient chatClient;

    public WriteThread(Socket socket, ChatClient chatClient) {
        this.socket = socket;
        this.chatClient = chatClient;

        try {
            OutputStream outputStream = socket.getOutputStream();
            printWriter = new PrintWriter(outputStream, true);
        } catch (IOException ex) {
            System.out.println("Error Getting Outputstream : " + ex.getMessage());
            ex.printStackTrace();
        }
    }

    public void run() {
        try {
            printWriter.println(chatClient.getUserName());

            Scanner console = new Scanner(System.in);

            String messageText;

            do {
                messageText = console.nextLine();
                printWriter.println(messageText);
            } while (!messageText.equals("quit"));
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}