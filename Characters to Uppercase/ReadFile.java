import java.io.*;

public class ReadFile extends BufferedReader {
	
	public ReadFile(Reader reader) {
		super(reader);
	}
	
	@Override
	public int read() throws IOException {
		int uppercase = super.read();

		if (97 <= uppercase && uppercase <= 122) {
		    uppercase -= 32;
		}

		return uppercase;
	}
	
	public static void main(String[] args) throws Exception {
		FileReader fileReader = new FileReader("SampleText.txt");
		ReadFile readFile = new ReadFile(fileReader);
		
		int intToChar;
		
		while((intToChar = readFile.read()) != -1) {
			System.out.print((char) intToChar);
		}
		
		readFile.close();
        	fileReader.close();
	}
}
