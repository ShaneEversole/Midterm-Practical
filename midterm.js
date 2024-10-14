const sports = [
    {
        sportName: soccer,
        calsBurned: 1200,
        activty: dribblimg,
    },
    {
        sportName: basketball,
        calsBurned: 720,
        activity: shooting,
    },
    {
        sportName: football,
        calsBurned: 1000,
        activity: running,
    },
    
]
    function alert(){

    }
const act = () => {
    let action = document.querySelector(".choice").value;
    let sportInQuestion;
    switch (action){
        case "C":
            createASport();
            break;
            case "R":
                readASport();
                break;
                case "U":
                    sportInQuestion = findSport();
                    alert(sportInQuestion);
                    console.log(sportInQuestion);
                    updateASporp(sportInQuestion);
                    break;
                    case "D":
                        sportInQuestion = findSport();
                        deleteASport(sportInQuestion);
                        break;
    }
};
const createASport = () =>{
    setSportInfo(null);
    let name = prompt("Sport Name?");
    let calsBurned = prompt("Calories Burned in one hour?");
    let activty = prompt("what did you do specifcally?");
    sports.push({
        sportName: name,
        caloriesBurned: parseInt(calsBurned),
        activtyDone: activity,
    });
    listSports();
    console.log(sports);
}

