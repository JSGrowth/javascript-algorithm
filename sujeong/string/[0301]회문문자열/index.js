function solution(s) {
    // 한번에 대문자로 해두는게 if문마다 대문자로 만들어주는 것보단 시간적으로 효율적일것같다.
    let tmp=s.toUpperCase();
    for (let i = 0; i < Math.ceil((tmp.length)/2); i++) {
        if (tmp[i] !== tmp[tmp.length - 1 - i]) return "NO";
    }
    return "YES";
}

let str = "goooG";
console.log(solution(str));
