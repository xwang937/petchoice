// Simulation Variables
/////////////////////
// Config
var shouldDebug = true;
var EncounterA = new Encounter(
  "Encounter by Dog",
  "Anonymous",
  [
    "Woah! There is something in the road – must inspect",
    "*runs*",
    "Oh no, too fast. No break!",
    "*Runs into box*",
    "Oh look! A box! Is there anything inside?",
    "No – much disappoint",
    "Oh it moves!",
    "*paws at flap*",
    "Can I eat?",
    "Is it poop?",
    "*sniffs*",
    "It smells like amazon",
    "*noms*",
    "Ew. Is not tasty. Chew factor is mediocre",
    "*spits out shreds of box",
    "Will still claim box as mine",
    "*pees on box*",
    "My duty is done here. You're welcome neighborhood.",
  ]
);
var EncounterB = new Encounter(
  "Encounter by Cat",
  "Anonymous",
  [
    "Oh ho – what is that I see? A box?",
    "I must inspect, but cautiously.",
    "*looks around*",
    "No one here? Good",
    "*initiates stealth mode; creeps forward*",
    "Must rub on box to see if it is friendly",
    "*rubs*",
    "This box requires further inspection as I am the dictator on all things box.",
    "*hops in box*",
    "*rubs more*",
    "Oh yeah, feels good",
    "*sniffs*",
    "It now smells like me.",
    "Operation: Conquer Box is complete",
    "Time to sit and roll around",
    "*turns circles and rolls*",
    "I hereby, claim this box as mine.",
    "*snoozes*"
  ]
);

// State
var timeStep = 0;
var chosenEncounter;

// Bookkeeping
var initialized = false;
var simState;


// Starting Function
/////////////////////
$(document).ready(function() {
  simState = new StateMachine();
  simState.Start(); 
  
  $("#bttn").click(function() {
    simState.Update();
  });  
});

// State Machine ////
///////////////////////////////////////////////
var StateMachine = function(){
  this.states = { // Add/Remove States Here
    "Init" : new Init(this),
    "Line1" : new Line1(this),
    "Line2" : new Line2(this),
    "Line3" : new Line3(this),
    "Line4" : new Line4(this),
    "Line5" : new Line5(this),
    "Line6" : new Line6(this), 
    "Line7" : new Line7(this),
    "Line8" : new Line8(this),
    "Line9" : new Line9(this),
    "Line10" : new Line10(this),
    "Line11" : new Line11(this),
    "Line12" : new Line12(this),
    "Line13" : new Line13(this),
    "Line14" : new Line14(this),
    "Line15" : new Line15(this),
    "Line16" : new Line16(this), 
    "Line17" : new Line17(this),
    "Line18" : new Line18(this)   
  };
    
    
    
  this.currentState = this.states["Init"];
  var nextState;

  // Largely don't mess with this section
  this.Start = function () {
    this.currentState.Enter();
    if (shouldDebug) this.Debug();
  };
  this.Update = function () {
    this.currentState.Update(function() {
      this.Transition();
    }.bind(this));
    if (shouldDebug) this.Debug();
  };
  this.Change = function (state) {
    nextState = state;
  };
  this.Transition = function() {
    if (nextState !== undefined) {    
      this.currentState.Exit();
      this.currentState = nextState;
      nextState = undefined;
      this.currentState.Enter();
    }
  }
  // Down to here
  this.Debug = function () { // Edit this function with important variables from your code
    console.log("-------------------------");
    console.log("timeStep = " + timeStep);
    console.log("----------------");
    console.log("State = " + this.currentState.name);
    console.log("----------------");
    console.log("State = " + timeStep);
    console.log("----------------"); 
    console.log("State = " + this.currentState.name);
    console.log("----------------");
  };
};

