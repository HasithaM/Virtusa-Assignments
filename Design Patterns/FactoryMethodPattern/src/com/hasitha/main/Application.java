package com.hasitha.main;

public class Application {

    public static void main(String[] args) {
        Package bronzePackage = PackageFactory.createPackage(PackageCode.BRONZE);
        System.out.println(bronzePackage);

        Package silverPackage = PackageFactory.createPackage(PackageCode.SILVER);
        System.out.println(silverPackage);

        Package goldPackage = PackageFactory.createPackage(PackageCode.GOLD);
        System.out.println(goldPackage);

        Package platinumPackage = PackageFactory.createPackage(PackageCode.PLATINUM);
        System.out.println(platinumPackage);
    }
}
