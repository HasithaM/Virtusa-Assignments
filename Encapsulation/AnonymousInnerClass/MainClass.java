abstract class Example {

    abstract void exampleMethod();
}

class MainClass {

    public static void main(String args[]) {
		
		Example example = new Example() {
            @Override
            public void exampleMethod() {
                System.out.println("Inside Example Method");
            }
        };
        example.exampleMethod();
    }
}
