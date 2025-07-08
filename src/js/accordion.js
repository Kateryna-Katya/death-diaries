document.querySelectorAll('.faq-acc-el-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
        const parentElement = trigger.closest('.faq-acc-el');
        const panel = parentElement.querySelector('.faq-acc-el-descr-frame');
        const svg = trigger.querySelector('svg');
        const isOpen = parentElement.classList.contains('open');

        const plusIcon = `
            <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_2014_57)">
                    <path
                        d="M23.2857 15.2143H14.7143V23.7857C14.7143 24.2404 14.5337 24.6764 14.2122 24.9979C13.8907 25.3194 13.4547 25.5 13 25.5C12.5453 25.5 12.1093 25.3194 11.7878 24.9979C11.4663 24.6764 11.2857 24.2404 11.2857 23.7857V15.2143H2.71429C2.25963 15.2143 1.82359 15.0337 1.5021 14.7122C1.18061 14.3907 1 13.9547 1 13.5C1 13.0453 1.18061 12.6093 1.5021 12.2878C1.82359 11.9663 2.25963 11.7857 2.71429 11.7857H11.2857V3.21429C11.2857 2.75963 11.4663 2.32359 11.7878 2.0021C12.1093 1.68061 12.5453 1.5 13 1.5C13.4547 1.5 13.8907 1.68061 14.2122 2.0021C14.5337 2.32359 14.7143 2.75963 14.7143 3.21429V11.7857H23.2857C23.7404 11.7857 24.1764 11.9663 24.4979 12.2878C24.8194 12.6093 25 13.0453 25 13.5C25 13.9547 24.8194 14.3907 24.4979 14.7122C24.1764 15.0337 23.7404 15.2143 23.2857 15.2143Z"
                        fill="white"/>
                </g>
                <defs>
                    <clipPath id="clip0_2014_57">
                        <rect width="25" height="25" fill="white" transform="translate(0 0.5)" />
                    </clipPath>
                </defs>
            </svg>`;

        const minusIcon = `
            <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M23.2857 15.2142H14.7143H2.71429C2.25963 15.2142 1.82359 15.0336 1.5021 14.7121C1.18061 14.3906 1 13.9546 1 13.4999C1 13.0453 1.18061 12.6092 1.5021 12.2878C1.82359 11.9663 2.25963 11.7856 2.71429 11.7856L14.7143 11.7857L23.2857 11.7856C23.7404 11.7856 24.1764 11.9663 24.4979 12.2878C24.8194 12.6092 25 13.0453 25 13.4999C25 13.9546 24.8194 14.3906 24.4979 14.7121C24.1764 15.0336 23.7404 15.2142 23.2857 15.2142Z"
                    fill="white" />
            </svg>`;

        if (!isOpen) {
            parentElement.classList.add('open');
            panel.style.maxHeight = panel.scrollHeight + 'px';
            svg.outerHTML = minusIcon;
        } else {
            parentElement.classList.remove('open');
            panel.style.maxHeight = '0';
            svg.outerHTML = plusIcon;
        }
    });
});