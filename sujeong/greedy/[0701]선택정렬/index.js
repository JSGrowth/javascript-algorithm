// 풀이시간(소요시간)
// 5분(10.04ms)

// 아이디어
// 선택 정렬은 앞에서부터 기준점을 뒤로 밀어가며 나머지 비교되지 않은 값들 중 가장 큰(혹은 작은) 값을 기준으로 가져오며 정렬을 해나가는 방식이다. 
// 따라서, Sol1. 배열의 크기만큼의 for문을 돌며 이중 for문으로 나머지값들을 비교해 가장 작은 값을 기준점으로 설정해나간다.

// 개선과정
// (정형화된 문제라 딱히 안보인다.)

console.time(`time`);
function solution(arr) {
    for (let pivot = 0; pivot < arr.length; pivot++) {
        let temp = arr[pivot];
        for (let i = pivot + 1; i < arr.length; i++) {
            if (arr[i] < temp) {
                arr[pivot] = arr[i];
                arr[i] = temp;
                temp = arr[pivot];
            }
        }
    }
    return arr;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));
console.timeEnd("time");
