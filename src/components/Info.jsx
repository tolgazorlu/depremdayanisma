import React from 'react'

const info = [
    { name: "Psikolojik İlk Yardım Nasıl Yapılır? (Kısa)", href: "https://d1fdloi71mui9q.cloudfront.net/8SNTzcmfQiaiGDIHcMiL_Psikolojik%20ilk%20yard%C4%B1m.pdf"},
    { name: "Psikolojik İlk Yardım Nasıl Yapılır? (Detaylı Rehber)", href: "https://d1fdloi71mui9q.cloudfront.net/XruP0RgxSBefPmw6IAgH_9789759225445_tur.pdf"},
    { name: "Duygu Çemberi", href: "https://tr.pinterest.com/pin/420171840235388785/feedback/?invite_code=e56172db1d5e483586e5f1ca9de4a12f&sender_id=840414117872330662"},
    { name: "DEPREM SONRASI İLK 6 SAAT HAYATİ ÖNEMDEDİR!", href: "https://www.youtube.com/watch?v=xJ5tO8S2uzE"},
    { name: "Deprem Bağış Yöntemleri", href: "https://gelecekbilimde.net/deprembagis/"},
    { name: "Ücretsiz Psikolog Desteği Nasıl Alınır?", href: "https://www.youtube.com/watch?v=xJ5tO8S2uzE"},
    { name: "Depremde Çocuk Psikolojisi", href: "https://www.instagram.com/p/CSEqnpNtnsd/"},
    { name: "Depremde Çocuk Psikolojisi 2", href: "https://www.instagram.com/p/CoXG60HtVIP/"},
    { name: "Depremi nasıl basitçe çocuklara anlatabilirim?", href: "https://www.youtube.com/watch?v=t0qdFLHZ-Kc"},
    { name: "Depremde Otizim Spektrumda Bireyler", href: "https://www.instagram.com/p/CoXWhIGre0E/"},
    { name: "AFAD Deprem Çantası", href: "https://www.afad.gov.tr/afet-ve-acil-durum-cantasi-nasil-hazirlanmali"},
    { name: "7 Adımda DEPREME HAZIR OLMAK", href: "https://www.youtube.com/watch?v=fZxPBF7EymU"},
    { name: "İBB İstanbul Deprem Haritası", href: "https://depremzemin.ibb.istanbul/guncelcalismalarimiz/#olasi-deprem-kayip-tahmnler-le-ktapiklari"},
    { name: "Earthquake Donation Methots", href: "https://gelecekbilimde.net/earthquake/"},
]

