var chatRoom;

describe('given "chatRoom"', function() {
	beforeEach(function() {
		chatRoom = new ChatRoom();
	});
	
	
	/* Constructor */
	it('then the "name" variable should be "Testing Chat"', function() {
	  expect(chatRoom.name).toBe('Testing Chat');
	});
	
	it('then the "canBeAccessed" variable should be "false"', function() {
	  expect(chatRoom.canBeAccessed).toEqual(false);
	});
	
	it('then the "members" array should be empty', function() {
	  expect(chatRoom.members).toEqual([]);
	});
	
	it('then the "membersWaitingToJoin" variable should be "[Marek, Franek, Asia, Kasia]"', function() {
	  expect(chatRoom.membersWaitingToJoin).toEqual(['Marek','Franek','Asia','Kasia']);
	});
	
	it('then the "capacity" variable should be 5', function() {
	  expect(chatRoom.capacity).toEqual(5);
	});
	
	
	/* openChatRoom  */
	describe('when "openChatRoom" is called', function() {
	  beforeEach(function() {
	    chatRoom.openChatRoom();
	  });
	  
	  it('then the "canBeAccessed" variable should be "true"', function() {
	    expect(chatRoom.canBeAccessed).toBe(true);
    });
	});
  

  /* blockAccessIfOverCapacity */
  it('then the "blockAccessIfOverCapacity" function should return false', function() {
    expect(chatRoom.blockAccessIfOverCapacity()).toBe(false);
  });
  
  describe('when 2 members are added to the list', function() {
    beforeEach(function() {
      chatRoom.members.push('Ewa', 'Andrzej');
    });
    
    it('then the "blockAccessIfOverCapacity" function should return true', function() {
      expect(chatRoom.blockAccessIfOverCapacity()).toBe(true);
    });

    it('then the "addPeopleInQueue" should return undefined', function() {
      expect(chatRoom.addPeopleInQueue()).toBe(undefined);
    });

    it('then the "checkCurrentOccupancy" function should return ["Ewa", "Andrzej"]', function() {
      expect(chatRoom.checkCurrentOccupancy()).toEqual(['Ewa', 'Andrzej']);
    });
  });


  /* addPeopleInQueue */
  describe('when the "addPeopleInQueue" is called', function() {
    describe('and when canBeAccessed is true', function() {
      beforeEach(function() {
        chatRoom.canBeAccessed = true;
        chatRoom.addPeopleInQueue();
      });

      it('then the membersWaitingToJoin array should be empty', function() {
        expect(chatRoom.membersWaitingToJoin).toEqual([]);
      });

      it('then the members array should be [Marek, Franek, Asia, Kasia]', function() {
        expect(chatRoom.members).toEqual(['Marek','Franek','Asia','Kasia']);
      });
    });
  });
    
  
  /* makeItAboutUnitTesting */
  describe('when "makeItAboutUnitTesting" is called', function() {
    beforeEach(function() {
      chatRoom.makeItAboutUnitTesting();  
    });
    
    it('then the "name" variable should be "Unit Testing Chat"', function() {
      expect(chatRoom.name).toBe('Unit Testing Chat');
    });
  });
  
  
  /* setIntrestingTopic */
  describe('when "setIntrestingTopic" is called', function() {
    it('then the function should return null', function() {
      chatRoom.setIntrestingTopic();
      expect(chatRoom.topic).toEqual(null);
    });

    describe('and when the function is called with "some topic" param', function() {
      beforeEach(function() {
        chatRoom.setIntrestingTopic("some topic");
      });

      it('then the topic should be "some topic"', function() {
        expect(chatRoom.topic).toEqual("some topic");
      });
    });
  });
  

  /* warnPeople */
  describe('when "warnPeople" is called', function() {
    beforeEach(function() {
      spyOn(chatRoom, 'sendWarning');
      chatRoom.warnPeople();
    });

    it('the sendWarning function should be called', function() {
      expect(chatRoom.sendWarning).toHaveBeenCalled();
    });
  }); 
});