var User = function () {};

User.prototype.getName = function () {
  console.log('Ecit');
};
User.prototype.getAge = function () {
  console.log('7');
};
User.prototype.getGender = function () {
  console.log('Male');
};
User.prototype.getAddress = function () {
  console.log('Technopark');
};

function SuperUser()
{

}

SuperUser.prototype = User.prototype;
SuperUser.constructor = SuperUser.constructor;

SuperUser.prototype.getAccessRights = function()
{
	console.log('full Rights')
}


module.exports.user = new User();
module.exports.superuser = new SuperUser();