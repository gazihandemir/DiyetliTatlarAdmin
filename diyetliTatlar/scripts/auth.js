const loginForm = document.querySelector('#login-form');
auth.onAuthStateChanged(k => {
    //console.log(k);
    if (k) {
        // verileri getir
        db.collection('ProfileDiyetisyenBilgileri').onSnapshot((snapshot) => {
            //console.log(snapshot.docs);

            kullaniciBilgileriYukle(snapshot.docs);
            kullaniciYukle(k);


        });
        db.collection('ProfileBasariHikayesi').onSnapshot((snapshot) => {
            danisanBasariHikayesiYukle(snapshot.docs);
            kullaniciYukle(k);
        });
        db.collection("DiyetListeleri").onSnapshot((snapshot)=>{
            diyetListesiYukle(snapshot.docs);
            kullaniciYukle(k);
        });   
    } else {
        console.log('cikis islemi basarili');
        kullaniciBilgileriYukle([]);
        kullaniciYukle();
    }
});


// giris islemi 
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const mail = loginForm['login-email'].value;
    const parola = loginForm['login-password'].value;
    auth.signInWithEmailAndPassword(mail, parola).then(sonuc => {
        alert('giris basarili');
        const modal = document.querySelector('#modal-login');
        M.Modal.getInstance(modal).close();
        loginForm.reset();
    }).catch(function (error) {
        //  console.log(sonuc.user);
        //  console.log('giris basarili');
        if (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert('hatali giris yaptınız');
        }
    });
});
// çıkış işlemi

const cikis = document.querySelector('#logout');
cikis.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
        console.log('cikis islemi basarili');
    });

});
// kullanici bilgisi  oluştur
const KullaniciBilgileriOlusturForm = document.querySelector('#create-form');

KullaniciBilgileriOlusturForm.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('ProfileDiyetisyenBilgileri').doc(KullaniciBilgileriOlusturForm['email'].value).set({
        Email: KullaniciBilgileriOlusturForm['email'].value,
        Hastalik: KullaniciBilgileriOlusturForm['hastalik'].value,
        Hikaye: KullaniciBilgileriOlusturForm['hikaye'].value,
        Olcüm: KullaniciBilgileriOlusturForm['ölcüm'].value,
        Tahlil: KullaniciBilgileriOlusturForm['tahlil'].value

    }).then(() => {
        alert('Kayıt başarılı');
        const modal = document.querySelector('#modal-create');
        M.Modal.getInstance(modal).close();
        KullaniciBilgileriOlusturForm.reset();
    }).catch(err => {
        console.log(err.message);
    });
});
// Danışan başarı hikayesi ekle  oluştur

const DanisanBasariHikayesi = document.querySelector('#create-form-basari');

DanisanBasariHikayesi.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('ProfileBasariHikayesi').doc(DanisanBasariHikayesi['basariemail'].value).set({
        Email: DanisanBasariHikayesi['basariemail'].value,
        haft1a: DanisanBasariHikayesi['birinciHafta'].value,
        haft2a: DanisanBasariHikayesi['ikinciHafta'].value,
        haft3a: DanisanBasariHikayesi['ücüncüHafta'].value,
        haft4a: DanisanBasariHikayesi['dördüncüHafta'].value,
        basariHikayesi : DanisanBasariHikayesi['basariHikaye'].value
    }).then(() => {
        alert('Kayıt Başarılı');
        const modal = document.querySelector('#modal-create2');
        M.Modal.getInstance(modal).close();
        DanisanBasariHikayesi.reset();
    }).catch(err => {
        console.log(err.message);
    });
});
// Diyet Ekle 
const DiyetEkle = document.querySelector('#create-form-diyet');
DiyetEkle.addEventListener('submit',(e) =>  {
        e.preventDefault();
        db.collection('DiyetListeleri').doc(DiyetEkle['diyetemail'].value).set({
            Email : DiyetEkle['diyetemail'].value,
            diyetSabah : DiyetEkle['diyetSabah'].value,
            diyetAr1a : DiyetEkle['diyetAra1'].value,
            diyetOglen : DiyetEkle['diyetOglen'].value,
            diyetAr2a : DiyetEkle['diyetAra2'].value,
            diyetAksam : DiyetEkle['diyetAksam'].value,
            diyetGece : DiyetEkle['diyetGece'].value,
        }).then(() => {
            alert('Kayıt Başarılı');
            const modal = document.querySelector('#modal-create3');
            M.Modal.getInstance(modal).close();
            DiyetEkle.reset();
        }).catch(err => {
            console.log(err.message);
        });
});
