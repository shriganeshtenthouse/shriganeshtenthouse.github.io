console.log("hello Universe")


let btn = document.querySelector(".btn-calc")
let result = {
    
}
let table_element = document.createElement('table')
table_element.classList.add('style-table')
table_element.insertAdjacentHTML('beforeend','<thead><tr><th>Size</th><th>Area</th><th>Boxes</th><th>Pawa</th><th>Kaichi</th></tr></thead><tbody class="table-body"></tbody>')


btn.addEventListener("click", ()=>{
    console.log("clicked");
    let size_dom = document.querySelector(".size-input select");
    let length_dom = document.querySelector(".length-input input");
    let width_dom = document.querySelector(".width-input input");
    let s = size_dom.value;
    let l = length_dom.value;
    let w = width_dom.value;
    s = Number(s.trim())
    l = Number(l.trim())
    w = Number(w.trim())


    let lc = parseInt(l/s,10);
    let wc = parseInt(w/s,10);
    console.log(lc);
    if(l%s){
        lc+=1;
    }
    if(w%s){
        wc+=1;
    }
    let total_c = (lc*(wc+1))+(wc*(lc+1));
    let total_p = (lc+1)*(wc+1);
    if(l==0|| w==0){
        total_c = 0
        total_p = 0
    }
    console.log(lc, wc)
    console.log(total_p)
    console.log(total_c)
    //create table dynamically
    console.log(table_element)
    if(result[`${s}`]){
        result[`${s}`]["p"] +=total_p
        result[`${s}`]["c"] +=total_c
    }else{
        result[`${s}`] = {
            "p":total_p,
            "c":total_c
        }
    }
    console.log(result)

    let tr = `<tr><td>${s}ft</td><td>${(lc*s)} X ${(wc*s)}</td><td>${lc*wc}</td><td>${total_p}</td><td>${total_c}</td></tr>`
    console.log(tr);
    dom_te = document.querySelector('.table-body')
    if(dom_te){
        dom_te.insertAdjacentHTML('beforeend',tr);
    }else{

        table_element.querySelector('.table-body').insertAdjacentHTML('beforeend',tr)
        document.querySelector('.output-container').appendChild(table_element)
    }
    console.log(table_element);

    // for (const [k,v] of Object.entries(result)){
    //     console.log(k,v)
    //     let tr = `<tr><td>${k}</td><td></td></tr>`
    // }



})

