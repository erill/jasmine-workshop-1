'use strict';

class ChatRoom {
	constructor() {
		this.name = 'Testing Chat';
		this.canBeAccessed = false,
		this.members = []
		this.membersWaitingToJoin = ['Marek','Franek','Asia','Kasia'];
		this.capacity = 5;
	}
	
	
	openChatRoom() {
		this.canBeAccessed = true;
	}


	addPeopleInQueue(){
		if (this.blockAccessIfOverCapacity()) {
			return;
		} 

		if (this.canBeAccessed) {
			this.members = this.members.concat(this.membersWaitingToJoin);
			this.membersWaitingToJoin = [];
		}
	}


	blockAccessIfOverCapacity() {
		return ((this.members.length + this.membersWaitingToJoin.length) >= 5);
	}

	checkCurrentOccupancy(){
		return this.members;
	}


	makeItAboutUnitTesting(){
		this.name = 'Unit ' + this.name;
	}


	setIntrestingTopic(intrestingTopic) {
		if (intrestingTopic) {
			this.topic = intrestingTopic;
		}
		else {
			this.topic = null;
		}
	}


	warnPeople() {
		if (this.members) {
			this.sendWarning(this.members);
		}
		else {
			this.sendWarning(this.searchForPeople());
		}
	}


	// not to be tested

	sendWarning(people){
		return true;
	}

	searchForPeople() {
		return ['Marek', 'Agnieszka', 'Robert'];
	}
}
