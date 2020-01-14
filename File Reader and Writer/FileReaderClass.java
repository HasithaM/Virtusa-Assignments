import java.io.*;

public class FileReaderClass {
	
	public void readFile() throws FileNotFoundException, IOException {
		FileReader fileReader = new FileReader("SampleText.txt");
		
		BufferedReader bufferedReader = new BufferedReader(fileReader);
        
    String line;
        
    while ((line = bufferedReader.readLine()) != null) {
        System.out.println(line);
    }
		
		bufferedReader.close();
		fileReader.close();
	}
	
	public static void main(String[] args) throws FileNotFoundException, IOException {
		FileReaderClass fileReaderClass = new FileReaderClass();
		fileReaderClass.readFile();
	}
}
