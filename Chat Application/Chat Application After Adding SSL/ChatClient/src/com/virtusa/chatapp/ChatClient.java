package com.virtusa.chatapp;

import javax.net.ssl.SSLServerSocketFactory;
import javax.net.ssl.SSLSocket;
import javax.net.ssl.SSLSocketFactory;
import java.io.File;
import java.io.IOException;
import java.net.InetAddress;
import java.net.ServerSocket;
import java.net.Socket;
import java.net.UnknownHostException;
import java.util.Scanner;

public class ChatClient {

    private int serverPort;
    private String serverHostName;
    private String ipAddress;
    private InetAddress inetAddress;

    private String userName;
    private Scanner scanner;

    public ChatClient() {

    }

    public void execute() {
        scanner = new Scanner(System.in);

        try {
            inetAddress = InetAddress.getLocalHost();
        } catch (UnknownHostException e) {
            e.printStackTrace();
        }

        String clientAddress = inetAddress.getHostAddress();

        while (serverPort == 0 && serverHostName == null) {
            System.out.println("Hi ChatApp User, Enter the Server IP Address to Connect and Chat with Friends. (connect 0.0.0.0:0000 -> Hasitha) " +
                    "or Type 'commands' (without quotes) and Send to get ChatApp Commands.");

            try {
                String[] connectCommand = scanner.nextLine().split(" ");

                if (connectCommand != null) {
                    String[] connectAddress = connectCommand[1].split(":");
                    serverHostName = connectAddress[0];
                    serverPort = Integer.parseInt(connectAddress[1]);

                    this.setUserName(connectCommand[3]);
                    this.setIpAddress(clientAddress);
                }
            } catch (Exception e) {
                e.printStackTrace();
            }
        }

        if (serverPort != 0 && serverHostName != null) {
            try {

                System.setProperty("javax.net.ssl.trustStore", "/jks/client.jks");
                System.setProperty("javax.net.ssl.trustStorePassword", "123456");
                System.setProperty("https.protocols", "SSLv3,TLSv1,TLSv1.1,TLSv1.2");

                SSLSocketFactory sslSocketFactory = (SSLSocketFactory) SSLSocketFactory.getDefault();
                SSLSocket socket = (SSLSocket) sslSocketFactory.createSocket(serverHostName, serverPort);

                //Socket socket = new Socket(serverHostName, serverPort);
                socket.startHandshake();

                System.out.println("Connected to the Chat Server");

                new ReadThread(socket, this).start();
                new WriteThread(socket, this).start();

            } catch (UnknownHostException ex) {
                System.out.println("Server Not Found: " + ex.getMessage());
                ex.printStackTrace();
            } catch (IOException ex) {
                System.out.println("I/O Error: " + ex.getMessage());
                ex.printStackTrace();
            }
        }
    }

    public String getIpAddress() {
        return ipAddress;
    }

    public void setIpAddress(String ipAddress) {
        this.ipAddress = ipAddress;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public static void main(String[] args) {


        ChatClient client = new ChatClient();
        client.execute();
    }
}