async function init(){
    let rustApp = null;

    try{
        rustApp = await import('../pkg')
    } catch(e){
        console.error(e)
        return;
    }

    const input = document.getElementById('upload')
    const fileReader = new FileReader()

    fileReader.onloadend = () => {
        let base64 = fileReader.result.replace(
            /^data:image\/(png|jpeg|jpg);base64,/, ''
        )

        const imgEffect = document.querySelector('input[name="effect"]:checked').value
        let img_data_url = rustApp.img_effect(base64, imgEffect)
        document.getElementById('new-img').setAttribute('src', img_data_url)
        document.getElementById('upload').value= null;
    }

    input.addEventListener('change', () => {
        fileReader.readAsDataURL(input.files[0])
    })
}

init();
