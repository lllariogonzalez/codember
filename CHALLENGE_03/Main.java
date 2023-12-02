import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;

public class Main {

    public static void main(String[] args) {
        try {
            List<String> passwords = Files.readAllLines(Paths.get("encryption_policies.txt"), StandardCharsets.UTF_8);
            List<String> invalidPasswordsCount = new ArrayList<>();

            for (String password : passwords) {
                if (!isValidPassword(password)) {
                    invalidPasswordsCount.add(password);
                }
            }

            System.out.println("Clave inválida número 42 es: " + invalidPasswordsCount.get(41).split(": ")[1]);
            System.out.println("Clave inválida número 13 es: " + invalidPasswordsCount.get(12).split(": ")[1]);

        } catch (IOException e) {
            System.err.println("Error al leer el archivo: " + e.getMessage());
        }
    }

    public static boolean isValidPassword(String passwordPolicy) {
        String[] parts = passwordPolicy.split(": ");
        String[] policy = parts[0].split(" ");
        String[] range = policy[0].split("-");
        
        int min = Integer.parseInt(range[0]);
        int max = Integer.parseInt(range[1]);
        char character = policy[1].charAt(0);
        String password = parts[1];

        long count = password.chars().filter(ch -> ch == character).count();
        return count >= min && count <= max;
    }
}

