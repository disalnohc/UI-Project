//  Change Navbar bg color when Scroll
 window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 200) { 
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

document.addEventListener('DOMContentLoaded', function() {
  createListMovie()
  controlsVolumnIframe()

  var videoContainer = document.querySelector('.video-container');
  var iframe = videoContainer.querySelector('iframe');
  var img = videoContainer.querySelector('img');
  var animeTop = document.querySelector('.anime-top');

  iframe.style.opacity = '1';
  img.style.opacity = '0';
  animeTop.style.zIndex = '-2';

  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  window.onYouTubeIframeAPIReady = function() {
      var player = new YT.Player('videoFrame', {
          events: {
              'onStateChange': onPlayerStateChange
          }
      });
  };

  function onPlayerStateChange(event) {
      if (event.data == YT.PlayerState.ENDED) {
          iframe.style.opacity = '0'; 
          img.style.opacity = '1'; 
          animeTop.style.zIndex = '-3'; 
      }
  }
});



const dataMovie = {
//1
"กำลังมาแรง":{
   "วันพีซ":{
      "cover":"https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/a249096c7812deb8c3c2c907173f3774.jpg",
      "trailer":"https://www.youtube.com/embed/S8_YwFLCh4U?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
      "matching":"97",
      "rate":"13+",
      "time":"1115 ตอน"
   },
   "สร้างสถานะผิดปกติ":{
      "cover":"https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/d545596a4709d117bdee723f820626af.jpg",
      "trailer":"https://www.youtube.com/embed/aAFj4C_hNYc?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
      "matching":"86",
      "rate":"17+",
      "time":"6 ตอน"
   },
   "เกิดใหม่ทั้งทีก็เป็นสไลม์ไปซะแล้ว ซีซั่น 3":{
      "cover":"https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/c66e81aad52628a7f0738987903f92d2.jpg",
      "trailer":"https://www.youtube.com/embed/oxZWA16zjO0?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
      "matching":"92",
      "rate":"13+",
      "time":"18 ตอน"
   },
   "ตาลุงนักผจญภัยมือใหม่ ฝึกโหดจนไร้เทียมทานกับปาร์ตี้ในตำนานขั้นเทพ":{
      "cover":"https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/cef951286ca851e675ea232be110fb9d.jpg",
      "trailer":"https://www.youtube.com/embed/_oBwn3oaHQw?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
      "matching":"95",
      "rate":"15+",
      "time":"6 ตอน"
   },
   "ฉันจะ “แพรี่” ให้หมด –ผู้แข็งแกร่งที่สุดในโลกอยากจะเป็นนักผจญภัยให้ได้–":{
      "cover":"https://pic.bstarstatic.com/ogv/1d119103a0b83a6fa14dd3d0153525a2e9607ec8.png@454w_254h_1e_1c_90q.webp",
      "trailer":"https://www.youtube.com/embed/F6RmPmdpazw?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
      "matching":"89",
      "rate":"13+",
      "time":"6 ตอน"
   },
   "คุณอาเรียโต๊ะข้างๆ พูดรัสเซียหวานใส่ซะหัวใจจะวาย":{
      "cover":"https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/b0bdcf73a7e00f9bc75131088970288d.jpg",
      "trailer":"https://www.youtube.com/embed/pBX6TtOlYow?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
      "matching":"96",
      "rate":"13+",
      "time":"8 ตอน"
   },
   "ตำนานดาบและคทาแห่งวิสตอเรีย":{
      "cover":"https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/cd7a61f4fade67df2481cb8c8949a6b1.jpg",
      "trailer":"https://www.youtube.com/embed/xR6hV_dVHIc?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
      "matching":"84",
      "rate":"13+",
      "time":"5 ตอน"
   },
   "ดาบพิฆาตอสูร ภาคการสั่งสอนของเสาหลัก":{
      "cover":"https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/6b17182a3518d7406f0e69687f773f4f.jpg",
      "trailer":"https://www.youtube.com/embed/Tf31dGdlWxE?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
      "matching":"83",
      "rate":"15+",
      "time":"จบแล้ว"
   },
   "นารูโตะ ตำนานวายุสลาตัน":{
      "cover":"https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/3f283002b47c62b1e5d311c45f95c97e.jpe",
      "trailer":"https://www.youtube.com/embed/1dy2zPPrKD0?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
      "matching":"92",
      "rate":"13+",
      "time":"จบแล้ว"
   },
   "จอมเวทมนุษย์ในกองทัพจอมมาร":{
      "cover":"https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/45636402cc4fd2733124898f9f49410a.jpg",
      "trailer":"https://www.youtube.com/embed/t61LyG6ZUYU?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
      "matching":"92",
      "rate":"13+",
      "time":"8 ตอน"
   },
   "ศึกจอมเวทอภินิหาร ภารกิจ 100 ปี":{
      "cover":"https://pic.bstarstatic.com/ogv/e5412c90b5e9092abbb9a9495057835268d389b1.png@454w_254h_1e_1c_90q.webp",
      "trailer":"https://www.youtube.com/embed/SjYlGEvG2Go?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
      "matching":"81",
      "rate":"13+",
      "time":"6 ตอน"
   },
   "มายฮีโร่ อคาเดเมีย ภาคที่ 7":{
      "cover":"https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/9ca680632ac63f44c7220f61ace9a81b.jpg",
      "trailer":"https://www.youtube.com/embed/D5fYOnwYkj4?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
      "matching":"93",
      "rate":"13+",
      "time":"12 ตอน"
   }
},
//2
"แนะนำสำหรับคุณ":{
      "ผ่าพิภพไททัน ไฟนอล ซีซั่น บทสุดท้าย ครึ่งแรก":{
         "cover":"https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/1dea4b0c71a1b3837e27077b93bfc217.jpg",
         "trailer":"https://www.youtube.com/embed/SlNpRThS9t8?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"86",
         "rate":"15+",
         "time":"จบแล้ว"
      },
      "รักสุดฟินเลเวล 999 กับยามาดะคุง":{
         "cover":"https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/ffad1b93800580a55173288141b9a321.jpe",
         "trailer":"https://www.youtube.com/embed/LpZI3j6Axlo?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"95",
         "rate":"15+",
         "time":"13 ตอน"
      },
      "ดร.สโตน ซีซั่น 3":{
         "cover":"https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/f3accca2b543e1d3b7b9533ca55d2119.jpg",
         "trailer":"https://www.youtube.com/embed/bITRcLr4xR8?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"92",
         "rate":"13+",
         "time":"จบแล้ว"
      },
      "การกลับชาติมาเกิดขององเมียวจิที่แข็งแกร่งสุดจากอีกโลก":{
         "cover":"https://i.ytimg.com/vi/ylG_YV2-s80/maxresdefault.jpg",
         "trailer":"https://www.youtube.com/embed/6bYBB5ZF5a8?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"96",
         "rate":"13+",
         "time":"จบแล้ว"
      },
      "บันทึกการเดินทางแสนเอื่อยในต่างโลก เลี้ยงลูกพร้อมกับเป็นนักผจญภัย":{
         "cover":"https://i.ytimg.com/vi/jpw58BcmGWY/maxresdefault.jpg",
         "trailer":"https://www.youtube.com/embed/z7rgql8J_cs?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"98",
         "rate":"13+",
         "time":"7 ตอน"
      },
      "เอลฟ์พลัสไซส์":{
         "cover":"https://static.hidive.com/news/2024/05/plus-sized-elf-anime-hidive-836x470.jpg",
         "trailer":"https://www.youtube.com/embed/va3LWjX4xMw?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"93",
         "rate":"18+",
         "time":"6 ตอน"
      },
      "ตำนานวีรบุรุษนักสำรวจที่เริ่มจากตัวประกอบ":{
         "cover":"https://shahid.almeshkah.net/uploads/thumbs/16618e51ef6.jpg",
         "trailer":"https://www.youtube.com/embed/4-B3heXYK5w?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"94",
         "rate":"13+",
         "time":"7 ตอน"
      },
      "จอมเวทมนุษย์ในกองทัพจอมมาร":{
         "cover":"https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/45636402cc4fd2733124898f9f49410a.jpg",
         "trailer":"https://www.youtube.com/embed/t61LyG6ZUYU?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"92",
         "rate":"13+",
         "time":"8 ตอน"
      },
      "มายฮีโร่ อคาเดเมีย ภาคที่ 7":{
         "cover":"https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/9ca680632ac63f44c7220f61ace9a81b.jpg",
         "trailer":"https://www.youtube.com/embed/D5fYOnwYkj4?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"93",
         "rate":"13+",
         "time":"12 ตอน"
      },
      "ทีมพลีชีพมหาวายร้าย อิเซไค":{
         "cover":"https://i.ytimg.com/vi/cJo568WzcMA/maxresdefault.jpg",
         "trailer":"https://www.youtube.com/embed/PqEAMgMeLDg?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"97",
         "rate":"17+",
         "time":"จบแล้ว"
      },
      "สร้างสถานะผิดปกติ":{
         "cover":"https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/d545596a4709d117bdee723f820626af.jpg",
         "trailer":"https://www.youtube.com/embed/aAFj4C_hNYc?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"86",
         "rate":"17+",
         "time":"6 ตอน"
      },
      "ชีวิตนี้ขอคืนให้กับเธอ":{
         "cover":"https://www.anime-easy.com/wp-content/uploads/2024/06/iJNusEJMn9fF0cUWrafMnS8Lw74.jpg",
         "trailer":"https://www.youtube.com/embed/m3CpbvzqzSk?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"93",
         "rate":"15+",
         "time":"13 ตอน"
      }
   },
//3
"ประเภท Premium":{
      "เกิดใหม่ทั้งทีก็เป็นสไลม์ไปซะแล้ว ซีซั่น 3":{
         "cover":"https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/c66e81aad52628a7f0738987903f92d2.jpg",
         "trailer":"https://www.youtube.com/embed/oxZWA16zjO0?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"92",
         "rate":"13+",
         "time":"18 ตอน"
      },
      "สร้างสถานะผิดปกติ":{
         "cover":"https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/d545596a4709d117bdee723f820626af.jpg",
         "trailer":"https://www.youtube.com/embed/aAFj4C_hNYc?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"86",
         "rate":"17+",
         "time":"6 ตอน"
      },
      "คุณอาเรียโต๊ะข้างๆ พูดรัสเซียหวานใส่ซะหัวใจจะวาย":{
         "cover":"https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/b0bdcf73a7e00f9bc75131088970288d.jpg",
         "trailer":"https://www.youtube.com/embed/pBX6TtOlYow?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"96",
         "rate":"13+",
         "time":"8 ตอน"
      },
      "ฉันจะ “แพรี่” ให้หมด –ผู้แข็งแกร่งที่สุดในโลกอยากจะเป็นนักผจญภัยให้ได้–":{
         "cover":"https://pic.bstarstatic.com/ogv/1d119103a0b83a6fa14dd3d0153525a2e9607ec8.png@454w_254h_1e_1c_90q.webp",
         "trailer":"https://www.youtube.com/embed/F6RmPmdpazw?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"89",
         "rate":"13+",
         "time":"6 ตอน"
      },
      "ดาบพิฆาตอสูร ภาคการสั่งสอนของเสาหลัก":{
         "cover":"https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/6b17182a3518d7406f0e69687f773f4f.jpg",
         "trailer":"https://www.youtube.com/embed/Tf31dGdlWxE?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"83",
         "rate":"15+",
         "time":"จบแล้ว"
      },
      "ตาลุงนักผจญภัยมือใหม่ ฝึกโหดจนไร้เทียมทานกับปาร์ตี้ในตำนานขั้นเทพ":{
         "cover":"https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/cef951286ca851e675ea232be110fb9d.jpg",
         "trailer":"https://www.youtube.com/embed/_oBwn3oaHQw?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"95",
         "rate":"15+",
         "time":"6 ตอน"
      },
      "บันทึกการเดินทางแสนเอื่อยในต่างโลก เลี้ยงลูกพร้อมกับเป็นนักผจญภัย":{
         "cover":"https://i.ytimg.com/vi/jpw58BcmGWY/maxresdefault.jpg",
         "trailer":"https://www.youtube.com/embed/z7rgql8J_cs?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"98",
         "rate":"13+",
         "time":"7 ตอน"
      },
      "มายฮีโร่ อคาเดเมีย ภาคที่ 7":{
         "cover":"https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/9ca680632ac63f44c7220f61ace9a81b.jpg",
         "trailer":"https://www.youtube.com/embed/D5fYOnwYkj4?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"93",
         "rate":"13+",
         "time":"12 ตอน"
      },
      "เกิดใหม่เป็นลูกโอชิ":{
         "cover":"https://i.ytimg.com/vi/ftJHPNzSjDY/maxresdefault.jpg",
         "trailer":"https://www.youtube.com/embed/1yXa8MAmocQ?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"84",
         "rate":"15+",
         "time":"18 ตอน"
      },
      "ศึกจอมเวทอภินิหาร ภารกิจ 100 ปี":{
         "cover":"https://pic.bstarstatic.com/ogv/e5412c90b5e9092abbb9a9495057835268d389b1.png@454w_254h_1e_1c_90q.webp",
         "trailer":"https://www.youtube.com/embed/SjYlGEvG2Go?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"81",
         "rate":"13+",
         "time":"6 ตอน"
      },
      "จอมเวทมนุษย์ในกองทัพจอมมาร":{
         "cover":"https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/45636402cc4fd2733124898f9f49410a.jpg",
         "trailer":"https://www.youtube.com/embed/t61LyG6ZUYU?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"92",
         "rate":"13+",
         "time":"8 ตอน"
      },
      "ตำนานดาบและคทาแห่งวิสตอเรีย":{
         "cover":"https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/cd7a61f4fade67df2481cb8c8949a6b1.jpg",
         "trailer":"https://www.youtube.com/embed/xR6hV_dVHIc?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"84",
         "rate":"13+",
         "time":"5 ตอน"
      }
   },
//4
"ONLY BILIBILI": {                                                                                                                                   
    "ชีวิตไม่ต้องเด่น ขอแค่เป็นเทพในเงา": {
      "cover": "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/6aaf36afb57680cdc5812e28a98bb62d.jpe",  //ปกหนัง
      "trailer": "https://www.youtube.com/embed/Fy9qA9cN4GNs?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1", //ตัวอย่างหนัง หลัง / จนถึง ?
      "matching": "98",
      "rate": "12+",
      "time": "12 ตอน"
    },
    "Robotech": {
      "cover": "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/18f0671f1b6772787d502536b0aab786.jpe",
      "trailer": "https://www.youtube.com/embed/VloMC21HIWo?enablejsapi=1&controls=1&modestbranding=1&autoplay=1&mute=1",
      "matching": "52",
      "rate": "12+",
      "time": "8 ตอน"
    },
    "The Strongest Magician in the Demon Lord's Army Was a Human": {
      "cover": "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/45636402cc4fd2733124898f9f49410a.jpg",
      "trailer": "https://www.youtube.com/embed/69XDScFMI9Y?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
      "matching": "71",
      "rate": "15+",
      "time": "15 ตอน"
    },
    "Berserk of Gluttony": {
      "cover": "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/99d963532512c5a7ea974204138faf6f.jpg",
      "trailer": "https://www.youtube.com/embed/f3FwcHciZZ0?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
      "matching": "97",
      "rate": "16+",
      "time": "16 ตอน"
    },
    "Days with My Stepsister": {
      "cover": "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/954d75cb5529dd3ea46dc59df5b6e65e.jpg",
      "trailer": "https://www.youtube.com/embed/_laWs_MfqN8?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
      "matching": "64",
      "rate": "14+",
      "time": "11 ตอน"
    },
    "Delico's Nursery": {
      "cover": "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/659dbcea481164443d8b0415332cff47.jpg",
      "trailer": "https://www.youtube.com/embed/wRmrQj57gPw?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
      "matching": "56",
      "rate": "15+",
      "time": "17 ตอน"
    },
    "Love Is Indivisible by Twins": {
      "cover": "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/239c7aea365895b07ad5eb95f947c9f7.jpg",
      "trailer": "https://www.youtube.com/embed/AVUeBhvx6mI?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
      "matching": "49",
      "rate": "12+",
      "time": "8 ตอน"
    },
    "SHY": {
      "cover": "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/9759758b490f9bea64c9d02da9b21e58.jpg",
      "trailer": "https://www.youtube.com/embed/gBx9hW6_hr4?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
      "matching": "61",
      "rate": "13+",
      "time": "12 ตอน"
    },
    "DARLING in the FRANXX": {
      "cover": "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/626b30dc8203a0e263bba0a191a8f7be.jpe",
      "trailer": "https://www.youtube.com/embed/A4kLcDWBYcQ?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
      "matching": "73",
      "rate": "15+",
      "time": "16 ตอน"
    },
    "AMAZING STRANGER": {
      "cover": "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/b583efa4cfe9e61e1c53de0777bdb406.jpe",
      "trailer": "https://www.youtube.com/embed/e3wdmqyYKNE?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
      "matching": "34",
      "rate": "10+",
      "time": "10 ตอน"
    },
     "Tower of God": {
      "cover": "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/88b16620b36dbc9b7ffaed074f7ffd57.jpg",
      "trailer": "https://www.youtube.com/embed/NlS4Eceev-4?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
      "matching": "70",
      "rate": "15+",
      "time": "17 ตอน"
    },
     "Bye Bye, Earth": {
      "cover": "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/be826d5bce7c1589a04d69cdb112c1c4.jpg",
      "trailer": "https://www.youtube.com/embed/8i2m7ORFFpU?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
      "matching": "65",
      "rate": "12+",
      "time": "15 ตอน"
    },
  },
//5
"ดัดแปลงจากมังงะ": {                                                                                                                                   
    "ONE PIECE": {
      "cover": "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/a249096c7812deb8c3c2c907173f3774.jpg",  //ปกหนัง
      "trailer": "https://www.youtube.com/embed/MCb13lbVGE0?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1", //ตัวอย่างหนัง หลัง / จนถึง ?
      "matching": "87",
      "rate": "13+",
      "time": "24 ตอน"
    },
    "Demon Slayer: Kimetsu no Yaiba": {
      "cover": "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/6b17182a3518d7406f0e69687f773f4f.jpg",
      "trailer": "https://www.youtube.com/embed/XswFHTpPZLc?enablejsapi=1&controls=1&modestbranding=1&autoplay=1&mute=1",
      "matching": "85",
      "rate": "15+",
      "time": "1 ตอน"
    },
    "Alya Sometimes Hides Her Feelings in Russian": {
      "cover": "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/b0bdcf73a7e00f9bc75131088970288d.jpg",
      "trailer": "https://www.youtube.com/embed/FARUWUsnvE8?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
      "matching": "100",
      "rate": "13+",
      "time": "15 ตอน"
    },
    "JUJUTSU KAISEN": {
      "cover": "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/8b7f5847f9b97f921e41d4ef59fd2d79.jpe",
      "trailer": "https://www.youtube.com/embed/Pm-wNmS9RGI?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
      "matching": "97",
      "rate": "16+",
      "time": "13 ตอน"
    },
    "Naruto Shippuden": {
      "cover": "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/3f283002b47c62b1e5d311c45f95c97e.jpe",
      "trailer": "https://www.youtube.com/embed/22R0j8UKRzY?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
      "matching": "87",
      "rate": "13+",
      "time": "21 ตอน"
    },
    "Dragon Ball Super": {
      "cover": "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/26079ab060401d8a76039e985d63a3e9.jpg",
      "trailer": "https://www.youtube.com/embed/3vD4kl59-mc?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
      "matching": "70",
      "rate": "12+",
      "time": "12 ตอน"
    },
    "Solo Leveling": {
      "cover": "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/4305090653ee4239dd0d797f1a4a6bdf.jpg",
      "trailer": "https://www.youtube.com/embed/OdQrlp3uYQM?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
      "matching": "46",
      "rate": "15+",
      "time": "8 ตอน"
    },
    "SHYTrue Beauty": {
      "cover": "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/c6ad14426ec427f7870cebad78863650.jpg",
      "trailer": "https://www.youtube.com/embed/r-4RoDq8-GM?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
      "matching": "61",
      "rate": "10+",
      "time": "12 ตอน"
    },
    "Chainsaw Man": {
      "cover": "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/706a725cc02cd7b50c6cbbd5444be3e9.jpg",
      "trailer": "https://www.youtube.com/embed/q15CRdE5Bv0?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
      "matching": "83",
      "rate": "17+",
      "time": "12 ตอน"
    },
    "Blue Exorcist": {
      "cover": "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/d8f2cfbd1a97d16e45caf0bbc5e64cb1.jpg",
      "trailer": "https://www.youtube.com/embed/euE4k-wjlps?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
      "matching": "50",
      "rate": "14+",
      "time": "10 ตอน"
    },
     "Dr. STONE": {
      "cover": "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/f3accca2b543e1d3b7b9533ca55d2119.jpg",
      "trailer": "https://www.youtube.com/embed/S6OmSIxSj14?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
      "matching": "70",
      "rate": "13+",
      "time": "16 ตอน"
    },
     "Black Butler": {
      "cover": "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/ff99c48c9aa901f08d3571a2276618a2.jpg",
      "trailer": "https://www.youtube.com/embed/S8j5iEklHyI?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
      "matching": "65",
      "rate": "13+",
      "time": "15 ตอน"
    },
  },
//6
"ดัดแปลงจากนิยาย": {                                                                                                                                   
    "That Time I Got Reincarnated as a Slime": {
      "cover": "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/c66e81aad52628a7f0738987903f92d2.jpg",  //ปกหนัง
      "trailer": "https://www.youtube.com/embed/MfmV1iQlRFg?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1", //ตัวอย่างหนัง หลัง / จนถึง ?
      "matching": "99",
      "rate": "10+",
      "time": "24 ตอน"
    },
    "KONOSUBA -God's blessing on this wonderful world!": {
      "cover": "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/131f32cf27743b9c95b78b4b3fb1c6ee.jpg",
      "trailer": "https://www.youtube.com/embed/IRGhEWjd8Vc?enablejsapi=1&controls=1&modestbranding=1&autoplay=1&mute=1",
      "matching": "85",
      "rate": "15+",
      "time": "18 ตอน"
    },
    "The Irregular at Magic High School": {
      "cover": "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/5b9a06b74b744f1ae12e47bc04b11368.jpg",
      "trailer": "https://www.youtube.com/embed/UC0cnDhB7MQ?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
      "matching": "67",
      "rate": "13+",
      "time": "15 ตอน"
    },
    "The Rising of the Shield Hero": {
      "cover": "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/6aaf36afb57680cdc5812e28a98bb62d.jpe",
      "trailer": "https://www.youtube.com/embed/9TIA-YVv4oA?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
      "matching": "70",
      "rate": "12+",
      "time": "9 ตอน"
    },
    "My Hero Academia": {
      "cover": "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/9ca680632ac63f44c7220f61ace9a81b.jpg",
      "trailer": "https://www.youtube.com/embed/-77UEct0cZM?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
      "matching": "87",
      "rate": "13+",
      "time": "10 ตอน"
    },
    "The Ossan Newbie Adventurer": {
      "cover": "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/cef951286ca851e675ea232be110fb9d.jpg",
      "trailer": "https://www.youtube.com/embed/j3bD6B-oIt4?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
      "matching": "70",
      "rate": "14+",
      "time": "12 ตอน"
    },
    "BORUTO: NARUTO NEXT GENERATIONS": {
      "cover": "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/bdbd4f4e247f7290eb847025021e133b.jpg",
      "trailer": "https://www.youtube.com/embed/nQeIObeB--8?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
      "matching": "46",
      "rate": "12+",
      "time": "13 ตอน"
    },
    "JoJo's Bizarre Adventure": {
      "cover": "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/aaeca3e651bebe79fe808085d079feea.jpe",
      "trailer": "https://www.youtube.com/embed/EeCX8Y0a278?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
      "matching": "61",
      "rate": "15+",
      "time": "1 ตอน"
    },
    "Black Clover": {
      "cover": "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/0273e80242d80b0218f640e038269c18.jpg",
      "trailer": "https://www.youtube.com/embed/PrgxJ1_sUcs?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
      "matching": "83",
      "rate": "17+",
      "time": "12 ตอน"
    },
    "Our Last Crusade or the Rise of a New World": {
      "cover": "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/a81b995a86a1c2f4840db4643b6313d4.jpg",
      "trailer": "https://www.youtube.com/embed/yGj1ydYxbFw?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
      "matching": "50",
      "rate": "14+",
      "time": "10 ตอน"
    },
     "Frieren - Oltre la Fine del Viaggio": {
      "cover": "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/bcc213e8825420a85790049366d409fd.jpg",
      "trailer": "https://www.youtube.com/embed/pqUZaKn7flw?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
      "matching": "40",
      "rate": "10+",
      "time": "16 ตอน"
    },
     "Black Butler": {
      "cover": "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/ff99c48c9aa901f08d3571a2276618a2.jpg",
      "trailer": "https://www.youtube.com/embed/S8j5iEklHyI?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
      "matching": "65",
      "rate": "13+",
      "time": "15 ตอน"
    },
  },
//7
"ดัดแปลงจากเกม":{
      "ทูตสวรรค์ ทัณฑ์อำมหิต":{
         "cover":"https://pic.bstarstatic.com/ogv/04c6f203400e7c6275a83a7dadd257704713b656.png@720w_405h_1e_1c_90q.webp",
         "trailer":"https://www.youtube.com/embed/NHj2_6D-2Oc?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"https://youtu.be/NHj2_6D-2Oc?si=WXWNkC0ziPLxItlw",
         "rate":"94",
         "time":"จบแล้ว"
      },
      "NieR:Automata Ver1.1a":{
         "cover":"https://pic.bstarstatic.com/ogv/2fc3c411f644905b5b56dc58b5f062790be61fda.png@720w_405h_1e_1c_90q.webp",
         "trailer":"https://www.youtube.com/embed/Se-H5iXKdDw?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"https://youtu.be/Se-H5iXKdDw?si=E1p6pCR0icixEyhv",
         "rate":"77",
         "time":"18 ตอน"
      },
      "รักซาดิสม์ของเหล่าแวมไพร์ ภาคที่ 2":{
         "cover":"https://pic.bstarstatic.com/ogv/795a84d20e73eb2cd65ebb1e0717f037174c9b63.png@720w_405h_1e_1c_90q.webp",
         "trailer":"https://www.youtube.com/embed/k5QsnqwfClY?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"https://youtu.be/k5QsnqwfClY?si=Gk_N-nXX8TWqOU19",
         "rate":"75",
         "time":"จบแล้ว"
      },
      "จอมมารอย่างข้าควรรักภรรยาเอลฟ์อย่างไรดี":{
         "cover":"https://pic.bstarstatic.com/ogv/a4f28017f4527d59b22588bf3a4b8f8dc6c775d8.jpg@720w_405h_1e_1c_90q.webp",
         "trailer":"https://www.youtube.com/embed/M3lb8-qaaTk?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"https://youtu.be/M3lb8-qaaTk?si=4JMX8NsssvXtLiOq",
         "rate":"75",
         "time":"จบแล้ว"
      },
      "เกิดใหม่เป็นนางร้าย จะเลือกทางไหนก็หายนะ":{
         "cover":"https://pic.bstarstatic.com/ogv/33aaa0ebf60f67d8b5fc2175fadd633ed546c4b9.png@720w_405h_1e_1c_90q.webp",
         "trailer":"https://www.youtube.com/embed/RyBy8uvaFAo?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"https://youtu.be/RyBy8uvaFAo?si=HzP1aRnfYeO_Ot-z",
         "rate":"77",
         "time":"จบแล้ว"
      },
      "รักซาดิสม์ของเหล่าแวมไพร์":{
         "cover":"https://pic.bstarstatic.com/ogv/81f73cc4fb9428f2446c7eb123cf647da59938dc.png@720w_405h_1e_1c_90q.webp",
         "trailer":"https://www.youtube.com/embed/5rzoyyotvD4?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"https://youtu.be/5rzoyyotvD4?si=tyGrv_KdSKr322D8",
         "rate":"78",
         "time":"จบแล้ว"
      },
      "ปริ้นเซส คอนเน็กต์ รีไดฟ์":{
         "cover":"https://pic.bstarstatic.com/ogv/4c49ec4e3b749a71a23a57ea0cd8cf5045dedfff.png@720w_405h_1e_1c_90q.webp",
         "trailer":"https://www.youtube.com/embed/5NltMe8vX1o?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"https://youtu.be/5NltMe8vX1o?si=RsVp_DEV5rO3hR1s",
         "rate":"75",
         "time":"จบแล้ว"
      },
      "อเทลิเยร์ ไรซ่า: ราชินีแห่งรัตติกาลและที่ซ่อนลับ":{
         "cover":"https://pic.bstarstatic.com/ogv/1d861a8894e396a6bee2bd654357889ff9718141.png@720w_405h_1e_1c_90q.webp",
         "trailer":"https://www.youtube.com/embed/Ly83UdDhv18?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"https://youtu.be/Ly83UdDhv18?si=pvJMQFx8twHNUmDy",
         "rate":"93",
         "time":"จบแล้ว"
      },
      "ตำนานฮอร์เท็นเซีย":{
         "cover":"https://pic.bstarstatic.com/ogv/7a476bc4da26ffbfe2a60e4146343bc12276c881.png@720w_405h_1e_1c_90q.webp",
         "trailer":"https://www.youtube.com/embed/9oHyGR1jOCo?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"https://youtu.be/9oHyGR1jOCo?si=n6W53tYFFQHcaweo",
         "rate":"75",
         "time":"จบแล้ว"
      },
      "Azur Lane":{
         "cover":"https://pic.bstarstatic.com/ogv/5f06581eb258a62a98d95a8de117b6b3fa98b8a7.png@720w_405h_1e_1c_90q.webp",
         "trailer":"https://www.youtube.com/embed/0V-SwEtubII?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"https://youtu.be/0V-SwEtubII?si=jvrk4kmyhdxfTP5e",
         "rate":"80",
         "time":"จบแล้ว"
      },
      "ศึกอัศวินทะลุมิติ":{
         "cover":"https://pic.bstarstatic.com/ogv/258b9b6c41be0c33c344d0612446c196365cc1fc.jpg@720w_405h_1e_1c_90q.webp",
         "trailer":"https://www.youtube.com/embed/R7zcDe4o0MM?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"https://youtu.be/R7zcDe4o0MM?si=z_sKLJRye5OXXcfp",
         "rate":"80",
         "time":"จบแล้ว"
      },
      "Re:Zero - รีเซทชีวิต ฝ่าวิกฤตต่างโลก ภาคที่ 2 Part 1":{
         "cover":"https://pic.bstarstatic.com/ogv/c66ee2a8c672e4f444bcdd82cd66b669d8d55f04.png@720w_405h_1e_1c_90q.webp",
         "trailer":"https://www.youtube.com/embed/CLFUEr2NV7I?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"https://youtu.be/CLFUEr2NV7I?si=VB_63M5IOPUbWsaM",
         "rate":"95",
         "time":"จบแล้ว"
      }
   },
//8
"เลือดร้อน":{
      "วันพีซ":{
         "cover":"https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/a249096c7812deb8c3c2c907173f3774.jpg",
         "trailer":"https://www.youtube.com/embed/S8_YwFLCh4U?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"https://youtu.be/S8_YwFLCh4U?si=41ra_QCJGZnRJKpv",
         "rate":"97",
         "time":"1115 ตอน"
      },
      "One Piece Film Red":{
         "cover":"https://pic.bstarstatic.com/ogv/f7a6a7a43284f440d8e7a33fcaf12fef53cd342e.png@720w_405h_1e_1c_90q.webp",
         "trailer":"https://www.youtube.com/embed/r0FvP_Ui-xY?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"https://youtu.be/r0FvP_Ui-xY?si=7SVb4PtZN4cPE_FE",
         "rate":"93",
         "time":"จบแล้ว"
      },
      "ดาบพิฆาตอสูร ภาคการสั่งสอนของเสาหลัก":{
         "cover":"https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/6b17182a3518d7406f0e69687f773f4f.jpg",
         "trailer":"https://www.youtube.com/embed/Tf31dGdlWxE?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"https://youtu.be/Tf31dGdlWxE?si=pZc6oWyyCnQE9COG",
         "rate":"83",
         "time":"จบแล้ว"
      },
      "โบรูโตะ: นารูโตะ เน็กซ์ เจนเนเรชั่น":{
         "cover":"https://pic.bstarstatic.com/ogv/5a9e165c729f46500f8c280a1591e5ead1cad825.png@720w_405h_1e_1c_90q.webp",
         "trailer":"https://www.youtube.com/embed/nQeIObeB--8?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"https://youtu.be/nQeIObeB--8?si=bnGpUhbFsDAkGi_p",
         "rate":"91",
         "time":"จบแล้ว"
      },
      "ดาบพิฆาตอสูร ภาคหมู่บ้านช่างตีดาบ":{
         "cover":"https://pic.bstarstatic.com/ogv/354fb33ef3eca3a977735961cab2355094c5f135.png@720w_405h_1e_1c_90q.webp",
         "trailer":"https://www.youtube.com/embed/a9tq0aS5Zu8?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"https://youtu.be/a9tq0aS5Zu8?si=eGlQnkYTSwVtnn0w",
         "rate":"76",
         "time":"จบแล้ว"
      },
      "นารูโตะ ตำนานวายุสลาตัน":{
         "cover":"https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/3f283002b47c62b1e5d311c45f95c97e.jpe",
         "trailer":"https://www.youtube.com/embed/1dy2zPPrKD0?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"https://youtu.be/1dy2zPPrKD0?si=4Le4ELF1i--5gzyq",
         "rate":"92",
         "time":"จบแล้ว"
      },
      "SPY x FAMILY ซีซั่น 2":{
         "cover":"https://pic.bstarstatic.com/ogv/d8043a07a5d5627609bc31ac80a494ca6fc89931.png@720w_405h_1e_1c_90q.webp",
         "trailer":"https://www.youtube.com/embed/75LyKY6AV4U?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"https://youtu.be/75LyKY6AV4U?si=96CksGI_n8-byAOL",
         "rate":"81",
         "time":"จบแล้ว"
      },
      "มหาเวทย์ผนึกมาร ซีซัน 2":{
         "cover":"https://pic.bstarstatic.com/ogv/abf8f93adb8c54fcaabec80dd254d98f4f7519b5.png@720w_405h_1e_1c_90q.webp",
         "trailer":"https://www.youtube.com/embed/4A_X-Dvl0ws?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"https://youtu.be/4A_X-Dvl0ws?si=Ubo0aTruEGrJO2En",
         "rate":"86",
         "time":"จบแล้ว"
      },
      "มหาเวทย์ผนึกมาร":{
         "cover":"https://pic.bstarstatic.com/ogv/ec057b1d525ad3ba5695842999761e3de77d3fde.png@720w_405h_1e_1c_90q.webp",
         "trailer":"https://www.youtube.com/embed/PKHQuQF1S8k?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"https://youtu.be/PKHQuQF1S8k?si=P29tdix7I0VzQm4K",
         "rate":"83",
         "time":"จบแล้ว"
      },
      "นารูโตะ นินจาจอมคาถา":{
         "cover":"https://pic.bstarstatic.com/ogv/d6965a88316b33fb082078ec529c95b0b51ec3dd.png@720w_405h_1e_1c_90q.webp",
         "trailer":"https://www.youtube.com/embed/-G9BqkgZXRA?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"https://youtu.be/-G9BqkgZXRA?si=lLHWcXMrwCizV2O_",
         "rate":"77",
         "time":"จบแล้ว"
      },
      "ผ่าพิภพไททัน ไฟนอล ซีซั่น บทสุดท้าย ครึ่งหลัง":{
         "cover":"https://pic.bstarstatic.com/ogv/5fbbf54b34b8e9bb0d3c26bfe3542f0ed02a0bf9.png@720w_405h_1e_1c_90q.webp",
         "trailer":"https://www.youtube.com/embed/EIVVnLlhzr0?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"https://youtu.be/EIVVnLlhzr0?si=luWgfOHJFpSF5f-D",
         "rate":"75",
         "time":"จบแล้ว"
      },
      "ดาบพิฆาตอสูร":{
         "cover":"https://pic.bstarstatic.com/ogv/65ac92d0a5e8efe09a99122ec0df4ff652a1a57a.png@720w_405h_1e_1c_90q.webp",
         "trailer":"https://www.youtube.com/embed/6vMuWuWlW4I?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"https://youtu.be/6vMuWuWlW4I?si=PAv5PoJ8LDcg7Dzg",
         "rate":"77",
         "time":"จบแล้ว"
      }
   },
//9
"ต่างโลก":{
      "เกิดใหม่ทั้งทีก็เป็นสไลม์ไปซะแล้ว ซีซั่น 3":{
         "cover":"https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/c66e81aad52628a7f0738987903f92d2.jpg",
         "trailer":"https://www.youtube.com/embed/oxZWA16zjO0?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"https://youtu.be/oxZWA16zjO0?si=BotCeMU-vxpTUgOt",
         "rate":"92",
         "time":"18 ตอน"
      },
      "ชีวิตไม่ต้องเด่น ขอแค่เป็นเทพในเงา ภาคที่ 2":{
         "cover":"https://pic.bstarstatic.com/ogv/491f6c449ef83aea14539f312e9d6f57cd3f4666.png@720w_405h_1e_1c_90q.webp",
         "trailer":"https://www.youtube.com/embed/OqzdUcc3k9Y?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"https://youtu.be/OqzdUcc3k9Y?si=_RaDpL78DlMKM-A5",
         "rate":"84",
         "time":"จบแล้ว"
      },
      "เกิดใหม่ทั้งทีก็เป็นสไลม์ไปซะแล้ว เดอะ มูฟวี่ ภาคสายสัมพันธ์เพลิงสีชาด":{
         "cover":"https://pic.bstarstatic.com/ogv/ca8bc53900829ca650b7ea32180ff66596fd5e4c.png@720w_405h_1e_1c_90q.webp",
         "trailer":"https://www.youtube.com/embed/nJEGXG_vXbo?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"https://youtu.be/nJEGXG_vXbo?si=7JdM155Zicaq35pB",
         "rate":"83",
         "time":"จบแล้ว"
      },
      "ชีวิตไม่ต้องเด่น ขอแค่เป็นเทพในเงา":{
         "cover":"https://pic.bstarstatic.com/ogv/0293ea8f35e1751e31bbe1579f3494bbeb7840ce.png@720w_405h_1e_1c_90q.webp",
         "trailer":"https://www.youtube.com/embed/H-3fre7943U?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"https://youtu.be/H-3fre7943U?si=k8wtuWC9fTwSMHMA",
         "rate":"85",
         "time":"จบแล้ว"
      },
      "เกิดชาตินี้พี่ต้องเทพ ซีซั่น 2":{
         "cover":"https://pic.bstarstatic.com/ogv/b5276e2dc5f1643ac21cbbd983320a42b84e81de.png@720w_405h_1e_1c_90q.webp",
         "trailer":"https://www.youtube.com/embed/tlDF3cfb8lA?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"https://youtu.be/tlDF3cfb8lA?si=wvSHTEe-pznej6WR",
         "rate":"77",
         "time":"จบแล้ว"
      },
      "ผู้กล้าโล่ผงาด ซีซัน 3":{
         "cover":"https://pic.bstarstatic.com/ogv/6b2809af65a584568273a979f6f2d652ee4aee10.png@720w_405h_1e_1c_90q.webp",
         "trailer":"https://www.youtube.com/embed/VW_LxM4tt-o?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"https://youtu.be/VW_LxM4tt-o?si=lvRoEEvgpO4MUEhO",
         "rate":"92",
         "time":"จบแล้ว"
      },
      "สกิลโกงไร้เทียมทาน สร้างตำนานในสองโลก ～ชีวิตพลิกผันด้วยการอัปเลเวล～":{
         "cover":"https://pic.bstarstatic.com/ogv/418084e2e0d0f3f34e1cc3e8b9fb4e03b9df31e0.png@720w_405h_1e_1c_90q.webp",
         "trailer":"https://www.youtube.com/embed/u7YOzGniO5g?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"https://youtu.be/u7YOzGniO5g?si=KYSjSdujxJCH0ojo",
         "rate":"89",
         "time":"จบแล้ว"
      },
      "เกิดชาตินี้พี่ต้องเทพ":{
         "cover":"https://pic.bstarstatic.com/ogv/eaffa7d8c50ee24fea1989187c70349accd5e563.png@720w_405h_1e_1c_90q.webp",
         "trailer":"https://www.youtube.com/embed/Qx01pn9l-6g?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"https://youtu.be/Qx01pn9l-6g?si=xwlnuNycm4o4xRr3",
         "rate":"88",
         "time":"จบแล้ว"
      },
      "เกิดใหม่ทั้งทีก็เป็นสไลม์ไปซะแล้ว":{
         "cover":"https://pic.bstarstatic.com/ogv/c1dbe29922498f62add2acd524e56176a6f67e23.png@720w_405h_1e_1c_90q.webp",
         "trailer":"https://www.youtube.com/embed/1yzNpfS7omQ?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"https://youtu.be/1yzNpfS7omQ?si=UO35uDb0lf9QOzKA",
         "rate":"80",
         "time":"จบแล้ว"
      },
      "การกลับชาติมาเกิดขององเมียวจิที่แข็งแกร่งสุดจากอีกโลก":{
         "cover":"https://i.ytimg.com/vi/ylG_YV2-s80/maxresdefault.jpg",
         "trailer":"https://www.youtube.com/embed/6bYBB5ZF5a8?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"https://youtu.be/6bYBB5ZF5a8?si=8CSAR89cawxe5ph8",
         "rate":"96",
         "time":"จบแล้ว"
      },
      "สกิลสุดพิสดารกับมื้ออาหารในต่างโลก":{
         "cover":"https://pic.bstarstatic.com/ogv/d44f745d7e31c8722a7c5e848eda30ae1994c3f3.png@720w_405h_1e_1c_90q.webp",
         "trailer":"https://www.youtube.com/embed/uLezuU0GL6Q?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"https://youtu.be/uLezuU0GL6Q?si=pTDouxPmHAZlwM-w",
         "rate":"88",
         "time":"จบแล้ว"
      },
      "เกษตรตามใจพี่ที่ต่างโลก":{
         "cover":"https://pic.bstarstatic.com/ogv/695bf44d0681d1187c03f767c6eb8606538395d5.png@720w_405h_1e_1c_90q.webp",
         "trailer":"https://www.youtube.com/embed/iwxPf8SEmEU?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"https://youtu.be/iwxPf8SEmEU?si=DRSdd1x2UM9ksiKu",
         "rate":"76",
         "time":"จบแล้ว"
      }
   },
//10
"พลังพิเศษ":{
      "โตเกียว รีเวนเจอร์ส":{
         "cover":"https://pic.bstarstatic.com/ogv/f497f32155dce36fb376bfedb5649eb3cd18da4e.png@720w_405h_1e_1c_90q.webp",
         "trailer":"https://www.youtube.com/embed/r9M34VgTfzY?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"https://youtu.be/r9M34VgTfzY?si=3trIF77jjBF4jlLK",
         "rate":"92",
         "time":"จบแล้ว"
      },
      "เกิดใหม่เป็นลูกโอชิ":{
         "cover":"https://i.ytimg.com/vi/ftJHPNzSjDY/maxresdefault.jpg",
         "trailer":"https://www.youtube.com/embed/1yXa8MAmocQ?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"https://youtu.be/1yXa8MAmocQ?si=lqL3W0gtLH46SfSV",
         "rate":"84",
         "time":"18 ตอน"
      },
      "ชีวิตประจำวันของราชาแห่งเซียน":{
         "cover":"https://pic.bstarstatic.com/ogv/35a6ac1bb62f81988959fcbcb31a76895350ab5f.png@720w_405h_1e_1c_90q.webp",
         "trailer":"https://www.youtube.com/embed/DuHGPOtsH54?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"https://youtu.be/DuHGPOtsH54?si=PgnnEKZ50yUyKmBc",
         "rate":"83",
         "time":"จบแล้ว"
      },
      "สาวน้อยผู้เห็นวิญญาณ":{
         "cover":"https://pic.bstarstatic.com/ogv/173c8699b438cf320e70368b69deedf28e9a720e.png@720w_405h_1e_1c_90q.webp",
         "trailer":"https://www.youtube.com/embed/oW2dO_T-9jA?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"https://youtu.be/oW2dO_T-9jA?si=sDY1MiKHv1LtNOg5",
         "rate":"76",
         "time":"จบแล้ว"
      },
      "มายฮีโร่ อคาเดเมีย ภาคที่ 6":{
         "cover":"https://pic.bstarstatic.com/ogv/c084f96308a6d85b7431cbde94b7554f907681ca.png@720w_405h_1e_1c_90q.webp",
         "trailer":"https://www.youtube.com/embed/nTWeiY3yZRs?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"https://youtu.be/nTWeiY3yZRs?si=6-MESPaCcR_76J83",
         "rate":"76",
         "time":"จบแล้ว"
      },
      "ชีวิตประจำวันของราชาแห่งเซียน ภาคที่ 4":{
         "cover":"https://pic.bstarstatic.com/ogv/1495a85823f70260515924ed9d38c9a37548c86a.jpg@720w_405h_1e_1c_90q.webp",
         "trailer":"https://www.youtube.com/embed/pczjQ32ikC8?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"https://youtu.be/pczjQ32ikC8?si=LjSl_Y0eq7DPTrAP",
         "rate":"92",
         "time":"จบแล้ว"
      },
      "ชีวิตประจำวันของราชาแห่งเซียน ภาคที่ 2":{
         "cover":"https://pic.bstarstatic.com/ogv/abf7de1fe6c6de40ea09b560159180682ef60537.png@720w_405h_1e_1c_90q.webp",
         "trailer":"https://www.youtube.com/embed/04XlrEkEGms?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"https://youtu.be/04XlrEkEGms?si=JeNrLwwqYeWZcujA",
         "rate":"79",
         "time":"จบแล้ว"
      },
      "คณะประพันธกรจรจัด ภาคที่ 5":{
         "cover":"https://pic.bstarstatic.com/ogv/9ee4e267229d25bc466a263b04ff189ca62d1a3c.png@720w_405h_1e_1c_90q.webp",
         "trailer":"https://www.youtube.com/embed/1eCDPSa6Faw?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"https://youtu.be/1eCDPSa6Faw?si=M-g8wvZjHao_UBov",
         "rate":"89",
         "time":"จบแล้ว"
      },
      "เดด เมานท์ เดธ เพลย์":{
         "cover":"https://pic.bstarstatic.com/ogv/bc4402c3fc00c2012ca9a1e8b187adbbce230f0c.png@720w_405h_1e_1c_90q.webp",
         "trailer":"https://www.youtube.com/embed/IOkS_GU9BNc?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"https://youtu.be/IOkS_GU9BNc?si=c_2CSWr46M8HW5FD",
         "rate":"89",
         "time":"จบแล้ว"
      },
      "ซอม 100～100 สิ่งที่อยากทำก่อนจะกลายเป็นซอมบี้～":{
         "cover":"https://pic.bstarstatic.com/ogv/1340fca4515c214109cbb3b2e2d32abe6778ce0b.jpg@720w_405h_1e_1c_90q.webp",
         "trailer":"https://www.youtube.com/embed/S1NzUyUD6Ks?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"https://youtu.be/S1NzUyUD6Ks?si=qS3em4ZdrehONnlC",
         "rate":"96",
         "time":"จบแล้ว"
      },
      "แด่เธอผู้เป็นนิรันดร์":{
         "cover":"https://pic.bstarstatic.com/ogv/49cf193d83d587f0f1badcda2d6db3dc9a3ac2e4.png@720w_405h_1e_1c_90q.webp",
         "trailer":"https://www.youtube.com/embed/YOn779f6lwI?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"https://youtu.be/YOn779f6lwI?si=_sq1P0eX6uaY-1rQ",
         "rate":"79",
         "time":"จบแล้ว"
      },
      "ข้ามเวลาพิชิตภารกิจ ภาคที่ 2":{
         "cover":"https://pic.bstarstatic.com/ogv/435522058d57ff316078fdae5e7adff1fb6982a5.png@720w_405h_1e_1c_90q.webp",
         "trailer":"https://www.youtube.com/embed/vE0tnwk-jVE?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"https://youtu.be/vE0tnwk-jVE?si=-yD5Deeacpq1QsEh",
         "rate":"90",
         "time":"จบแล้ว"
      }
   },
//11
"ย้อนเวลา":{
      "พอได้เกิดใหม่เป็นองค์ชายลำดับที่เจ็ด ก็เพื่อเรียนเวทให้สนุก":{
         "cover":"https://pic.bstarstatic.com/ogv/631e36e5b5e4e591b64a7dde7efbd394920e1221.png@720w_405h_1e_1c_90q.webp",
         "trailer":"https://www.youtube.com/embed/aK8Gtxw-9bE?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"https://youtu.be/aK8Gtxw-9bE?si=w8h14N1Z-w-K3xF8",
         "rate":"92",
         "time":"จบแล้ว"
      },
      "The New Gate เดอะนิวเกท":{
         "cover":"https://pic.bstarstatic.com/ogv/87ada61a8d4be3fd3d0493b954796a9aa7b03315.jpg@720w_405h_1e_1c_90q.webp",
         "trailer":"https://www.youtube.com/embed/3XUJOkFXRiw?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"https://youtu.be/3XUJOkFXRiw?si=h6m9ua4Rc8DG4-RP",
         "rate":"84",
         "time":"จบแล้ว"
      },
      "เวทรักษาที่ไหนเขาใช้กันแบบนี้":{
         "cover":"https://pic.bstarstatic.com/ogv/4693f224b25297a0b8852788d26e25cfd592329f.png@720w_405h_1e_1c_90q.webp",
         "trailer":"https://www.youtube.com/embed/WMBLLOa3Ldw?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"https://youtu.be/WMBLLOa3Ldw?si=x-5fxExYxR1OhGEG",
         "rate":"83",
         "time":"จบแล้ว"
      },
      "เกิดใหม่เป็นขุนนาง ขึ้นเป็นใหญ่ด้วยสกิลประเมิน":{
         "cover":"https://pic.bstarstatic.com/ogv/e40155315dd2c3bde11dd4c56bf07a5c9e7d8085.png@720w_405h_1e_1c_90q.webp",
         "trailer":"https://www.youtube.com/embed/9-wiCnir-xQ?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"https://youtu.be/9-wiCnir-xQ?si=zU-DAq5qSOE3uV7g",
         "rate":"79",
         "time":"จบแล้ว"
      },
      "ซาซากิกับพีจัง":{
         "cover":"https://pic.bstarstatic.com/ogv/c70fa9e92dd95a1e747c9e5a695b250e9502afa0.png@720w_405h_1e_1c_90q.webp",
         "trailer":"https://www.youtube.com/embed/zMw-VTsoW1c?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"https://youtu.be/zMw-VTsoW1c?si=cgJcmBrT4dwT7DWp",
         "rate":"80",
         "time":"จบแล้ว"
      },
      "ชีวิตไม่ง่ายของนางร้าย LV99":{
         "cover":"https://pic.bstarstatic.com/ogv/a5ae36587a01cf3c357fc6bcf7a9886e3e9388e4.png@720w_405h_1e_1c_90q.webp",
         "trailer":"https://www.youtube.com/embed/ODtKada4LM0?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"https://youtu.be/ODtKada4LM0?si=IEOL-nayy7j7NpjI",
         "rate":"92",
         "time":"จบแล้ว"
      },
      "ทีมพลีชีพมหาวายร้าย อิเซไค":{
         "cover":"https://i.ytimg.com/vi/cJo568WzcMA/maxresdefault.jpg",
         "trailer":"https://www.youtube.com/embed/PqEAMgMeLDg?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"https://youtu.be/PqEAMgMeLDg?si=zf8BHbyqofUeiRxz",
         "rate":"97",
         "time":"จบแล้ว"
      },
      "พลิกพล็อตเด๋อด๋า มารับบทมอนสเตอร์":{
         "cover":"https://pic.bstarstatic.com/ogv/5ed4d1a38f563de9850deda28dbf984af4c4e0ca.png@720w_405h_1e_1c_90q.webp",
         "trailer":"https://www.youtube.com/embed/RanFCSgkEXI?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"https://youtu.be/RanFCSgkEXI?si=cx7dydtbvZUk-pQX",
         "rate":"95",
         "time":"จบแล้ว"
      },
      "ขอให้โชคดีมีชัยในโลกแฟนตาซี! ภาคที่ 3":{
         "cover":"https://pic.bstarstatic.com/ogv/1c62f1b33a0c012b9fbb2fe2a967f78673c9c55e.png@720w_405h_1e_1c_90q.webp",
         "trailer":"https://www.youtube.com/embed/Meo3mO98huE?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"https://youtu.be/Meo3mO98huE?si=ABAqR8X_Ljl8647T",
         "rate":"80",
         "time":"จบแล้ว"
      },
      "สลัดรวมมิตรคนเพี้ยนหลุดโลก":{
         "cover":"https://pic.bstarstatic.com/ogv/06b5bc4e3014140408eac8876cd79169a7139f30.png@720w_405h_1e_1c_90q.webp",
         "trailer":"https://www.youtube.com/embed/NWcAykaLqsc?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"https://youtu.be/NWcAykaLqsc?si=HNA5Ec70aL-8-Psr",
         "rate":"96",
         "time":"จบแล้ว"
      },
      "ย้อนเวลากู้วิกฤต":{
         "cover":"https://pic.bstarstatic.com/ogv/87a8a4427f00067b203c91de901bd4cbd2a32541.jpg@720w_405h_1e_1c_90q.webp",
         "trailer":"https://www.youtube.com/embed/msKykdiMlk4?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"https://youtu.be/msKykdiMlk4?si=vuxZ3V1vZ8WbKPCH",
         "rate":"77",
         "time":"จบแล้ว"
      },
      "ชีวิตชิล ๆ ในต่างโลกกับอดีตแคนดิเดตผู้กล้าที่หลังจากเลเวล 2 ก็โคตรโกง":{
         "cover":"https://pic.bstarstatic.com/ogv/a956d83eeec55be5853ec3b00d62c92b284222ee.png@720w_405h_1e_1c_90q.webp",
         "trailer":"https://www.youtube.com/embed/MUn_fypkCfU?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"https://youtu.be/MUn_fypkCfU?si=AzOJiJkM0Ll9xxes",
         "rate":"81",
         "time":"จบแล้ว"
      }
   },
//12
"แฟนตาซี":{
      "วันพีซ":{
         "cover":"https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/a249096c7812deb8c3c2c907173f3774.jpg",
         "trailer":"https://www.youtube.com/embed/S8_YwFLCh4U?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"https://youtu.be/S8_YwFLCh4U?si=41ra_QCJGZnRJKpv",
         "rate":"97",
         "time":"1115 ตอน"
      },
      "One Piece Film Red":{
         "cover":"https://pic.bstarstatic.com/ogv/f7a6a7a43284f440d8e7a33fcaf12fef53cd342e.png@720w_405h_1e_1c_90q.webp",
         "trailer":"https://www.youtube.com/embed/r0FvP_Ui-xY?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"https://youtu.be/r0FvP_Ui-xY?si=7SVb4PtZN4cPE_FE",
         "rate":"78",
         "time":"จบแล้ว"
      },
      "ดาบพิฆาตอสูร ภาคการสั่งสอนของเสาหลัก":{
         "cover":"https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/6b17182a3518d7406f0e69687f773f4f.jpg",
         "trailer":"https://www.youtube.com/embed/Tf31dGdlWxE?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"https://youtu.be/Tf31dGdlWxE?si=pZc6oWyyCnQE9COG",
         "rate":"83",
         "time":"จบแล้ว"
      },
      "ดาบพิฆาตอสูร ภาคหมู่บ้านช่างตีดาบ":{
         "cover":"https://pic.bstarstatic.com/ogv/354fb33ef3eca3a977735961cab2355094c5f135.png@720w_405h_1e_1c_90q.webp",
         "trailer":"https://www.youtube.com/embed/a9tq0aS5Zu8?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"https://youtu.be/a9tq0aS5Zu8?si=eGlQnkYTSwVtnn0w",
         "rate":"88",
         "time":"จบแล้ว"
      },
      "นารูโตะ ตำนานวายุสลาตัน":{
         "cover":"https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/3f283002b47c62b1e5d311c45f95c97e.jpe",
         "trailer":"https://www.youtube.com/embed/1dy2zPPrKD0?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"https://youtu.be/1dy2zPPrKD0?si=4Le4ELF1i--5gzyq",
         "rate":"92",
         "time":"จบแล้ว"
      },
      "มหาเวทย์ผนึกมาร ซีซัน 2":{
         "cover":"https://pic.bstarstatic.com/ogv/abf8f93adb8c54fcaabec80dd254d98f4f7519b5.png@720w_405h_1e_1c_90q.webp",
         "trailer":"https://www.youtube.com/embed/4A_X-Dvl0ws?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"https://youtu.be/4A_X-Dvl0ws?si=Ubo0aTruEGrJO2En",
         "rate":"79",
         "time":"จบแล้ว"
      },
      "มหาเวทย์ผนึกมาร":{
         "cover":"https://pic.bstarstatic.com/ogv/ec057b1d525ad3ba5695842999761e3de77d3fde.png@720w_405h_1e_1c_90q.webp",
         "trailer":"https://www.youtube.com/embed/PKHQuQF1S8k?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"https://youtu.be/PKHQuQF1S8k?si=P29tdix7I0VzQm4K",
         "rate":"83",
         "time":"จบแล้ว"
      },
      "นารูโตะ นินจาจอมคาถา":{
         "cover":"https://pic.bstarstatic.com/ogv/d6965a88316b33fb082078ec529c95b0b51ec3dd.png@720w_405h_1e_1c_90q.webp",
         "trailer":"https://www.youtube.com/embed/-G9BqkgZXRA?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"https://youtu.be/-G9BqkgZXRA?si=lLHWcXMrwCizV2O_",
         "rate":"78",
         "time":"จบแล้ว"
      },
      "เกิดใหม่ทั้งทีก็เป็นสไลม์ไปซะแล้ว ซีซั่น 3":{
         "cover":"https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/c66e81aad52628a7f0738987903f92d2.jpg",
         "trailer":"https://www.youtube.com/embed/oxZWA16zjO0?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"https://youtu.be/oxZWA16zjO0?si=BotCeMU-vxpTUgOt",
         "rate":"92",
         "time":"18 ตอน"
      },
      "ดาบพิฆาตอสูร ย่านเริงรมย์":{
         "cover":"https://pic.bstarstatic.com/ogv/a9cd5958642c4f34d98fe51a7f51dcc0d43894c9.png@720w_405h_1e_1c_90q.webp",
         "trailer":"https://www.youtube.com/embed/QwvWdnd2Ktg?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"https://youtu.be/QwvWdnd2Ktg?si=Hi4M_va5_BG2hQ2H",
         "rate":"94",
         "time":"จบแล้ว"
      },
      "ฮันเตอร์ x ฮันเตอร์":{
         "cover":"https://pic.bstarstatic.com/ogv/893c0c245afab76fd12301071ec7830dfe9cfd6b.png@720w_405h_1e_1c_90q.webp",
         "trailer":"https://www.youtube.com/embed/Hgeh3_SQZyk?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"https://youtu.be/Hgeh3_SQZyk?si=Q-8e52bH22sj889Q",
         "rate":"79",
         "time":"จบแล้ว"
      },
      "ชีวิตไม่ต้องเด่น ขอแค่เป็นเทพในเงา ภาคที่ 2":{
         "cover":"https://pic.bstarstatic.com/ogv/491f6c449ef83aea14539f312e9d6f57cd3f4666.png@720w_405h_1e_1c_90q.webp",
         "trailer":"https://www.youtube.com/embed/OqzdUcc3k9Y?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"https://youtu.be/OqzdUcc3k9Y?si=_RaDpL78DlMKM-A5",
         "rate":"75",
         "time":"จบแล้ว"
      }
   },
//13
"ต่อสู้":{
      "วันพีซ":{
         "cover":"https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/a249096c7812deb8c3c2c907173f3774.jpg",
         "trailer":"https://www.youtube.com/embed/S8_YwFLCh4U?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"https://youtu.be/S8_YwFLCh4U?si=41ra_QCJGZnRJKpv",
         "rate":"97",
         "time":"1115 ตอน"
      },
      "One Piece Film Red":{
         "cover":"https://pic.bstarstatic.com/ogv/f7a6a7a43284f440d8e7a33fcaf12fef53cd342e.png@720w_405h_1e_1c_90q.webp",
         "trailer":"https://www.youtube.com/embed/r0FvP_Ui-xY?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"https://youtu.be/r0FvP_Ui-xY?si=7SVb4PtZN4cPE_FE",
         "rate":"88",
         "time":"จบแล้ว"
      },
      "ดาบพิฆาตอสูร ภาคการสั่งสอนของเสาหลัก":{
         "cover":"https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/6b17182a3518d7406f0e69687f773f4f.jpg",
         "trailer":"https://www.youtube.com/embed/Tf31dGdlWxE?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"https://youtu.be/Tf31dGdlWxE?si=pZc6oWyyCnQE9COG",
         "rate":"83",
         "time":"จบแล้ว"
      },
      "ดาบพิฆาตอสูร ภาคหมู่บ้านช่างตีดาบ":{
         "cover":"https://pic.bstarstatic.com/ogv/354fb33ef3eca3a977735961cab2355094c5f135.png@720w_405h_1e_1c_90q.webp",
         "trailer":"https://www.youtube.com/embed/a9tq0aS5Zu8?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"https://youtu.be/a9tq0aS5Zu8?si=eGlQnkYTSwVtnn0w",
         "rate":"91",
         "time":"จบแล้ว"
      },
      "นารูโตะ ตำนานวายุสลาตัน":{
         "cover":"https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/3f283002b47c62b1e5d311c45f95c97e.jpe",
         "trailer":"https://www.youtube.com/embed/1dy2zPPrKD0?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"https://youtu.be/1dy2zPPrKD0?si=4Le4ELF1i--5gzyq",
         "rate":"92",
         "time":"จบแล้ว"
      },
      "SPY x FAMILY ซีซั่น 2":{
         "cover":"https://pic.bstarstatic.com/ogv/d8043a07a5d5627609bc31ac80a494ca6fc89931.png@720w_405h_1e_1c_90q.webp",
         "trailer":"https://www.youtube.com/embed/75LyKY6AV4U?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"https://youtu.be/75LyKY6AV4U?si=96CksGI_n8-byAOL",
         "rate":"95",
         "time":"จบแล้ว"
      },
      "มหาเวทย์ผนึกมาร ซีซัน 2":{
         "cover":"https://pic.bstarstatic.com/ogv/abf8f93adb8c54fcaabec80dd254d98f4f7519b5.png@720w_405h_1e_1c_90q.webp",
         "trailer":"https://www.youtube.com/embed/4A_X-Dvl0ws?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"https://youtu.be/4A_X-Dvl0ws?si=Ubo0aTruEGrJO2En",
         "rate":"90",
         "time":"จบแล้ว"
      },
      "SPY×FAMILY":{
         "cover":"https://pic.bstarstatic.com/ogv/95c838161d7bcd29c2e695e814e5429c52ff9795.png@720w_405h_1e_1c_90q.webp",
         "trailer":"https://www.youtube.com/embed/_VRxEEBa1XU?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"https://youtu.be/_VRxEEBa1XU?si=oMnGaCrjaDz7-_0k",
         "rate":"92",
         "time":"จบแล้ว"
      },
      "มหาเวทย์ผนึกมาร":{
         "cover":"https://pic.bstarstatic.com/ogv/ec057b1d525ad3ba5695842999761e3de77d3fde.png@720w_405h_1e_1c_90q.webp",
         "trailer":"https://www.youtube.com/embed/PKHQuQF1S8k?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"https://youtu.be/PKHQuQF1S8k?si=P29tdix7I0VzQm4K",
         "rate":"90",
         "time":"จบแล้ว"
      },
      "นารูโตะ นินจาจอมคาถา":{
         "cover":"https://pic.bstarstatic.com/ogv/d6965a88316b33fb082078ec529c95b0b51ec3dd.png@720w_405h_1e_1c_90q.webp",
         "trailer":"https://www.youtube.com/embed/-G9BqkgZXRA?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"https://youtu.be/-G9BqkgZXRA?si=lLHWcXMrwCizV2O_",
         "rate":"86",
         "time":"จบแล้ว"
      },
      "เกิดใหม่ทั้งทีก็เป็นสไลม์ไปซะแล้ว ซีซั่น 3":{
         "cover":"https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/c66e81aad52628a7f0738987903f92d2.jpg",
         "trailer":"https://www.youtube.com/embed/oxZWA16zjO0?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"https://youtu.be/oxZWA16zjO0?si=BotCeMU-vxpTUgOt",
         "rate":"92",
         "time":"18 ตอน"
      },
      "ผ่าพิภพไททัน ไฟนอล ซีซั่น บทสุดท้าย ครึ่งหลัง":{
         "cover":"https://pic.bstarstatic.com/ogv/5fbbf54b34b8e9bb0d3c26bfe3542f0ed02a0bf9.png@720w_405h_1e_1c_90q.webp",
         "trailer":"https://www.youtube.com/embed/EIVVnLlhzr0?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"https://youtu.be/EIVVnLlhzr0?si=luWgfOHJFpSF5f-D",
         "rate":"92",
         "time":"จบแล้ว"
      }
   },
//14
"ตลก":{
      "One Piece Film Red":{
         "cover":"https://pic.bstarstatic.com/ogv/f7a6a7a43284f440d8e7a33fcaf12fef53cd342e.png@720w_405h_1e_1c_90q.webp",
         "trailer":"https://www.youtube.com/embed/r0FvP_Ui-xY?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"https://youtu.be/r0FvP_Ui-xY?si=7SVb4PtZN4cPE_FE",
         "rate":"81",
         "time":"จบแล้ว"
      },
      "โบรูโตะ: นารูโตะ เน็กซ์ เจนเนเรชั่น":{
         "cover":"https://pic.bstarstatic.com/ogv/5a9e165c729f46500f8c280a1591e5ead1cad825.png@720w_405h_1e_1c_90q.webp",
         "trailer":"https://www.youtube.com/embed/nQeIObeB--8?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"https://youtu.be/nQeIObeB--8?si=bnGpUhbFsDAkGi_p",
         "rate":"83",
         "time":"จบแล้ว"
      },
      "SPY x FAMILY ซีซั่น 2":{
         "cover":"https://pic.bstarstatic.com/ogv/d8043a07a5d5627609bc31ac80a494ca6fc89931.png@720w_405h_1e_1c_90q.webp",
         "trailer":"https://www.youtube.com/embed/75LyKY6AV4U?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"https://youtu.be/75LyKY6AV4U?si=96CksGI_n8-byAOL",
         "rate":"92",
         "time":"จบแล้ว"
      },
      "SPY×FAMILY":{
         "cover":"https://pic.bstarstatic.com/ogv/95c838161d7bcd29c2e695e814e5429c52ff9795.png@720w_405h_1e_1c_90q.webp",
         "trailer":"https://www.youtube.com/embed/_VRxEEBa1XU?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"https://youtu.be/_VRxEEBa1XU?si=oMnGaCrjaDz7-_0k",
         "rate":"84",
         "time":"จบแล้ว"
      },
      "ชีวิตไม่ต้องเด่น ขอแค่เป็นเทพในเงา ภาคที่ 2":{
         "cover":"https://pic.bstarstatic.com/ogv/491f6c449ef83aea14539f312e9d6f57cd3f4666.png@720w_405h_1e_1c_90q.webp",
         "trailer":"https://www.youtube.com/embed/OqzdUcc3k9Y?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"https://youtu.be/OqzdUcc3k9Y?si=_RaDpL78DlMKM-A5",
         "rate":"91",
         "time":"จบแล้ว"
      },
      "เกิดใหม่ทั้งทีก็เป็นสไลม์ไปซะแล้ว เดอะ มูฟวี่ ภาคสายสัมพันธ์เพลิงสีชาด":{
         "cover":"https://pic.bstarstatic.com/ogv/ca8bc53900829ca650b7ea32180ff66596fd5e4c.png@720w_405h_1e_1c_90q.webp",
         "trailer":"https://www.youtube.com/embed/nJEGXG_vXbo?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"https://youtu.be/nJEGXG_vXbo?si=7JdM155Zicaq35pB",
         "rate":"83",
         "time":"จบแล้ว"
      },
      "ชีวิตไม่ต้องเด่น ขอแค่เป็นเทพในเงา":{
         "cover":"https://pic.bstarstatic.com/ogv/0293ea8f35e1751e31bbe1579f3494bbeb7840ce.png@720w_405h_1e_1c_90q.webp",
         "trailer":"https://www.youtube.com/embed/H-3fre7943U?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"https://youtu.be/H-3fre7943U?si=k8wtuWC9fTwSMHMA",
         "rate":"93",
         "time":"จบแล้ว"
      },
      "คุณชิกิโมริไม่ได้น่ารักแค่อย่างเดียวนะ":{
         "cover":"https://pic.bstarstatic.com/ogv/4d865cb5d11970d72196f09ee5acee34ecb27b6e.jpg@720w_405h_1e_1c_90q.webp",
         "trailer":"https://www.youtube.com/embed/IRxdEcemmsE?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"https://youtu.be/IRxdEcemmsE?si=fRHuTuX4KyudkIhd",
         "rate":"76",
         "time":"จบแล้ว"
      },
      "ดร.สโตน ซีซั่น 3":{
         "cover":"https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/f3accca2b543e1d3b7b9533ca55d2119.jpg",
         "trailer":"https://www.youtube.com/embed/bITRcLr4xR8?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"https://youtu.be/bITRcLr4xR8?si=oaN0HErV_4Z2G39n",
         "rate":"92",
         "time":"จบแล้ว"
      },
      "เกิดใหม่ทั้งทีก็เป็นสไลม์ไปซะแล้ว":{
         "cover":"https://pic.bstarstatic.com/ogv/c1dbe29922498f62add2acd524e56176a6f67e23.png@720w_405h_1e_1c_90q.webp",
         "trailer":"https://www.youtube.com/embed/1yzNpfS7omQ?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"https://youtu.be/1yzNpfS7omQ?si=UO35uDb0lf9QOzKA",
         "rate":"81",
         "time":"จบแล้ว"
      },
      "สกิลสุดพิสดารกับมื้ออาหารในต่างโลก":{
         "cover":"https://pic.bstarstatic.com/ogv/d44f745d7e31c8722a7c5e848eda30ae1994c3f3.png@720w_405h_1e_1c_90q.webp",
         "trailer":"https://www.youtube.com/embed/uLezuU0GL6Q?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"https://youtu.be/uLezuU0GL6Q?si=pTDouxPmHAZlwM-w",
         "rate":"75",
         "time":"จบแล้ว"
      },
      "จะยังไงภรรยาผมก็น่ารัก":{
         "cover":"https://pic.bstarstatic.com/ogv/f4cd441470622e9ba0a418485d38834dbf68567c.png@720w_405h_1e_1c_90q.webp",
         "trailer":"https://www.youtube.com/embed/3M7w-ROU62U?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
         "matching":"https://youtu.be/3M7w-ROU62U?si=POwdW9VfcTIgfAc0",
         "rate":"89",
         "time":"จบแล้ว"
      }
   },
//15
"ไซไฟ":{
  "ดร.สโตน ซีซั่น 3":{
     "cover":"https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/f3accca2b543e1d3b7b9533ca55d2119.jpg",
     "trailer":"https://www.youtube.com/embed/bITRcLr4xR8?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
     "matching":"https://youtu.be/bITRcLr4xR8?si=oaN0HErV_4Z2G39n",
     "rate":"92",
     "time":"จบแล้ว"
  },
  "takt op.Destiny":{
     "cover":"https://pic.bstarstatic.com/ogv/7a888352a8387cfa01caf1a1eb0171a6ccb8b8cf.png@720w_405h_1e_1c_90q.webp",
     "trailer":"https://www.youtube.com/embed/Mb0k1HLm3Ls?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
     "matching":"https://youtu.be/Mb0k1HLm3Ls?si=JHCjqbOTujsStTwl",
     "rate":"81",
     "time":"จบแล้ว"
  },
  "ดร.สโตน":{
     "cover":"https://pic.bstarstatic.com/ogv/03885ef72937af399f4ad211c0b286823e8e692a.png@720w_405h_1e_1c_90q.webp",
     "trailer":"https://www.youtube.com/embed/2ei4KpfCOAI?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
     "matching":"https://youtu.be/2ei4KpfCOAI?si=OoE2DIbvjdeclvBv",
     "rate":"75",
     "time":"จบแล้ว"
  },
  "86 -เอทตี้ซิกซ์-":{
     "cover":"https://pic.bstarstatic.com/ogv/98872632c1b823f2eace9e4e3c74f118a6da8cfd.png@720w_405h_1e_1c_90q.webp",
     "trailer":"https://www.youtube.com/embed/WVegRUOgkPM?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
     "matching":"https://youtu.be/WVegRUOgkPM?si=ySL2AMhXqVn9ogx2",
     "rate":"89",
     "time":"จบแล้ว"
  },
  "Engage Kiss":{
     "cover":"https://pic.bstarstatic.com/ogv/1c2f5a4a786369690a7fc52829073cd19e1f157e.jpg@720w_405h_1e_1c_90q.webp",
     "trailer":"https://www.youtube.com/embed/_xwq5xJB_KM?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
     "matching":"https://youtu.be/_xwq5xJB_KM?si=W_O6daDTN-9v9eFr",
     "rate":"76",
     "time":"จบแล้ว"
  },
  "ดร.สโตน ภาคพิเศษ":{
     "cover":"https://pic.bstarstatic.com/ogv/6828d96e629174ecbc726cfef650c8e769597c06.png@720w_405h_1e_1c_90q.webp",
     "trailer":"https://www.youtube.com/embed/xR0mAOlclHg?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
     "matching":"https://youtu.be/xR0mAOlclHg?si=AJxsBRdNr03algPI",
     "rate":"94",
     "time":"จบแล้ว"
  },
  "พิชิตรัก พิทักษ์โลก เดอะมูฟวี่ Date A Bullet":{
     "cover":"https://pic.bstarstatic.com/ogv/2252505a760fe31ded716e8e8b581a156dc0fd1e.png@720w_405h_1e_1c_90q.webp",
     "trailer":"https://www.youtube.com/embed/WdTagKn0cSM?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
     "matching":"https://youtu.be/WdTagKn0cSM?si=LqDitW4jXhTFrjPD",
     "rate":"87",
     "time":"จบแล้ว"
  },
  "พิชิตรัก พิทักษ์โลก ภาคที่ 4":{
     "cover":"https://pic.bstarstatic.com/ogv/0a1387095bfbcbe62c92f92d167dac353d559dae.jpg@720w_405h_1e_1c_90q.webp",
     "trailer":"https://www.youtube.com/embed/-7ICd6g2Gak?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
     "matching":"https://youtu.be/-7ICd6g2Gak?si=Lqa9KAk8N1XMK8gu",
     "rate":"84",
     "time":"จบแล้ว"
  },
  "NieR:Automata Ver1.1a":{
     "cover":"https://pic.bstarstatic.com/ogv/2fc3c411f644905b5b56dc58b5f062790be61fda.png@720w_405h_1e_1c_90q.webp",
     "trailer":"https://www.youtube.com/embed/Se-H5iXKdDw?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
     "matching":"https://youtu.be/Se-H5iXKdDw?si=E1p6pCR0icixEyhv",
     "rate":"76",
     "time":"18 ตอน"
  },
  "Renai Flops":{
     "cover":"https://pic.bstarstatic.com/ogv/7ba37b2ca3e0d733ce104432ec50abf72525ce7f.jpg@720w_405h_1e_1c_90q.webp",
     "trailer":"https://www.youtube.com/embed/XC1val6Psks?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
     "matching":"https://youtu.be/XC1val6Psks?si=QYT_ffabr5UYRKVe",
     "rate":"79",
     "time":"จบแล้ว"
  },
  "ดร.สโตน ซีซั่น 2":{
     "cover":"https://pic.bstarstatic.com/ogv/a49f09a07a55a3658bce5c0c22bf58588d945861.png@720w_405h_1e_1c_90q.webp",
     "trailer":"https://www.youtube.com/embed/esjDq0JQ_1s?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
     "matching":"https://youtu.be/esjDq0JQ_1s?si=pbatNqjJ6KK4rjbX",
     "rate":"81",
     "time":"จบแล้ว"
  },
  "มหาวิบัตินครดับสูญ":{
     "cover":"https://pic.bstarstatic.com/ogv/3550ae2266b1fccd8dcd1f2451608159fec766ab.png@720w_405h_1e_1c_90q.webp",
     "trailer":"https://www.youtube.com/embed/UOtC17c8Xaw?enablejsapi=1&controls=0&modestbranding=1&autoplay=1&mute=1",
     "matching":"https://youtu.be/UOtC17c8Xaw?si=bLmp_TdiXWAl9aQx",
     "rate":"86",
     "time":"จบแล้ว"
  }
},
//16
//17
//18
//19
//20
//21
//22
//23
//24

}