public class MainClass {

    public static void numberAddition(int x, int y) throws CustomException {
        int total = x + y;

        if (total <= 0) {
            throw new CustomException("Invalid");
        } else {
            System.out.println("Sum is : " + total);
        }
    }

    public static void main(String[] args) {
        try {
            numberAddition(-1, -5);
        } catch (CustomException ex) {
            System.out.println("Exception Occured: " + ex);
        }
    }
}
