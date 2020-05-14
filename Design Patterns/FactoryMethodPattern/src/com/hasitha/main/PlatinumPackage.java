package com.hasitha.main;

public class PlatinumPackage extends Package {

    @Override
    protected void createPackage() {
        computerList.add(new SuperComputer());
        computerList.add(new MainframeComputer());
        computerList.add(new MiniComputer());
        computerList.add(new MicroComputer());
    }
}
