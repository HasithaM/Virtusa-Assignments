public class ExceptionExampleOne {

    public static void main(String[] args) {
        try {
            int divide = 100 / 0;
        } catch (ArithmeticException ex) {
            System.out.println(ex);
        }
    }
}
