var AddressBook = function () {
	this.contactArray = []
	this.initialComplete = false;
}

AddressBook.prototype.getInitialContacts = function(cb) {
	var self = this;

	setTimeout(function() {
		self.initialComplete = true;
		if (cb) {
			return cb();
		}
	}, 3);
}

AddressBook.prototype.addContact = function(contact) {
		this.contactArray.push(contact);
}

AddressBook.prototype.getContact = function(index) {
		return this.contactArray[index];
}

AddressBook.prototype.deleteContact = function(index) {
	this.contactArray.splice(index, 1);
}
