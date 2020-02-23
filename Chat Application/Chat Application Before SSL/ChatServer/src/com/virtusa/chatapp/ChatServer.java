package com.virtusa.chatapp;

import java.io.IOException;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.*;
import java.util.stream.Collectors;

public class ChatServer {

    private int portNumber;
    private Map<String, UserThread> userNames = new HashMap<>();
    private Set<UserThread> userThreads = new HashSet<>();

    public ChatServer(int portNumber) {
        this.portNumber = portNumber;
    }

    public void execute() {
        try (ServerSocket serverSocket = new ServerSocket(portNumber)) {
            System.out.println("Chat Server is Listening on Port : " + portNumber);

            while (true) {
                Socket socket = serverSocket.accept();
                System.out.println("New User Connected...");

                UserThread userThread = new UserThread(socket, this);
                userThreads.add(userThread);
                userThread.setClientIpAddress(socket.getInetAddress().getHostAddress());
                userThread.start();
            }
        } catch (IOException ex) {
            System.out.println("Error in the Server : " + ex.getMessage());
            ex.printStackTrace();
        }
    }

    public void broadcast(String message, UserThread excludeUser) {
        for (UserThread userName : userThreads) {
            if (userName != excludeUser) {
                userName.sendMessage(message);
            }
        }
    }

    public void broadcastToSpecificUser(String message, UserThread userThread) {
        for (UserThread userName : userThreads) {
            if (userName == userThread) {
                userName.sendMessage(message);
            }
        }
    }

    public boolean broadcastPrivateChat(String message, String userName, String senderUserName) {
        if (userNames.containsKey(userName)) {
            UserThread userThread = userNames.get(userName);

            userThread.sendMessage("[" + senderUserName + "]: " + message);
        } else {
            return false;
        }

        return true;
    }

    public List<String> getUserNames() {
        return userNames.entrySet().stream().map(Map.Entry::getKey).collect(Collectors.toList());
    }

    public boolean hasUsers() {
        return !this.userNames.isEmpty();
    }

    public boolean addUserName(String userName, UserThread userThread) {
        if (!userNames.containsKey(userName)) {
            userNames.put(userName, userThread);
        } else {
            return false;
        }

        return true;
    }

    public void removeOnlyUserThread(UserThread userThread) {
        userThreads.remove(userThread);
        System.out.println("The User Quitted");
    }

    public void removeUser(String userName, UserThread userThread) {
        boolean removed = removeUserName(userName, userThread);

        if (removed) {
            userThreads.remove(userThread);
            System.out.println("The User " + userName + " Quitted");
        }
    }

    public boolean removeUserName(String userName, UserThread userThread) {
        if (!userNames.remove(userName, userThread)) {
            return false;
        }

        return true;
    }

    public static void main(String[] args) {
        int userEnteredPort = 8595;

        if (args.length >= 1) {
            userEnteredPort = Integer.parseInt(args[0]);
        }

        ChatServer server = new ChatServer(userEnteredPort);
        server.execute();
    }
}