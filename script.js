function findGrade(){
    let name=nme.value;
let su1=Number(s1.value);
let su2=Number(s2.value);
let su3=Number(s3.value);
let su4=Number(s4.value);
let su5=Number(s5.value);
let tot=0,avg=0;
avg=(su1+su2+su3+su4+su5)/5;
if(avg>90)
{
    alert(`${name}'s grade is A`);
}else if(avg>70){
    alert(`${name}'s grade is B`);
}
else if(avg>50){
    alert(`${name}'s grade is C`);
}else if(avg>30){
    alert(`${name}'s grade is D`);
}else{
    alert(`${name}'s grade is E, Failed`);
}
location.reload(true);
}

