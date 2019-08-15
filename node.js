var fs = require('fs');

var count = 0

class Visitor {

    constructor(firstName, secondName, dateOfVisit, timeOfVisit, nameOfAssistant, comments) {

        this.fullname = firstName + " " + secondName;

        this.dateOfVisit = dateOfVisit;

        this.timeOfVisit = timeOfVisit;

        this.nameOfAssistant = nameOfAssistant;

        this.comments = comments;

        this.count = 0;

    }

    get() {
        console.log(this.fullname);
    }

    increaseCount() {
        count += 1;
    }

    getCount() {
        console.log(count);
        return count;
    }

    save() {

        this.increaseCount();

        this.getCount();

        var path = "visitor_" + count + ".json";

        var data = "Fullname: " + this.fullname + " Date of Visit: " + this.dateOfVisit + " Time of Visit: " + this.timeOfVisit + " Comment " + this.comments + " Assisstant " + this.nameOfAssistant + ".\n";
        var data = JSON.stringify(data);
        fs.writeFileSync(path, data)

        console.log(count);

    }

    load(index) {

        if (index <= 0) {

            console.log("File doesn't exist");

        }

        var path = "visitor_" + index;
        var data = JSON.stringify(data);
        var data = fs.readFileSync(path);

        console.log(data);

    }

}

var alice = new Visitor("alice", "phillip", 23 / 08, 11, "okay alright", "thembi");

var bob = new Visitor("bob", "peter", 2 / 09, 5, "how can i assist you", "lisa");

alice.get();

alice.save();

bob.save();

bob.get();

module.exports = Visitor;
