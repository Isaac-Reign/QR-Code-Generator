const form = document.querySelector('.generate-form');
const spinner = document.querySelector('.image-box');
const spinnerImg = document.querySelector('.image-box img');
const qr = document.getElementById('qrcode');

actionButtons()

function actionButtons() {
    userSection = document.querySelector('.user-section');
    document.getElementById('save-section').addEventListener('click', () => {
        userSection.classList.toggle('user-section-toggler');
    })

    document.querySelector('.close-btn').addEventListener('click', () => {
        userSection.classList.toggle('user-section-toggler');
    })
}
const onGenerateSubmit = (e) => {
    e.preventDefault()
    qr.innerHTML = '';
    const saveLinke = document.querySelector('.download-btn');
    const saveLinke2 = document.querySelector('.add-database');

    if (saveLinke || saveLinke2) {
        saveLinke.remove()
        saveLinke2.remove()
    }
    url = document.getElementById('url').value;
    size = document.getElementById('size').value;

    showSpiner()
    if (url) {
        setTimeout(() => {
            hideSpiner()
            generateQRCode(url, size);
            setTimeout(() => {
                form.classList.add('generate-form-toggler');
                saveURL = qr.querySelector('img').src;
                createSaveBtn(saveURL);

            }, 50)
        }, 1000)
    }
}

const generateQRCode = (url, size) => {
    const qrcode = new QRCode('qrcode', {
        text: url,
        width: size,
        height: size
    })
}
form.addEventListener('submit', onGenerateSubmit)

const showSpiner = () => {
    spinner.style.opacity = 'border: 1.5px dotted dodgerblue'
    spinnerImg.style.display = 'block'
    qr.style.display = 'none'
}

const hideSpiner = () => {
    spinner.style.border = 'none';
    spinnerImg.style.display = 'none'
    qr.style.display = 'block'
}

const createSaveBtn = (saveURL) => {
    const link = document.createElement('a');
    link.download = 'qrcode';
    link.classList = 'download-btn';
    link.href = saveURL;
    link.innerHTML = "Download Image";
    generated = document.getElementById('generated');


    const link2 = document.createElement('button');
    link2.classList = 'download-btn add-database';
    link2.innerHTML = "Add to data-base"
    generated.appendChild(link);
    generated.appendChild(link2);

}