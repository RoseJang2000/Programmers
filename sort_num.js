function solution(n) {
    return (n+'').split('').sort((a, b) => b/1 - a/1).join('')/1;
    // but 숫자로 푸는게 더 빠르다고 함
}