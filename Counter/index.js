// Initial Count 0
let count = 0 ;

// Targetting value and buttons 
const value = document.querySelector("#value");

const btns = document.querySelectorAll(".btn");

btns.forEach( function (btn) {
    btn.addEventListener('click' , function (e) {
        
        const styles = e.currentTarget.classList;
        // console.log(e.currentTarget.classList);

        if(styles.contains('decrease')){
            count = count - 1;
        }
        else if(styles.contains('increase')){
            count =count + 1;;
        }
        else if(styles.contains('reset')){
            count = 0;
        }
        
        if(count<0)
            value.style.color = "red";

        else if(count > 0)
            value.style.color = "green";  

        value.textContent = count ;

    })
});