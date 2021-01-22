"use strict";

const WEEK = [ "Mon", "Tue", "Wed", "Thu", "Fri" ];

let ClassStatus;
let Timetable;

for (let i=0;i<7;i++) {
    let Class;

    for (let j=0;j<5;j++) {
        fetch("http://localhost:8956/Timetable")
        .then(TimetableRes => TimetableRes.json())
        .then(jsonTimetableRes => {
            fetch("http://localhost:8956/ClassStatus")
            .then(ClassStatusRes => ClassStatusRes.json())
            .then(jsonClassStatusRes => {
                Timetable = jsonTimetableRes;
                ClassStatus = jsonClassStatusRes;

                Class = document.querySelector(`#${WEEK[j]+(i+1).toString()}`);
                Class.textContent = Timetable[i][j];
                
                ClassStatus[i].indexOf(Timetable[i][j]) !== -1 ?
                    Class.style.backgroundColor = "rgb(204, 255, 204)" :
                    Class.style.backgroundColor = "rgb(204, 204, 204)"

                Class.addEventListener("click", (event) => {
                    if (ClassStatus[i].indexOf(Timetable[i][j]) !== -1) {
                        event.target.style.backgroundColor = "rgb(204, 204, 204)";
                        ClassStatus[i].splice(ClassStatus[i].indexOf(Timetable[i][j]), 1);
                    }
                    else {
                        event.target.style.backgroundColor = "rgb(204, 255, 204)";
                        ClassStatus[i].push(Timetable[i][j]);
                    }
                    fetch("http://localhost:8956/ClassStatus", {
                        method: "POST",
                        headers: {"Content-Type": "application/json; charset=utf-8"},
                        body: JSON.stringify(ClassStatus)
                    })
                    .then(res => res.json())
                    .catch(e => console.error(e));
                });
            })
            .catch(err => console.error(err));
        })
        .catch(err => console.error(err));
    }
}