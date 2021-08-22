var age= document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var form = document.getElementById("form");

const validateForm =()=>{
    if (age.value=="" || height.value=="" || weight.value==""){
        alert("All feilds are required!");
        document.getElementById("submit").removeEventListener("click", countBmi)
    }
    else{
        countBmi();
    }
}

document.getElementById("submit").addEventListener("click", validateForm);

const countBmi = () => {
    var p = [age.value, height.value, weight.value];
    form.reset();

    var bmi = Number(p[2])/(Number(p[1])/100*Number(p[1])/100);

    var result='';
    
   if(bmi<18.5){
        result='Oops! You are underweight. You gotta gain weight in a good way!'
    }
    else if(18.5<=bmi&&bmi<=24.9){
        result='Yay! You are healthy. You can have a cheese pizza!'
    }

    else if(25<=bmi&&bmi<=29.9){
        result='You gotta cut down you unhealty food. Then you will be perfectly awesome!'
    }

    else if(30<=bmi&&bmi>=34.9){
        result='Ohno! Time to train your brain to hate junk food!'
    }

    else if(35<=bmi){
        result='Obesity alert! No more junk for you '
    }

    var h1 = document.createElement("h1");
    var pr = document.createElement("p");

    var t = document.createTextNode(result);

    var b = document.createTextNode('BMI');

    var r = document.createTextNode(parseFloat(bmi).toFixed(2));

    h1.appendChild(b);

    h1.appendChild(r);

    pr.appendChild(t);

    document.body.appendChild(h1);

    document.body.appendChild(pr);
    
    document.getElementById("submit").removeEventListener("click", countBmi);

    document.getElementById("submit").removeEventListener("click", validateForm);
    document.getElementById("submit").addEventListener("click", countBmi);
}