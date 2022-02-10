/* In this homework, you will create a simple drawing program inspired 
by Turtle Graphics. It will be a much simpler implementation that will 
only accept right angles (90 degrees). 
*/

// Create the Turtle class with initial position
class Turtle {
    constructor (x, y) {
        this.x = x || 0;
        this.y = y || 0;
        this.direction = 'east';
        this.angle = 0;
        this.steps = [
            [this.x, this.y]
        ];
    };

/* Forward method that takes a number of steps then updates the Turtle 
instance with its new position after moving that many steps. Keep track 
of every movement the turtle makes including the first one.
*/  

forward (step) {
    for (let i = 0; i < step; i++) {
        if (this.angle === 0) {
            this.x++;
        } else if (this.angle === 90) {
            this.y--;
        } else if (this.angle === 180) {
            this.x--;
        } else if (this.angle === 270) {
            this.y++;
        } else {
            return this;
        }
        this.steps.push([this.x, this.y]);
    }
    return this;
}

/* Create a right method that takes zero arguments. When right is called,
update the Turtle instance to rotate its facing to the right. A turtle 
should begin facing east.
*/

right () {
    this.angle += 90;
    if (this.angle === 90) {
        this.direction = 'south';
    } else if (this.angle === 180) {
        this.direction = 'west';
    } else if (this.angle === 270) {
        this.direction = 'north';
    } else {
        this.direction = 'east';
        this.angle = 0;
    }
    return this;
};

// Create a left method like right but turns the turtle's facing to the left.

left () {
    this.angle -= 90;
    if (this.angle === 90) {
        this.direction = 'south';
    } else if (this.angle === 180) {
        this.direction = 'west';
    } else if (this.angle === -90 || this.angle === 270) {
        this.angle = 270;
        this.direction = 'north';
    } else {
        this.direction = 'east';
        this.angle = 0;
    }
    return this;
};

/* Create an allPoints method which returns an array containing all 
coordinates the turtle has walked over.
*/

allPoints () {
    return this.steps;
};

/*Create a print method that draws the path that the turtle walked over
as a string and logs it to the console. 
*/

print () {
    let maxX = -Infinity;
    let maxY = -Infinity;
    let minX = Infinity;
    let minY = Infinity;
    for (let step of this.steps) {
        if (step[0] > maxX) {
            maxX = step[0];
        }
        if (step[1] > maxY) {
            maxY = step[1];
        }
        if (step[0] < minX) {
            minX = step[0];
        }
        if (step[1] < minY) {
            minY = step[1];
        }
    };

const turtleFootprint = (x, y) => {
    for (let step of this.steps) {
        if (step[0] === x && step[1] === y)
        return true;
    }
    return false;
};
   
console.log('-- BEGIN LOG');
for (let y = maxY + 1; y >= minY; y--) {
    let row = '';
    for (let x = minX; x <= maxX + 1; x++ ) {
        if (turtleFootprint (x, y)) {
            row += ' ○ ';
        } else {
            row += ' - ';
        }
    }
    console.log(row);
}
console.log('-- END LOG');
};
};

const ringo = new Turtle();
ringo.forward(3)
    .left()
    .forward(3)
    .right()
    .forward(5)
    .right()
    .forward(8)
    .right()
    .forward(5)
    .right()
    .forward(3)
    .left()
    .forward(3)
    .print();
