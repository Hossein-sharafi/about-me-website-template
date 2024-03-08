function menu()
{
if(document.getElementById('dropmenu').classList.contains('right1')){
    document.getElementById('dropmenu').classList.remove('right1')
    document.getElementById('header').classList.add('ultraopacity')
}else{
    document.getElementById('dropmenu').classList.add('right1')
    document.getElementById('header').classList.remove('ultraopacity')
}

}
function showmessage() {
    document.getElementById('messageBox').classList.remove('hidden');
    document.getElementById('header').classList.add('ultraopacity')
}

function hidemessage() {
    document.getElementById('messageBox').classList.add('hidden');
    document.getElementById('header').classList.remove('ultraopacity')
}

function mywebsite(){
document.getElementById('title').innerHTML='وب سایت حسین شرفی';
document.getElementById('message').innerHTML='وبسایتی درباره خودم با استفاده از زبان های فرانت ساخته شده';
document.getElementById('link1').innerHTML='وبسایت';
document.getElementById('link1').href ='http://www.hosseinsharafi.lol';
document.getElementById('link2').innerHTML='گیت هاب';
document.getElementById('link2').href='https://github.com/Hossein-sharafi/aboutme-website-template';
document.getElementById('link3').innerHTML='';
document.getElementById('link3').href='';
document.getElementById('link4').innerHTML='';
document.getElementById('link4').href='';
}
function shb(){
document.getElementById('title').innerHTML='وبسایت مدرسه شهید بهشتی';
document.getElementById('message').innerHTML='اولین پروژه رسمی من که برای مدرسه شهید بهشتی کرمانشاه ساخته شده';
document.getElementById('link1').innerHTML='وبسایت';
document.getElementById('link1').href ='https://shb.hosseinsharafi.lol/';
document.getElementById('link2').innerHTML='گیت هاب';
document.getElementById('link2').href='https://github.com/Hossein-sharafi/php_school_website';
document.getElementById('link3').innerHTML='';
document.getElementById('link3').href='';
document.getElementById('link4').innerHTML='';
document.getElementById('link4').href='';
}
function minestar(){
document.getElementById('title').innerHTML='کامیونیتی ماین استار';
document.getElementById('message').innerHTML='مشارکت در بنیانگذاری ماین استار';
document.getElementById('link1').innerHTML='دیسکورد';
document.getElementById('link1').href ='https://discord.gg/anar-872880981571436614';
document.getElementById('link2').innerHTML='';
document.getElementById('link2').href='';
document.getElementById('link3').innerHTML='';
document.getElementById('link3').href='';
document.getElementById('link4').innerHTML='';
document.getElementById('link4').href='';
}
function aynar(){
    document.getElementById('title').innerHTML='تیم توسعه آینار';
    document.getElementById('message').innerHTML='تیم ارائه خدمات نرم افزاری در زمینه های مختلف همچون طراخی سایت و اپلیکشن های موبایلی';
    document.getElementById('link1').innerHTML='لینکدین';
    document.getElementById('link1').href ='https://www.linkedin.com/company/aynar-tm';
    document.getElementById('link2').innerHTML='دیسکورد';
    document.getElementById('link2').href='https://discord.gg/qpTgd268cd';
    document.getElementById('link3').innerHTML='';
    document.getElementById('link3').href='';
    document.getElementById('link4').innerHTML='';
    document.getElementById('link4').href='';
}
/*  soon
function soon(){
  document.getElementById('title').innerHTML='';
document.getElementById('message').innerHTML='';
    document.getElementById('link1').innerHTML=' ';
    document.getElementById('link1').href ='';
    document.getElementById('link2').innerHTML='';
    document.getElementById('link2').href='';
    document.getElementById('link3').innerHTML='';
    document.getElementById('link3').href='';
    document.getElementById('link4').innerHTML='';
    document.getElementById('link4').href='';
}
function soon(){
    document.getElementById('title').innerHTML='';
    document.getElementById('message').innerHTML='';
    document.getElementById('link1').innerHTML=' ';
    document.getElementById('link1').href ='';
    document.getElementById('link2').innerHTML='';
    document.getElementById('link2').href='';
    document.getElementById('link3').innerHTML='';
    document.getElementById('link3').href='';
    document.getElementById('link4').innerHTML='';
    document.getElementById('link4').href='';
}
*/