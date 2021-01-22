"use strict";

const WEEK = ["Mon", "Tue", "Wed", "Thu", "Fri"];
const Timetable = [
    [], 
    [], 
    [], 
    [], 
    [], 
    [], 
    []
]

document.getElementById("set_timetable").addEventListener("submit", event => {
    for (let i=0;i<7;i++) {
        let table = Timetable["class"+(i+1).toString()];

        for (let j=0;j<5;j++) {
            table.push(document.getElementById("set_timetable").querySelector(`.${WEEK[j]+(i+1).toString()}`).value);
        }
    }

    fetch("http://localhost:8956/Timetable", {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify(Timetable)
    })
    .then(response => {
        if (response.ok) 
            alert("시간표를 저장했습니다.");
        else 
            alert("시간표를 저장하는데 실패했습니다.");
    });
});

document.getElementById("reset-timetable").addEventListener("click", (event) => {
    fetch("http://localhost:8956/Timetable", {
        method: "DELETE"
    })
    .then(res => {
        if (res.ok) 
            alert("시간표를 초기화했습니다.");
        else
            alert("시간표를 초기화하는데 실패했습니다.");
    });
});

document.getElementById("reset-class-status").addEventListener("click", (event) => {
    fetch("http://localhost:8956/ClassStatus", {
        method: "DELETE"
    })
    .then(res => {
        if (res.ok) 
            alert("수강 현황을 초기화했습니다.");
        else
            alert("수강 현황을 초기화하는데 실패했습니다.");
    });
});