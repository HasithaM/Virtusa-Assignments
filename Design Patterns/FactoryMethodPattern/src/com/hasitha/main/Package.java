package com.hasitha.main;

import java.util.ArrayList;
import java.util.List;

public abstract class Package {

    protected List<Computer> computerList = new ArrayList<>();

    public Package() {
        createPackage();
    }

    protected abstract void createPackage();

    @Override
    public String toString() {
        return "Package{" +
                "computerList=" + computerList +
                '}';
    }
}
