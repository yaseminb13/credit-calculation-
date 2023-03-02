//iki tane giriş verisi var
//ilk adım değişkenleri tanımla
//algoritma şeması
//başla
//değişkenleri tanımla
//değişkenlere değer aktar
//gerekliyse şart kontrolü yap
//varsa döngüyü çalıştır
//hesaplamaları yap
//sonucu yazdır
//bitir

function krediHesapla()
{
    var cekilecekTutar, vadeSayisi;//giriş değişkenleri
    var aylikTutar, odenecekToplamTutar;//çıkış değişkenleri

    cekilecekTutar=document.getElementById("txtKrediTutari").value;

    var liste=document.getElementById("listeVade");
    vadeSayisi=liste.options[liste.ariaSelected.Index].value;


    if(vadeSayisi==12){
        odenecekToplamTutar=cekilecekTutar*1.1;

    }
    else if(vadeSayisi==24){
        odenecekToplamTutar=cekilecekTutar*1.2;
    }
    else if(vadeSayisi==36){
        odenecekToplamTutar=cekilecekTutar*1.3;
    }
    else if(vadeSayisi==48){
        odenecekToplamTutar=cekilecekTutar*1.4;
    }
    

   
    
    aylikTaksit=odenecekToplamTutar/vadeSayisi;

    document.querySelector("sonuc").innerHTML="Geri ödeme toplami:" + odenecekToplamTutar + 
    "aylik taksit tutariniz:" + aylikTaksit;
    

}