var Init = function (machine) {
  this.name = this.constructor.name;
  var fsm = machine;

  // Happens once when state is entered
  this.Enter = function (callback) {
    if (shouldDebug) console.log("---- " + this.name + " Enter");
    $("#pick").show();
    $("#input").hide();

    if (callback !== undefined) callback();
  };
  this.Update = function (callback) {
    if (shouldDebug) console.log("---- " + this.name + " Update");
    fsm.Change(fsm.states["Line1"]);

    if (callback !== undefined) callback();
  };
  this.Exit = function (callback) {
    if (shouldDebug) console.log("---- " + this.name + " Exit");
    $("#pick").hide();
    $("#input").show();
    
    if (callback !== undefined) callback();
  };
};


var Line1 = function (machine) {
  this.name = this.constructor.name;
  this.line = 0;
  var fsm = machine;

  // Happens once when state is entered
  this.Enter = function (callback) {
    if (shouldDebug) console.log("---- " + this.name + " Enter");
    DrawInID("#target", chosenEncounter.lines[this.line]);
    $("#target").fadeIn();

    if (callback !== undefined) callback();
  };
  this.Update = function (callback) {
    if (shouldDebug) console.log("---- " + this.name + " Update");
    $("#target").fadeOut(function() {
      fsm.Change(fsm.states["Line2"]);

      if (callback !== undefined) callback();
    });
  };
  this.Exit = function (callback) {
    if (shouldDebug) console.log("---- " + this.name + " Exit");

    if (callback !== undefined) callback();
  };
};


var Line2 = function (machine) {
  this.name = this.constructor.name;
  this.line = 1;
  var fsm = machine;

  // Happens once when state is entered
  this.Enter = function (callback) {
    if (shouldDebug) console.log("---- " + this.name + " Enter");
    DrawInID("#target", chosenEncounter.lines[this.line]);
    $("#target").fadeIn();

    if (callback !== undefined) callback();
  };
  this.Update = function (callback) {
    if (shouldDebug) console.log("---- " + this.name + " Update");
    $("#target").fadeOut(function() {
      fsm.Change(fsm.states["Line3"]);

      if (callback !== undefined) callback();
    });
  };
  this.Exit = function (callback) {
    if (shouldDebug) console.log("---- " + this.name + " Exit");

    if (callback !== undefined) callback();
  };
};


var Line3 = function (machine) {
  this.name = this.constructor.name;
  this.line = 2;
  var fsm = machine;

  // Happens once when state is entered
  this.Enter = function (callback) {
    if (shouldDebug) console.log("---- " + this.name + " Enter");
    DrawInID("#target", chosenEncounter.lines[this.line]);
    $("#target").fadeIn();

    if (callback !== undefined) callback();
  };
  this.Update = function (callback) {
    if (shouldDebug) console.log("---- " + this.name + " Update");
    $("#target").fadeOut(function() {
      fsm.Change(fsm.states["Line4"]);

      if (callback !== undefined) callback();
    });
  };
  this.Exit = function (callback) {
    if (shouldDebug) console.log("---- " + this.name + " Exit");

    if (callback !== undefined) callback();
  };
};


var Line4 = function (machine) {
  this.name = this.constructor.name;
  this.line = 3;
  var fsm = machine;

  // Happens once when state is entered
  this.Enter = function (callback) {
    if (shouldDebug) console.log("---- " + this.name + " Enter");
    DrawInID("#target", chosenEncounter.lines[this.line]);
    $("#target").fadeIn();

    if (callback !== undefined) callback();
  };
  this.Update = function (callback) {
    if (shouldDebug) console.log("---- " + this.name + " Update");
    $("#target").fadeOut(function() {
      fsm.Change(fsm.states["Line5"]);

      if (callback !== undefined) callback();
    });
  };
  this.Exit = function (callback) {
    if (shouldDebug) console.log("---- " + this.name + " Exit");

    if (callback !== undefined) callback();
  };
};


