var map = function(func, lst) {
	var ret = [];
	for (var i = 0; i < lst.length; i++) {
		ret.push(func(lst[i]));
	}
	return ret;
}

var range = function(start, stop, step) {
	var lst = [];
	if (step == undefined) step = 1;
	for (var i = start; i < stop; i = i + step) {
		lst.push(i);
	}
	return lst;
}

var sum = function(lst) {
	var cnt = 0;
	for (var i = 0; i < lst.length; i++) {
		cnt += lst[i];
	}
	return cnt;
}
var Person = function(name, surname, age) {
	this.name = name;
	this.surname = surname;
	this.age = age;
}

Person.prototype.toString = function() {
	print("Name: " + name + ". Surname: " + surname + ". Age: " + age);
};

print("Sum of 10 consecutive ints starting from 1 is: " + sum(range(1, 11)));