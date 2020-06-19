const kullaniciBilgileri = document.querySelector('.guides');
const danisanBilgileri = document.querySelector('.guides2');
const diyetBilgileri = document.querySelector('.guides3');
const cikisLinkleri = document.querySelectorAll('.logged-out');
const girisLinkleri = document.querySelectorAll('.logged-in');
document.addEventListener('DOMContentLoaded', function () {
    var modallar = document.querySelectorAll('.modal');
    M.Modal.init(modallar);

    var makaleler = document.querySelectorAll('.collapsible');
    M.Collapsible.init(makaleler);
});
const kullaniciBilgileriYukle = (data) => {
    if (data.length) {
        let html = ` <label style="display: block;text-align: center; font-size: 30px; color: black; font-family: sans-serif,monospace;">KULLANICI
        BİLGİLERİ</label>`;
        data.forEach(doc => {
            const kullanicibilgisi = doc.data();
            const li = `
            <hr class="hrClass">
            <li>
                <div class="collapsible-header grey lighten-4" style="color: black; font-family: sans-serif,monospace;">${kullanicibilgisi.Email}</div>
                <div class="collapsible-body white"><label class="kullaniciBilgileriLabel">Bel-Kalça-Göğüs-Bacak Ölçümeri<br></label><span class="kullaniciBilgileriSpan">${kullanicibilgisi.Olcüm}</span></div>
                <div class="collapsible-body white"><label class="kullaniciBilgileriLabel">Hastalık Adı<br></label><span class="kullaniciBilgileriSpan">${kullanicibilgisi.Hastalik}</span></div>
                <div class="collapsible-body white"><label class="kullaniciBilgileriLabel">Tahlilde Önemli Hususlar<br></label><span class="kullaniciBilgileriSpan">${kullanicibilgisi.Tahlil}</span></div>
                <div class="collapsible-body white"><label class="kullaniciBilgileriLabel">Danışan Hikayesi<br></label><span class="kullaniciBilgileriSpan">${kullanicibilgisi.Hikaye}</span></div>
            </li>
            
            `;
            html += li;
        });
        kullaniciBilgileri.innerHTML = html;
    } else {
        kullaniciBilgileri.innerHTML = '<h5 class="center-align">Kullanici bilgileri veri tabanında yok</h5>'
    }
}
const danisanBasariHikayesiYukle = (data) =>{
    if(data.length){
        let html =` <label style="display: block;text-align: center; font-size: 30px; color: black; font-family: sans-serif,monospace;">DANIŞAN BAŞARI HİKAYESİ LİSTESİ</label>`;;
        data.forEach(doc => {
            const danisanBasariHikayesi = doc.data();
            const li = `
            <hr class="hrClass">
        <li>
            <div class="collapsible-header grey lighten-4" style="color: black; font-family: sans-serif,monospace;">${danisanBasariHikayesi.Email}</div>
            <div class="collapsible-body white"><label class="kullaniciBilgileriLabel">1. HAFTA<br></label><span class="kullaniciBilgileriSpan">${danisanBasariHikayesi.haft1a}</span></div>
            <div class="collapsible-body white"><label class="kullaniciBilgileriLabel">2. HAFTA<br></label><span class="kullaniciBilgileriSpan">${danisanBasariHikayesi.haft2a}</span></div>
            <div class="collapsible-body white"><label class="kullaniciBilgileriLabel">3. HAFTA<br></label><span class="kullaniciBilgileriSpan">${danisanBasariHikayesi.haft3a}</span></div>
            <div class="collapsible-body white"><label class="kullaniciBilgileriLabel">4. HAFTA<br></label><span class="kullaniciBilgileriSpan">${danisanBasariHikayesi.haft4a}</span></div>
            <div class="collapsible-body white"><label class="kullaniciBilgileriLabel">Danışan Başarı Hikayesi<br></label><span class="kullaniciBilgileriSpan">${danisanBasariHikayesi.basariHikayesi}</span></div>
        </li>
            
            `;
            html+=li;
        });
        danisanBilgileri.innerHTML = html;

    }else {
        kullaniciBilgileri.innerHTML = '<h5 class="center-align">Kullanici bilgileri veri tabanında yok</h5>'
    }
}
const diyetListesiYukle = (data) =>{
    if(data.length){
        let html = ` <label style="display: block;text-align: center; font-size: 30px; color: black; font-family: sans-serif,monospace;">DANIŞAN DİYET LİSTESİ</label>`;;
        data.forEach(doc => {
            const danisanDiyetListesi = doc.data();
            const li = `
            <hr class="hrClass">
        <li>
            <div class="collapsible-header grey lighten-4" style="color: black; font-family: sans-serif,monospace;">${danisanDiyetListesi.Email}</div>
            <div class="collapsible-body white"><label class="kullaniciBilgileriLabel">Sabah<br></label><span class="kullaniciBilgileriSpan">${danisanDiyetListesi.diyetSabah}</span></div>
            <div class="collapsible-body white"><label class="kullaniciBilgileriLabel">Ara 1<br></label><span class="kullaniciBilgileriSpan">${danisanDiyetListesi.diyetAr1a}</span></div>
            <div class="collapsible-body white"><label class="kullaniciBilgileriLabel">Öğlen<br></label><span class="kullaniciBilgileriSpan">${danisanDiyetListesi.diyetOglen}</span></div>
            <div class="collapsible-body white"><label class="kullaniciBilgileriLabel">Ara 2<br></label><span class="kullaniciBilgileriSpan">${danisanDiyetListesi.diyetAr2a}</span></div>
            <div class="collapsible-body white"><label class="kullaniciBilgileriLabel">Aksam<br></label><span class="kullaniciBilgileriSpan">${danisanDiyetListesi.diyetAksam}</span></div>
            <div class="collapsible-body white"><label class="kullaniciBilgileriLabel">Gece<br></label><span class="kullaniciBilgileriSpan">${danisanDiyetListesi.diyetGece}</span></div>
        </li>
            
            `;
            html+=li;
        });
        diyetBilgileri.innerHTML = html;
    }
}
const kullaniciYukle = (kullanici => {
    if (kullanici) {
        girisLinkleri.forEach(item => item.style.display = 'block');
        cikisLinkleri.forEach(item => item.style.display = 'none');
    } else {
        kullaniciBilgileri.innerHTML = '';
        girisLinkleri.forEach(item => item.style.display = 'none');
        cikisLinkleri.forEach(item => item.style.display = 'block');
    }
})
