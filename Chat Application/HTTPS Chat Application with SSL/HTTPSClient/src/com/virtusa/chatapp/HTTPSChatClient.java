package com.virtusa.chatapp;

import java.net.URL;
import java.io.*;
import java.util.Scanner;
import javax.net.ssl.HttpsURLConnection;

public class HTTPSChatClient {

    private static int serverPort = 0;
    private static String serverHostName = null;
    private static String userName = null;

    private static String BASE_URL;

    static {
        javax.net.ssl.HttpsURLConnection.setDefaultHostnameVerifier(
                new javax.net.ssl.HostnameVerifier() {
                    public boolean verify(String hostname, javax.net.ssl.SSLSession sslSession) {
                        if (hostname.equals(serverHostName)) {
                            return true;
                        }
                        return true;
                    }
                });
    }


    public static void main(String[] args) {
        System.out.println("Hi Virtusa ChatApp User, Enter the Server IP Address to Connect and Chat with Friends. (connect 0.0.0.0:0000 -> Hasitha) " +
                "\n or Type 'commands' (without quotes) and Send to get Virtusa ChatApp Commands.\n");

        Scanner scanner = new Scanner(System.in);

        while (serverPort == 0 && serverHostName == null) {
            try {
                System.setProperty("javax.net.ssl.trustStore", "./src/client.jks");
                System.setProperty("javax.net.ssl.trustStorePassword", "123456");
                //System.setProperty("javax.net.debug", "ssl:record");

                String serverConfiguration = scanner.nextLine();

                if (serverConfiguration.contains("connect") && serverConfiguration.contains("->")) {
                    String[] connectCommand = serverConfiguration.split(" ");

                    if (connectCommand != null) {
                        String[] connectAddress = connectCommand[1].split(":");
                        serverHostName = connectAddress[0];
                        serverPort = Integer.parseInt(connectAddress[1]);
                        BASE_URL = "https://" + serverHostName + ":" + serverPort + "/";

                        userName = connectCommand[3];

                        boolean status = registerUser(userName);

                        if (!status) {
                            serverHostName = null;
                            serverPort = 0;
                        }
                    }
                } else {
                    System.err.println("Incorrect Command. Please, Try Again.");
                }
            } catch (Exception ex) {
                ex.printStackTrace();
            }
        }

        if (serverPort != 0 && serverHostName != null) {
            new Thread(() -> {
                while (true) {
                    System.out.print("[" + userName + "] : ");

                    String clientCommand = scanner.nextLine();

                    if (clientCommand.equals("commands")) {
                        printAllCommands();
                    }

                    if (clientCommand.equals("list")) {
                        getOnlineUsers();
                    }

                    if (!clientCommand.equals("send") && !clientCommand.equals("->")) {
                        sendMessage(clientCommand);
                    }

                    if (clientCommand.equals("quit")) {
                        quitFromApplication();
                    }
                }
            }).start();

            new Thread(() -> {
                while (true) {
                    checkIncomingMessages();

                    try {
                        Thread.sleep(4000);
                    } catch (InterruptedException ex) {
                        ex.printStackTrace();
                    }
                }
            }).start();
        }
    }

    private static boolean registerUser(String username) {
        boolean status = false;

        try {
            URL url = new URL(BASE_URL + "join?username=" + username.trim());
            HttpsURLConnection httpsURLConnection = (HttpsURLConnection) url.openConnection();

            InputStream inputStream = httpsURLConnection.getInputStream();
            InputStreamReader inputStreamReader = new InputStreamReader(inputStream);
            BufferedReader bufferedReader = new BufferedReader(inputStreamReader);

            String serverResponse;

            while ((serverResponse = bufferedReader.readLine()) != null) {
                System.out.println(serverResponse);

                status = serverResponse.equals("Username is already Taken. Connect with Different Username.") ? false : true;
            }

            bufferedReader.close();
        } catch (Exception ex) {
            ex.printStackTrace();
        }

        return status;
    }

