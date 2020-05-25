package com.hasitha.main;

import java.util.ArrayList;

// Originator
public class Assembling {

    ArrayList<PhoneAccessories> accessoriesList = new ArrayList<>();

    public void addAccessories(PhoneAccessories phoneAccessories) {
        accessoriesList.add(phoneAccessories);
    }

    public ArrayList<PhoneAccessories> getAccessory() {
        return (ArrayList<PhoneAccessories>) accessoriesList.clone();
    }

    public AssemblingMemento save() {
        return new AssemblingMemento(getAccessory());
    }

    public void revert(AssemblingMemento assemblingMemento) {
        accessoriesList = assemblingMemento.getAccessory();
    }

    @Override
    public String toString() {
        return "Assembling{" +
                "accessoriesList=" + accessoriesList +
                '}';
    }

    static class AssemblingMemento {
        ArrayList<PhoneAccessories> phoneAccessoriesList;

        public AssemblingMemento(ArrayList<PhoneAccessories> phoneAccessoriesList) {
            this.phoneAccessoriesList = phoneAccessoriesList;
        }

        private ArrayList<PhoneAccessories> getAccessory() {
            return phoneAccessoriesList;
        }
    }
}
