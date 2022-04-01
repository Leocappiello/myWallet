window.onload = init

function init() {
    //darkMode - LightMode
    let changeModeButton = document.getElementsByClassName('floating-button')

    changeModeButton[0].addEventListener("click", () => {
        changeColor()
    })

    let mode = "light"
    localStorage.setItem('mode', mode)

    function changeColor() {
        var sheet = document.createElement('style')

        if (localStorage.getItem('mode') == "dark") {
            mode = "light"
            localStorage.setItem('mode', mode)
            sheet.innerHTML = `
                .dark, .head-title {
                    background-color: #ffffff !important;
                    color: inherit !important;
                    transition: ease 0.3s;
                }
                .active {
                    background-color: #ffffff !important;
                }
                .login{
                    border-bottom: 0.2em solid #e3e3e3 !important;
                    border-radius: 1vh !important;
                }
                html {
                    background: -moz-linear-gradient(0deg, rgba(196,229,255,1) 0%, rgba(120,194,255,1) 79%);
                    background: -webkit-linear-gradient(0deg, rgba(196,229,255,1) 0%, rgba(120,194,255,1) 79%);
                    background: linear-gradient(0deg, rgba(196,229,255,1) 0%, rgba(120,194,255,1) 79%);
                    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#c4e5ff",endColorstr="#78c2ff",GradientType=1); 
                    background-repeat: no-repeat;
                    background-attachment: fixed;
                }
            `

            document.body.appendChild(sheet);
        } else {
            mode = "dark"
            localStorage.setItem('mode', mode)
            sheet.innerHTML = `
                .dark, .head-title{
                    background-color: #3b454d !important;
                    color: white !important;
                    transition: ease 0.3s;
                }
                .login{
                    border-bottom: 0.2em solid #3b454d !important;
                    border-radius: 1vh !important;
                }
                .active {
                    background-color: #3b454d !important;
                }
                html {                
                    background: rgb(110,0,146);
                    background: -moz-linear-gradient(180deg, rgba(110,0,146,1) 0%, rgba(228,17,121,1) 100%);
                    background: -webkit-linear-gradient(180deg, rgba(110,0,146,1) 0%, rgba(228,17,121,1) 100%);
                    background: linear-gradient(180deg, rgba(110,0,146,1) 0%, rgba(228,17,121,1) 100%);
                    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#6e0092",endColorstr="#e41179",GradientType=1); 
                    background-repeat: no-repeat;
                    background-attachment: fixed;
                    transition: ease 0.3s;
                }

            `
            document.body.appendChild(sheet);
        }
    }
}
