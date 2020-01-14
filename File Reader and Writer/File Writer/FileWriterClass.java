import java.io.*;

public class FileWriterClass {
	
	private static String textToWrite = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

    public void writeToFile() throws IOException {
        File file = new File("SampleText.txt");

        if (!file.exists()) {
            file.createNewFile();
        }

		FileWriter fileWriter = new FileWriter(file);
        BufferedWriter bufferedWriter = new BufferedWriter(fileWriter);
        bufferedWriter.write(textToWrite);

        bufferedWriter.close();
        fileWriter.close();
    }

    public static void main(String[] args) throws IOException {
        FileWriterClass fileWriterClass = new FileWriterClass();
        fileWriterClass.writeToFile();
    }
}
