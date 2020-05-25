package com.hasitha.main;

import java.util.Stack;

public class CareTaker {

    Stack<Assembling.AssemblingMemento> historyList = new Stack<>();

    public void save(Assembling assembling) {
        historyList.push(assembling.save());
    }

    public void revert(Assembling assembling) {
        if (!historyList.isEmpty())
            assembling.revert(historyList.pop());
        else
            System.out.println("Cannot Perform Undo");
    }
}
