//메서드란 객체에 묶여있는 함수를 뜻한다. 메서드를 잘 써야 js를 잘한다고 느껴질 것 같음
//그렇다면 함수를 잘 만드는 것이 js를 잘 하는 방법이다. 실 상황에서 쓰이는 함수들을 보자

//네이버 if와 for, return, catch, try, break, void, throw, on, finally 하나의 function에서 여러문들을 사용함
//나중에 배우나? 일단 아는 것들 먼저 쓰면서 정리해보자. 

//if는 과연 어떻게 써먹을까? 무엇인가 값을 입력하게 되면 그 값에 대한 true or false를 따져 
//그에 따른 값을 출력하거나 다음 함수에 대한 조건을 거는 것으로 보인다.

//내가 만들 홈페이지의 테마는 헬스로 가면 좋을 것 같다. 어떤 부분이 있으면 좋을까?
//생활체육지도자 퀴즈, 영양관련 퀴즈 등 들어갈 퀴즈 섹션
//운동 팁을 모아놓는 운동 커뮤니티, 제품 리뷰하는 제품 커뮤니티
//로그인 창
//광고창, 풋터


console.log('회원정보를 기입해주세요.')
var information = {
    name : null,
    age : null,
    career : null
};

information['name'] = '길동이';
information['age'] = 20
information['career'] = '3years';

for(key in information)
    console.log(`${key}, ${information[key]}`);

console.log('정보가 맞으십니까?');


var welcome
welcome = hi => `어서오세요 ${hi}님` 
hi = '길동이'
console.log(welcome('길동이'));


console.log('if you want to increse your muscle size how many reps in set?');

console.log('if you input 8');
var reps = 8;
    
if (reps != 8) 
    console.log('오답입니다.');
    else console.log('정답입니다.');
console.log(reps);

console.log('if you input 10');
var reps1 = 10;
console.log(reps1);
if (reps1 != 8) 
    console.log('오답입니다.');
    else console.log('정답입니다.');


console.log('how many protein can our body absorb during single session?');
var pro = 30;
console.log(pro);
if (pro != 30) console.log('오답입니다.')
 else console.log('정답입니다.');


console.log('커뮤니티에 미성년자 막기');
var message = (information['age']<18) ? '조금 더 크고 오세요' : (information['age']<55) ? '환영합니다.' :  (information['age']<100) ? '건강이 우선! 무리해서 운동하지 마세요' : '장수하셨거나 나이가 아닌 값을 입력하셨군요! 확인해주세요!';
console.log(message);


