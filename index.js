const button = document.getElementById("button");

const horoscopeDetails  = [
    {zodiac: "Aries", startDate:{month:3, date:21}, endDate:{month:4, date:19}, 
    pic:`<img src="http://cdn.shopify.com/s/files/1/1325/0879/articles/headers-zodiac-sign-astrology-personality-positives-negatives-cheat-sheet-aries_1024x1024.png?v=1517850072" alt=""  height="175" width="250">`},
    {zodiac: "Taurus", startDate:{month:4, date:20}, endDate:{month:5, date:20} , 
    pic:` <img src="http://cdn.shopify.com/s/files/1/1325/0879/articles/headers-zodiac-sign-astrology-personality-positives-negatives-cheat-sheet-taurus_1024x1024.png?v=1517849684" alt=""  height="175" width="250">` },
    {zodiac: "Gemini", startDate:{month:5, date:21}, endDate:{month:6, date:21},
    pic:`<img src="http://cdn.shopify.com/s/files/1/1325/0879/articles/headers-zodiac-sign-astrology-personality-positives-negatives-cheat-sheet-gemini_1024x1024.png?v=1517844742" alt=""  height="175" width="250">` },
    {zodiac: "Cancer", startDate:{month:6, date:22}, endDate:{month:7, date:22 },
         pic:`<img src="http://cdn.shopify.com/s/files/1/1325/0879/articles/headers-zodiac-sign-astrology-personality-positives-negatives-cheat-sheet-cancer_1024x1024.png?v=1517625158" alt=""  height="175" width="250">` },
    {zodiac: "Leo", startDate:{month:7, date:23}, endDate:{month:8, date:22} , 
        pic: `<img src="http://cdn.shopify.com/s/files/1/1325/0879/articles/headers-zodiac-sign-astrology-personality-positives-negatives-cheat-sheet-leo_1024x1024.png?v=1517617612" alt=""  height="175" width="250">` },
    {zodiac: "Virgo", startDate:{month:8, date:23}, endDate:{month:9, date:22} , 
        pic: `<img src="http://cdn.shopify.com/s/files/1/1325/0879/articles/headers-zodiac-sign-astrology-personality-positives-negatives-cheat-sheet-virgo_1024x1024.png?v=1517590104" alt=""  height="175" width="250">` },
    {zodiac: "Libra", startDate:{month:9, date:23}, endDate:{month:10, date:23} , 
        pic: `<img src="http://cdn.shopify.com/s/files/1/1325/0879/articles/headers-zodiac-sign-astrology-personality-positives-negatives-cheat-sheet-libra_1024x1024.png?v=1517444894" alt=""  height="175" width="250">`},
    {zodiac: "Scorpius", startDate:{month:10, date:24}, endDate:{month:11, date:21} , 
        pic: `<img src="http://cdn.shopify.com/s/files/1/1325/0879/articles/headers-zodiac-sign-astrology-personality-positives-negatives-cheat-sheet-scorpio_1024x1024.png?v=1517441497" alt=""  height="175" width="250">` },
    {zodiac: "Sagittarius", startDate:{month:11, date:22}, endDate:{month:12, date:21} , 
        pic:  `<img src="http://cdn.shopify.com/s/files/1/1325/0879/articles/headers-zodiac-sign-astrology-personality-positives-negatives-cheat-sheet-sagittarius_1024x1024.png?v=1517414803" alt="" height="175" width="250">`
     },
    {zodiac: "Capricornus", startDate:{month:12, date:22}, endDate:{month:1, date:19} , 
        pic: `<img src="http://cdn.shopify.com/s/files/1/1325/0879/articles/headers-zodiac-sign-astrology-personality-positives-negatives-cheat-sheet-capricorn_1024x1024.png?v=1517361013" alt=" " height="175" width="250">`
     },
    {zodiac: "Aquarius", startDate:{month:1, date:20}, endDate:{month:2, date:18} , 
        pic: `    <img src="http://cdn.shopify.com/s/files/1/1325/0879/articles/headers-zodiac-sign-astrology-personality-positives-negatives-cheat-sheet-aquarius_1024x1024.png?v=1517258109" alt="" height="175" width="250">`},
    {zodiac: "Pisces", startDate:{month:2, date:19}, endDate:{month:3, date:20},
pic:`<img src="http://cdn.shopify.com/s/files/1/1325/0879/articles/headers-zodiac-sign-astrology-personality-positives-negatives-cheat-sheet-pisces_1024x1024.png?v=1517257307" alt=""  height="175" width="250">` }
   
]
button.addEventListener("click", () =>{
    let selectedBD = document.getElementById("date").value;
    let dateObj = new Date(selectedBD);
    let month = dateObj.getMonth()+1;
    let date = dateObj.getDate();
    const message = document.getElementById("message");
    const image = document.getElementById("image");
    console.log(dateObj);
    for(let i = 0; i <12.; i++){
        if((month == horoscopeDetails[i].startDate.month && date >= horoscopeDetails[i].startDate.date)||(month == horoscopeDetails[i].endDate.month && date <= horoscopeDetails[i].endDate.date)){
            message.innerHTML ="Your horoscope is: " +horoscopeDetails[i].zodiac;
            image.innerHTML = horoscopeDetails[i].pic;
        }
    }


})