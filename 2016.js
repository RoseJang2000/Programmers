function solution(a, b) {
    // const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    // return week[new Date(`2016-${a}-${b}`).getDay()];
    return (new Date(`2016-${a}-${b}`)+'').slice(0, 3).toUpperCase();
}