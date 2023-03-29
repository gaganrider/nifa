let coursediv=document.querySelector('.section-3div')

let data=[
    {
        url:'https://www.nifafinearts.com/images/animation-sketching.jpg',
        text:'6 Months Diploma in Sketching & Oil Painting - Regular/Part time'
    },
    {
        url:'https://www.nifafinearts.com/images/3mchc.jpg',
        text:'1 to 3 Months Certificate Hobby Course (Regular and Weekend)'
    },
    {
        url:'https://www.nifafinearts.com/images/1ydfa.jpg',
        text:'One Year Diploma in Fine Arts-Regular/Part Time-Level-3'
    },
    {
        url:'https://www.nifafinearts.com/images/2ydfa.jpg',
        text:'Two years Advance Diploma in Fine Arts - Regular/Part time'
    },
    {
        url:'https://www.nifafinearts.com/images/entrance-prepration.jpg',
        text:'Entrance Preparation For N.I.D'
    },
    {
        url:'https://www.nifafinearts.com/images/bfa.jpg',
        text:'B.F.A from UGC Recognised University'
    },
    {
        url:'https://www.nifafinearts.com/images/ma.jpg',
        text:'M.A in Painting from UGC Recognised University'
    },
    {
        url:'https://www.nifafinearts.com/images/entrance-prepration3.jpg',
        text:'Entrance preparation for B.F.A'
    },
    {
        url:'https://www.nifafinearts.com/images/kidl1.jpg',
        text:'Kids 1 year Diploma (Level-1)'
    },
    {
        url:'https://www.nifafinearts.com/images/kidl2.jpg',
        text:'Kids 1 year Diploma (Level-2)'
    },
    {
        url:'https://www.nifafinearts.com/images/entrance-prepration2.jpg',
        text:'Entrance Preparation for NIFT'
    },
    {
        url:'https://www.nifafinearts.com/images/hccfk.jpg',
        text:'3 Months Hobby Certificate Course For Kids'
    },
    
]


data.forEach((item)=>{
return(cardCreate(item.url,item.text))
})
    


// cardCreate('https://www.nifafinearts.com/images/3mchc.jpg','something')



function cardCreate(imgurl,text){
    let card = document.createElement("div");
    card.setAttribute("class", "course-card");
    coursediv.append(card);
    let imag=document.createElement("img");
    imag.setAttribute("src", imgurl);
    card.append(imag);
    let div = document.createElement("div");
    div.setAttribute("class", "course-card-bottom");
    card.append(div);
    let txt = document.createElement("h4");
    div.append(txt);
    txt.innerText=text;
    let but = document.createElement("button");
    div.append(but);
    but.innerText='Know more';
}


