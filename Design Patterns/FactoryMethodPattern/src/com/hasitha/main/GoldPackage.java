package com.hasitha.main;

public class GoldPackage extends Package {

    @Override
    protected void createPackage() {
        computerList.add(new MainframeComputer());
        computerList.add(new MiniComputer());
        computerList.add(new MicroComputer());
    }
}
