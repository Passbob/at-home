package Home.preparation;

import java.util.Scanner;

public class Week1 {


    public static void main(String[] args) {

        Week1 test = new Week1();
        test.randombox();
        test.forAndWhileQ();
        test.treeMaker();

    }

    public void randombox(){

        int num = (int)(Math.random()*16);
        if(num >= 10){
            System.out.println("당첨입니다.");
        }else {
            System.out.println("아쉽네요.");
        }

    }


    public void forAndWhileQ(){


        Scanner sc = new Scanner(System.in);
        System.out.print("문자열 입력 : ");
        String str = sc.nextLine();

        System.out.println("================================");
        String word = "";
        for(int i = 0; i < str.length(); i++){
            char chi = str.charAt(i);
            word += chi;
            System.out.println(word);

        }

    }

    public void treeMaker(){
        Scanner sc = new Scanner(System.in);
        System.out.print("원하는 트리 높이를 숫자로 입력하세요 : ");

        int height = sc.nextInt();


        for(int i = 1; i <= height; i++){
            for(int j = height-i; j >=0; j--){
                System.out.print(" ");
            }
            for(int star = 1; star <= 1+(i-1)*2; star++){
                System.out.print("*");
            }
            System.out.println();
        }

        System.out.println();
        System.out.println("⸜(*ˊᗜˋ*)⸝ 트리가 완성되었습니다!! ");

    }



}
