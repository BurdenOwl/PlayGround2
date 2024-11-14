let lockDown = localStorage.getItem('whetherLockDown');
if (lockDown == undefined || lockDown == null) {
    lockDown = "false";
    localStorage.setItem('whetherLockDown', lockDown);
};

if (lockDown === "true") {
    let locked = document.getElementById('lockDown');
    let locked2 = document.getElementById('lockDown2');
    locked.innerHTML = `Website blocked`;
    locked2.innerHTML = ``;
};