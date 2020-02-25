package com.virtusa.chatapp;

import com.sun.net.httpserver.*;

import javax.net.ssl.*;
import java.io.*;
import java.net.*;
import java.lang.*;
import java.security.KeyStore;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class HTTPSChatServer {

    private static String ipAddress = "127.0.0.1";
    private static int portNumber = 8595;

    private static HashMap<String, ArrayList<String>> usersList = new HashMap<>();

    public static class RegisterUser implements HttpHandler {
        @Override
        public void handle(HttpExchange httpExchange) throws IOException {
            URI uri = httpExchange.getRequestURI();
            String query = uri.getRawQuery();

            String userName = query.substring(query.indexOf("=") + 1, query.length());

            String serverMessage = "";

            if (usersList.keySet().stream().anyMatch(userName::equals)) {
                serverMessage = "Username is already Taken. Connect with Different Username.";
            } else {
                usersList.put(userName, new ArrayList<>());
                serverMessage = "You are Connected with the Username : " + userName;
            }

            httpExchange.sendResponseHeaders(200, serverMessage.length());
            OutputStream outputStream = httpExchange.getResponseBody();
            outputStream.write(serverMessage.getBytes());

            outputStream.close();
        }
    }


    public static class ListUsers implements HttpHandler {
        @Override
        public void handle(HttpExchange httpExchange) throws IOException {
            URI uri = httpExchange.getRequestURI();
            String query = uri.getRawQuery();

            String userName = query.substring(query.indexOf("=") + 1, query.length());

            StringBuilder stringBuilder = new StringBuilder("[ Connected Users : ");

            for (String name : usersList.keySet()) {
                if (userName.equals(name)) {
                    stringBuilder.append(" " + userName + " (You),");
                } else {
                    stringBuilder.append(" " + name + ",");
                }
            }

            stringBuilder.append(" ]");

            httpExchange.sendResponseHeaders(200, stringBuilder.toString().length());
            OutputStream outputStream = httpExchange.getResponseBody();
            outputStream.write(stringBuilder.toString().getBytes());

            outputStream.close();
        }
    }

    public static class GetPersonalMessages implements HttpHandler {
        @Override
        public void handle(HttpExchange httpExchange) throws IOException {
            URI uri = httpExchange.getRequestURI();
            String query = uri.getRawQuery();

            String userName = query.substring(query.indexOf("=") + 1, query.length());

            String serverMessage = "";

            if (usersList.get(userName).size() > 1) {
                for (String name : usersList.keySet()) {
                    if (userName.equals(name)) {
                        serverMessage += usersList.get(name).get(1);
                        usersList.get(name).set(1, "");
                    }
                }
            }

            httpExchange.sendResponseHeaders(200, serverMessage.length());
            OutputStream outputStream = httpExchange.getResponseBody();
            outputStream.write(serverMessage.getBytes());

            outputStream.close();
        }
    }

    public static class SendPersonalMessages implements HttpHandler {
        @Override
        public void handle(HttpExchange httpExchange) throws IOException {
            URI uri = httpExchange.getRequestURI();
            String query = uri.getRawQuery();

            Matcher matcher = Pattern.compile("message=(?<message>\\w*)&receiver=(?<receiver>\\w*)&sender=(?<sender>\\w*)").matcher(query);

            if (matcher.find()) {
                String message = matcher.group("message");
                String receiver = matcher.group("receiver");
                String sender = matcher.group("sender");

                /*if (receiver.equals("all")) {
                    usersList.keySet().forEach(name -> {
                        if (!sender.equals(name)) {
                            //usersList.get(name).add(0, String.valueOf(new ArrayList<String>()));
                            usersList.get(name).add(0, "[" + sender + "]" + " : " + message);
                            System.out.println(usersList);
                        }
                    });

                    String serverMessage = "";

                    httpExchange.sendResponseHeaders(200, serverMessage.length());
                    OutputStream outputStream = httpExchange.getResponseBody();
                    outputStream.write(serverMessage.getBytes());

                    outputStream.close();
                } else {*/
                usersList.keySet().forEach(name -> {
                    if (receiver.equals(name)) {
                        usersList.get(name).add(0, String.valueOf(new ArrayList<String>()));
                        usersList.get(name).add(1, "[" + sender + "]" + " : " + message);
                    }
                });

                String serverMessage = "";

                httpExchange.sendResponseHeaders(200, serverMessage.length());
                OutputStream outputStream = httpExchange.getResponseBody();
                outputStream.write(serverMessage.getBytes());

                outputStream.close();
            }
            /*}*/
        }
    }

    public static class PrintAllCommands implements HttpHandler {
        @Override
        public void handle(HttpExchange httpExchange) throws IOException {
            String serverMessage = Commands.chatApplicationGuide();

            httpExchange.sendResponseHeaders(200, serverMessage.length());
            OutputStream outputStream = httpExchange.getResponseBody();
            outputStream.write(serverMessage.getBytes());

            outputStream.close();
        }
    }

    public static class QuitUser implements HttpHandler {
        @Override
        public void handle(HttpExchange httpExchange) throws IOException {
            URI uri = httpExchange.getRequestURI();
            String query = uri.getRawQuery();

            String userName = query.substring(query.indexOf("=") + 1, query.length());

            String serverMessage = "";

            if (usersList.containsKey(userName)) {
                usersList.remove(userName);
                serverMessage = "okay";
            }

            httpExchange.sendResponseHeaders(200, serverMessage.length());
            OutputStream outputStream = httpExchange.getResponseBody();
            outputStream.write(serverMessage.getBytes());

            outputStream.close();
        }
    }

    public static void main(String[] args) {

        if (args.length >= 1) {
            if (args[0].matches("^[0-9.:]*$")) {
                String[] inputValues = args[0].split(":");

                ipAddress = inputValues[0];
                portNumber = Integer.parseInt(inputValues[1]);
            } else {
                System.err.println("Incorrect Server Details. Closing Application...");
                System.exit(0);
            }
        }

        try {
            // setup the socket address
            InetSocketAddress inetSocketAddress = new InetSocketAddress(ipAddress, portNumber);

            // initialize the HTTPS server
            HttpsServer httpsServer = HttpsServer.create(inetSocketAddress, 0);
            SSLContext sslContext = SSLContext.getInstance("TLS");

            // initialize the keystore
            char[] password = "123456".toCharArray();
            KeyStore keyStore = KeyStore.getInstance("JKS");
            FileInputStream fileInputStream = new FileInputStream("./src/server.jks");
            keyStore.load(fileInputStream, password);

            // setup the key manager factory
            KeyManagerFactory keyManagerFactory = KeyManagerFactory.getInstance("SunX509");
            keyManagerFactory.init(keyStore, password);

            // setup the trust manager factory
            TrustManagerFactory trustManagerFactory = TrustManagerFactory.getInstance("SunX509");
            trustManagerFactory.init(keyStore);

            // setup the HTTPS context and parameters
            sslContext.init(keyManagerFactory.getKeyManagers(), trustManagerFactory.getTrustManagers(), null);

            /*System.setProperty("javax.net.ssl.keyStore", "./jks/server.jks");
            System.setProperty("javax.net.ssl.keyStorePassword", "123456");
            System.setProperty("javax.net.debug", "ssl:record");*/

            httpsServer.setHttpsConfigurator(new HttpsConfigurator(sslContext) {
                public void configure(HttpsParameters httpsParameters) {
                    try {
                        // initialise the SSL context
                        SSLContext sslContext1 = getSSLContext();
                        SSLEngine sslEngine = sslContext1.createSSLEngine();
                        httpsParameters.setNeedClientAuth(false);
                        httpsParameters.setCipherSuites(sslEngine.getEnabledCipherSuites());
                        httpsParameters.setProtocols(sslEngine.getEnabledProtocols());

                        // Set the SSL parameters
                        SSLParameters sslParameters = sslContext1.getSupportedSSLParameters();
                        httpsParameters.setSSLParameters(sslParameters);
                    } catch (Exception ex) {
                        System.out.println("Failed to create HTTPS Port");
                        ex.printStackTrace();
                    }
                }
            });

            httpsServer.createContext("/messages", new GetPersonalMessages());
            httpsServer.createContext("/userlist", new ListUsers());
            httpsServer.createContext("/join", new RegisterUser());
            httpsServer.createContext("/send", new SendPersonalMessages());
            httpsServer.createContext("/commands", new PrintAllCommands());
            httpsServer.createContext("/quit", new QuitUser());

            httpsServer.setExecutor(null); // creates a default executor
            httpsServer.start();

            System.out.println("Chat Server is Listening on Port : " + portNumber);
        } catch (Exception ex) {
            System.out.println("Failed to Create HTTPS Server on Port " + 8000 + " of Given Address");
            ex.printStackTrace();
        }
    }
}