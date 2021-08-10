function get_members() {

    return ['2021', '2019', '2018'];
}

members = get_members();

for (i = 0; i < members.length; i++) {
    document.write(members[i].toUpperCase() + "<br>");
}

var arr = [1, 2, 3, 4, 5, 6, 7];
alert(arr.length);
console.log(arr);

var li = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
li.push('h');
console.log(li); // 단일 원소를 배열에 추가

var li2 = ['a', 'b', 'c', 'd', 'e'];

li2 = li2.concat(['f', 'g']); // 복수의 원소를 배열에 추가
console.log(li2);

var li3 = ['a', 'b', 'c', 'd', 'e'];

li3.unshift('z');
console.log(li3); // 단일 원소를 배열의 앞부분에 추가

li.shift();
li.pop();

console.log(li);

var li4 = ['e', 'c', 'a', 'f'];
li4.sort();
console.log(li4);

li4.reverse();
console.log(li4);

document.write("<br/>");

document.write("Check the console!")