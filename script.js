function topUp(){
    const game =
    document.getElementById('game').value;
    const playerid =
    document.getElementById('id').value;
    const amount =
    document.getElementById('jumlah').value;
    if (!playerid|| !amount){
alert('silakan lengkapi semua field!');
return;
    }
    document.getElementById ('result')
    .inertext = `top-up $ {amount}
    untuk ${game} berhasil dilakukan untuk ID pemain ${playerId}.`;
}