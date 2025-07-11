// Q.1 - Create a Function

let nameSetter = {
	name:'kiya',
	setter:function (name) {
		console.log('name =',name);
	}
};
console.log(nameSetter.name);
nameSetter.setter('riya');

// Q.2 - Check whether the package is Dream Package or not

let package = {
	is_dream:function (salary) {
		if (salary > 500000) {
			return 'Dream Package';
		}
		else {
			return 'Not a Dream Package'
		}
	}
};
console.log(package.is_dream(600000));

// Q.3 - Delete a Parameter

const student = {
	name: 'divya',
	rollno:101034
};
console.log(student);
console.log(Reflect.deleteProperty(student,'rollno'));
//console.log(delete student.rollno);
console.log(student);

// Q.4 - Find the sum of the object members

function sum(p1, p2, p3) {
	this.p1 = p1;
	this.p2 = p2;
	this.p3 = p3;
	return p1 + p2 + p3;
}
console.log(sum(10, 40, 60));

// Q.5 - Check whether the objects are same or not

const employee = {
	id:101,
	name:'atul',
	check: function (new_id,new_name) {
		return this.id == new_id && this.name == new_name ? 'True' : 'False';
	}
};
console.log(employee.id, employee.name);
console.log(employee.check(102, 'priya'));

// Q.6 - Object Multiplyer

let obj = {
	id:12,
	houseno: 102,
	obj_mul: function (n) {
		console.log(this.id * n);
		console.log(this.houseno * n);
	}
};
console.log(obj);
obj.obj_mul(10);

// Q.7 - Merge the Objects

let person = {
	id: 101,
	name:'Savi'
};
let state = {
	state_name: 'MP',
	code:234
};
let per_st = Object.assign(person, state);
let per_sta = {...person,...state};
console.log(per_st);
console.log(per_sta);

// Q.8 - Check whether the object has a parameter or not

function check_para(n) {
	if (n == 1) {
		return 'True';
	} else {
		return 'False';
	}
}
let r = check_para(1);
console.log(r);

// or

let check_para1 = {
	check_p: function (n) {
		if (n == 1) {
			return 'True';
		} else {
			return 'False';
		}
	}
};
console.log(check_para1.check_p(0));
