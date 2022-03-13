const fancySlider = () => {
    const fancyWrapper = document.querySelector('.fancy-slider');
    const imgElement = document.querySelectorAll('.fancy-slider > img');

    // Store All Img Url
    let imgs = [];

    // Get src from Img
    imgElement?.forEach((img) => imgs.push(img.src));

    // Margin Values
    let marginValue = 0;
    const widthOfImg = document.querySelector('.fancy-slider > img').scrollWidth;
    const totalImg = imgs.length;

    // Next Slide
    const nextSlide = () => {
        if ((totalImg - 1) * widthOfImg > marginValue) {
            marginValue += widthOfImg;
            imgElement[0].style.marginLeft = `-${marginValue}px`;
            imgElement[0].style.transition = `all 1s`;
        }
    }

    // previous Slide
    const prevSlide = () => {
        if (0 !== marginValue) {
            marginValue -= widthOfImg;
            imgElement[0].style.marginLeft = `-${marginValue}px`;
            imgElement[0].style.transition = `all 1s`;
        }
    }

    // Create Nav Button
    const createBtn = (name, text) => {
        const existBtns = document.querySelectorAll('.fancy-slider button');
        if (existBtns.length === 2) {
            return;
        }
        const button = document.createElement('button');
        button.classList.add(name);
        button.innerHTML = text;
        fancyWrapper.appendChild(button);
    }

    // Create Next Button
    createBtn('next', '&#8250');

    // Create Previous Button
    createBtn('prev', '&#8249');

    // Active Next Slide
    document.querySelector('.fancy-slider .next').addEventListener('click', nextSlide);

    // Active Prev Slide
    document.querySelector('.fancy-slider .prev').addEventListener('click', prevSlide);
}

// Call Slider onload (window)
window.onload = () => {
    fancySlider();
}

// Reload Page onresize (window)
window.addEventListener('resize', () => {
    location.reload();
});

