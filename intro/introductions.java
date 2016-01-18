import java.io.Console;
	
public class Introductions{

	public static void main(String[] args) {

		String firstName= "Sam";
		Console console = System.console();
		console.printf("Hello my name is %s\n", firstName);
		console.printf("%s is learning java!\n", firstName);
	}

}