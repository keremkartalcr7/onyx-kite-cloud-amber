//#region node_modules/.nitro/vite/services/ssr/assets/curriculum-Clq1kdo5.js
var SUBJECTS = [
	{
		id: "mat",
		name: "Matematik",
		short: "Mat"
	},
	{
		id: "fiz",
		name: "Fizik",
		short: "Fiz"
	},
	{
		id: "kim",
		name: "Kimya",
		short: "Kim"
	},
	{
		id: "bio",
		name: "Biyoloji",
		short: "Bio"
	},
	{
		id: "edb",
		name: "Türk dili ve edebiyatı",
		short: "Edebiyat"
	},
	{
		id: "tar",
		name: "Tarih",
		short: "Tarih"
	},
	{
		id: "cog",
		name: "Coğrafya",
		short: "Coğrafya"
	},
	{
		id: "fel",
		name: "Felsefe",
		short: "Felsefe"
	},
	{
		id: "din",
		name: "Din kültürü",
		short: "Din"
	},
	{
		id: "tur",
		name: "Türkçe",
		short: "Türkçe"
	},
	{
		id: "ing",
		name: "İngilizce",
		short: "İngilizce"
	}
];
var ALANLAR = [
	{
		id: "say",
		label: "Sayısal",
		hint: "Matematik ve fen omurga"
	},
	{
		id: "ea",
		label: "Eşit ağırlık",
		hint: "Matematik ve edebiyat"
	},
	{
		id: "soz",
		label: "Sözel",
		hint: "Edebiyat, tarih, coğrafya"
	},
	{
		id: "dil",
		label: "Dil",
		hint: "İngilizce ve TYT omurga"
	}
];
var WEIGHTS = {
	say: [
		{
			id: "mat",
			w: 5
		},
		{
			id: "fiz",
			w: 3
		},
		{
			id: "kim",
			w: 2
		},
		{
			id: "bio",
			w: 2
		},
		{
			id: "tur",
			w: 2
		}
	],
	ea: [
		{
			id: "mat",
			w: 4
		},
		{
			id: "edb",
			w: 4
		},
		{
			id: "tur",
			w: 2
		},
		{
			id: "tar",
			w: 2
		},
		{
			id: "cog",
			w: 2
		},
		{
			id: "fel",
			w: 1
		}
	],
	soz: [
		{
			id: "edb",
			w: 4
		},
		{
			id: "tur",
			w: 3
		},
		{
			id: "tar",
			w: 3
		},
		{
			id: "cog",
			w: 3
		},
		{
			id: "fel",
			w: 2
		},
		{
			id: "din",
			w: 1
		}
	],
	dil: [
		{
			id: "ing",
			w: 5
		},
		{
			id: "tur",
			w: 3
		},
		{
			id: "mat",
			w: 2
		},
		{
			id: "edb",
			w: 1
		}
	]
};
function topic(id, subjectId, track, theme, title, how) {
	return {
		id,
		subjectId,
		track,
		theme,
		title,
		how
	};
}
var TOPICS = [
	topic("mat-istatistik-soru", "mat", "11", "İstatistiksel araştırma süreci", "İki nicel değişkenli araştırma sorusu", "Bir ilişki iddiası yaz: değişkenleri adlandır, neyi ölçeceğini bir cümlede bitir."),
	topic("mat-veri-hazir", "mat", "11", "İstatistiksel araştırma süreci", "Veriyi toplama ve analize hazırlama", "On satırlık bir tablo kur. Aykırı değeri işaretle, neden aykladığını yaz."),
	topic("mat-serpme", "mat", "11", "İstatistiksel araştırma süreci", "Serpme diyagramı", "Eksenlere birim koy. Doğrusal, eğrisel ve ilişkisiz üç örüntüyü elle çiz."),
	topic("mat-korelasyon", "mat", "11", "İstatistiksel araştırma süreci", "Korelasyon ve eleştirel yorum", "Katsayıyı yön ve kuvvet diye oku. İlişki ile nedenselliği ayıran bir cümle yaz."),
	topic("mat-dortgen", "mat", "11", "Geometrik şekiller", "Dörtgenlerde kenar, açı ve köşegen", "Genel dörtgende iç açılar toplamını bir şekil üzerinde gerekçeyle göster."),
	topic("mat-ozel-dortgen", "mat", "11", "Geometrik şekiller", "Özel dörtgenler", "Paralelkenar, eşkenar dörtgen, dikdörtgen, kare, yamuk ve deltoidi bir özellik tablosuna dök."),
	topic("mat-cokgen", "mat", "11", "Geometrik şekiller", "Çokgenler ve düzgün çokgenler", "Bir iç açı formülünü beşgen ve altıgende sayısal doğrula."),
	topic("mat-alan", "mat", "11", "Geometrik şekiller", "Dörtgen ve çokgenlerde alan", "Aynı şekli iki yoldan alanla. Sonuç uyuşmuyorsa köşegeni yeniden çiz."),
	topic("mat-radyan", "mat", "11", "Nicelikler ve değişimler", "Yönlü açı, radyan ve esas ölçü", "Üç açıyı hem derece hem radyan yaz. Esas ölçüye indirirken tur sayısını kenara not et."),
	topic("mat-birim", "mat", "11", "Nicelikler ve değişimler", "Birim çember", "0, π/6, π/4, π/3, π/2 noktalarını çembere yerleştir. Koordinatı ezber değil, üçgenden üret."),
	topic("mat-sin-cos", "mat", "11", "Nicelikler ve değişimler", "Sinüs ve kosinüs", "Bir periyotluk grafik çiz. İşaret, en büyük ve en küçük değeri eksenden oku."),
	topic("mat-tan-cot", "mat", "11", "Nicelikler ve değişimler", "Tanjant ve kotanjant", "Tanımsız olduğu açıları çemberde işaretle. Grafiğin düşey sınırını gerekçele."),
	topic("mat-trig-nitel", "mat", "11", "Nicelikler ve değişimler", "Trigonometrik fonksiyonların nitel özellikleri", "Periyot, tek-çift ve genliği bir fonksiyon için üç maddede yaz."),
	topic("mat-trig-turev", "mat", "11", "Nicelikler ve değişimler", "Türetilmiş trigonometrik fonksiyonlar", "g(x) = k·f(mx ± r) ± s dönüşümünü tek tek uygula: önce iç, sonra genlik, sonra kaydırma."),
	topic("mat-trig-denklem", "mat", "11", "Nicelikler ve değişimler", "Trigonometrik denklemler", "Genel çözümü yaz, sonra verilen aralıktaki kökleri listele. Fazla kökü aralıktan ele."),
	topic("mat-ustel", "mat", "11", "Nicelikler ve değişimler", "Üstel fonksiyonlar ve e sayısı", "Taban 1'den büyük ve 0-1 arası iki grafik çiz. Artan-azalanı tabandan söyle."),
	topic("mat-log", "mat", "11", "Nicelikler ve değişimler", "Logaritma ve doğal logaritma", "log tanımını üstel dile çevir. ln için tabanın e olduğunu bir örnekte göster."),
	topic("mat-log-denklem", "mat", "11", "Nicelikler ve değişimler", "Üstel ve logaritmik denklemler", "Çözmeden önce tanım kümesini yaz. Kökü baştaki ifadeye geri koy."),
	topic("mat-log-esit", "mat", "11", "Nicelikler ve değişimler", "Üstel ve logaritmik eşitsizlikler", "Taban 1'den küçükse eşitsizlik yönünü ayrıca kontrol et. Sayı doğrusuna dök."),
	topic("mat-dort-islem", "mat", "11", "Nicelikler ve değişimler", "Fonksiyonlarda dört işlem", "(f+g), (f·g) ve f/g için paydanın sıfır olduğu x'i ayrıca yaz."),
	topic("mat-bileske", "mat", "11", "Nicelikler ve değişimler", "Bileşke fonksiyon", "f∘g ile g∘f'i aynı çiftte hesapla. Eşit çıkmazsa sıra hatasını kabul et."),
	topic("fiz-newton", "fiz", "11", "Kuvvet ve hareket", "Newton hareket yasaları", "Serbest cisim diyagramı çiz, sonra net kuvveti eksenlere ayır. Ezber cümle yetmez."),
	topic("fiz-surtunme", "fiz", "11", "Kuvvet ve hareket", "Sürtünme kuvveti", "Statik ile kinetiği karıştırma. Sınır sürtünmede fs = μN eşitliğini bir örnekte kur."),
	topic("fiz-limit", "fiz", "11", "Kuvvet ve hareket", "Limit hız", "Net kuvvet sıfır olunca ivmenin de sıfırlandığını grafikte göster."),
	topic("fiz-cembersel", "fiz", "11", "Kuvvet ve hareket", "Çembersel hareket", "Merkezcil kuvvetin ayrı bir kuvvet olmadığını, net kuvvetin rolü olduğunu yaz."),
	topic("fiz-alan", "fiz", "11", "Elektrik ve manyetizma", "Elektriksel kuvvet ve elektriksel alan", "Yönü artı yük üzerinden söyle. İki yükte vektör toplamını çizerek yap."),
	topic("fiz-manyetik", "fiz", "11", "Elektrik ve manyetizma", "Manyetik alan ve manyetik kuvvet", "Sağ el kuralını bir tel ve bir yük için ayrı uygula. Yön cümlesini şeklin yanına yaz."),
	topic("fiz-induksiyon", "fiz", "11", "Elektrik ve manyetizma", "İndüksiyon akımı", "Akı değişmezse akım yoktur. Bir mıknatıs yaklaşırken yönü gerekçele."),
	topic("fiz-trafo", "fiz", "11", "Elektrik ve manyetizma", "Transformatörler", "Sarım oranı ile gerilim oranını bir sayısal örnekte bağla. İdeal kabulü not et."),
	topic("fiz-yari", "fiz", "11", "Madde ve doğası", "Yarı iletkenlik", "İletken, yalıtkan ve yarı iletkeni bir özellik cümlesiyle ayır. Katkılamanın ne işe yaradığını yaz."),
	topic("fiz-super", "fiz", "11", "Madde ve doğası", "Süper iletkenlik", "Direncin sıfırlandığı koşulu ve bunun devrede ne değiştirdiğini kısaca anlat."),
	topic("fiz-aydin", "fiz", "11", "Optik", "Işık şiddeti, ışık akısı ve aydınlanma", "Üç büyüklüğü birimle ayır. Uzaklık artınca aydınlanmanın nasıl düştüğünü söyle."),
	topic("fiz-duzlem", "fiz", "11", "Optik", "Düzlem aynalar", "Görüntü uzaklığını çizerek bul. Gelen açı ile yansıyan açıyı şekilde işaretle."),
	topic("fiz-kuresel", "fiz", "11", "Optik", "Küresel aynalar", "Çukur ve tümsek için ışınları en az üç özel ışınla çiz. İşareti formüle geçirmeden kontrol et."),
	topic("fiz-kirilma", "fiz", "11", "Optik", "Kırılma", "Yoğunluk değişince ışının normale yaklaşıp uzaklaştığını bir sınır çizgisinde göster."),
	topic("fiz-derinlik", "fiz", "11", "Optik", "Görünür derinlik", "Gerçek derinlik ile görünür derinliği bir havuz çiziminde ayır."),
	topic("fiz-fiber", "fiz", "11", "Optik", "Fiber optik", "Tam yansıma şartını fiberin içine bir cümleyle bağla."),
	topic("fiz-prizma", "fiz", "11", "Optik", "Prizmalar", "Sapma açısını şekilde adlandır. Renk sırasını ezberleme, kırılma farkıyla açıkla."),
	topic("kim-enerji", "kim", "11", "Etkileşim", "Tepkimelerde enerji değişimi", "Isı alan ve ısı veren tepkimeyi potansiyel enerji çizgisinde ayır."),
	topic("kim-entalpi", "kim", "11", "Etkileşim", "Entalpi ve bağ enerjileri", "Bağ kırılması enerji ister, bağ oluşumu enerji verir. Bir tepkimeyi bu iki kalemle topla."),
	topic("kim-olusum", "kim", "11", "Etkileşim", "Standart oluşum entalpisi", "Ürünlerin oluşum entalpilerinden girenlerinkini çıkar. Elementin standart hâlini unutma."),
	topic("kim-hiz", "kim", "11", "Etkileşim", "Tepkime hızı ve aktivasyon enerjisi", "Hızı derişim değişimi bölü zaman diye yaz. Aktivasyon enerjisini eşikten ayır."),
	topic("kim-carpisma", "kim", "11", "Etkileşim", "Çarpışma teorisi ve hıza etki eden faktörler", "Sıcaklık, derişim ve yüzey alanını her biri için tek deney cümlesiyle bağla."),
	topic("kim-hiz-denklem", "kim", "11", "Etkileşim", "Hız denklemi", "Dereceyi denkleşmiş tepkimeden okuma. Verilen hız tablosundan mertebeyi çıkar."),
	topic("kim-denge", "kim", "11", "Çeşitlilik", "Tersinir tepkimeler ve denge sabiti", "K ifadesine katı ve saf sıvı yazma. K büyükse ürün tarafının lehine olduğunu söyle."),
	topic("kim-lechatelier", "kim", "11", "Çeşitlilik", "Le Chatelier ilkesi", "Derişim, sıcaklık ve basıncı ayrı satırda kaydır. Katalizörün dengeyi kaydırmadığını not et."),
	topic("kim-ph", "kim", "11", "Çeşitlilik", "Suyun otoiyonizasyonu ve pH", "pH ile pOH toplamını 25°C için 14 diye kullanmadan önce sıcaklık varsayımını yaz."),
	topic("kim-asit", "kim", "11", "Çeşitlilik", "Asit-baz teorileri", "Aynı maddeyi Arrhenius ve Brønsted-Lowry ile birer cümlede tanımla."),
	topic("kim-titrasyon", "kim", "11", "Çeşitlilik", "Nötralleşme ve titrasyon", "Eşdeğerlik noktasında mol ilişkisini kur. Göstergenin renk değişimini nokta sanma."),
	topic("kim-kcc", "kim", "11", "Çeşitlilik", "Çözünürlük dengesi", "Kçç ifadesini yaz, ortak iyonun çözünürlüğü nasıl düşürdüğünü bir örnekle göster."),
	topic("kim-nano", "kim", "11", "Sürdürülebilirlik", "Nanoteknoloji ve yeşil hidrojen", "Parçacık küçüldükçe yüzeyin neden öne çıktığını ve hidrojenin enerji bağlamını ayır."),
	topic("kim-plastik", "kim", "11", "Sürdürülebilirlik", "Mikroplastik ve sürdürülebilirlik", "Kaynak, taşınma ve bir etkiyi üç maddede yaz. Tanım ezberi yerine süreç anlat."),
	topic("bio-hormon", "bio", "11", "Tepki", "Bitkilerde hormonlar ve tepki", "Oksin, giberellin ve etileni birer gözlenen tepkiyle eşle. Listeyi tek başına ezberleme."),
	topic("bio-tropizma", "bio", "11", "Tepki", "Tropizma", "Uyaranın yönü ile büyümenin yönünü bir çizimde bağla. Fototropizma ve gravitropizmayı ayır."),
	topic("bio-nasti", "bio", "11", "Tepki", "Nasti", "Nastinin yönelim olmadığını, uyaranın yönünden bağımsız olduğunu bir örnekle yaz."),
	topic("bio-sinir", "bio", "11", "Tepki", "Sinir sistemi", "Uyarı, iletim ve yanıtı bir refleks yayı üzerinde sırayla göster."),
	topic("bio-refleks", "bio", "11", "Tepki", "Refleksler", "Kalıtsal ve kazanılmış refleksi birer günlük örnekle ayır."),
	topic("bio-kas", "bio", "11", "Tepki", "Kemik, eklem ve kaslar", "Kasılan kasın çektiğini, itmediğini bir eklem hareketinde söyle."),
	topic("bio-bagisiklik", "bio", "11", "Tepki", "Bağışıklık", "Doğal ve kazanılmış bağışıklığı, aşıyı da işin içine katıp üç cümlede ayır."),
	topic("bio-homeo", "bio", "11", "Homeostazi", "Homeostazi ve canlı için önemi", "İç dengeyi bir değişken üzerinden tanımla: ne sapar, ne düzeltir, sonuç nedir."),
	topic("bio-endokrin", "bio", "11", "Homeostazi", "Endokrin sistem", "Bir hormonun kaynağı, hedefi ve etkisi üçlüsünü boş bırakmadan yaz."),
	topic("bio-dolasim", "bio", "11", "Homeostazi", "Dolaşım sistemi", "Küçük ve büyük dolaşımı oksijenin yeriyle anlat. Şemayı kapalı kitapla çiz."),
	topic("bio-solunum", "bio", "11", "Homeostazi", "Solunum sistemi", "Gaz alışverişinin nerede olduğunu ve solunumla hücresel solunumu ayır."),
	topic("bio-bosaltim", "bio", "11", "Homeostazi", "Boşaltım sistemi", "Süzülme, geri emilim ve salgılamayı nefron üzerinde sıraya diz."),
	topic("bio-bozuk", "bio", "11", "Homeostazi", "Dengenin bozulduğu durumlar", "Diyabet, hipertansiyon ve obeziteyi hangi dengenin saptığıyla eşle. Tedavi tavsiyesi verme."),
	topic("edb-karagoz", "edb", "11", "Bir diyeceğim var", "Geleneksel Türk tiyatrosu ve Karagöz", "Bir perde metninde güldürüyü kim kuruyor, bak. Tip ile kişiyi ayır."),
	topic("edb-mektup", "edb", "11", "Bir diyeceğim var", "Mektup", "Hitap, amaç ve kapanışı işaretle. Öğretici metin ile özel mektubun dilini karşılaştır."),
	topic("edb-dilekce", "edb", "11", "Bir diyeceğim var", "Dilekçe", "Bir dilekçeyi bölüm bölüm çöz: makam, konu, açıklama, talep, imza."),
	topic("edb-eposta", "edb", "11", "Bir diyeceğim var", "E-posta ile iletişim", "Aynı isteği mektup ve e-posta diye iki kez yaz. Ne kısalır, ne kaybolur, not et."),
	topic("edb-hikaye", "edb", "11", "Kültür yolculuğu", "Türk dünyasından hikâye", "Olay, zaman ve kültürel izi üç maddede çıkar. Yazar biyografisine kaçma."),
	topic("edb-orhun", "edb", "11", "Kültür yolculuğu", "Orhun Abideleri", "Bir pasajda hitap edileni ve öğüdün gerekçesini bul."),
	topic("edb-divan", "edb", "11", "Kültür yolculuğu", "Dîvânu Lugâti't-Türk", "Sözlük maddesinin nasıl kültür taşıdığını bir örnek kelimede göster."),
	topic("edb-kutadgu", "edb", "11", "Kültür yolculuğu", "Kutadgu Bilig", "Bir beyitten öğüdü düz cümleye çevir. Ölçü ve öğüt ayrı kalsın."),
	topic("edb-ani", "edb", "11", "Kültür yolculuğu", "Anı", "Anlatıcının tanık olduğu ile yorumladığı yeri ayır."),
	topic("edb-asik", "edb", "11", "Kültür yolculuğu", "Âşık tarzı halk şiiri ve atışma", "Bir dörtlükte ayak ve söyleyiş amacını işaretle. Atışmada yanıtın nasıl kurulduğuna bak."),
	topic("edb-roman", "edb", "11", "Yaşamın izinde", "Roman", "Kişi, çatışma ve bakış açısını bir bölüm üzerinden çıkar. Özet yazma, kanıt cümlesi seç."),
	topic("edb-biyografi", "edb", "11", "Yaşamın izinde", "Biyografi ve tezkire", "Tezkire maddesi ile modern biyografiyi amaç ve dil bakımından yan yana koy."),
	topic("edb-mulakat", "edb", "11", "Yaşamın izinde", "Mülakat", "Soruların bilgi mi yoksa yorum mu istediğini ayır. Alıntıyı kendi cümlenden ayır."),
	topic("edb-radyo", "edb", "11", "Yaşamın izinde", "Radyo tiyatrosu", "Görüntüsüz sahnede ses, efekt ve diyalog nasıl mekân kuruyor, bir sahneyle yaz."),
	topic("edb-tiyatro", "edb", "11", "Hayatın aynası", "Modern tiyatro", "Perde, sahne ve çatışmayı bir metinde işaretle. Sahne yönergesi ile konuşmayı ayır."),
	topic("edb-kucurek", "edb", "11", "Hayatın aynası", "Küçürek hikâye", "Kısa metinde boş bırakılan yeri sen tamamla, sonra yazarın neden bıraktığını tartış."),
	topic("edb-belgesel", "edb", "11", "Hayatın aynası", "Belgesel ve afiş", "İddia, kanıt görüntüsü ve afişteki vaadi ayır. Tanıtım ile belgeyi karıştırma."),
	topic("tar-mucadele", "tar", "11", "Değişen dünyada Osmanlı (1683-1789)", "Siyasi ve askerî mücadeleler", "Bir savaşın nedenini, tarafını ve sınır sonucunu üç satırda bağla. Yıl ezberi tek başına yetmez."),
	topic("tar-lale", "tar", "11", "Değişen dünyada Osmanlı (1683-1789)", "Lale Devri", "Zevk anlatısının yanına diplomasi ve matbaayı koy. Tek boyutlu hüküm kurma."),
	topic("tar-deprem", "tar", "11", "Değişen dünyada Osmanlı (1683-1789)", "1755 Lizbon ve 1766 İstanbul depremleri", "Afeti yalnızca yıkım diye değil, şehrin ve düşüncenin tepkisi diye oku."),
	topic("tar-sanayi-giris", "tar", "11", "Değişen dünyada Osmanlı (1683-1789)", "Sanayi Devrimi", "Üretim, enerji ve emek ne değişti, Osmanlı bağlamına bir cümleyle taşı."),
	topic("tar-fransa", "tar", "11", "Dönüşüm sürecinde Osmanlı (1789-1908)", "Fransız İhtilali", "Siyasi ilke ile imparatorluklara etkisini ayır. Osmanlı'ya yansımayı somut bir gelişmeyle eşle."),
	topic("tar-idare", "tar", "11", "Dönüşüm sürecinde Osmanlı (1789-1908)", "Siyasi, askerî ve idarî gelişmeler", "Bir ıslahatı sorun, araç ve sınır diye yaz. Genel 'yenileşme' cümlesi kurma."),
	topic("tar-bilim", "tar", "11", "Dönüşüm sürecinde Osmanlı (1789-1908)", "Bilim, sanat ve teknoloji", "Bir kurum veya aracı seç. Ne işe yaradığını ve kime ulaştığını söyle."),
	topic("tar-sanayi-osmanli", "tar", "11", "Dönüşüm sürecinde Osmanlı (1789-1908)", "Osmanlı'da sanayileşme", "Atölye, fabrika ve dış rekabeti bir örnek üzerinden bağla."),
	topic("tar-1908", "tar", "11", "Savaşlar sarmalında Osmanlı (1908-1918)", "Siyasi ve askerî gelişmeler", "1908-1918 aralığını tek savaş sanma. İç siyaset ile cepheyi ayrı izle."),
	topic("tar-goc", "tar", "11", "Savaşlar sarmalında Osmanlı (1908-1918)", "Kitlesel göçler ve salgınlar", "Hareketin yönünü ve salgının savaş koşullarıyla bağını bir harita ya da zaman çizgisinde göster."),
	topic("tar-katki", "tar", "11", "Savaşlar sarmalında Osmanlı (1908-1918)", "İnsanlık tarihine katkılar", "Bir katkı iddiasını somut eser, kurum veya uygulamayla destekle."),
	topic("cog-doga", "cog", "11", "Coğrafyanın doğası", "Mekânsal sorunlar ve coğrafya", "Bir sorunu yer, ölçek ve coğrafi bakış diye üç parçaya ayır."),
	topic("cog-cbs", "cog", "11", "Mekânsal bilgi teknolojileri", "Web tabanlı CBS ve harita", "Katman eklemeden yorum yapma. Lejant ve ölçeği sesli kontrol et."),
	topic("cog-su", "cog", "11", "Doğal sistemler ve süreçler", "Su kaynakları", "Bir havzada kaynağı, kullanımı ve baskıyı sırayla yaz."),
	topic("cog-turkiye-su", "cog", "11", "Doğal sistemler ve süreçler", "Türkiye'de suyun etkileri", "Yerleşme, tarım ve riski aynı su kaynağına bağla."),
	topic("cog-mavi", "cog", "11", "Doğal sistemler ve süreçler", "Mavi Vatan ve deniz yetki alanları", "Karasuyu, kıta sahanlığı ve münhasır ekonomik bölgeyi birbirinin yerine kullanma."),
	topic("cog-yerlesme", "cog", "11", "Beşerî sistemler ve süreçler", "Yerleşmelerin mekânsal organizasyonu", "Bir kentin etki alanını ne belirliyor, iki gerekçe yaz."),
	topic("cog-tarim", "cog", "11", "Ekonomik faaliyetler ve etkileri", "Tarım ve gıda güvencesi", "Üretim ile güvenceyi ayır. Sürdürülebilir tarım için bir uygulama örneği ver."),
	topic("cog-maden", "cog", "11", "Ekonomik faaliyetler ve etkileri", "Stratejik ve kritik madenler", "Bor örneğinde rezerv, kullanım ve bağımlılığı üç satırda bağla."),
	topic("cog-enerji", "cog", "11", "Ekonomik faaliyetler ve etkileri", "Enerji kaynakları", "Yenilenebilir ile yenilenemezi bir ülkenin enerji karışımında karşılaştır."),
	topic("cog-sanayi", "cog", "11", "Ekonomik faaliyetler ve etkileri", "Sanayileşmenin mekânsal etkileri", "İş, göç ve çevre etkisini aynı kent örneğinde topla."),
	topic("cog-iklim", "cog", "11", "Afetler ve sürdürülebilir çevre", "Gezegen sınırı ve iklim değişikliği", "Bir gösterge seç. Değişimin mekâna etkisini abartısız yaz."),
	topic("cog-surdur", "cog", "11", "Afetler ve sürdürülebilir çevre", "Türkiye'de suyun sürdürülebilir kullanımı", "Tasarruf, tarım sulaması ve kent kullanımından birini veriye yaklaştır."),
	topic("cog-hinterland", "cog", "11", "Bölgeler, ülkeler ve küresel bağlantılar", "Türkiye'nin kültürel hinterlandı", "Kültürel alanı siyasi sınırla bir tutma. Bir ortak unsur ve bir fark yaz."),
	topic("cog-ulke", "cog", "11", "Bölgeler, ülkeler ve küresel bağlantılar", "Ülke karşılaştırmaları", "Tarım, sanayi, maden veya enerjide iki ülkeyi aynı ölçütte karşılaştır."),
	topic("fel-cevre", "fel", "11", "Çevre sorunları ve felsefe", "Çevre sorunları ve çevre etiği", "İnsan merkezli, canlı merkezli ve çevre merkezli tutumu bir ikilemde ayır."),
	topic("fel-teknoloji", "fel", "11", "Teknoloji ve hayat", "Teknoloji, hayat ve yabancılaşma", "Bir aracın kolaylığını ve kişinin araçla kurduğu bağı ayrı yaz."),
	topic("fel-akil", "fel", "11", "Akıl ve inanç", "Akıl ve inanç", "Bir iddiayı akıl yürütme ile inanç gerekçesi diye iki koldan incele. Birini silme."),
	topic("fel-edebiyat", "fel", "11", "Edebiyat ve felsefe", "Edebiyat ve felsefe", "Bir metnin sorduğu felsefi soruyu adlandır. Edebi beğeniyi soru sanma."),
	topic("fel-anlam", "fel", "11", "Hayatın anlamı", "Mutluluk, varoluş ve hayatın anlamı", "Bir filozofun mutluluk tarifini kendi cümlenle söyle, sonra bir itiraz yaz."),
	topic("fel-hukuk", "fel", "11", "Hukuk ve felsefe", "Doğal hukuk, pozitif hukuk ve ahlak", "Yasal olan ile haklı olanın çatıştığı bir örnek kur. Taraf tutmadan kavramları yerleştir."),
	topic("din-kader", "din", "11", "Kader, irade ve sorumluluk", "Kader, irade ve sorumluluk", "İrade ile sorumluluğu bir günlük seçim üzerinden ayır. Fetva üretme."),
	topic("din-bilim", "din", "11", "Din, felsefe, bilim ve sanat", "Din, felsefe, bilim ve sanat", "Dört alanın sorduğu soru tipini birer örnekle ayır."),
	topic("din-medeniyet", "din", "11", "İslam medeniyeti ve gönül coğrafyası", "İslam medeniyeti ve gönül coğrafyası", "Bir eser, şehir veya âlim seç. Medeniyet iddiasını somut izle destekle."),
	topic("din-inanc", "din", "11", "İnançla ilgili meseleler", "İnançla ilgili meseleler", "Teizm, deizm ve ateizmi birer cümlede ayır. Kötülük problemi ve din istismarını kavram olarak tanı."),
	topic("din-yahudi", "din", "11", "Yahudilik ve Hristiyanlık", "Yahudilik ve Hristiyanlık", "İnanç, kutsal metin ve ibadetten birini iki din için karşılaştır. Karikatür cümle kurma."),
	topic("tur-paragraf", "tur", "tyt", "TYT Türkçe", "Paragrafta ana düşünce", "Ana düşünceyi metindeki bir cümleyi kopyalayarak değil, kendi kısa cümlenle yaz."),
	topic("tur-yardimci", "tur", "tyt", "TYT Türkçe", "Yardımcı düşünce ve yapı", "Her cümlenin ana düşünceye mi hizmet ettiğini, örnek mi olduğunu işaretle."),
	topic("tur-anlam", "tur", "tyt", "TYT Türkçe", "Sözcükte ve cümlede anlam", "Bağlamı kapatıp kelimeye saldırma. Cümleyi kendi sözünle yeniden kur."),
	topic("tur-bosluk", "tur", "tyt", "TYT Türkçe", "Akışı bozan ve paragraf tamamlama", "Önce bağlaç ve zamir izini sür, sonra şıkkı ele."),
	topic("tur-dilbilgisi", "tur", "tyt", "TYT Türkçe", "Fiilimsi ve cümlenin ögeleri", "Beş cümlede yüklemi bul, sonra özne ve nesneyi ayır. Fiilimsiyi yüklem sanma."),
	topic("tur-yazim", "tur", "tyt", "TYT Türkçe", "Yazım ve noktalama", "Yanışını kural adıyla değil, doğrusunu yazarak düzelt. Kuralı bir örnekte sabitle."),
	topic("mat-tyt-sayi", "mat", "tyt", "TYT matematik omurgası", "Sayılar, üslü ve köklü ifadeler", "On işlem yap. Hata çıkarsa kuralı değil, adımı işaretle."),
	topic("mat-tyt-oran", "mat", "tyt", "TYT matematik omurgası", "Oran, orantı ve problem", "Problemi tabloya dök. Sonucu problemin diline geri çevir."),
	topic("mat-tyt-denklem", "mat", "tyt", "TYT matematik omurgası", "Denklem ve eşitsizlik", "Eşitsizlikte yön değişimini ayrıca kontrol et. Çözüm kümesini sayı doğrusuna koy."),
	topic("mat-tyt-fonk", "mat", "tyt", "TYT matematik omurgası", "Fonksiyon okuryazarlığı", "Grafik, tablo ve kuralı birbirine çevir. Eksenin ne anlattığını yaz."),
	topic("mat-tyt-ucgen", "mat", "tyt", "TYT matematik omurgası", "Üçgen, açı ve alan", "Şekil çiz. Verilmeyeni varsayma, verileni kalemle işaretle."),
	topic("mat-tyt-sayma", "mat", "tyt", "TYT matematik omurgası", "Sayma ve olasılık temeli", "Sıralama var mı yok mu, önce ona karar ver. Sonucu kesir olarak kontrol et."),
	topic("mat-tyt-veri", "mat", "tyt", "TYT matematik omurgası", "Veri ve grafik yorumu", "Eksendeki birimi okumadan artış iddia etme. Bir yanıltıcı grafiği düzelt."),
	topic("fiz-tyt-grafik", "fiz", "tyt", "TYT fen omurgası", "Hareket grafikleri", "Konum-zaman eğimini hız diye oku. Bir kırılmada ne değiştiğini söyle."),
	topic("fiz-tyt-enerji", "fiz", "tyt", "TYT fen omurgası", "İş, enerji ve güç", "Birimi karıştırdığın yeri işaretle. Enerji korunuyorsa nereye dönüştüğünü yaz."),
	topic("kim-tyt-mol", "kim", "tyt", "TYT fen omurgası", "Mol ve tepkime denklemi", "Denkleştir, sonra mol oranını kur. Gram ile molü aynı satırda kullanma."),
	topic("kim-tyt-derisim", "kim", "tyt", "TYT fen omurgası", "Çözelti derişimi", "Çözünen, çözücü ve çözeltiyi ayır. Yüzde ile molariteyi aynı soruda karıştırma."),
	topic("bio-tyt-grafik", "bio", "tyt", "TYT fen omurgası", "Deney ve grafik yorumu", "Bağımsız değişkeni bul. Kontrol grubu yoksa iddiayı küçült."),
	topic("bio-tyt-hucre", "bio", "tyt", "TYT fen omurgası", "Hücre ve temel canlılık", "Organeli görevle eşle, sonra bir canlılık olayını o organelle bağla."),
	topic("tar-tyt-kronoloji", "tar", "tyt", "TYT sosyal omurga", "Kronoloji ve neden-sonuç", "Önce-sonra ile neden-sonuç aynı şey değil. Bir olayda ikisini ayrı yaz."),
	topic("cog-tyt-harita", "cog", "tyt", "TYT sosyal omurga", "Harita ve grafik yorumu", "Lejantı kapatıp tahmin etme. Bir dağılımı yer adıyla değil örüntüyle anlat."),
	topic("ing-okuma", "ing", "11", "YDT omurgası", "Okumada ana fikir ve çıkarım", "Paragrafın ilk ve son cümlesini Türkçe birer cümleye indir. Çıkarımı metinde ara."),
	topic("ing-paragraf", "ing", "11", "YDT omurgası", "Paragraf tamamlama ve akış", "Boşluktan önceki zamiri ve bağlacı işaretle, sonra şıkkı dene."),
	topic("ing-tense", "ing", "11", "YDT omurgası", "Zaman ve görünüş", "Beş cümlede zamanı değiştirip anlamın nereye kaydığını yaz."),
	topic("ing-clause", "ing", "11", "YDT omurgası", "Bağlaçlar ve yan cümle", "Although, unless, so that farkını birer kendi cümlenle sabitle."),
	topic("ing-kelime", "ing", "11", "YDT omurgası", "Akademik kelime", "Günde sekiz kelime. Her birini örnek cümle olmadan işaretleme."),
	topic("ing-diyalog", "ing", "11", "YDT omurgası", "Diyalog ve çeviri", "Konuşanın niyetini söyle, sonra çevir. Kelime kelime Türkçeleştirme.")
];
function subjectById(id) {
	return SUBJECTS.find((subject) => subject.id === id);
}
function alanLabel(alan) {
	return ALANLAR.find((item) => item.id === alan)?.label ?? alan;
}
var CURRICULUM_BRIEF = [
	"11. sınıf matematik: istatistiksel araştırma, dörtgen ve çokgen, trigonometrik fonksiyonlar, üstel-logaritma, fonksiyonlarda işlem ve bileşke. Türev, integral ve limit bu sınıfın programında yok.",
	"11. sınıf fizik: kuvvet ve hareket, elektrik ve manyetizma, yarı iletkenlik ve süper iletkenlik, optik.",
	"11. sınıf kimya: tepkimelerde enerji ve hız, denge, asit-baz, çözünürlük, nanoteknoloji ve sürdürülebilirlik.",
	"11. sınıf biyoloji: bitki ve hayvanda tepki, homeostazi ekseninde endokrin, dolaşım, solunum, boşaltım.",
	"11. sınıf edebiyat tema temelli: iletişim metinleri, kültür yolculuğu, roman ve biyografi, tiyatro ve küçürek hikâye. Eski dönem ezberi tek başına program değil.",
	"11. sınıf tarih: Osmanlı 1683-1918, dönüşüm, savaş, göç ve salgın.",
	"11. sınıf coğrafya: mekân, CBS, su, yerleşme, ekonomi, iklim ve ülke karşılaştırmaları."
].join(" ");
//#endregion
export { WEIGHTS as a, TOPICS as i, CURRICULUM_BRIEF as n, alanLabel as o, SUBJECTS as r, subjectById as s, ALANLAR as t };