var Line5 = function (machine) {
  this.name = this.constructor.name;
  this.line = 4;
  var fsm = machine;

  // Happens once when state is entered
  this.Enter = function (callback) {
    if (shouldDebug) console.log("---- " + this.name + " Enter");
    DrawInID("#target", chosenEncounter.lines[this.line]);
    $("#target").fadeIn();

    if (callback !== undefined) callback();
  };
  this.Update = function (callback) {
    if (shouldDebug) console.log("---- " + this.name + " Update");
    $("#target").fadeOut(function() {
      fsm.Change(fsm.states["Line6"]);

      if (callback !== undefined) callback();
    });
  };
  this.Exit = function (callback) {
    if (shouldDebug) console.log("---- " + this.name + " Exit");

    if (callback !== undefined) callback();
  };
};


var Line6 = function (machine) {
  this.name = this.constructor.name;
  this.line = 5;
  var fsm = machine;

  // Happens once when state is entered
  this.Enter = function (callback) {
    if (shouldDebug) console.log("---- " + this.name + " Enter");
    DrawInID("#target", chosenEncounter.lines[this.line]);
    $("#target").fadeIn();

    if (callback !== undefined) callback();
  };
  this.Update = function (callback) {
    if (shouldDebug) console.log("---- " + this.name + " Update");
    $("#target").fadeOut(function() {
      fsm.Change(fsm.states["Line7"]);

      if (callback !== undefined) callback();
    });
  };
  this.Exit = function (callback) {
    if (shouldDebug) console.log("---- " + this.name + " Exit");

    if (callback !== undefined) callback();
  };
};


var Line7 = function (machine) {
  this.name = this.constructor.name;
  this.line = 6;
  var fsm = machine;

  // Happens once when state is entered
  this.Enter = function (callback) {
    if (shouldDebug) console.log("---- " + this.name + " Enter");
    DrawInID("#target", chosenEncounter.lines[this.line]);
    $("#target").fadeIn();

    if (callback !== undefined) callback();
  };
  this.Update = function (callback) {
    if (shouldDebug) console.log("---- " + this.name + " Update");
    $("#target").fadeOut(function() {
      fsm.Change(fsm.states["Line8"]);

      if (callback !== undefined) callback();
    });
  };
  this.Exit = function (callback) {
    if (shouldDebug) console.log("---- " + this.name + " Exit");

    if (callback !== undefined) callback();
  };
};


var Line8 = function (machine) {
  this.name = this.constructor.name;
  this.line = 7;
  var fsm = machine;

  // Happens once when state is entered
  this.Enter = function (callback) {
    if (shouldDebug) console.log("---- " + this.name + " Enter");
    DrawInID("#target", chosenEncounter.lines[this.line]);
    $("#target").fadeIn();

    if (callback !== undefined) callback();
  };
  this.Update = function (callback) {
    if (shouldDebug) console.log("---- " + this.name + " Update");
    $("#target").fadeOut(function() {
      fsm.Change(fsm.states["Line9"]);

      if (callback !== undefined) callback();
    });
  };
  this.Exit = function (callback) {
    if (shouldDebug) console.log("---- " + this.name + " Exit");

    if (callback !== undefined) callback();
  };
};


var Line9 = function (machine) {
  this.name = this.constructor.name;
  this.line = 8;
  var fsm = machine;

  // Happens once when state is entered
  this.Enter = function (callback) {
    if (shouldDebug) console.log("---- " + this.name + " Enter");
    DrawInID("#target", chosenEncounter.lines[this.line]);
    $("#target").fadeIn();

    if (callback !== undefined) callback();
  };
  this.Update = function (callback) {
    if (shouldDebug) console.log("---- " + this.name + " Update");
    $("#target").fadeOut(function() {
      fsm.Change(fsm.states["Line10"]);

      if (callback !== undefined) callback();
    });
  };
  this.Exit = function (callback) {
    if (shouldDebug) console.log("---- " + this.name + " Exit");

    if (callback !== undefined) callback();
  };
};


