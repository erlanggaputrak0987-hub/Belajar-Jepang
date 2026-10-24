(() => {
'use strict';

/* ---------- Data ---------- */
const GROUPS = {
  dasar: {
    name:'Hiragana dasar', jp:'五十音', jpReading:'gojuon', desc:'46 huruf dasar yang dikelompokkan menurut bunyi.',
    intro:'Hiragana adalah salah satu sistem tulisan Jepang. Setiap karakternya mewakili satu bunyi (mora), dan digunakan untuk menulis akhiran tata bahasa, partikel, serta kata-kata yang tidak ditulis dengan kanji. Hafalkan huruf berdasarkan baris agar pola vokalnya lebih mudah diingat.',
    tip:'Catatan bunyi: し dibaca shi, ち dibaca chi, つ dibaca tsu, dan ふ dibaca fu. Huruf を biasanya dibaca o saat menjadi partikel. Huruf ん adalah bunyi n yang berdiri sendiri.',
    examples:[{parts:['あ','い','う','え','お'], separators:['·','·','·','·'], note:'Urutan vokal dasar: a, i, u, e, o.'}]
  },
  dakuten: {
    name:'Dakuten', jp:'濁音', jpReading:'dakuon', desc:'Huruf dengan tanda ゛ yang mengubah bunyi menjadi bersuara.',
    intro:'Dakuten (゛), yang bentuknya seperti dua goresan kecil, mengubah beberapa konsonan tak bersuara menjadi bersuara. Bentuk huruf dasarnya tetap sama; hanya tanda dakuten yang ditambahkan di kanan atas.',
    tip:'Dakuten mengubah bunyi k menjadi g, s menjadi z, t menjadi d, dan h menjadi b. じ umumnya dibaca ji; ぢ juga sering dibaca ji, sedangkan づ sering dibaca zu. ぢ dan づ lebih jarang dipakai.',
    examples:[
      {parts:['か','゛','が'],separators:['+','=']},{parts:['さ','゛','ざ'],separators:['+','=']},
      {parts:['た','゛','だ'],separators:['+','=']},{parts:['は','゛','ば'],separators:['+','=']}
    ]
  },
  handakuten: {
    name:'Handakuten', jp:'半濁音', jpReading:'handakuon', desc:'Tanda ゜ pada baris は mengubah bunyi menjadi p.',
    intro:'Handakuten (゜) adalah lingkaran kecil di kanan atas huruf. Dalam hiragana, tanda ini digunakan pada baris は untuk membentuk bunyi p.',
    tip:'Tanda handakuten hanya digunakan pada baris は. Jangan tertukar dengan dakuten: は + ゛ menjadi ば, sedangkan は + ゜ menjadi ぱ.',
    examples:[
      {parts:['は','゜','ぱ'],separators:['+','=']},{parts:['ひ','゜','ぴ'],separators:['+','=']},
      {parts:['ふ','゜','ぷ'],separators:['+','=']},{parts:['へ','゜','ぺ'],separators:['+','=']},{parts:['ほ','゜','ぽ'],separators:['+','=']}
    ]
  },
  yoon: {
    name:'Yōon', jp:'拗音', jpReading:'yoon', desc:'Gabungan bunyi dengan ゃ, ゅ, atau ょ kecil.',
    intro:'Yōon terbentuk dari huruf berakhiran bunyi i—seperti き, し, atau み—yang diikuti ゃ, ゅ, atau ょ berukuran kecil. Kedua karakter dibaca menyatu sebagai satu bunyi, bukan sebagai dua suku kata terpisah.',
    tip:'Huruf ゃ, ゅ, dan ょ harus berukuran kecil agar menyatu dengan huruf sebelumnya. Jika memakai ukuran normal, bunyinya dibaca terpisah. Yōon juga dapat dibentuk dari huruf dakuten dan handakuten.',
    examples:[
      {parts:['き','ゃ','きゃ'],separators:['+','='],note:'(jika や ukuran normal: kiya)'},{parts:['し','ゅ','しゅ'],separators:['+','=']},
      {parts:['ち','ょ','ちょ'],separators:['+','=']},{parts:['ぎ','ゃ','ぎゃ'],separators:['+','=']},{parts:['ぴ','ょ','ぴょ'],separators:['+','=']}
    ]
  },
  partikel: {
    name:'Partikel', jp:'助詞', jpReading:'joshi', desc:'Kata pendek yang menandai hubungan dan fungsi kata dalam kalimat.',
    intro:'Partikel biasanya diletakkan setelah kata atau frasa yang diterangkannya. Partikel membantu menunjukkan topik, subjek, objek, waktu, tempat, arah, dan hubungan antarkata. Maknanya bergantung pada konteks; partikel tidak selalu memiliki satu terjemahan langsung dalam bahasa Indonesia.',
    tip:'Perhatikan cara baca khusus saat menjadi partikel: は dibaca wa, へ dibaca e, dan を dibaca o.',
    examples:[
      {parts:['わ','た','し','は'], readings:['wa','ta','shi','wa'], separators:['','',''], note:'watashi wa — topik: saya'},
      {parts:['が','っ','こ','う','へ'], readings:['ga','tsu','ko','u','e'], separators:['','','',''], note:'gakkou e — arah: ke sekolah'},
      {parts:['み','ず','を'], readings:['mi','zu','o'], separators:['',''], note:'mizu o — objek: air'}
    ]
  }
};

const WORD_GROUPS = {
  benda: [
    {id:'rumah', title:'Rumah', words:`いえ|rumah
へや|kamar
だいどころ|dapur
げんかん|pintu masuk
まど|jendela
とびら|pintu
かべ|dinding
ゆか|lantai
てんじょう|langit-langit
やね|atap
にわ|halaman
かいだん|tangga
ろうか|lorong
おふろ|bak mandi
ふろば|kamar mandi
といれ|toilet
せんめんじょ|tempat cuci muka
しんしつ|kamar tidur
いま|ruang keluarga
しょくどう|ruang makan
つくえ|meja
いす|kursi
たな|rak
ほんだな|rak buku
たんす|lemari laci
ベッド|tempat tidur
まくら|bantal
ふとん|futon
もうふ|selimut
カーテン|gorden
でんき|lampu
でんきゅう|bola lampu
エアコン|pendingin ruangan
れいぞうこ|kulkas
せんたくき|mesin cuci
そうじき|penyedot debu
テレビ|televisi
ラジオ|radio
とけい|jam
かがみ|cermin
かぎ|kunci
かさ|payung
くつ|sepatu
くつした|kaus kaki
ふく|pakaian
タオル|handuk
せっけん|sabun
はぶらし|sikat gigi
コップ|gelas
さら|piring`},
    {id:'sekolah', title:'Sekolah', words:`がっこう|sekolah
きょうしつ|ruang kelas
こうてい|halaman sekolah
としょかん|perpustakaan
じむしつ|kantor administrasi
しょくどう|kantin
ほけんしつ|ruang kesehatan
たいいくかん|gedung olahraga
ろうか|koridor
かいだん|tangga
せんせい|guru
がくせい|mahasiswa
せいと|murid
ともだち|teman
こうちょう|kepala sekolah
きょうかしょ|buku pelajaran
ほん|buku
じしょ|kamus
ノート|buku catatan
えんぴつ|pensil
シャープペンシル|pensil mekanik
ボールペン|pulpen
けしごむ|penghapus
ものさし|penggaris
はさみ|gunting
のり|lem
ふで|kuas tulis
えのぐ|cat lukis
かみ|kertas
つくえ|meja
いす|kursi
こくばん|papan tulis
チョーク|kapur tulis
まど|jendela
とけい|jam
でんき|lampu
かばん|tas
うわばき|sepatu dalam ruangan
くつ|sepatu
せいふく|seragam
たいそうふく|seragam olahraga
きゅうしょく|makan siang sekolah
べんとう|bekal makan
しゅくだい|pekerjaan rumah
しけん|ujian
もんだい|soal
こたえ|jawaban
じゅぎょう|pelajaran
きゅうけい|istirahat
ぶかつ|kegiatan ekstrakurikuler`},
    {id:'lingkungan', title:'Lingkungan', words:`まち|kota
むら|desa
みち|jalan
こうさてん|persimpangan
しんごう|lampu lalu lintas
ほどう|trotoar
はし|jembatan
かわ|sungai
うみ|laut
やま|gunung
もり|hutan
いけ|kolam
みずうみ|danau
たき|air terjun
そら|langit
くも|awan
たいよう|matahari
つき|bulan
ほし|bintang
あめ|hujan
ゆき|salju
かぜ|angin
きり|kabut
にじ|pelangi
き|pohon
は|daun
はな|bunga
くさ|rumput
たね|biji
つち|tanah
いし|batu
すな|pasir
どうぶつ|hewan
とり|burung
むし|serangga
さかな|ikan
ねこ|kucing
いぬ|anjing
こうえん|taman
はなばたけ|kebun bunga
たんぼ|sawah
はたけ|ladang
ごみ|sampah
ごみばこ|tempat sampah
くうき|udara
おんだんか|pemanasan global
しぜん|alam
かんきょう|lingkungan
ちきゅう|bumi
でんしゃ|kereta`},
  ],
  nonbenda: [
    {id:'sifat', title:'Sifat', words:`おおきい|besar
ちいさい|kecil
あたらしい|baru
ふるい|lama
あつい|panas
さむい|dingin
あたたかい|hangat
すずしい|sejuk
たかい|tinggi atau mahal
ひくい|rendah
やすい|murah
ながい|panjang
みじかい|pendek
ひろい|luas
せまい|sempit
おもい|berat
かるい|ringan
はやい|cepat atau awal
おそい|lambat atau terlambat
つよい|kuat
よわい|lemah
あかるい|terang
くらい|gelap
あかい|merah
あおい|biru
しろい|putih
くろい|hitam
きいろい|kuning
おもしろい|menarik
つまらない|membosankan
たのしい|menyenangkan
うれしい|gembira
かなしい|sedih
こわい|menakutkan
やさしい|baik hati atau mudah
むずかしい|sulit
かんたん|mudah
しずか|tenang
にぎやか|ramai
きれい|indah atau bersih
きたない|kotor
げんき|sehat dan bersemangat
ゆうめい|terkenal
しんせつ|ramah
べんり|praktis
ふべん|tidak praktis
ひま|luang
いそがしい|sibuk
すき|suka
きらい|tidak suka`},
    {id:'kata-kerja', title:'Kata kerja', words:`たべる|makan
のむ|minum
みる|melihat atau menonton
きく|mendengar atau bertanya
はなす|berbicara
よむ|membaca
かく|menulis
いく|pergi
くる|datang
かえる|pulang
ある|ada (benda)
いる|ada (makhluk hidup)
する|melakukan
べんきょうする|belajar
はたらく|bekerja
やすむ|beristirahat
おきる|bangun
ねる|tidur
あう|bertemu
まつ|menunggu
かう|membeli
うる|menjual
つくる|membuat
つかう|menggunakan
あける|membuka
しめる|menutup
はいる|masuk
でる|keluar
すわる|duduk
たつ|berdiri
あるく|berjalan
はしる|berlari
およぐ|berenang
あそぶ|bermain
うたう|bernyanyi
おどる|menari
おしえる|mengajar atau memberi tahu
ならう|belajar dari seseorang
わかる|mengerti
おもう|berpikir
しる|mengetahui
わすれる|lupa
おぼえる|mengingat atau menghafal
てつだう|membantu
まがる|berbelok
とまる|berhenti atau menginap
あらう|mencuci
そうじする|membersihkan
りょうりする|memasak
でんわする|menelepon`}
  ]
};

const COMMON_WORD_ADDITIONS = {
  rumah: `きっちん|dapur (kitchen)
べらんだ|balkon
おしいれ|lemari tanam
しょさい|ruang kerja
げれーじ|garasi
もん|gerbang
てすり|pegangan tangga
てんまど|jendela atap
かべがみ|wallpaper
しょっきだな|lemari piring
かびん|vas bunga
はちうえ|tanaman pot
ごみぶくろ|kantong sampah
ぞうきん|kain lap
ほうき|sapu
ちりとり|pengki
もっぷ|pel
ばけつ|ember
でんしレンジ|microwave
オーブン|oven
すいはんき|penanak nasi
やかん|ketel
なべ|panci
フライパン|wajan
ほうちょう|pisau dapur
まないた|talenan
おたま|sendok sayur
はし|sumpit
スプーン|sendok
フォーク|garpu
ナイフ|pisau
ちゃわん|mangkuk nasi
おわん|mangkuk sup
マグカップ|cangkir
みずさし|teko air
しょっき|peralatan makan
ふきん|serbet dapur
ラップ|plastik pembungkus
アルミホイル|aluminium foil
ガスコンロ|kompor gas
シンク|bak cuci piring
じゃぐち|keran
はいすいこう|saluran pembuangan
シャワー|pancuran
ゆぶね|bak berendam
せんめんだい|wastafel
トイレットペーパー|tisu toilet
ドライヤー|pengering rambut
くし|sisir
かみそり|alat cukur
せんたくもの|cucian
せんたくかご|keranjang cucian
ハンガー|gantungan baju
アイロン|setrika
アイロンだい|papan setrika
ものほし|jemuran
ものほしざお|tiang jemuran
ふくろ|kantong
ひきだし|laci
ざっし|majalah
しんぶん|koran
しゃしん|foto
え|lukisan
でんち|baterai
コンセント|stopkontak
スイッチ|sakelar
リモコン|remote control
インターホン|interkom
チャイム|bel pintu
でんわ|telepon
スマートフォン|ponsel pintar
パソコン|komputer
ソファ|sofa
クッション|bantal sofa
カーペット|karpet
じゅうたん|permadani
ブラインド|tirai bilah
ふすま|pintu geser Jepang
しょうじ|pintu kertas Jepang
だんぼう|pemanas ruangan
ヒーター|pemanas
かしつき|humidifier
くうきせいじょうき|penjernih udara
しょうめい|penerangan
ろうそく|lilin
マッチ|korek api
ライター|pemantik
はこ|kotak
にもつ|barang bawaan
てがみ|surat
ゆうびんうけ|kotak surat
ちず|peta
カレンダー|kalender
めざましどけい|jam alarm
かべどけい|jam dinding
おもちゃ|mainan
ぬいぐるみ|boneka
かいだんてすり|pegangan tangga
まどわく|bingkai jendela
とびら|pintu
かぎ|kunci
かべ|dinding
ゆか|lantai
にわ|halaman
ろうか|lorong
おてあらい|toilet`,
  sekolah: `こうこう|sekolah menengah atas
ちゅうがっこう|sekolah menengah pertama
しょうがっこう|sekolah dasar
だいがく|universitas
ようちえん|taman kanak-kanak
せんもんがっこう|sekolah kejuruan
にゅうがく|masuk sekolah
そつぎょう|kelulusan
せんこう|jurusan
かもく|mata pelajaran
こくご|bahasa Jepang
えいご|bahasa Inggris
すうがく|matematika
りか|ilmu pengetahuan alam
しゃかい|ilmu sosial
れきし|sejarah
ちり|geografi
おんがく|musik
びじゅつ|seni rupa
たいいく|pendidikan jasmani
かていか|prakarya dan ekonomi rumah tangga
じょうほう|informatika
ほうかご|sepulang sekolah
ひるやすみ|istirahat siang
しゅうがくりょこう|wisata sekolah
うんどうかい|hari olahraga
ぶんかさい|festival budaya
にゅうがくしき|upacara penerimaan siswa
そつぎょうしき|upacara kelulusan
しゅうぎょうしき|upacara penutupan semester
しぎょうしき|upacara awal semester
がっき|semester
がくねん|tingkat kelas
がっきゅう|kelas (kelompok siswa)
クラス|kelas
クラスメート|teman sekelas
どうきゅうせい|teman seangkatan
せんぱい|senior
こうはい|junior
きょうとう|wakil kepala sekolah
きょういん|tenaga pengajar
きょうし|pengajar
きょうじゅ|profesor
こうし|dosen
がくちょう|rektor
じゅぎょうりょう|biaya kuliah
がくひ|biaya pendidikan
がくせいしょう|kartu pelajar
がくせいかばん|tas sekolah
ランドセル|tas sekolah dasar
ペンケース|kotak pensil
ふでばこ|kotak alat tulis
シャープペン|pensil mekanik
マーカー|penanda
いろえんぴつ|pensil warna
クレヨン|krayon
スケッチブック|buku sketsa
えんぴつけずり|rautan pensil
ホッチキス|stapler
クリップ|klip kertas
セロテープ|selotip
じょうぎ|penggaris
コンパス|jangka
でんたく|kalkulator
タブレット|tablet
プロジェクター|proyektor
スクリーン|layar proyektor
プリンター|printer
コピーき|mesin fotokopi
しりょう|bahan pelajaran
プリント|lembar tugas
テスト|tes
こくごじてん|kamus bahasa Jepang
えいわじてん|kamus Inggris-Jepang
れんしゅう|latihan
ふくしゅう|ulangan materi
よしゅう|persiapan pelajaran
せいせき|nilai
てんすう|skor
ごうかく|kelulusan ujian
ふごうかく|tidak lulus ujian
しゅっせき|kehadiran
けっせき|ketidakhadiran
ちこく|terlambat
そうたい|pulang lebih awal
れんらくちょう|buku penghubung
きゅうしょくしつ|ruang makan sekolah
きゅうしょくとうばん|petugas makan siang
せいとしつ|ruang siswa
しょくいんしつ|ruang guru
かいぎしつ|ruang rapat
おんがくしつ|ruang musik
びじゅつしつ|ruang seni
りかしつ|laboratorium sains
コンピューターしつ|ruang komputer
プール|kolam renang
たいいくそうこ|gudang olahraga
しょうこうぐち|pintu masuk sekolah
げたばこ|loker sepatu
こくばんけし|penghapus papan tulis`,
  lingkungan: `えき|stasiun
バスてい|halte bus
くうこう|bandara
みなと|pelabuhan
ちゅうしゃじょう|tempat parkir
ガソリンスタンド|pom bensin
コンビニ|minimarket
スーパー|supermarket
いちば|pasar
デパート|toserba
びょういん|rumah sakit
クリニック|klinik
やっきょく|apotek
ぎんこう|bank
ゆうびんきょく|kantor pos
けいさつしょ|kantor polisi
しょうぼうしょ|kantor pemadam kebakaran
しやくしょ|kantor pemerintah kota
こうばん|pos polisi
じんじゃ|kuil Shinto
おてら|kuil Buddha
はくぶつかん|museum
びじゅつかん|museum seni
どうぶつえん|kebun binatang
すいぞくかん|akuarium
えいがかん|bioskop
げきじょう|teater
ホテル|hotel
りょかん|penginapan Jepang
レストラン|restoran
きっさてん|kedai kopi
ゆうえんち|taman hiburan
としょかん|perpustakaan
たいいくかん|gedung olahraga
おんせん|pemandian air panas
おおどおり|jalan besar
よこちょう|gang
ちかどう|terowongan bawah tanah
トンネル|terowongan
てつどう|jalur kereta
ふみきり|perlintasan kereta
ちかてつ|kereta bawah tanah
バス|bus
タクシー|taksi
じてんしゃ|sepeda
じどうしゃ|mobil
バイク|sepeda motor
しんかんせん|kereta cepat
ふね|kapal
ひこうき|pesawat
じどうはんばいき|mesin penjual otomatis
でんちゅう|tiang listrik
でんせん|kabel listrik
マンション|apartemen
アパート|apartemen sederhana
ビル|gedung
たてもの|bangunan
こうじょう|pabrik
かいしゃ|perusahaan
オフィス|kantor
ほんや|toko buku
はなや|toko bunga
パンや|toko roti
にくや|toko daging
さかなや|toko ikan
やおや|toko sayur
くだものや|toko buah
ふくや|toko pakaian
くすりや|toko obat
きょうかい|gereja
ようちえん|taman kanak-kanak
ちゅうがっこう|sekolah menengah pertama
こうこう|sekolah menengah atas
だいがく|universitas
しぜんこうえん|taman alam
どうろ|jalan raya
ちゅうおう|pusat kota
まちなか|kawasan kota
きた|utara
みなみ|selatan
ひがし|timur
にし|barat
ちかく|sekitar
となり|sebelah
むかい|seberang
ちいき|wilayah
ちほう|daerah
こくどう|jalan nasional
けんどう|jalan prefektur
こうがい|pinggiran kota
しゅうへん|daerah sekitar
でんしゃのりば|peron kereta
じゅうたくがい|kawasan perumahan
しょうてんがい|kawasan pertokoan
こうきょうしせつ|fasilitas umum
ちゅうりんじょう|parkir sepeda
しんりん|hutan
かわぎし|tepi sungai
うみべ|tepi laut
さんち|daerah pegunungan`,
  sifat: `いい|baik
わるい|buruk
おいしい|enak
まずい|tidak enak
あまい|manis
からい|pedas
しょっぱい|asin
すっぱい|asam
にがい|pahit
こい|pekat
うすい|encer atau tipis
やわらかい|lembut
かたい|keras
かしこい|pintar
わかい|muda
としより|tua
かわいい|imut
かっこいい|keren
うつくしい|cantik
みにくい|jelek
おそろしい|mengerikan
いたい|sakit
かゆい|gatal
つめたい|dingin saat disentuh
あつくるしい|gerah
ねむい|mengantuk
つかれた|lelah
じょうぶ|kuat dan sehat
あぶない|berbahaya
あんぜん|aman
たいせつ|penting
ひつよう|perlu
むだ|sia-sia
ただしい|tepat
まちがい|salah
ふしぎ|misterius
へん|aneh
へた|tidak mahir
じょうず|mahir
とくい|pandai
にがて|tidak pandai
まじめ|rajin dan serius
ゆうかん|berani
しんぱい|khawatir
あんしん|lega
ざんねん|disayangkan
すばらしい|luar biasa
すごい|hebat
ひどい|parah
めずらしい|langka
ふつう|biasa
とくべつ|khusus
ふくざつ|rumit
しんせん|segar
おおい|banyak
すくない|sedikit
まるい|bulat
しかくい|persegi
ほそい|ramping
ふとい|tebal
あさい|dangkal
ふかい|dalam
おもたい|berat
からっぽ|kosong
いっぱい|penuh
うるさい|berisik
さびしい|kesepian
たのもしい|dapat diandalkan
きびしい|ketat
おとなしい|pendiam
すてき|menawan
おしゃれ|modis
ゆたか|makmur
まずしい|miskin
しあわせ|bahagia
ふこう|tidak bahagia
ふよう|tidak diperlukan
かのう|mungkin
ふかのう|tidak mungkin
じゆう|bebas
たいくつ|membosankan
うまい|lezat atau mahir
にぶい|tumpul
するどい|tajam
あつい|tebal
うすぐらい|remang-remang
まぶしい|menyilaukan
くわしい|terperinci
なつかしい|mengenang masa lalu
はずかしい|malu
かなしい|sedih
うれしい|gembira
こわい|takut
つよい|kuat
よわい|lemah
はやい|cepat atau awal
おそい|lambat atau terlambat
ひろい|luas
せまい|sempit
ながい|panjang
みじかい|pendek
たかい|tinggi atau mahal
ひくい|rendah
あかるい|terang
くらい|gelap
あやしい|mencurigakan
あわただしい|sibuk dan tergesa-gesa
いじわる|jahat
おだやか|tenang dan damai
かっこわるい|tidak keren
けち|pelit
こまかい|kecil atau terperinci
さかん|aktif
すなお|jujur dan patuh
せっかち|tidak sabaran
あいまい|tidak jelas`,
  'kata-kerja': `いう|berkata
いそぐ|bergegas
いれる|memasukkan
うごく|bergerak
うまれる|lahir
えらぶ|memilih
おく|meletakkan
おくる|mengirim
おす|mendorong
おりる|turun dari kendaraan
おわる|selesai
かえす|mengembalikan
かかる|memerlukan waktu atau biaya
かける|menelepon atau menggantung
かぶる|memakai topi
かりる|meminjam
きえる|padam atau menghilang
きまる|ditentukan
きめる|menentukan
きる|memakai baju
きる|memotong
くれる|memberi kepada saya
こたえる|menjawab
こまる|mengalami kesulitan
さがす|mencari
さく|mekar
さわる|menyentuh
しぬ|meninggal
しまる|tertutup
すう|mengisap atau merokok
すてる|membuang
すむ|tinggal
だす|mengeluarkan
たのむ|meminta
つく|tiba
つく|menyala
つける|menyalakan
なく|menangis atau berbunyi
なくす|kehilangan
なくなる|hilang atau meninggal
ならぶ|berbaris
ならべる|menyusun
ぬぐ|melepas pakaian
のぼる|mendaki
はく|memakai celana atau sepatu
はこぶ|membawa
はじまる|dimulai
はじめる|memulai
はらう|membayar
ひく|menarik
ひく|memainkan alat musik
ひらく|membuka
ふる|turun (hujan atau salju)
まける|kalah
みがく|menggosok atau menyikat
みせる|memperlihatkan
みつかる|ditemukan
みつける|menemukan
むかえる|menjemput atau menyambut
もつ|membawa atau memiliki
やめる|berhenti
よぶ|memanggil
よやくする|memesan
わたす|menyerahkan
わたる|menyeberang
わらう|tertawa
わる|membagi atau memecahkan
おくれる|terlambat
かえる|mengubah
きこえる|terdengar
さがる|turun
たすける|menolong
つづく|berlanjut
つづける|melanjutkan
とどく|sampai atau terkirim
のこる|tersisa
おどろく|terkejut
かつ|menang
かわく|kering
きがつく|menyadari
くもる|berawan
こむ|ramai atau padat
さそう|mengajak
しかる|memarahi
しらべる|menyelidiki
すぎる|melewati atau berlebihan
たおれる|jatuh atau roboh
ちがう|berbeda
つかまえる|menangkap
つくる|membuat
とる|mengambil
なおる|sembuh atau diperbaiki
にげる|melarikan diri
ぬれる|menjadi basah
はこぶ|mengangkut
ひろう|memungut
ふえる|bertambah
へる|berkurang
まにあう|tepat waktu
みつかる|ketemu
もどる|kembali
もどす|mengembalikan
やくそくする|berjanji
やせる|menjadi kurus
よろこぶ|bergembira
わく|mendidih
わける|membagi`
};

const ADJECTIVE_PAIRS = [
  ['あつい', 'さむい'],
  ['あたたかい', 'すずしい'],
  ['おおきい', 'ちいさい'],
  ['あたらしい', 'ふるい'],
  ['たかい', 'ひくい'],
  ['ながい', 'みじかい'],
  ['ひろい', 'せまい'],
  ['おもい', 'かるい'],
  ['はやい', 'おそい'],
  ['つよい', 'よわい'],
  ['あかるい', 'くらい'],
  ['しろい', 'くろい'],
  ['おもしろい', 'つまらない'],
  ['うれしい', 'かなしい'],
  ['むずかしい', 'かんたん'],
  ['しずか', 'にぎやか'],
  ['きれい', 'きたない'],
  ['べんり', 'ふべん'],
  ['ひま', 'いそがしい'],
  ['すき', 'きらい']
];

for(const categories of Object.values(WORD_GROUPS)){
  for(const category of categories){
    const entries = `${category.words}\n${COMMON_WORD_ADDITIONS[category.id] || ''}`;
    const itemsByWord = new Map();
    for(const line of entries.split('\n').filter(Boolean)){
      const [word, meaning] = line.split('|');
      const existing = itemsByWord.get(word);
      if(existing){
        if(!existing.meaning.split(' / ').includes(meaning)) existing.meaning += ` / ${meaning}`;
      } else {
        itemsByWord.set(word, {word, meaning});
      }
    }
    category.items = [...itemsByWord.values()];
  }
}

const CATS = [];
const row = (id, group, label, s) => CATS.push({id, group, label,
  items: s.split(',').map(p => { const [c, r] = p.split(':'); return {c, r, cat:id, group, label}; })});
const part = (id, label, list) => CATS.push({id, group:'partikel', label,
  items: list.map(([c, r, note, jp, idn, detail]) => ({c, r, note, ex:[jp, idn], detail, cat:id, group:'partikel', label}))});

row('a','dasar','あ行','あ:a,い:i,う:u,え:e,お:o');
row('k','dasar','か行','か:ka,き:ki,く:ku,け:ke,こ:ko');
row('s','dasar','さ行','さ:sa,し:shi,す:su,せ:se,そ:so');
row('t','dasar','た行','た:ta,ち:chi,つ:tsu,て:te,と:to');
row('n','dasar','な行','な:na,に:ni,ぬ:nu,ね:ne,の:no');
row('h','dasar','は行','は:ha,ひ:hi,ふ:fu,へ:he,ほ:ho');
row('m','dasar','ま行','ま:ma,み:mi,む:mu,め:me,も:mo');
row('y','dasar','や行','や:ya,ゆ:yu,よ:yo');
row('r','dasar','ら行','ら:ra,り:ri,る:ru,れ:re,ろ:ro');
row('w','dasar','わ行・ん','わ:wa,を:o,ん:n');
row('g','dakuten','が行','が:ga,ぎ:gi,ぐ:gu,げ:ge,ご:go');
row('z','dakuten','ざ行','ざ:za,じ:ji,ず:zu,ぜ:ze,ぞ:zo');
row('d','dakuten','だ行','だ:da,ぢ:ji,づ:zu,で:de,ど:do');
row('b','dakuten','ば行','ば:ba,び:bi,ぶ:bu,べ:be,ぼ:bo');
row('p','handakuten','ぱ行','ぱ:pa,ぴ:pi,ぷ:pu,ぺ:pe,ぽ:po');
row('y1','yoon','Yōon biasa','きゃ:kya,きゅ:kyu,きょ:kyo,しゃ:sha,しゅ:shu,しょ:sho,ちゃ:cha,ちゅ:chu,ちょ:cho,にゃ:nya,にゅ:nyu,にょ:nyo,ひゃ:hya,ひゅ:hyu,ひょ:hyo,みゃ:mya,みゅ:myu,みょ:myo,りゃ:rya,りゅ:ryu,りょ:ryo');
row('y2','yoon','Yōon dakuten','ぎゃ:gya,ぎゅ:gyu,ぎょ:gyo,じゃ:ja,じゅ:ju,じょ:jo,びゃ:bya,びゅ:byu,びょ:byo,ぴゃ:pya,ぴゅ:pyu,ぴょ:pyo');
part('p1','Partikel utama',[
  ['は','wa','Penanda topik (ditulis は, dibaca wa)','わたしは がくせいです。','Saya adalah pelajar.','Menandai topik atau hal yang sedang dibicarakan. Sering muncul di awal kalimat setelah topik; tidak selalu sama dengan subjek gramatikal. Saat menjadi partikel, は dibaca wa.'],
  ['が','ga','Penanda subjek atau informasi yang disorot','ねこが います。','Ada kucing.','Menandai subjek, keberadaan, atau informasi baru yang ingin ditegaskan. は dan が sama-sama dapat muncul dekat subjek, tetapi fokus kalimatnya berbeda: は memperkenalkan topik, sedangkan が menyoroti subjek atau fakta tertentu.'],
  ['を','o','Penanda objek langsung (dibaca o)','みずを のみます。','Minum air.','Biasanya mengikuti benda yang dikenai tindakan langsung dari kata kerja. Dalam contoh ini, air adalah sesuatu yang diminum. を ditulis wo dalam romaji tertentu, tetapi umumnya diucapkan o sebagai partikel.'],
  ['に','ni','Penanda waktu, tujuan, penerima, atau lokasi keberadaan','しちじに おきます。','Bangun jam tujuh.','Dapat menandai waktu tertentu, tujuan perpindahan, penerima, atau lokasi keberadaan. Makna tepatnya ditentukan oleh kata kerja; untuk tempat berlangsungnya suatu aktivitas, biasanya gunakan で.'],
  ['で','de','Penanda tempat berlangsungnya kegiatan atau alat','でんしゃで いきます。','Pergi naik kereta.','Menandai lokasi terjadinya aktivitas atau sarana/cara yang digunakan. Bandingkan dengan に: に sering menunjukkan lokasi keberadaan atau tujuan, sedangkan で menunjukkan tempat suatu tindakan berlangsung.'],
  ['へ','e','Penanda arah tujuan (ditulis へ, dibaca e)','がっこうへ いきます。','Pergi ke sekolah.','Mengikuti tempat atau arah yang dituju oleh kata kerja perpindahan. Menekankan arah menuju suatu tempat; dalam banyak kalimat dasar, へ dapat digunakan mirip dengan に untuk tujuan. Saat menjadi partikel, へ dibaca e.'],
  ['の','no','Penghubung kata benda, termasuk kepemilikan atau keterangan','わたしの ほん','Buku saya.','Menghubungkan dua kata benda. Kata sebelum の dapat menunjukkan pemilik, asal, jenis, atau keterangan bagi kata sesudahnya. Pola わたしの ほん berarti buku milik saya.'],
  ['と','to','Penghubung daftar lengkap atau penanda teman/pendamping','ともだちと たべます。','Makan bersama teman.','Menghubungkan daftar yang dianggap lengkap, atau mengikuti orang yang melakukan sesuatu bersama-sama. Untuk menyebut beberapa contoh tanpa menutup kemungkinan ada yang lain, biasanya gunakan や.'],
  ['も','mo','Penanda “juga” atau “pun”','わたしも いきます。','Saya juga pergi.','Menggantikan partikel seperti は atau が untuk menyatakan bahwa hal yang sama berlaku juga bagi kata yang ditandainya. Letakkan setelah orang atau hal yang berarti “juga”.']
]);
part('p2','Partikel lainnya',[
  ['から','kara','Penanda titik awal: dari atau sejak','にほんから きました。','Datang dari Jepang.','Menandai asal tempat, titik awal waktu, atau alasan. Pada contoh ini から mengikuti にほん untuk menunjukkan tempat asal. Dapat berpasangan dengan まで untuk menyatakan rentang “dari ... sampai ...”.'],
  ['まで','made','Penanda batas akhir: sampai','くじまで はたらきます。','Bekerja sampai jam sembilan.','Menandai batas akhir waktu atau tempat. Sering dipasangkan dengan から: くじから ごじまで berarti dari jam sembilan sampai jam lima.'],
  ['や','ya','Penghubung beberapa contoh: dan lain-lain','りんごや みかん','Apel, jeruk, dan lainnya.','Menghubungkan beberapa contoh dari daftar yang tidak harus lengkap. Nuansanya seperti “apel, jeruk, dan lain-lain”. Berbeda dengan と yang biasanya menyebut daftar lengkap.'],
  ['か','ka','Penanda pertanyaan atau pilihan','これは ほんですか。','Apakah ini buku?','Di akhir kalimat, か membentuk pertanyaan, terutama dalam bahasa sopan. Di antara pilihan, か dapat berarti “atau”, seperti みずか おちゃ (air atau teh).'],
  ['よ','yo','Penegasan atau penyampaian informasi','いいですよ。','Bagus, lho.','Diletakkan di akhir kalimat untuk menegaskan informasi atau menyampaikan sesuatu yang mungkin belum diketahui lawan bicara. Nuansanya bergantung pada konteks dan intonasi.'],
  ['ね','ne','Mengajak menyetujui atau berbagi perasaan','さむいですね。','Dingin ya.','Umumnya diletakkan di akhir kalimat untuk meminta persetujuan, memastikan pemahaman, atau menunjukkan bahwa pembicara dan pendengar berbagi pengamatan.'],
  ['より','yori','Penanda pembanding: daripada','ねこより いぬが すきです。','Lebih suka anjing daripada kucing.','Mengikuti hal yang dijadikan pembanding. Dalam pola AよりBのほうが..., B lebih ... daripada A. Pada contoh ini, anjing lebih disukai daripada kucing.']
]);

const ALL = CATS.flatMap(c => c.items);
const $ = s => document.querySelector(s);
const selK = new Set(CATS.filter(c => c.group === 'dasar').map(c => c.id));
const expandedGroups = new Set();
const kanaRomaji = new Map(CATS.filter(category => category.group !== 'partikel')
  .flatMap(category => category.items.map(({c, r}) => [c, r])));
[['ゃ', 'ya'], ['ゅ', 'yu'], ['ょ', 'yo'], ['っ', 'tsu'], ['ぁ', 'a'], ['ぃ', 'i'], ['ぅ', 'u'], ['ぇ', 'e'], ['ぉ', 'o']]
  .forEach(([kana, romaji]) => kanaRomaji.set(kana, romaji));
const jpReadings = new Map([
  ['五十音', 'gojuon'], ['濁音', 'dakuon'], ['半濁音', 'handakuon'],
  ['拗音', 'yoon'], ['助詞', 'joshi'], ['学', 'gaku'], ['頑張って', 'ganbatte'],
  ['行', '-gyo'], ['゛', 'dakuten'], ['゜', 'handakuten']
]);
const kanaSpellings = [...kanaRomaji.keys()].sort((a, b) => b.length - a.length);
const jpSpellings = [...jpReadings.keys()].sort((a, b) => b.length - a.length);

function toRomaji(text){
  if(jpReadings.has(text)) return jpReadings.get(text);
  text = Array.from(text, character => {
    const code = character.codePointAt(0);
    return code >= 0x30A1 && code <= 0x30F6 ? String.fromCodePoint(code - 0x60) : character;
  }).join('');
  let result = '';
  for(let i = 0; i < text.length;){
    const jp = jpSpellings.find(candidate => text.startsWith(candidate, i));
    if(jp){
      result += jpReadings.get(jp);
      i += jp.length;
      continue;
    }
    if(text[i] === 'っ'){
      const next = kanaSpellings.find(kana => text.startsWith(kana, i + 1));
      const sound = next && kanaRomaji.get(next);
      result += sound ? (sound.startsWith('ch') ? 't' : sound[0]) : '';
      i++;
      continue;
    }
    const kana = kanaSpellings.find(candidate => text.startsWith(candidate, i));
    if(kana){
      result += kanaRomaji.get(kana);
      i += kana.length;
    } else if(text[i] === 'ー'){
      result += result.match(/[aiueo](?!.*[aiueo])/)?.[0] || '';
      i++;
    } else if(text[i] === '。'){
      result += '.';
      i++;
    } else if(text[i] === '、'){
      result += ',';
      i++;
    } else {
      result += text[i++];
    }
  }
  return result;
}

function withReading(text, particleReadings = false){
  return text.replace(/([ぁ-ゖァ-ヺ一-龯々〆ヵヶー゛゜]+)/gu, jp => {
    if(/^[ぁ-ゖァ-ヺー゛゜]+$/u.test(jp)){
      const characters = Array.from(jp);
      return characters.map((character, index) => {
        let kana = character;
        const code = character.codePointAt(0);
        if(code >= 0x30A1 && code <= 0x30F6) kana = String.fromCodePoint(code - 0x60);
        const previousCode = characters[index - 1]?.codePointAt(0);
        const previousKana = previousCode >= 0x30A1 && previousCode <= 0x30F6
          ? String.fromCodePoint(previousCode - 0x60)
          : characters[index - 1];
        const previousReading = previousKana && toRomaji(previousKana);
        const reading = character === 'っ' ? 'small tsu'
          : character === 'ー' ? (previousReading?.match(/[aiueo](?!.*[aiueo])/)?.[0] || 'ー')
          : particleReadings && character === 'は' ? 'wa'
          : particleReadings && character === 'へ' ? 'e'
          : particleReadings && character === 'を' ? 'o'
          : toRomaji(kana);
        return `<span class="jp-pair"><span lang="ja">${character}</span><span class="reading">${reading}</span></span>`;
      }).join('');
    }
    const reading = toRomaji(jp);
    return `<span class="jp-pair"><span lang="ja">${jp}</span><span class="reading">${reading}</span></span>`;
  });
}

function say(t){
  if(!('speechSynthesis' in window)) return;
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(t); u.lang = 'ja-JP'; u.rate = .8;
  speechSynthesis.speak(u);
}

function combinationFormula(item){
  let parts;
  if(item.group === 'yoon'){
    parts = [Array.from(item.c)[0], Array.from(item.c)[1], item.c];
  } else {
    const baseRows = {g:'k', z:'s', d:'t', b:'h', p:'h'};
    const targetItems = CATS.find(category => category.id === item.cat)?.items || [];
    const baseItems = CATS.find(category => category.id === baseRows[item.cat])?.items || [];
    const baseItem = baseItems[targetItems.findIndex(candidate => candidate.c === item.c)];
    const mark = item.group === 'handakuten' ? '゜' : '゛';
    parts = [baseItem?.c || '', mark, item.c];
  }
  const kanaPart = (kana, reading) => `<span class="jp-pair"><span lang="ja">${kana}</span><span class="reading">${reading}</span></span>`;
  const readings = [toRomaji(parts[0]), toRomaji(parts[1]), item.r];
  return `<span class="yoon-formula"><span class="yoon-source">${kanaPart(parts[0], readings[0])}</span><span class="yoon-operator">+</span><span class="yoon-source">${kanaPart(parts[1], readings[1])}</span><span class="yoon-operator">=</span><span class="yoon-answer">${kanaPart(parts[2], readings[2])}</span></span>`;
}

/* ---------- Komponen filter ---------- */
function mountFilter(el, sel, onChange){
  const draw = () => {
    const f = document.activeElement;
    let keep = null;
    if(el.contains(f)){
      keep = f.dataset.c ? `[data-c="${f.dataset.c}"]` : f.dataset.g ? `[data-g="${f.dataset.g}"]` : f.dataset.all ? `[data-all="${f.dataset.all}"]` : null;
    }
    let h = '<div class="fbar"><button type="button" class="mini" data-all="1">Pilih semua</button><button type="button" class="mini" data-all="0">Kosongkan</button><span class="count" aria-live="polite"></span></div>';
    for(const g in GROUPS){
      const cs = CATS.filter(c => c.group === g);
      const n = cs.filter(c => sel.has(c.id)).length;
      h += `<div class="fgroup"><button type="button" class="gbtn${n && n < cs.length ? ' part' : ''}" aria-pressed="${n === cs.length}" data-g="${g}">${GROUPS[g].name} <span class="jp-pair"><span lang="ja">${GROUPS[g].jp}</span><span class="reading">${GROUPS[g].jpReading}</span></span></button><div class="chips">`
        + cs.map(c => `<button type="button" class="chip" aria-pressed="${sel.has(c.id)}" data-c="${c.id}">${withReading(c.label)}</button>`).join('')
        + '</div></div>';
    }
    el.innerHTML = h;
    el.querySelector('.count').textContent = ALL.filter(i => sel.has(i.cat)).length + ' item dipilih';
    if(keep) el.querySelector(keep)?.focus();
  };
  el.addEventListener('click', e => {
    const b = e.target.closest('button'); if(!b) return;
    if(b.dataset.c){ sel.has(b.dataset.c) ? sel.delete(b.dataset.c) : sel.add(b.dataset.c); }
    else if(b.dataset.g){
      const cs = CATS.filter(c => c.group === b.dataset.g);
      const all = cs.every(c => sel.has(c.id));
      cs.forEach(c => all ? sel.delete(c.id) : sel.add(c.id));
    } else if(b.dataset.all){
      CATS.forEach(c => b.dataset.all === '1' ? sel.add(c.id) : sel.delete(c.id));
    } else return;
    draw(); onChange();
  });
  draw();
}

/* ---------- Halaman Belajar ---------- */
function renderList(){
  const q = $('#cari').value.trim().toLowerCase();
  const wrap = $('#daftar');
  let html = '';
  for(const g in GROUPS){
    const groupMatches = !q || GROUPS[g].name.toLowerCase().includes(q) || GROUPS[g].jp.includes(q);
    const items = ALL.filter(i => i.group === g &&
      (groupMatches || !q || i.r.toLowerCase().includes(q) || i.c.includes(q) ||
        i.label.toLowerCase().includes(q) || (i.note && i.note.toLowerCase().includes(q))));
    if(!items.length) continue;
    const expanded = !!q || expandedGroups.has(g);
    html += `<section class="group-section"><h3 class="gh"><button type="button" class="gh-toggle" aria-expanded="${expanded}" aria-controls="group-${g}"><span>${GROUPS[g].name} <span class="jp-pair"><span lang="ja">${GROUPS[g].jp}</span><span class="reading">${GROUPS[g].jpReading}</span></span></span><span class="group-indicator" aria-hidden="true"></span></button></h3>`;
    html += `<div class="group-content" id="group-${g}"${expanded ? '' : ' hidden'}><div class="group-explanation"><p class="group-desc">${GROUPS[g].desc}</p><p>${withReading(GROUPS[g].intro)}</p><div class="group-examples"><strong>Contoh</strong>${GROUPS[g].examples.map(example => `<div class="example-row"><div class="example-formula">${example.parts.map((part, index) => `${index ? `<span class="example-operator${example.separators[index - 1] === ' ' ? ' space' : ''}">${example.separators[index - 1]}</span>` : ''}${withReading(part, Boolean(example.readings))}`).join('')}</div>${example.note ? `<span class="example-note">${withReading(example.note)}</span>` : ''}</div>`).join('')}</div><p class="group-tip">${withReading(GROUPS[g].tip)}</p></div>`;
    const formulaGroup = ['dakuten', 'handakuten', 'yoon'].includes(g);
    html += `<div class="grid${g === 'partikel' ? ' wide' : ''}${formulaGroup ? ' formula-grid' : ''}">` + items.map(i => g === 'partikel'
      ? `<article class="tile glass p"><button type="button" class="particle-sound" data-say="${i.c}" aria-label="Dengarkan ${i.c}"><span class="c" lang="ja">${i.c}</span><span class="r">${i.r}</span></button><span class="info"><span class="n">${i.note}</span><span class="detail">${withReading(i.detail)}</span><span class="ex">${withReading(i.ex[0], true)}<br>${i.ex[1]}</span></span></article>`
      : ['dakuten', 'handakuten', 'yoon'].includes(i.group)
        ? `<button type="button" class="tile glass yoon-tile" data-say="${i.c}" aria-label="${i.c}, ${i.r}"><span class="yoon-glyph">${combinationFormula(i)}</span></button>`
      : `<button type="button" class="tile glass" data-say="${i.c}" aria-label="${i.c}, ${i.r}"><span class="c${i.c.length > 1 ? ' sm' : ''}" lang="ja">${i.c}</span><span class="r">${i.r}</span></button>`
    ).join('') + '</div></div></section>';
  }
  wrap.innerHTML = html || '<div class="glass box kosong">Tidak ada yang cocok. Ubah kata pencarian.</div>';
}
$('#daftar').addEventListener('click', e => {
  const toggle = e.target.closest('.gh-toggle');
  if(toggle){
    const group = toggle.getAttribute('aria-controls').slice('group-'.length);
    const expanded = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', expanded);
    $('#' + toggle.getAttribute('aria-controls')).hidden = !expanded;
    expanded ? expandedGroups.add(group) : expandedGroups.delete(group);
    return;
  }
  const sound = e.target.closest('[data-say]');
  if(sound) say(sound.dataset.say);
});
$('#cari').addEventListener('input', renderList);
renderList();

/* ---------- Kosakata ---------- */
let activeWordType = 'benda';
let activeWordCategory = 'rumah';
function renderWords(){
  const query = $('#cari-kata').value.trim().toLowerCase();
  const categories = WORD_GROUPS[activeWordType];
  if(!categories.some(category => category.id === activeWordCategory)){
    activeWordCategory = categories[0].id;
  }
  $('#word-categories').innerHTML = categories.map(category =>
    `<button type="button" role="tab" data-category="${category.id}" aria-selected="${category.id === activeWordCategory}" aria-controls="daftar-kata">${category.title}</button>`
  ).join('');
  const category = categories.find(item => item.id === activeWordCategory);
  const orderedItems = category.id === 'sifat'
    ? [
        ...ADJECTIVE_PAIRS.flatMap(pair => pair.map(word => category.items.find(item => item.word === word))),
        ...category.items.filter(item => !ADJECTIVE_PAIRS.some(pair => pair.includes(item.word)))
      ]
    : category.items.slice().sort((a, b) => a.meaning.localeCompare(b.meaning, 'id'));
  const items = orderedItems
    .filter(({word, meaning}) =>
      !query || word.toLowerCase().includes(query) || toRomaji(word).toLowerCase().includes(query) || meaning.toLowerCase().includes(query));
  $('#daftar-kata').innerHTML = `<div class="word-panels"><section class="word-panel glass"><header class="word-panel-head"><h3>${category.title}</h3><span>${items.length}${query ? ` / ${category.items.length}` : ''} kata</span></header><div class="word-list">${items.map(({word, meaning}) =>
    `<button type="button" class="word-card" data-say="${word}"><span class="word-term"><span class="word-japanese">${withReading(word)}</span><span class="word-romaji">(${toRomaji(word)})</span></span><span class="word-equals" aria-hidden="true">=</span><span class="word-meaning">${meaning}</span></button>`
  ).join('') || '<p class="word-empty">Tidak ada kata yang cocok.</p>'}</div></section></div>`;
}

document.querySelectorAll('.word-tabs [role=tab]').forEach(tab => tab.addEventListener('click', () => {
  activeWordType = tab.id === 't-benda' ? 'benda' : 'nonbenda';
  activeWordCategory = WORD_GROUPS[activeWordType][0].id;
  document.querySelectorAll('.word-tabs [role=tab]').forEach(other =>
    other.setAttribute('aria-selected', other === tab));
  renderWords();
}));
$('#word-categories').addEventListener('click', e => {
  const tab = e.target.closest('[data-category]');
  if(!tab) return;
  activeWordCategory = tab.dataset.category;
  renderWords();
});
$('#cari-kata').addEventListener('input', renderWords);
$('#daftar-kata').addEventListener('click', e => {
  const word = e.target.closest('.word-card');
  if(word) say(word.dataset.say);
});
renderWords();

/* ---------- Flashcard ---------- */
let deck = [], idx = 0, flipped = false;
const card = $('#card');

function shuffle(a){
  for(let i = a.length - 1; i > 0; i--){ const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}
function setFlip(v){
  flipped = v; card.classList.toggle('flipped', v); card.setAttribute('aria-pressed', v);
}
function faces(it){
  const jp = `<div class="jp-card"><div class="big${it.c.length > 1 ? ' sm' : ''}" lang="ja">${it.c}</div><span class="reading">${it.r}</span></div>`;
  const ro = `<div class="ro">${it.r}</div>`;
  const note = it.note ? `<p class="fn">${it.note}</p>` : '';
  const ex = it.ex ? `<p class="ex"><span lang="ja">${it.ex[0]}</span><br>${it.ex[1]}</p>` : '';
  const tag = it.note ? '<span class="tag">Partikel</span>' : '';
  if($('#arah').value === 'jp')
    return [jp + tag, ro + (it.note ? note + ex : `<p class="fn">Baris ${withReading(it.label)}</p>`)];
  return [ro + note, jp + tag + ex];
}
function show(){
  const n = deck.length;
  $('#progres').textContent = n ? `${idx + 1} / ${n}` : '0 / 0';
  $('#bar').style.width = n ? ((idx + 1) / n * 100) + '%' : '0';
  ['#prev', '#next', '#flip'].forEach(s => $(s).disabled = !n);
  if(!n){
    $('#front').innerHTML = '<p class="fn">Pilih minimal satu kelompok di panel filter.</p>';
    $('#back').innerHTML = '';
    return;
  }
  const [f, b] = faces(deck[idx]);
  $('#front').innerHTML = f; $('#back').innerHTML = b;
}
function build(){
  deck = ALL.filter(i => selK.has(i.cat));
  if($('#acak').checked) shuffle(deck);
  idx = 0; setFlip(false); show();
}
function go(d){
  if(!deck.length) return;
  const was = flipped; setFlip(false);
  idx = (idx + d + deck.length) % deck.length;
  was ? setTimeout(show, 280) : show();
  $('#progres').textContent = `${idx + 1} / ${deck.length}`;
}
card.addEventListener('click', () => deck.length && setFlip(!flipped));
$('#flip').addEventListener('click', () => setFlip(!flipped));
$('#prev').addEventListener('click', () => go(-1));
$('#next').addEventListener('click', () => go(1));
$('#acak').addEventListener('change', build);
$('#arah').addEventListener('change', () => { setFlip(false); show(); });
document.addEventListener('keydown', e => {
  if($('#kartu').hidden || e.target.closest('input,select,button')) return;
  if(e.key === 'ArrowRight') go(1);
  else if(e.key === 'ArrowLeft') go(-1);
  else if(e.key === ' ' || e.key === 'Enter'){ e.preventDefault(); deck.length && setFlip(!flipped); }
});
mountFilter($('#filter-kartu'), selK, build);
build();

/* ---------- Tab ---------- */
document.querySelectorAll('nav [role=tab]').forEach(t => t.addEventListener('click', () => {
  document.querySelectorAll('nav [role=tab]').forEach(x => x.setAttribute('aria-selected', x === t));
  ['depan', 'belajar', 'kata', 'kartu'].forEach(id => $('#' + id).hidden = id !== t.dataset.tab);
}));

/* ---------- Latar: bunga sakura di pohon ---------- */
const NS = 'http://www.w3.org/2000/svg';
let seed = 7; const rnd = () => (seed = seed * 16807 % 2147483647) / 2147483647;
const tones = ['#f9c6d6', '#f4a9c0', '#ffd9e4', '#ee8fb0', '#fbb8cb'];
const bl = $('#bl');
[[252,220,90],[400,330,80],[570,300,80],[610,190,85],[460,185,80],[340,215,80],[160,300,85],[60,215,70],
 [40,385,60],[130,420,80],[300,365,70],[510,255,70],[220,290,80],[330,140,60]].forEach(([x, y, s]) => {
  for(let i = 0; i < 15; i++){
    const c = document.createElementNS(NS, 'circle');
    c.setAttribute('cx', x + (rnd() - .5) * s * 1.7);
    c.setAttribute('cy', y + (rnd() - .5) * s * 1.2);
    c.setAttribute('r', 16 + rnd() * 26);
    c.setAttribute('fill', tones[Math.floor(rnd() * tones.length)]);
    c.setAttribute('opacity', .78);
    bl.append(c);
  }
});
const fitScene = () => $('#scene').setAttribute('preserveAspectRatio',
  innerWidth < innerHeight ? 'xMinYMax slice' : 'xMidYMax slice');
fitScene(); addEventListener('resize', fitScene);

/* ---------- Kelopak berguguran dan mengapung di air ---------- */
const box = $('#petals');
const small = innerWidth < 700;
const make = (cls, n) => {
  for(let i = 0; i < n; i++){
    const p = document.createElement('i');
    p.className = 'petal' + cls;
    const d = (cls ? 30 : 9) + Math.random() * (cls ? 25 : 10);
    p.style.cssText = `left:${cls ? -5 : Math.random() * 100}%;` +
      (cls ? `bottom:${3 + Math.random() * 12}vh;` : '') +
      `--s:${9 + Math.random() * 11}px;--d:${d}s;--dl:-${Math.random() * d}s;` +
      `--dx:${(Math.random() < .5 ? -1 : 1) * (60 + Math.random() * 160)}px;` +
      `--c:${['#ffc2d4', '#f9a8c2', '#ffd6e2', '#f48fb1'][Math.floor(Math.random() * 4)]}`;
    box.append(p);
  }
};
make('', small ? 16 : 30);
make(' float', small ? 4 : 7);
})();
