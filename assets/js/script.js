const flag = '487bc9db81d4eadf4b859515291d2d2ad291ebafa58f615b32de345e52a69d9f';

const hashData = async (data) => {
    const encodedData = new TextEncoder().encode(data);
    const hashBuffer = await crypto.subtle.digest("SHA-256", encodedData);
    return Array.prototype.slice.call(new Uint8Array(hashBuffer)).map(b => b.toString(16).padStart(2, '0')).join('');
};

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

const submit = async () => {
    const valueOf = document.getElementById('theText');
    const actualValue = valueOf.value;

    if (flag !== await hashData(actualValue)) {
        alert("Incorrect. Now the website is locked");
        lockDown = "true";
        localStorage.setItem('whetherLockDown', lockDown);
        window.location.href = atob('aHR0cHM6Ly90aW55dXJsLmNvbS9iZGRjcnZkYw==');
        return;
    };

    const body = document.getElementById('lockDown');
    body.innerHTML = "you win :)"
};