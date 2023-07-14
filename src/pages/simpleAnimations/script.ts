const animatedElement = document.getElementById('animated-element');


const X_DURATION = 3000;
const Y_DURATION = 1000;
const PERIOD = Math.PI * 2;


startAnimation();

function startAnimation() {
    let startTimeStamp: number | null = null;
    window.requestAnimationFrame(animationTick);

    let prevTimestamp = 0;
    function animationTick(timestamp: number) {
        const containerWidth = animatedElement?.parentElement?.getBoundingClientRect().width;
        if (startTimeStamp === null) {
            startTimeStamp = timestamp;
        }
        const deltaTime = timestamp - prevTimestamp;
        const deltaFromStart = startTimeStamp - timestamp;

        const sector = (PERIOD * deltaFromStart) / Y_DURATION;
        const relativeY = Math.sin(sector) * 100;
    
        animatedElement?.style.top = `${400 + relativeY}px`;


        console.log(animatedElement?.getBoundingClientRect().left, containerWidth);
        const newY = animatedElement?.getBoundingClientRect().left <= containerWidth ? 
            animatedElement?.getBoundingClientRect().left + containerWidth * (deltaTime /X_DURATION) :
            0;
        animatedElement?.style.left = `${newY}px`;
        window.requestAnimationFrame(animationTick);
        prevTimestamp = timestamp;
    }
}

