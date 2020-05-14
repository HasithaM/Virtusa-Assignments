package com.hasitha.main;

public class SilverPackage extends Package {

    @Override
    protected void createPackage() {
        computerList.add(new MiniComputer());
        computerList.add(new MicroComputer());
    }
}
