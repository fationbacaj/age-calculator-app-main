//output element
const output_y = document.querySelector(".year");
const output_m = document.querySelector(".month");
const output_d = document.querySelector(".day");
const span_d= document.querySelector(".span_d");
const span_m= document.querySelector(".span_m");
const span_y= document.querySelector(".span_y");
const span= document.querySelector("span");
const inputi = document.querySelector("input");
//input element
let isValid = false;

const input_y = document.querySelector("#year");
const input_m = document.querySelector("#month");
const input_d = document.querySelector("#day");
// error element
const error_year = document.querySelector(".error-year");
const error_month = document.querySelector(".error-month");
const error_d = document.querySelector(".error-day");
const btn_submit = document.querySelector(".submit");


input_d.addEventListener("input", (e)=>{

    if(input_d.value > 31){
        isValid = false;
        error_d.textContent = "Must be a 31 no more";
        span_d.style.color = 'red';
        input_d.style.color = 'red';
        input_d.style.borderColor = 'red';
         
        return;
    }else{
       
        if(input_d.value <32){
            isValid=true;
            span_d.style.color = 'inherit';
            input_d.style.color = 'inherit';
            input_d.style.borderColor = 'inherit';
            error_d.textContent ="";
            }
        
    }

    if(input_d.value <= 0){
        isValid = false;
        error_d.textContent = "this field is required";
        span_d.style.color = 'red';
        input_d.style.color = 'red';
        input_d.style.borderColor = 'red';
        
        return;
    }else{
        if(input_d.value > 0){
        isValid=true;
        span_d.style.color = 'inherit';
        input_d.style.color = 'inherit';
        input_d.style.borderColor = 'inherit';
        error_d.textContent ="";
        }
    }
});


input_m.addEventListener("input", (e)=>{

    if(input_m.value > 12){
        isValid = false;
        error_month.textContent = "Must be a 12 no more";
        span_m.style.color = 'red';
        input_m.style.color = 'red';
        input_m.style.borderColor = 'red';
       
        return;
    }else{
        if(input_m.value < 12){
            isValid=true;
            span_m.style.color = 'inherit';
            input_m.style.color = 'inherit';
            input_m.style.borderColor = 'inherit';
            error_month.textContent ="";
            }
         
    }

    if(input_m.value <= 0){
        isValid = false;
        error_month.textContent = "this field is required";
        span_m.style.color = 'red';
        input_m.style.color = 'red';
        input_m.style.borderColor = 'red';
       
        return;
    }else{
        
        if(input_m.value > 0){
            isValid=true;
            span_m.style.color = 'inherit';
            input_m.style.color = 'inherit';
            input_m.style.borderColor = 'inherit';
            error_month.textContent ="";
            }
        
    }
});




input_y.addEventListener("input", (e)=>{

    if(input_y.value > 2023){
        isValid = false;
        error_year.textContent = "Year 2023 no more";
        span_y.style.color = 'red';
        input_y.style.color = 'red';
        input_y.style.borderColor = 'red';
        
        return;
    }else{
        if(input_y.value < 2023){
            isValid=true;
            span_y.style.color = 'inherit';
            input_y.style.color = 'inherit';
            input_y.style.borderColor = 'inherit';
            error_year.textContent = "";
            }
         
    }

    if(input_y.value <= 1900){
        isValid = false;
        error_year.textContent = "You ar Dead now  ";
        span_y.style.color = 'red';
        input_y.style.color = 'red';
        input_y.style.borderColor = 'red';
        
        return;
    }else{
        
        if(input_y.value > 1900){
            isValid=true;
            span_y.style.color = 'inherit';
            input_y.style.color = 'inherit';
            input_y.style.borderColor = 'inherit';
            error_year.textContent = "";
            }
        
    }
});

 
function CalculateDate() {
    if (isValid) {
        let ditelindje = `${input_y.value}/${input_m.value}/${input_d.value}`;
        console.log(ditelindje);

        let ditelindjeObj = new Date(ditelindje);

        let DiferencaMoshes = Date.now() - ditelindjeObj;

        let vjec = new Date(DiferencaMoshes);

        // Llogaritja e vjetëve, muajve dhe ditëve
        let saVite = vjec.getUTCFullYear() - 1970;
        let saMuaj = vjec.getUTCMonth();
        let saDite = vjec.getUTCDate() - 1; // Llogaritja fillon nga 0

        // Dalja e rezultateve në output
        output_d.textContent = saDite;
        output_m.textContent = saMuaj;
        output_y.textContent = saVite;
    } else {
        alert("error");
    }
}

btn_submit.addEventListener("click", CalculateDate);