var Line10 = function (machine) {
  this.name = this.constructor.name;
  this.line = 9;
  var fsm = machine;

  // Happens once when state is entered
  this.Enter = function (callback) {
    if (shouldDebug) console.log("---- " + this.name + " Enter");
    DrawInID("#target", chosenEncounter.lines[this.line]);
    $("#target").fadeIn();

    if (callback !== undefined) callback();
  };
  this.Update = function (callback) {
    if (shouldDebug) console.log("---- " + this.name + " Update");
    $("#target").fadeOut(function() {
      fsm.Change(fsm.states["Line11"]);

      if (callback !== undefined) callback();
    });
  };
  this.Exit = function (callback) {
    if (shouldDebug) console.log("---- " + this.name + " Exit");

    if (callback !== undefined) callback();
  };
};




var Line11 = function (machine) {
  this.name = this.constructor.name;
  this.line = 10;
  var fsm = machine;

  // Happens once when state is entered
  this.Enter = function (callback) {
    if (shouldDebug) console.log("---- " + this.name + " Enter");
    DrawInID("#target", chosenEncounter.lines[this.line]);
    $("#target").fadeIn();

    if (callback !== undefined) callback();
  };
  this.Update = function (callback) {
    if (shouldDebug) console.log("---- " + this.name + " Update");
    $("#target").fadeOut(function() {
      fsm.Change(fsm.states["Line12"]);

      if (callback !== undefined) callback();
    });
  };
  this.Exit = function (callback) {
    if (shouldDebug) console.log("---- " + this.name + " Exit");

    if (callback !== undefined) callback();
  };
};




var Line12 = function (machine) {
  this.name = this.constructor.name;
  this.line = 11;
  var fsm = machine;

  // Happens once when state is entered
  this.Enter = function (callback) {
    if (shouldDebug) console.log("---- " + this.name + " Enter");
    DrawInID("#target", chosenEncounter.lines[this.line]);
    $("#target").fadeIn();

    if (callback !== undefined) callback();
  };
  this.Update = function (callback) {
    if (shouldDebug) console.log("---- " + this.name + " Update");
    $("#target").fadeOut(function() {
      fsm.Change(fsm.states["Line13"]);

      if (callback !== undefined) callback();
    });
  };
  this.Exit = function (callback) {
    if (shouldDebug) console.log("---- " + this.name + " Exit");

    if (callback !== undefined) callback();
  };
};




var Line13 = function (machine) {
  this.name = this.constructor.name;
  this.line = 12;
  var fsm = machine;

  // Happens once when state is entered
  this.Enter = function (callback) {
    if (shouldDebug) console.log("---- " + this.name + " Enter");
    DrawInID("#target", chosenEncounter.lines[this.line]);
    $("#target").fadeIn();

    if (callback !== undefined) callback();
  };
  this.Update = function (callback) {
    if (shouldDebug) console.log("---- " + this.name + " Update");
    $("#target").fadeOut(function() {
      fsm.Change(fsm.states["Line14"]);

      if (callback !== undefined) callback();
    });
  };
  this.Exit = function (callback) {
    if (shouldDebug) console.log("---- " + this.name + " Exit");

    if (callback !== undefined) callback();
  };
};




var Line14 = function (machine) {
  this.name = this.constructor.name;
  this.line = 13;
  var fsm = machine;

  // Happens once when state is entered
  this.Enter = function (callback) {
    if (shouldDebug) console.log("---- " + this.name + " Enter");
    DrawInID("#target", chosenEncounter.lines[this.line]);
    $("#target").fadeIn();

    if (callback !== undefined) callback();
  };
  this.Update = function (callback) {
    if (shouldDebug) console.log("---- " + this.name + " Update");
    $("#target").fadeOut(function() {
      fsm.Change(fsm.states["Line15"]);

      if (callback !== undefined) callback();
    });
  };
  this.Exit = function (callback) {
    if (shouldDebug) console.log("---- " + this.name + " Exit");

    if (callback !== undefined) callback();
  };
};



