const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const welcomeScreen = document.getElementById('welcomeScreen');
const toolScreen = document.getElementById('toolScreen');
const headerTitle = document.getElementById('headerTitle');
const toolTitleText = document.getElementById('toolTitleText');
const toolSubtitleText = document.getElementById('toolSubtitleText');
const toolDescText = document.getElementById('toolDescText');
const toolIcon = document.getElementById('toolIcon');

// Fungsi untuk toggle Sidebar di versi Mobile
function toggleMenu() {
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
}

// Logika Navigasi Menu
const menuItems = document.querySelectorAll('.menu-item');
menuItems.forEach(item => {
    item.addEventListener('click', function() {
        menuItems.forEach(i => i.classList.remove('active'));
        this.classList.add('active');
        
        // Ambil nama menu, bersihkan dari kata "NEW" jika ada
        const menuName = this.innerText.replace('NEW', '').trim();
        headerTitle.innerText = menuName;

        if (menuName === 'Beranda') {
            welcomeScreen.style.display = 'block';
            toolScreen.style.display = 'none';
        } else {
            welcomeScreen.style.display = 'none';
            toolScreen.style.display = 'block';
            toolTitleText.innerText = menuName;

            // Logika Dinamis untuk Icon dan Deskripsi berdasarkan Menu
            let iconClass = "fa-solid fa-wand-magic-sparkles";
            let subtitle = "Siapkan aset kreatif Anda.";
            let workspaceText = "Area unggah aset dan pengaturan AI.";

            if(menuName.includes("TTS Maker") || menuName.includes("Clone Suara")) {
                iconClass = "fa-solid fa-microphone-lines";
                subtitle = "Ubah naskah teks menjadi suara (voiceover) berkualitas tinggi.";
                workspaceText = "Ketik atau tempel naskah Anda di sini untuk diproses menjadi audio.";
            } else if (menuName.includes("Copywriting")) {
                iconClass = "fa-solid fa-pen-to-square";
                subtitle = "Buat caption, deskripsi produk, atau naskah iklan secara otomatis.";
                workspaceText = "Tulis kata kunci atau deskripsi singkat produk Anda di sini.";
            } else if (menuName.includes("Foto Model") || menuName.includes("Foto Fashion")) {
                iconClass = "fa-regular fa-user";
                subtitle = "Sempurnakan foto dengan mengganti pakaian dan lingkungan sekitar, tanpa menggeser fitur wajah asli (Face Preservation).";
                workspaceText = "Unggah foto model Anda di sini.";
            } else if (menuName.includes("Hapus Background") || menuName.includes("Magic Eraser")) {
                iconClass = "fa-solid fa-eraser";
                subtitle = "Hilangkan latar belakang atau objek yang mengganggu secara instan.";
                workspaceText = "Seret & lepas gambar Anda ke area ini.";
            } else if (menuName.includes("Akun") || menuName.includes("Bantuan")) {
                iconClass = "fa-solid fa-gear";
                subtitle = "Kelola preferensi, langganan, dan informasi akun Anda.";
                workspaceText = "Panel pengaturan sedang dimuat...";
            }

            toolIcon.className = iconClass;
            toolSubtitleText.innerText = subtitle;
            toolDescText.innerText = workspaceText;
        }

        // Tutup otomatis sidebar saat di HP
        if (window.innerWidth <= 768) {
            toggleMenu();
        }
    });
});