package com.virtusa.chatapp;

import java.io.*;
import java.net.Socket;
import java.util.Arrays;

public class UserThread extends Thread {

    private Socket socket;
    private ChatServer chatServer;
    private PrintWriter printWriter;
    private String clientIpAddress;

    public UserThread(Socket socket, ChatServer server) {
        this.socket = socket;
        this.chatServer = server;
    }

    public void run() {
        try {
            InputStream input = socket.getInputStream();
            BufferedReader reader = new BufferedReader(new InputStreamReader(input));

            OutputStream output = socket.getOutputStream();
            printWriter = new PrintWriter(output, true);

            String serverMessage;

            String userName = reader.readLine();

            boolean userStatus = chatServer.addUserName(userName, this);

            if (userStatus == true) {
                serverMessage = "You are Connected with the Username : " + userName;
                chatServer.broadcastToSpecificUser(serverMessage, this);

                /*serverMessage = "New User Connected : " + userName;
                server.broadcast(serverMessage, this);*/

                String clientMessage;

                do {
                    clientMessage = reader.readLine();

                    serverMessage = "[" + userName + "]: " + clientMessage;

                    isCommand(clientMessage, serverMessage, chatServer, userName);
                } while (!clientMessage.equals("quit"));

                chatServer.removeUser(userName, this);
                socket.close();

                serverMessage = "User " + userName + " has Quitted.";
                chatServer.broadcast(serverMessage, this);
            } else {
                serverMessage = "Username is already Taken. Connect with Different Username.";
                chatServer.broadcastToSpecificUser(serverMessage, this);
                chatServer.removeOnlyUserThread(this);
                socket.close();
            }
        } catch (IOException ex) {
            System.out.println("Error in UserThread : " + ex.getMessage());
            ex.printStackTrace();
        }
    }

    public void printUsers() {
        if (chatServer.hasUsers()) {
            printWriter.println("Connected Users : " + chatServer.getUserNames());
        } else {
            printWriter.println("No Other Users Connected");
        }
    }

    public void isCommand(String clientMessage, String serverMessage, ChatServer server, String senderUserName) {
        int index = clientMessage.indexOf(' ');

        if (Arrays.stream(Commands.getAllServerCommands()).parallel().anyMatch(clientMessage::contains)) {
            if (index > -1) {
                if (clientMessage.contains("->")) {
                    if (clientMessage.substring(0, index).trim().equals("send")) {
                        String userName = clientMessage.substring(clientMessage.indexOf("[") + 1, clientMessage.indexOf("]"));

                        String message = clientMessage.substring(clientMessage.lastIndexOf("]") + 1);

                        boolean sentStatus = server.broadcastPrivateChat(message, userName, senderUserName);

                        if (!sentStatus) {
                            printWriter.println("No User. Try Again!");
                        }
                    }
                } else if (clientMessage.contains("commands")) {
                    printWriter.println(Commands.chatApplicationGuide());
                }
            } else {
                if (clientMessage.equals("list")) {
                    printUsers();
                } else if (clientMessage.equals("commands")) {
                    printWriter.println(Commands.chatApplicationGuide());
                }
            }
        } else {
            server.broadcast(serverMessage, this);
        }
    }

    public void sendMessage(String message) {
        printWriter.println(message);
    }

    public String getClientIpAddress() {
        return clientIpAddress;
    }

    public void setClientIpAddress(String clientIpAddress) {
        this.clientIpAddress = clientIpAddress;
    }
}