var Line15 = function (machine) {
  this.name = this.constructor.name;
  this.line = 14;
  var fsm = machine;

  // Happens once when state is entered
  this.Enter = function (callback) {
    if (shouldDebug) console.log("---- " + this.name + " Enter");
    DrawInID("#target", chosenEncounter.lines[this.line]);
    $("#target").fadeIn();

    if (callback !== undefined) callback();
  };
  this.Update = function (callback) {
    if (shouldDebug) console.log("---- " + this.name + " Update");
    $("#target").fadeOut(function() {
      fsm.Change(fsm.states["Line16"]);

      if (callback !== undefined) callback();
    });
  };
  this.Exit = function (callback) {
    if (shouldDebug) console.log("---- " + this.name + " Exit");

    if (callback !== undefined) callback();
  };
};



var Line16 = function (machine) {
  this.name = this.constructor.name;
  this.line = 15;
  var fsm = machine;

  // Happens once when state is entered
  this.Enter = function (callback) {
    if (shouldDebug) console.log("---- " + this.name + " Enter");
    DrawInID("#target", chosenEncounter.lines[this.line]);
    $("#target").fadeIn();

    if (callback !== undefined) callback();
  };
  this.Update = function (callback) {
    if (shouldDebug) console.log("---- " + this.name + " Update");
    $("#target").fadeOut(function() {
      fsm.Change(fsm.states["Line17"]);

      if (callback !== undefined) callback();
    });
  };
  this.Exit = function (callback) {
    if (shouldDebug) console.log("---- " + this.name + " Exit");

    if (callback !== undefined) callback();
  };
};




var Line17 = function (machine) {
  this.name = this.constructor.name;
  this.line = 16;
  var fsm = machine;

  // Happens once when state is entered
  this.Enter = function (callback) {
    if (shouldDebug) console.log("---- " + this.name + " Enter");
    DrawInID("#target", chosenEncounter.lines[this.line]);
    $("#target").fadeIn();

    if (callback !== undefined) callback();
  };
  this.Update = function (callback) {
    if (shouldDebug) console.log("---- " + this.name + " Update");
    $("#target").fadeOut(function() {
      fsm.Change(fsm.states["Line18"]);

      if (callback !== undefined) callback();
    });
  };
  this.Exit = function (callback) {
    if (shouldDebug) console.log("---- " + this.name + " Exit");

    if (callback !== undefined) callback();
  };
};



var Line18 = function (machine) {
  this.name = this.constructor.name;
  this.line = 17;
  var fsm = machine;

  // Happens once when state is entered
  this.Enter = function (callback) {
    if (shouldDebug) console.log("---- " + this.name + " Enter");
    DrawInID("#target", chosenEncounter.lines[this.line]);
    $("#target").fadeIn();

    if (callback !== undefined) callback();
  };
  this.Update = function (callback) {
    if (shouldDebug) console.log("---- " + this.name + " Update");
    $("#target").fadeOut(function() {
      ClearByID("#target");
      fsm.Change(fsm.states["Init"]);

      if (callback !== undefined) callback();
    });
  };
  this.Exit = function (callback) {
    if (shouldDebug) console.log("---- " + this.name + " Exit");

    if (callback !== undefined) callback();
  };
};


// Helpers /////////
///////////////////////////////////////////////
// I put misc functions that are used in many different places in a group I just called Helper
function PickPet(choice) {
  chosenEncounter = choice;
  simState.Update();
}

// Data /////////
///////////////////////////////////////////////
// It's useful to treat user input in some standardized way. This function works as data storage object for user actions
// Edit this structure with whatever actions you want to happen
function Encounter(name, author, lines) {
  this.name = name;
  this.author = author;
  this.lines = lines;
}
// Draw /////////////
///////////////////////////////////////////////
function ClearByID(id) {
  $(id).html($([]));
}
function FadeByID(id, state) {
  if (state) {
    $(id).fadeIn();
  } else {
    $(id).fadeOut();
  }
  
}
function DrawInID(id, stateName) {
  $(id).append(
    "<div class='d-inline-block py-1 my-1'>" + stateName + "</div>"
  );
}