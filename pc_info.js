const os=require('os');
const fs=require('fs')

let pcInfo = function (){

    let freeRam = byteToGB(os.freemem());
    let totalRam=byteToGB(os.totalmem());
    let usedRam=(totalRam-freeRam).toFixed(2);
    let cpuSayisi=os.cpus().length;

    // * Write info to txt file

    fs.writeFile('pc_info.txt',pcInfoGoster(),(err)=>{
        if(err) console.log('Dosyaya yazarken hata oluştu.')
    })


    function byteToGB(toplamByte){
        return (toplamByte /1024 /1024 / 1024).toFixed(2);
    }


    function pcInfoGoster(){
        return `Toplam Ram : ${totalRam} | Kullanılan Ram : ${usedRam} | Free Ram : ${freeRam} | Cpu Sayısı : ${cpuSayisi}`;
    }

}


exports.pcInfo=pcInfo;