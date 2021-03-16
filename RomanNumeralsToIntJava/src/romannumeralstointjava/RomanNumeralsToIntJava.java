package romannumeralstointjava;

import java.util.HashMap;
import java.util.Map;


public class RomanNumeralsToIntJava {

    
    public static int romanToInt(String s) {
        Map<Character, Integer> romanNumeralsDict = new HashMap<Character, Integer>();
        romanNumeralsDict.put('I', 1);
        romanNumeralsDict.put('V', 5);
        romanNumeralsDict.put('X', 10);
        romanNumeralsDict.put('L', 50);
        romanNumeralsDict.put('C', 100);
        romanNumeralsDict.put('D', 500);
        romanNumeralsDict.put('M', 1000);
        
        
        int total=0;
        char curr;
        int num,numNext;
        
        for(int i=0;i<s.length()-1;i++){
            curr = s.charAt(i);
            num=romanNumeralsDict.get(curr);
            numNext=romanNumeralsDict.get(s.charAt(i+1)); //minus number if < the next number e.g IV will give -1 total
            if(num < numNext){
                total=total-num;
            }
            else if(num>=numNext){ //add number if >= next number e.g VI will give 5 total
                total=total+num;
            }
        }
        
        total=total+romanNumeralsDict.get(s.charAt(s.length()-1)); //add the last number in the sting to the total
        return total;
        
    }
    
    public static void main(String[] args) {
        String[] allTestInput = {
                            "III",
                            "IV",
                            "IX",
                            "LVIII",
                            "MCMXCIV",
                            "MMCDXXI",
                            "MMMCMXCIX"
                             };
        int[] correctOutput = {3,4,9,58,1994,2421,3999};
        
        for(int i=0; i<7;i++){
            String testInput= allTestInput[i];
            
            int result = romanToInt(testInput);
            
            if(result == correctOutput[i]){
                System.out.println(testInput+", Result: "+result+"\t\t Correct result:"+correctOutput[i]+"\t\t therefore "+true);
            }
            else{
                System.out.println(testInput+", Result: "+result+"\t\t Correct result:"+correctOutput[i]+"\t\t therefore "+false);
            }

            
        }
        
        
    }
    
}
