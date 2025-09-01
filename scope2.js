var subject = "Javascript";
function startCourse() {
    var teacher="Madan";
    console.log("Welcome to " + subject + "course by" + teacher);
    function lesson() {
        var topic="Execution Context";
        console.log("Today's topic:" + topic);
        console.log("Instructor:" + teacher);
        }
        lesson();

    }
startCourse();





function Room1()
{
    let room1FanStatus = "Very Fast";
    console.log("Room1" ,room1FanStatus);
    console.log("Room1 - Global scope" , signalName);
    console.log("Room2", room2FanStatus);
}

//localblock2
function Room2()
{
   // console.log("Room1" ,room1FanStatus);
    let room2FanStatus = "Very Slow";
    console.log("Room2", room2FanStatus);
    console.log("Room2 - Global scope" , signalName);
}

Room1();
Room2();






