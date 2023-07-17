package guga;

import java.util.Scanner;

public class Pitag {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		double a, b, c, re1, re2, re3;
		double rf1, rf2, rf3;
		

		System.out.println("- Calculadora de Pitagoras, usada para calcular triangulos retangulos");
		System.out.println("- Caso voce não tenha um valor solicitado pelo programa, digite 0");
		
		System.out.println("\nDigite A, hipotenusa: ");
		a = sc.nextDouble();
		
		System.out.println("Digite B, cateto maior: ");
		b = sc.nextDouble();
		if (b < a || a == 0) {
			
		} else {
			System.out.println("O cateto maior não pode ser maior que a hipotenusa! ");
			System.exit(0);
		}
		
		System.out.println("Digite C, cateto menor: ");
		c = sc.nextDouble();
		if (c < b || b == 0) {
			
		} else { 
			System.out.println("O cateto menor não pode ser maior que o cateto maior! ");
			System.exit(0);
		}

		if ( a == 0 ) {
			re1 = b*b + c*c;
			double raz1 = Math.sqrt(re1);
			System.out.println("A, Hipotenusa é " + raz1);
		} else {
			if (c == 0) {
				re2 = a * a - b*b;
				double raz2 = Math.sqrt(re2);
				System.out.println("B, Cateto maior é "+ raz2);
			} else {
				if (b == 0) {
					re3 = a * a - c*c;
					double raz3 = Math.sqrt(re3);
					System.out.println("C, Cateto menor é "+ raz3);
				}
			}
		}
	}

}
