
def romanToInt(s):
        
        dict = {"I":1, "V":5, "X":10, "L": 50, "C": 100, "D": 500, "M": 1000}
        total=0
        
        for i in range(len(s)-1):
            curr = s[i]
            num=dict.get(curr)
            numNext=dict.get(s[i+1]) #minus number if < the next number e.g IV will give -1 total
            if(num < numNext):
                total=total-num
            elif(num>=numNext): #add number if >= next number e.g VI will give 5 total
                total=total+num
        
        total=total+dict.get(s[len(s)-1]) #add the last number in the sting to the total
        return total
    
allTestInput =[
                "III",
                "IV",
                "IX",
                "LVIII",
                "MCMXCIV",
                "MMCDXXI",
                "MMMCMXCIX"
                ]


correctOutput = [3,4,9,58,1994,2421,3999]

for i in range(len(allTestInput)):
    testInput= allTestInput[i]
    
    result = romanToInt(testInput)
    
    if(result == correctOutput[i]):
        print(testInput,", Result: ",result,"\t\t Correct result:",correctOutput[i],"\t\t therefore ",True)

    else:
        print(testInput,", Result: ",result,"\t\t Correct result:"+correctOutput[i],"\t\t therefore ",False)
  