//arr_func.js

//Javascript 에서 배열에 관련되어 사용하는 함수

let arr = [10, 20, 30, 40];
//colsole.log(arr);

//1) forEach함수 : 반복
arr.forEach(()=> {
    console.log('forEach 반복');
})

arr.forEach((value)=> {
    console.log('forEach 반복 : ' + value);
})

//2) map 함수 : 반복, return가능
arr.map(()=>{
    console.log('map 반복');
})

arr.map((item)=>{   //item 매개변수에 arr 배열에 있는 값을 순차적으로 주입
    console.log('map 반복 : '+ item);
})

arr.map((item, index)=>{    //item : 배열에 있는 값, index : 해당 순서 인덱스 주입
    console.log('map 반복 : 값> '+ item+ ' 인덱스>'+ index + ' 배열[indetx]>' + arr[index] );
})

//[10,20,30,40]   ->   [99,99,99,99]
let mapResult1 = arr.map(()=>{      //새로운 배열 생성
                                return 99;
                            })

console.log(mapResult1);

let mapResult2 = arr.map((item)=>{     
                                console.log(item);
                            })
// [ undefined, undefined, undefined, undefined ]
console.log(mapResult2); // return 이 없어서 초기화가 안되서 


let mapResult3 = arr.map((item)=>{     
                                return item + 100;
                            })

console.log(mapResult3);

let mapResult4 = arr.map((item)=>{     
                                return "가지고 있는 값은 : "+ item + " 입니다";
                            })

console.log(mapResult4);

let menuArr = ['김밥', '돈까스', '우동'];
let mapResult5 = menuArr.map((item)=>{
            return '<p>'+ item +'</p>';
            })

console.log(mapResult5);

                            //() => code        ()=>{ retrun code; }
let mapResult6 = menuArr.map( (item)=>'<p>'+ item +'</p>');

console.log(mapResult6);


arr = [10, 20, 30, 40];
// 3) filter
// 필터링 : 조건에 맞는(treu/참) 값들만 보겠다.
console.log("---------------filter--------------")
let result7 = arr.filter(()=>{
    return true;
});
console.log(result7);

let result8 = arr.filter((num)=>{
    return num >= 30;
});
console.log(result8);

let result9 = arr.filter((num)=>{
    return num != 20;
});
console.log(result9);

// 4) find
// 특정 조건이 맞는 값들을 찾겠다.
console.log("---------------find--------------")
let result10 = arr.find((value)=>{
    return value == 40;
});
console.log(result10);

let result11 = arr.find((value)=>{
    return value == 60;
});
// 찾는 값이 없으면 ? undefined 출력.
console.log(result11);

// 5) findIndex
// 찾는 값의 인덱스 값 출력 숫자 출력
console.log("---------------findIndex--------------")
let result12 = arr.findIndex((value)=>{
    return value == 40 ;    
})
    console.log(result12);

let result13 = arr.findIndex((value)=>{
    return value == 60 ;    
})
// 찾는 값이 없으면? -1 출력.
    console.log(result13);