const channels= [
    {name:"Açık Bilim" , 
    img:"https://yt3.googleusercontent.com/IvXSGE7Kx2GzuCXh8yYPbdDBtuTJZ4UinxGwMwkMzg0ZkFil2eWCihEUVAclDJN8fcLh-qB5qVc=s88-c-k-c0x00ffffff-no-rj" ,
    href:"https://www.youtube.com/@acikbilimtv"},
    {name:"Açık Beyin" , 
    img:"https://yt3.googleusercontent.com/ytc/AL5GRJX5DewS00PVV9LzOSujwt4JZjtXvdgw-r3YJ2Vw=s88-c-k-c0x00ffffff-no-rj" ,
    href:"https://www.youtube.com/@AcikBeyin"},
    {name:"Akademik Link" , 
    img:"https://yt3.googleusercontent.com/ytc/AL5GRJVjF_bFVPGhY6bZ6z8Fpc1qbYlUFcH97vVGmzMZ8Q=s88-c-k-c0x00ffffff-no-rj" ,
    href:"https://www.youtube.com/@akademiklink"},
    {name:"Astrapera" , 
    img:"https://yt3.googleusercontent.com/KpE7O6chYRdYXEaVgLWhc1FdoQfGGPomDvi_1UpLUgT4LS-w1_IT2TWmUcvmo4tPQhABk-Uh1g=s88-c-k-c0x00ffffff-no-rj" ,
    href:"https://www.youtube.com/@Astrapera"},
    {name:"Ayhan Tarakçı" , 
    img:"https://yt3.googleusercontent.com/SB7TSjHHooxYpJ8-OD9xPYp4uiZsbhAvlE4cd1T2u45spCooxgF8vnh7ycrm2BcV3c3_D3dh=s88-c-k-c0x00ffffff-no-rj" ,
    href:"https://www.youtube.com/@AyhanTarakci"},
    {name:"Barış Özcan" , 
    img:"https://yt3.googleusercontent.com/ytc/AL5GRJUKMBO-mYmGKsjm2Gzn8kDgUxFqRyHpiKt9NqAqSSo=s88-c-k-c0x00ffffff-no-rj" ,
    href:"https://www.youtube.com/@BarisOzcan"},
    {name:"Bebar Bilim" , 
    img:"https://yt3.googleusercontent.com/t2MnHorNsYnDfJCDZG3VSpWdwvjSxu2TzcebfJf0Q3qhjHOphoC80w_ycZS93SR2C8JJLd_xoyU=s88-c-k-c0x00ffffff-no-rj" ,
    href:"https://www.youtube.com/@bebarbilim"},
    {name:"Basfi İle Deneysel Bilim" , 
    img:"https://yt3.googleusercontent.com/ytc/AL5GRJWr3zafMSSLdqG3-GikhqoBwPgl0ukoz37rDiKP=s88-c-k-c0x00ffffff-no-rj" ,
    href:"https://www.youtube.com/@BasfiileDeneyselBilim"},
    {name:"Diamond Tema" , 
    img:"https://yt3.googleusercontent.com/ytc/AL5GRJUsqs3X9xT7UauzCJuMe42RgZDUez9dXrLSMKM3xw=s88-c-k-c0x00ffffff-no-rj" ,
    href:"https://youtube.com/@DiamondTema"},
    {name:"Erdi Özüağ" , 
    img:"https://yt3.googleusercontent.com/w1esHoAm15Xzi_NXGpSJEBkfXxXxQbYmsl1vOrbqo9njiPxIs-JwiLV5BaUdAM8tPElgW2cNJJ4=s88-c-k-c0x00ffffff-no-rj" ,
    href:"https://www.youtube.com/@ErdiOzuag"},
    {name:"Evrim Ağacı" , 
    img:"https://yt3.googleusercontent.com/bETnYPbQ71Nn7XOd57Tb_P_WrM0_ktX2qQJTFv_lRCUHFzt-oS_6voa6Q5rUQoX2yDw_nTOe=s88-c-k-c0x00ffffff-no-rj" ,
    href:"https://www.youtube.com/@evrimagaci"},
    {name:"Filmler ve Filimler" , 
    img:"https://yt3.googleusercontent.com/sjw3p8Guc0-L8yYpDvvsOCSgzwvZ5FPHrkRqVLMx2Hk1aSN0AZQMF4IRqkaunho80CkfY7cCHl4=s88-c-k-c0x00ffffff-no-rj" ,
    href:"https://www.youtube.com/filmlervefilimler"},
    {name:"Gelecek Bilimde" , 
    img:"https://yt3.googleusercontent.com/dWwD-YA8AhMw7OUZeE2RRvNRlYAYfbNQAndZNr5WRhBf8sRDc8UNniMXeYtCzYb35JR7U5obRA=s88-c-k-c0x00ffffff-no-rj" ,
    href:"https://www.youtube.com/@GelecekBilimde"},
    {name:"GUHEM" , 
    img:"https://yt3.googleusercontent.com/ytc/AL5GRJWdNsf2ToP4zx4IZhaCYVxdK3CSEkxnx3CLR9d9=s88-c-k-c0x00ffffff-no-rj" ,
    href:"https://www.youtube.com/@gokmenuzayhavaclkegitimmer580"},
    {name:"Holosen" , 
    img:"https://yt3.googleusercontent.com/OR4TcXyTOjhR_ocjG_dIZdfhZ82YQcTyKh0d1thtm7LdUEKLcCJmSeNMyNDn88uOQaOtyhgc2w=s88-c-k-c0x00ffffff-no-rj" ,
    href:"https://www.youtube.com/@Holosen"},
    {name:"Hypatia Bilim" , 
    img:"https://yt3.googleusercontent.com/LJmRlYfLLMPmnDNXdO_MJgfzLnxA44TFz1g6ysUTKe5IjBfD49CqdqvS7cHkgK1H47ZcoBQxCQ=s88-c-k-c0x00ffffff-no-rj" ,
    href:"https://www.youtube.com/@HypatiaBilimx"},
    {name:"Konsol Üssü" , 
    img:"https://yt3.googleusercontent.com/ytc/AL5GRJVbDUKu2ycVIOLuDbJxG4yzD02CDkIzi_NVwHmt=s88-c-k-c0x00ffffff-no-rj" ,
    href:"https://www.youtube.com/@konsolussu474"},
    {name:"Kozmik Anafor" , 
    img:"https://yt3.googleusercontent.com/ytc/AL5GRJXdm_Z8JpS-0WYcCX7nQSrdyQKlZW5LgBKbBYowkA=s88-c-k-c0x00ffffff-no-rj" ,
    href:"https://www.youtube.com/@LegendariumTurkiye"},
    {name:"Legendarium Türkiye" , 
    img:"https://yt3.googleusercontent.com/ytc/AL5GRJX3zq46rjPwhhjb8iZdfy6w_HrHJa51BdJjqwqWwg=s88-c-k-c0x00ffffff-no-rj" ,
    href:"https://www.youtube.com/@LegendariumTurkiye"},
    {name:"Mesut Çevik" , 
    img:"https://yt3.googleusercontent.com/ytc/AL5GRJWJI0l04r27SBT9c-LbuOu4N0zFxJ9lkVM063LJIDw=s88-c-k-c0x00ffffff-no-rj" ,
    href:"https://www.youtube.com/mesutcevik"},
    {name:"ModArtPc" , 
    img:"https://yt3.googleusercontent.com/ytc/AL5GRJV2tfKJyEQzpcHddbPmnA0pOBgokqfMbqBE6qQmRA=s88-c-k-c0x00ffffff-no-rj" ,
    href:"https://www.youtube.com/@ModArtPC"},
    {name:"Rasyonalist" , 
    img:"https://yt3.googleusercontent.com/x5mGjX-ab3d7mM_JbKGFu1-wiAPK4H-FV9WDPEzvTXnu0gAPwaIef08NDjZ1HVF29h3fxq8tbOY=s88-c-k-c0x00ffffff-no-rj" ,
    href:"https://www.youtube.com/@RasyonalistOrg"},
    {name:"Sertaç Aktan" , 
    img:"https://yt3.googleusercontent.com/D1kXx3UpkPtkgGs0JCWnTbAp-OA12i8QZF38qHGjopHyg9ttpKajozP2udZgXHv5QIXGa2VGoA=s88-c-k-c0x00ffffff-no-rj" ,
    href:"https://www.youtube.com/@SertacAktan"},
    {name:"Technopat" , 
    img:"https://yt3.googleusercontent.com/ytc/AL5GRJV5VKGxewz5Mkn6C5LGZMfpeVaL-Lqjtv4uawFrtvE=s88-c-k-c0x00ffffff-no-rj" ,
    href:"https://www.youtube.com/user/technopatnet"},
    {name:"Umut Yıldız (Tek Çare Uzay)" , 
    img:"https://yt3.googleusercontent.com/kuPcjjoJiKXlC_M5kzIB1GTGEapPBbiAbY6pjadX0adR3_Ty_ofXEQTiFcXrfpnUj4_hbFFk7g=s88-c-k-c0x00ffffff-no-rj" ,
    href:"https://www.youtube.com/@umutayildiz"},
    {name:"Teknoseyir" , 
    img:"https://yt3.googleusercontent.com/ytc/AL5GRJWd2KPdZK7mYJcRWAikqXlZcVjPSH3toBXzRQ0fzg=s88-c-k-c0x00ffffff-no-rj" ,
    href:"https://www.youtube.com/@teknoseyir"},
    {name:"Tolga Özbek" , 
    img:"https://yt3.googleusercontent.com/ytc/AL5GRJV7qq1e3FZVI-nx4IV29pVyYLkABNoboADY-FUybQ=s88-c-k-c0x00ffffff-no-rj" ,
    href:"https://www.youtube.com/@tolgaozbekcom"},
    {name:"Tolga Özuygur" , 
    img:"https://yt3.googleusercontent.com/ytc/AL5GRJXyTUgVcSGOEmWunak-A0uvvRo0fuxA322ihkG-hQ=s88-c-k-c0x00ffffff-no-rj" ,
    href:"https://www.youtube.com/@hallederiz"},
    {name:"Uzay Çağında Yolculuk" , 
    img:"https://yt3.googleusercontent.com/ytc/AL5GRJWuGmle4Uo57xkrz2XBtAXy_IqcAhUyrLbqgvwb=s88-c-k-c0x00ffffff-no-rj" ,
    href:"https://www.youtube.com/@UzayCagindaYolculuk"},
]

export default function Info() {
  return (
    <div className='text-light'>
        <div className="relative px-6 lg:px-8">
            <div className='text-center'>
                <h1 className='text-4xl'>Bağlantılar</h1>
            </div>
          <div className="sm:px-24 py-10 grid sm:grid-cols-3 gap-3">
          {info.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="bg-cyan-600 p-8 rounded-2xl flex justify-start items-center hover:bg-ahbap"
            >
              {item.name}
            </a>
          ))}
          </div>
        </div>
        <div className="relative px-6 lg:px-8">
            <div className='text-center'>
                <h1 className='text-4xl'>Ortak Youtube Kanalları</h1>
            </div>
          <div className="sm:px-24 py-10 grid sm:grid-cols-4 gap-3">
          {channels.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="bg-blue-900 p-2 rounded-3xl flex justify-start items-center hover:bg-ahbap"
            >
            <img src={item.img} className="h-18 rounded-full mr-4"/>
              {item.name}
            </a>
          ))}
          </div>
        </div>
    </div>
  )
}