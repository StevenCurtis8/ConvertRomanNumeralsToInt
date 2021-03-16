const btn=document.getElementById('btn');

function romanToInt(s) {
    let romanNumeralsDict = new Map()
    romanNumeralsDict.set('I', 1)
    romanNumeralsDict.set('V', 5)
    romanNumeralsDict.set('X', 10)
    romanNumeralsDict.set('L', 50)
    romanNumeralsDict.set('C', 100)
    romanNumeralsDict.set('D', 500)
    romanNumeralsDict.set('M', 1000)


    let total=0
    let curr
    let num=0,numNext=0

    for(let i=0;i<s.length-1;i++){
        curr = s.charAt(i)        
        num=romanNumeralsDict.get(curr)
        numNext=romanNumeralsDict.get(s.charAt(i+1)) //minus number if < the next number e.g IV will give -1 total
        
        if(num < numNext){
            total=total-num
        }
        else if(num>=numNext){ //add number if >= next number e.g VI will give 5 total
            total=total+num
        }
    }

    total=total+romanNumeralsDict.get(s.charAt(s.length-1)) //add the last number in the sting to the total
    return total
};

btn.addEventListener('click',function(){ 
    const allTestInput =[
                        "III",
                        "IV",
                        "IX",
                        "LVIII",
                        "MCMXCIV",
                        "MMCDXXI",
                        "MMMCMXCIX"
                        ]


    const correctOutput = [3,4,9,58,1994,2421,3999]
    let text="<br/>"
    for(let i=0; i<7;i++){
        const testInput= allTestInput[i]

        let result = romanToInt(testInput)
        console.log(result)
        if(result == correctOutput[i]){
            text=text+("<h4>"+testInput+" , Result: "+result+"&emsp; &emsp; Correct result:"+correctOutput[i]+"&emsp;&emsp; therefore "+true+"</h4>")
        }
        else{
            text=text+("<h4>"+testInput+"  Result: "+result+"&emsp;&emsp; Correct result:"+correctOutput[i]+"&emsp;&emsp; therefore "+false+"</h4>")
        }


    }
    const area=document.getElementById("root")
    area.innerHTML = text
});
