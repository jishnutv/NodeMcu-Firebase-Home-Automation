let database = firebase.database();

// Devices button
let device1 = document.getElementById("device-1");
let device2 = document.getElementById("device-2");
let device3 = document.getElementById("device-3");
let device4 = document.getElementById("device-4");
let device5 = document.getElementById("device-5");
let device6 = document.getElementById("device-6");
let device7 = document.getElementById("device-7");
let device8 = document.getElementById("device-8");
let device9 = document.getElementById("device-9");

let device1Val = database.ref("/automation/device1");
let device2Val = database.ref("/automation/device2");
let device3Val = database.ref("/automation/device3");
let device4Val = database.ref("/automation/device4");
let device5Val = database.ref("/automation/device5");
let device6Val = database.ref("/automation/device6");
let device7Val = database.ref("/automation/device7");
let device8Val = database.ref("/automation/device8");
let device9Val = database.ref("/automation/device9");

device1Val.on("value", (snaphot) => {
    let status = snaphot.val();

    device1.addEventListener("click", () => {
        if(status == "off") {
            device1Val.set("on");
            status = "on";
        }else if(status == "on") {
            device1Val.set("off");
            status = "off"
        }
    })

    if(status == "on") {
        device1.classList.add("green");
        device1.classList.remove("disabled");
        device1.classList.remove("red");
    }else if(status == "off") {
        device1.classList.add("red");
        device1.classList.remove("disabled");
        device1.classList.remove("green");
    }else{
        device1.classList.remove("red");
        device1.classList.add("disabled");
        device1.classList.remove("green");
    }
})

device2Val.on("value", (snaphot) => {
    let status = snaphot.val();

    device2.addEventListener("click", () => {
        if(status == "off") {
            device2Val.set("on");
            status = "on";
        }else if(status == "on") {
            device2Val.set("off");
            status = "off"
        }
    })

    if(status == "on") {
        device2.classList.add("green");
        device2.classList.remove("disabled");
        device2.classList.remove("red");
    }else if(status == "off") {
        device2.classList.add("red");
        device2.classList.remove("disabled");
        device2.classList.remove("green");
    }else{
        device2.classList.remove("red");
        device2.classList.add("disabled");
        device2.classList.remove("green");
    }
})

device3Val.on("value", (snaphot) => {
    let status = snaphot.val();

    device3.addEventListener("click", () => {
        if(status == "off") {
            device3Val.set("on");
            status = "on";
        }else if(status == "on") {
            device3Val.set("off");
            status = "off"
        }
    })

    if(status == "on") {
        device3.classList.add("green");
        device3.classList.remove("disabled");
        device3.classList.remove("red");
    }else if(status == "off") {
        device3.classList.add("red");
        device3.classList.remove("disabled");
        device3.classList.remove("green");
    }else{
        device3.classList.remove("red");
        device3.classList.add("disabled");
        device3.classList.remove("green");
    }
})

device4Val.on("value", (snaphot) => {
    let status = snaphot.val();

    device4.addEventListener("click", () => {
        if(status == "off") {
            device4Val.set("on");
            status = "on";
        }else if(status == "on") {
            device4Val.set("off");
            status = "off"
        }
    })

    if(status == "on") {
        device4.classList.add("green");
        device4.classList.remove("disabled");
        device4.classList.remove("red");
    }else if(status == "off") {
        device4.classList.add("red");
        device4.classList.remove("disabled");
        device4.classList.remove("green");
    }else{
        device4.classList.remove("red");
        device4.classList.add("disabled");
        device4.classList.remove("green");
    }
})

device5Val.on("value", (snaphot) => {
    let status = snaphot.val();

    device5.addEventListener("click", () => {
        if(status == "off") {
            device5Val.set("on");
            status = "on";
        }else if(status == "on") {
            device5Val.set("off");
            status = "off"
        }
    })

    if(status == "on") {
        device5.classList.add("green");
        device5.classList.remove("disabled");
        device5.classList.remove("red");
    }else if(status == "off") {
        device5.classList.add("red");
        device5.classList.remove("disabled");
        device5.classList.remove("green");
    }else{
        device5.classList.remove("red");
        device5.classList.add("disabled");
        device5.classList.remove("green");
    }
})

device6Val.on("value", (snaphot) => {
    let status = snaphot.val();

    device6.addEventListener("click", () => {
        if(status == "off") {
            device6Val.set("on");
            status = "on";
        }else if(status == "on") {
            device6Val.set("off");
            status = "off"
        }
    })

    if(status == "on") {
        device6.classList.add("green");
        device6.classList.remove("disabled");
        device6.classList.remove("red");
    }else if(status == "off") {
        device6.classList.add("red");
        device6.classList.remove("disabled");
        device6.classList.remove("green");
    }else{
        device6.classList.remove("red");
        device6.classList.add("disabled");
        device6.classList.remove("green");
    }
})

device7Val.on("value", (snaphot) => {
    let status = snaphot.val();

    device7.addEventListener("click", () => {
        if(status == "off") {
            device7Val.set("on");
            status = "on";
        }else if(status == "on") {
            device7Val.set("off");
            status = "off"
        }
    })

    if(status == "on") {
        device7.classList.add("green");
        device7.classList.remove("disabled");
        device7.classList.remove("red");
    }else if(status == "off") {
        device7.classList.add("red");
        device7.classList.remove("disabled");
        device7.classList.remove("green");
    }else{
        device7.classList.remove("red");
        device7.classList.add("disabled");
        device7.classList.remove("green");
    }
})

device8Val.on("value", (snaphot) => {
    let status = snaphot.val();

    device8.addEventListener("click", () => {
        if(status == "off") {
            device8Val.set("on");
            status = "on";
        }else if(status == "on") {
            device8Val.set("off");
            status = "off"
        }
    })

    if(status == "on") {
        device8.classList.add("green");
        device8.classList.remove("disabled");
        device8.classList.remove("red");
    }else if(status == "off") {
        device8.classList.add("red");
        device8.classList.remove("disabled");
        device8.classList.remove("green");
    }else{
        device8.classList.remove("red");
        device8.classList.add("disabled");
        device8.classList.remove("green");
    }
})

device9Val.on("value", (snaphot) => {
    let status = snaphot.val();

    device9.addEventListener("click", () => {
        if(status == "off") {
            device9Val.set("on");
            status = "on";
        }else if(status == "on") {
            device9Val.set("off");
            status = "off"
        }
    })

    if(status == "on") {
        device9.classList.add("green");
        device9.classList.remove("disabled");
        device9.classList.remove("red");
    }else if(status == "off") {
        device9.classList.add("red");
        device9.classList.remove("disabled");
        device9.classList.remove("green");
    }else{
        device9.classList.remove("red");
        device9.classList.add("disabled");
        device9.classList.remove("green");
    }
})