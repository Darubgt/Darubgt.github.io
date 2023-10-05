function validation() {
    var nama = document.getElementById("namaF").value;
    var email = document.getElementById("emailF").value;
    var jurusan = document.getElementById("matkulF").value;
    var dosen = document.getElementById("dosenF").value;

    if (nama != "" && email != "" && jurusan != "" && dosen != ""){
        document.getElementById("form").reset();
    }else if (nama != ""){
        alert('Mohon isi nama anda');
    }else if (email != ""){
        alert('Mohon isi NIM anda');
    }else if (jurusan != ""){
        alert('Mohon isi Mata Kuliah yang ingin anda ikuti');
    }else if (dosen != ""){
        alert('Mohon isi nama dosen yang anda inginkan');
    }else{
        alert('Mohon isi data dengan lengkap !');
    }
}