    private static void printAllCommands() {
        try {
            URL url = new URL(BASE_URL + "commands");
            HttpsURLConnection httpsURLConnection = (HttpsURLConnection) url.openConnection();

            InputStream inputStream = httpsURLConnection.getInputStream();
            InputStreamReader inputStreamReader = new InputStreamReader(inputStream);
            BufferedReader bufferedReader = new BufferedReader(inputStreamReader);

            String serverResponse;

            while ((serverResponse = bufferedReader.readLine()) != null) {
                System.out.println(serverResponse);
            }

            bufferedReader.close();
        } catch (Exception ex) {
            ex.printStackTrace();
        }
    }

    private static void sendMessage(String clientMessage) {
        try {
            if (clientMessage.contains("send") && clientMessage.contains("->")) {

                String receiver = clientMessage.substring(clientMessage.lastIndexOf(">") + 1);
                String message = clientMessage.substring(clientMessage.indexOf("send") + 4, clientMessage.indexOf("->"));

                String httpsURL = BASE_URL + "send?message=" + message.trim() + "&receiver=" + receiver.trim() + "&sender=" + userName;

                URL url = new URL(httpsURL);
                HttpsURLConnection httpsURLConnection = (HttpsURLConnection) url.openConnection();

                InputStream inputStream = httpsURLConnection.getInputStream();
                InputStreamReader inputStreamReader = new InputStreamReader(inputStream);
                BufferedReader bufferedReader = new BufferedReader(inputStreamReader);

                String serverResponse;

                while ((serverResponse = bufferedReader.readLine()) != null) {
                    System.out.println(serverResponse);
                }

                bufferedReader.close();
            } /*else {
                String httpsURL = BASE_URL + "send?message=" + clientMessage.trim() + "&receiver=all&sender=" + userName;

                URL url = new URL(httpsURL);
                HttpsURLConnection httpsURLConnection = (HttpsURLConnection) url.openConnection();

                InputStream inputStream = httpsURLConnection.getInputStream();
                InputStreamReader inputStreamReader = new InputStreamReader(inputStream);
                BufferedReader bufferedReader = new BufferedReader(inputStreamReader);

                String serverResponse;

                while ((serverResponse = bufferedReader.readLine()) != null) {
                    System.out.println(serverResponse);
                }

                bufferedReader.close();
            }*/
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private static void getOnlineUsers() {
        try {
            String httpsURL = BASE_URL + "userlist?username=" + userName;

            URL url = new URL(httpsURL);
            HttpsURLConnection httpsURLConnection = (HttpsURLConnection) url.openConnection();

            InputStream inputStream = httpsURLConnection.getInputStream();
            InputStreamReader inputStreamReader = new InputStreamReader(inputStream);
            BufferedReader bufferedReader = new BufferedReader(inputStreamReader);

            String serverResponse;

            while ((serverResponse = bufferedReader.readLine()) != null) {
                System.out.println(serverResponse);
            }

            bufferedReader.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private static void checkIncomingMessages() {
        try {
            String httpsURL = BASE_URL + "messages?username=" + userName;

            URL url = new URL(httpsURL);
            HttpsURLConnection httpsURLConnection = (HttpsURLConnection) url.openConnection();

            InputStream inputStream = httpsURLConnection.getInputStream();
            InputStreamReader inputStreamReader = new InputStreamReader(inputStream);
            BufferedReader bufferedReader = new BufferedReader(inputStreamReader);

            String serverResponse;

            while ((serverResponse = bufferedReader.readLine()) != null) {
                if (serverResponse != "") {
                    System.out.println("\n" + serverResponse);
                }
            }

            bufferedReader.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private static void quitFromApplication() {
        try {
            String httpsURL = BASE_URL + "quit?username=" + userName;
            URL url = new URL(httpsURL);
            HttpsURLConnection httpsURLConnection = (HttpsURLConnection) url.openConnection();

            InputStream inputStream = httpsURLConnection.getInputStream();
            InputStreamReader inputStreamReader = new InputStreamReader(inputStream);
            BufferedReader bufferedReader = new BufferedReader(inputStreamReader);

            String serverResponse;

            while ((serverResponse = bufferedReader.readLine()) != null) {
                if (serverResponse.equals("okay")) {
                    System.exit(0);
                    System.out.println("Quitted From Virtusa ChatApp");
                } else {
                    System.out.println("Error While Leaving. Try Again!");
                }
            }

            bufferedReader.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}