package com.hasitha.main;

public class Application {

    public static void main(String[] args) {
        CareTaker careTaker = new CareTaker();
        Assembling assembling = new Assembling();

        assembling.addAccessories(new PhoneAccessories("CPU"));
        assembling.addAccessories(new PhoneAccessories("RAM"));
        careTaker.save(assembling);
        System.out.println(assembling);

        assembling.addAccessories(new PhoneAccessories("Display"));
        careTaker.save(assembling);
        System.out.println(assembling);

        assembling.addAccessories(new PhoneAccessories("Camera"));
        careTaker.save(assembling);
        System.out.println(assembling);

        assembling.addAccessories(new PhoneAccessories("Battery"));
        // careTaker.save(assembling);
        System.out.println(assembling);


        // Revert
        careTaker.revert(assembling);
        System.out.println(assembling);

        assembling.addAccessories(new PhoneAccessories("Speakers"));
        // careTaker.save(assembling);
        System.out.println(assembling);

        careTaker.revert(assembling);
        System.out.println(assembling);

        careTaker.revert(assembling);
        System.out.println(assembling);

        careTaker.revert(assembling);
        System.out.println(assembling);

        careTaker.revert(assembling);
        System.out.println(assembling);
    }
}
