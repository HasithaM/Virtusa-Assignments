public class StarPattern {
	
	public static void main(String[] args) {
		for (int i = 0; i < 10; i++) {
		    for (int j = 10; j > i; j--) {
			System.out.print(" ");
		    }

		    for (int k = 0; k < (i * 2) - 1; k++) {
			System.out.print("*");
		    }
		    System.out.println();
        	}

		for (int i = 10; i > 0; i--) {
		    for (int j = 10; j > i; j--) {
			System.out.print(" ");
		    }

		    for (int k = 0; k < (i * 2) - 1; k++) {
			System.out.print("*");
		    }
		    System.out.println();
		}
	}
}
