const previousFlag1 = "37f13b5cd79434ba0bb8f89a95e227f881a8a17d535f6a71ff4d221e8f7a2e62";
const previousFlag2 = "b1fc7cae5c24f2625866f490e53b17f4e4ddb30c33d6422ff650dce5a8345253";
const previousFlag3 = "020dd3dc162a25483a5648c8ea007dc379ed5cb922f5cc7e4d2c48b3b69cc354";
let questionNumber = 1;

const doubleCheck = async () => {
    let locked = document.getElementById('lockDown');
    let locked2 = document.getElementById('lockDown2');
    let question;
    
    while (true) {
        if (questionNumber == 1) {
            question = prompt("To continue, please enter the key for Locker1");
            if (previousFlag1 === await hashData(question.toUpperCase())) {
                break;
            }
        } else if (questionNumber == 2) {
            question = prompt("To continue, please enter the key for Locker2");
            if (previousFlag2 === await hashData(question.toUpperCase())) {
                break;
            }
        } else if (questionNumber == 3) {
            question = prompt("To continue, please enter the key for Locker3");
            if (previousFlag3 === await hashData(question.toUpperCase())) {
                break;
            }
        }

        alert("Incorrect key. Please try again.");
    }

    questionNumber = questionNumber + 1;

    if (questionNumber == 4) {
        locked.classList.remove("hidden");
        return;
    };

    doubleCheck();
};

doubleCheck();