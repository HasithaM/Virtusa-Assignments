import java.util.Scanner;

public class ReverseNumber {
	
	public static void main(String[] args) {
		int enteredNumber = 0, reversedNumber = 0;
		
		Scanner scanner = new Scanner(System.in);
		
		System.out.println("Enter a Number to Reverse : ");
		
		enteredNumber = scanner.nextInt();
		
		while(enteredNumber > 0) {
			int modulus = enteredNumber % 10;
			reversedNumber = (reversedNumber * 10) + modulus;
			enteredNumber = enteredNumber / 10;
		}
		
		System.out.println("Reversed Number is : " + reversedNumber);
	}
}
