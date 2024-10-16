let value=prompt("Nhap 1 so: ");
let num=[-3, 5, 1, 3, 2, 10];
let index=-1;
for(let i=0; i<num.length; i++){
    if(value==num[i]){
        index=i;
    }
}
//Truong hop khong tim thay
if(index>-1){
    alert("Value "+value+" found at "+index);
}else {
    alert("Value "+value+" not found");
}
