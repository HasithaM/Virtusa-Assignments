package com.virtusa.chatapp;

public class Commands {

    public static String[] getAllServerCommands() {
        String[] commandsList = {"commands", "list", "send ->", "quit"};
        return commandsList;
    }

    public static String chatApplicationGuide() {
        String guide =
                "| ========= Command =========| =========== Usage ===========|\n" +
                "|----------------------------|------------------------------|\n" +
                "| list                       | To get Current ChatApp Users |\n" +
                "| send -> [username] Message | To send Private Messages     |\n" +
                "| quit                       | To Quit from the ChatApp     |\n" +
                "|----------------------------|------------------------------|";

        return guide;
    }
}