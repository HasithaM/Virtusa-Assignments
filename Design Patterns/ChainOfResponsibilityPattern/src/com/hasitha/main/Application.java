package com.hasitha.main;

public class Application {

    public static void main(String[] args) {
        Platinum platinum = new Platinum();
        Gold gold = new Gold();
        Silver silver = new Silver();
        Bronze bronze = new Bronze();

        Points points = new Points();
        points.setSuccessor(bronze);
        bronze.setSuccessor(silver);
        silver.setSuccessor(gold);
        gold.setSuccessor(platinum);

        User userOne = new User("ALEX", 2500);
        System.out.println(points.applyPoints(userOne));

        User userTwo = new User("JOHN", 7200);
        System.out.println(points.applyPoints(userTwo));

        User userThree = new User("JAMES", 9500);
        System.out.println(points.applyPoints(userThree));

        User userFour = new User("ANTON", 12000);
        System.out.println(points.applyPoints(userFour));
    }
}
