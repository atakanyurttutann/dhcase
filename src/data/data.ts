export interface ICategory {
  id: number;
  name: string;
}
export interface IFeatures {
  id: number;
  featuresTitle: string;
  featuresDes: string;
}

export interface IPackageDetail {
  name: string;
}

export interface IPackage {
  id: number;
  name: string;
  image: string;
  detail: IPackageDetail[];
  price: number;
  discountedPrice: number;
  categoryId: number;
  installment: number;
  description: string;
}

export interface IPackage {
  id: number;
  name: string;
  image: string;
  detail: IPackageDetail[];
  price: number;
  discountedPrice: number;
  categoryId: number;
  installment: number;
  description: string;
}

export const categoryData: ICategory[] = [
  { id: 1, name: "Eğitim Paketleri" },
  { id: 2, name: "Deneme Sınavları" },
  { id: 3, name: "Konu Anlatımları" },
  { id: 4, name: "Soru Bankaları" },
  { id: 5, name: "Test Çözümleri" },
  { id: 6, name: "Öğretmenler İçin" },
  { id: 7, name: "Yabancı Dil Eğitimi" },
  { id: 8, name: "Hobi ve Sanat" },
  { id: 9, name: "Sağlık ve Fitness" },
  { id: 10, name: "Müzik Aletleri" },
];
export const features: IFeatures[] = [
  {
    id: 1,
    featuresTitle: "7-24",
    featuresDes: "Online",
  },
  {
    id: 2,
    featuresTitle: "53.783",
    featuresDes: "Ders İçeriği",
  },
  {
    id: 3,
    featuresTitle: "5.541",
    featuresDes: "Adet Ders Videosu",
  },
  {
    id: 4,
    featuresTitle: "45.372",
    featuresDes: "Adet Video  Soru Sayısı",
  },
  {
    id: 5,
    featuresTitle: "16.041",
    featuresDes: "İnteraktif İçeriği",
  },
  {
    id: 6,
    featuresTitle: "42",
    featuresDes: "Soru Bankası",
  },
  {
    id: 7,
    featuresTitle: "5653",
    featuresDes: "Video",
  },
];
export const packageData: IPackage[] = [
  {
    id: 1,
    name: "TYT Tüm Dersler + Ayt Sayısal 2025",
    price: 1599.99,
    discountedPrice: 1999.99,
    image:
      "https://assets-dopinghafiza.dopingtech.net/assets/files/shop/tyt-tum-ders-ayt-sayisal-b.jpg",
    detail: [
      { name: "7-24 Online" },
      { name: "53.783 Ders İçeriği" },
      { name: "5.541 Adet Ders Videosu" },
      { name: "45.272 Adet Video  Soru Sayısı" },
      { name: "16.043 İnteraktif İçerği" },
      { name: "53.783 Ders İçeriği" },
      { name: "5.541 Adet Ders Videosu" },
      { name: "45.272 Adet Video Cözümlü Soru Sayısı" },
    ],
    categoryId: 1,
    installment: 1300,
    description:
      "Sınava hazırlık sürecinde tüm kaynaklar tek platformda. TYT Tüm Dersler+AYT Sayısal 2024 paketimizdeki animasyon eksenli Serüvenlerle Fen Bilimleri, Reflekslerle Matematik formatı, özel konseptler, çözümlü soru bankası, deneme sınavları ve Çözücü uygulamasında 100 soru sorma hakkı, Koçum Yanımda uygulamasında 20 görüşme + 50 mesaj hakkı ve Şimdi Anladım uygulamasında 50 Ekspres Özel Ders hakkı ile YKS'ye hazırlanın!",
  },
  {
    id: 2,
    name: "Deneme Paketi 1",
    price: 1099.99,
    discountedPrice: 899.99,
    image:
      "https://assets-dopinghafiza.dopingtech.net/assets/files/shop/tyt-tum-ders-ayt-esit-b.jpg",
    detail: [
      { name: "10 Adet Deneme Sınavı" },
      { name: "Çözümlü ve Açıklamalı Sorular" },
      { name: "Performans Analizi" },
    ],
    categoryId: 2,
    installment: 900,
    description:
      "Sınava hazırlık sürecinde tüm kaynaklar tek platformda. TYT Tüm Dersler+AYT Sayısal 2024 paketimizdeki animasyon eksenli Serüvenlerle Fen Bilimleri, Reflekslerle Matematik formatı, özel konseptler, çözümlü soru bankası, deneme sınavları ve Çözücü uygulamasında 100 soru sorma hakkı, Koçum Yanımda uygulamasında 20 görüşme + 50 mesaj hakkı ve Şimdi Anladım uygulamasında 50 Ekspres Özel Ders hakkı ile YKS'ye hazırlanın!",
  },
  {
    id: 3,
    name: "Ayt Edebiyat Konu Anlatımlı",
    price: 1599.99,
    discountedPrice: 1299.99,
    image:
      "https://assets-dopinghafiza.dopingtech.net/assets/files/shop/tyt-tum-ders-ayt-tum-dersler-b.jpg",
    detail: [
      { name: "Edebiyat Konu Anlatımları" },
      { name: "Örnek Soru Çözümleri" },
      { name: "Detaylı Ders Notları" },
    ],
    categoryId: 3,
    installment: 1800,
    description:
      "Sınava hazırlık sürecinde tüm kaynaklar tek platformda. TYT Tüm Dersler+AYT Sayısal 2024 paketimizdeki animasyon eksenli Serüvenlerle Fen Bilimleri, Reflekslerle Matematik formatı, özel konseptler, çözümlü soru bankası, deneme sınavları ve Çözücü uygulamasında 100 soru sorma hakkı, Koçum Yanımda uygulamasında 20 görüşme + 50 mesaj hakkı ve Şimdi Anladım uygulamasında 50 Ekspres Özel Ders hakkı ile YKS'ye hazırlanın!",
  },
  {
    id: 4,
    name: "TYT Türkçe Test Çözüm Kitabı",
    price: 799.99,
    discountedPrice: 599.99,
    image:
      "https://assets-dopinghafiza.dopingtech.net/assets/files/shop/tyt-tum-ders-ayt-tum-dersler-b.jpg",
    detail: [
      { name: "TYT Türkçe Soru Bankası" },
      { name: "Çözümlü Testler" },
      { name: "Kapsamlı Konu Anlatımları" },
    ],
    categoryId: 4,
    installment: 1000,
    description:
      "Sınava hazırlık sürecinde tüm kaynaklar tek platformda. TYT Tüm Dersler+AYT Sayısal 2024 paketimizdeki animasyon eksenli Serüvenlerle Fen Bilimleri, Reflekslerle Matematik formatı, özel konseptler, çözümlü soru bankası, deneme sınavları ve Çözücü uygulamasında 100 soru sorma hakkı, Koçum Yanımda uygulamasında 20 görüşme + 50 mesaj hakkı ve Şimdi Anladım uygulamasında 50 Ekspres Özel Ders hakkı ile YKS'ye hazırlanın!",
  },
  {
    id: 5,
    name: "Ayt Matematik Deneme Sınavları",
    price: 1299.99,
    discountedPrice: 999.99,
    image:
      "https://assets-dopinghafiza.dopingtech.net/assets/files/shop/tyt-tum-ders-ayt-tum-dersler-b.jpg",
    detail: [
      { name: "Ayt Matematik Soru Bankası" },
      { name: "Çözümlü Deneme Sınavları" },
      { name: "Performans Analizi" },
    ],
    categoryId: 2,
    installment: 1200,
    description:
      "Sınava hazırlık sürecinde tüm kaynaklar tek platformda. TYT Tüm Dersler+AYT Sayısal 2024 paketimizdeki animasyon eksenli Serüvenlerle Fen Bilimleri, Reflekslerle Matematik formatı, özel konseptler, çözümlü soru bankası, deneme sınavları ve Çözücü uygulamasında 100 soru sorma hakkı, Koçum Yanımda uygulamasında 20 görüşme + 50 mesaj hakkı ve Şimdi Anladım uygulamasında 50 Ekspres Özel Ders hakkı ile YKS'ye hazırlanın!",
  },
  {
    id: 6,
    name: "TYT Fizik Konu Anlatımlı",
    price: 999.99,
    discountedPrice: 699.99,
    image:
      "https://assets-dopinghafiza.dopingtech.net/assets/files/shop/tyt-tum-ders-ayt-tum-dersler-b.jpg",
    detail: [
      { name: "TYT Fizik Ders Notları" },
      { name: "Örnek Sorular ve Çözümleri" },
      { name: "Konu Anlatım Videoları" },
    ],
    categoryId: 3,
    installment: 800,
    description:
      "Sınava hazırlık sürecinde tüm kaynaklar tek platformda. TYT Tüm Dersler+AYT Sayısal 2024 paketimizdeki animasyon eksenli Serüvenlerle Fen Bilimleri, Reflekslerle Matematik formatı, özel konseptler, çözümlü soru bankası, deneme sınavları ve Çözücü uygulamasında 100 soru sorma hakkı, Koçum Yanımda uygulamasında 20 görüşme + 50 mesaj hakkı ve Şimdi Anladım uygulamasında 50 Ekspres Özel Ders hakkı ile YKS'ye hazırlanın!",
  },
  {
    id: 7,
    name: "Ayt Kimya Soru Bankası",
    price: 1199.99,
    discountedPrice: 899.99,
    image:
      "https://assets-dopinghafiza.dopingtech.net/assets/files/shop/tyt-tum-ders-ayt-tum-dersler-b.jpg",
    detail: [
      { name: "Ayt Kimya Konu Anlatımları" },
      { name: "Çözümlü Soru Bankası" },
      { name: "Deneme Sınavları" },
    ],
    categoryId: 4,
    installment: 1500,
    description:
      "Sınava hazırlık sürecinde tüm kaynaklar tek platformda. TYT Tüm Dersler+AYT Sayısal 2024 paketimizdeki animasyon eksenli Serüvenlerle Fen Bilimleri, Reflekslerle Matematik formatı, özel konseptler, çözümlü soru bankası, deneme sınavları ve Çözücü uygulamasında 100 soru sorma hakkı, Koçum Yanımda uygulamasında 20 görüşme + 50 mesaj hakkı ve Şimdi Anladım uygulamasında 50 Ekspres Özel Ders hakkı ile YKS'ye hazırlanın!",
  },
  {
    id: 8,
    name: "TYT Coğrafya Konu Özetleri",
    price: 699.99,
    discountedPrice: 499.99,
    image:
      "https://assets-dopinghafiza.dopingtech.net/assets/files/shop/tyt-tum-ders-ayt-tum-dersler-b.jpg",
    detail: [
      { name: "TYT Coğrafya Konu Özetleri" },
      { name: "Grafikler ve Tablolarla Desteklenmiş" },
      { name: "Kolay Anlaşılır İçerik" },
    ],
    categoryId: 5,
    installment: 900,
    description:
      "Sınava hazırlık sürecinde tüm kaynaklar tek platformda. TYT Tüm Dersler+AYT Sayısal 2024 paketimizdeki animasyon eksenli Serüvenlerle Fen Bilimleri, Reflekslerle Matematik formatı, özel konseptler, çözümlü soru bankası, deneme sınavları ve Çözücü uygulamasında 100 soru sorma hakkı, Koçum Yanımda uygulamasında 20 görüşme + 50 mesaj hakkı ve Şimdi Anladım uygulamasında 50 Ekspres Özel Ders hakkı ile YKS'ye hazırlanın!",
  },
  {
    id: 9,
    name: "Ayt Biyoloji Konu Anlatımları",
    price: 1399.99,
    discountedPrice: 1099.99,
    image:
      "https://assets-dopinghafiza.dopingtech.net/assets/files/shop/tyt-tum-ders-ayt-tum-dersler-b.jpg",
    detail: [
      { name: "Ayt Biyoloji Konu Anlatımları" },
      { name: "Görsellerle Desteklenmiş" },
      { name: "Özet Bilgiler ve İp Uçları" },
    ],
    categoryId: 5,
    installment: 1300,
    description:
      "Sınava hazırlık sürecinde tüm kaynaklar tek platformda. TYT Tüm Dersler+AYT Sayısal 2024 paketimizdeki animasyon eksenli Serüvenlerle Fen Bilimleri, Reflekslerle Matematik formatı, özel konseptler, çözümlü soru bankası, deneme sınavları ve Çözücü uygulamasında 100 soru sorma hakkı, Koçum Yanımda uygulamasında 20 görüşme + 50 mesaj hakkı ve Şimdi Anladım uygulamasında 50 Ekspres Özel Ders hakkı ile YKS'ye hazırlanın!",
  },
  {
    id: 10,
    name: "TYT Tarih Test Çözümlü",
    price: 899.99,
    discountedPrice: 699.99,
    image:
      "https://assets-dopinghafiza.dopingtech.net/assets/files/shop/tyt-tum-ders-ayt-tum-dersler-b.jpg",
    detail: [
      { name: "TYT Tarih Soru Bankası" },
      { name: "Detaylı Çözümlü Testler" },
      { name: "Tarih Konu Anlatımları" },
    ],
    categoryId: 6,
    installment: 800,
    description:
      "Sınava hazırlık sürecinde tüm kaynaklar tek platformda. TYT Tüm Dersler+AYT Sayısal 2024 paketimizdeki animasyon eksenli Serüvenlerle Fen Bilimleri, Reflekslerle Matematik formatı, özel konseptler, çözümlü soru bankası, deneme sınavları ve Çözücü uygulamasında 100 soru sorma hakkı, Koçum Yanımda uygulamasında 20 görüşme + 50 mesaj hakkı ve Şimdi Anladım uygulamasında 50 Ekspres Özel Ders hakkı ile YKS'ye hazırlanın!",
  },
  {
    id: 11,
    name: "TYT Kimya Deneme Sınavı",
    price: 1199.99,
    discountedPrice: 899.99,
    image:
      "https://assets-dopinghafiza.dopingtech.net/assets/files/shop/tyt-tum-ders-ayt-tum-dersler-b.jpg",
    detail: [
      { name: "TYT Kimya Soru Bankası" },
      { name: "Deneme Sınavı" },
      { name: "Performans Analizi" },
    ],
    categoryId: 7,
    installment: 1600,
    description:
      "Sınava hazırlık sürecinde tüm kaynaklar tek platformda. TYT Tüm Dersler+AYT Sayısal 2024 paketimizdeki animasyon eksenli Serüvenlerle Fen Bilimleri, Reflekslerle Matematik formatı, özel konseptler, çözümlü soru bankası, deneme sınavları ve Çözücü uygulamasında 100 soru sorma hakkı, Koçum Yanımda uygulamasında 20 görüşme + 50 mesaj hakkı ve Şimdi Anladım uygulamasında 50 Ekspres Özel Ders hakkı ile YKS'ye hazırlanın!",
  },
  {
    id: 12,
    name: "Ayt Dil ve Anlatım Çözümlü Soru Bankası",
    price: 1499.99,
    discountedPrice: 1199.99,
    image:
      "https://assets-dopinghafiza.dopingtech.net/assets/files/shop/tyt-tum-ders-ayt-tum-dersler-b.jpg",
    detail: [
      { name: "Ayt Dil ve Anlatım Soru Bankası" },
      { name: "Detaylı Çözümlü Sorular" },
      { name: "Açıklamalı Çözümler" },
    ],
    categoryId: 8,
    installment: 1100,
    description:
      "Sınava hazırlık sürecinde tüm kaynaklar tek platformda. TYT Tüm Dersler+AYT Sayısal 2024 paketimizdeki animasyon eksenli Serüvenlerle Fen Bilimleri, Reflekslerle Matematik formatı, özel konseptler, çözümlü soru bankası, deneme sınavları ve Çözücü uygulamasında 100 soru sorma hakkı, Koçum Yanımda uygulamasında 20 görüşme + 50 mesaj hakkı ve Şimdi Anladım uygulamasında 50 Ekspres Özel Ders hakkı ile YKS'ye hazırlanın!",
  },
  {
    id: 13,
    name: "TYT Tarih Konu Anlatımlı",
    price: 999.99,
    discountedPrice: 799.99,
    image:
      "https://assets-dopinghafiza.dopingtech.net/assets/files/shop/tyt-tum-ders-ayt-tum-dersler-b.jpg",
    detail: [
      { name: "TYT Tarih Konu Anlatımları" },
      { name: "Özet Bilgiler" },
      { name: "Grafiklerle Desteklenmiş" },
    ],
    categoryId: 9,
    installment: 1000,
    description:
      "Sınava hazırlık sürecinde tüm kaynaklar tek platformda. TYT Tüm Dersler+AYT Sayısal 2024 paketimizdeki animasyon eksenli Serüvenlerle Fen Bilimleri, Reflekslerle Matematik formatı, özel konseptler, çözümlü soru bankası, deneme sınavları ve Çözücü uygulamasında 100 soru sorma hakkı, Koçum Yanımda uygulamasında 20 görüşme + 50 mesaj hakkı ve Şimdi Anladım uygulamasında 50 Ekspres Özel Ders hakkı ile YKS'ye hazırlanın!",
  },
  {
    id: 14,
    name: "Ayt Felsefe Kitabı",
    price: 1199.99,
    discountedPrice: 999.99,
    image:
      "https://assets-dopinghafiza.dopingtech.net/assets/files/shop/tyt-tum-ders-ayt-tum-dersler-b.jpg",
    detail: [
      { name: "Ayt Felsefe Konuları" },
      { name: "Örnek Sorular ve Çözümleri" },
      { name: "Açıklamalı Soru Bankası" },
    ],
    categoryId: 10,
    installment: 1400,
    description:
      "Sınava hazırlık sürecinde tüm kaynaklar tek platformda. TYT Tüm Dersler+AYT Sayısal 2024 paketimizdeki animasyon eksenli Serüvenlerle Fen Bilimleri, Reflekslerle Matematik formatı, özel konseptler, çözümlü soru bankası, deneme sınavları ve Çözücü uygulamasında 100 soru sorma hakkı, Koçum Yanımda uygulamasında 20 görüşme + 50 mesaj hakkı ve Şimdi Anladım uygulamasında 50 Ekspres Özel Ders hakkı ile YKS'ye hazırlanın!",
  },
  {
    id: 15,
    name: "TYT Coğrafya Deneme Sınavları",
    price: 899.99,
    discountedPrice: 699.99,
    image:
      "https://assets-dopinghafiza.dopingtech.net/assets/files/shop/tyt-tum-ders-ayt-tum-dersler-b.jpg",
    detail: [
      { name: "TYT Coğrafya Soru Bankası" },
      { name: "Çözümlü Deneme Sınavları" },
      { name: "Performans Analizi" },
    ],
    categoryId: 1,
    installment: 800,
    description:
      "Sınava hazırlık sürecinde tüm kaynaklar tek platformda. TYT Tüm Dersler+AYT Sayısal 2024 paketimizdeki animasyon eksenli Serüvenlerle Fen Bilimleri, Reflekslerle Matematik formatı, özel konseptler, çözümlü soru bankası, deneme sınavları ve Çözücü uygulamasında 100 soru sorma hakkı, Koçum Yanımda uygulamasında 20 görüşme + 50 mesaj hakkı ve Şimdi Anladım uygulamasında 50 Ekspres Özel Ders hakkı ile YKS'ye hazırlanın!",
  },
  {
    id: 16,
    name: "Ayt Fizik Konu Anlatımlı",
    price: 1399.99,
    discountedPrice: 1099.99,
    image:
      "https://assets-dopinghafiza.dopingtech.net/assets/files/shop/tyt-tum-ders-ayt-tum-dersler-b.jpg",
    detail: [
      { name: "Ayt Fizik Konuları" },
      { name: "Örnek Sorular ve Çözümleri" },
      { name: "Detaylı Konu Anlatımları" },
    ],
    categoryId: 2,
    installment: 1700,
    description:
      "Sınava hazırlık sürecinde tüm kaynaklar tek platformda. TYT Tüm Dersler+AYT Sayısal 2024 paketimizdeki animasyon eksenli Serüvenlerle Fen Bilimleri, Reflekslerle Matematik formatı, özel konseptler, çözümlü soru bankası, deneme sınavları ve Çözücü uygulamasında 100 soru sorma hakkı, Koçum Yanımda uygulamasında 20 görüşme + 50 mesaj hakkı ve Şimdi Anladım uygulamasında 50 Ekspres Özel Ders hakkı ile YKS'ye hazırlanın!",
  },
  {
    id: 17,
    name: "TYT Biyoloji Test Kitabı",
    price: 799.99,
    discountedPrice: 599.99,
    image:
      "https://assets-dopinghafiza.dopingtech.net/assets/files/shop/tyt-tum-ders-ayt-tum-dersler-b.jpg",
    detail: [
      { name: "TYT Biyoloji Soru Bankası" },
      { name: "Çözümlü Testler" },
      { name: "Detaylı Konu Anlatımları" },
    ],
    categoryId: 3,
    installment: 1200,
    description:
      "Sınava hazırlık sürecinde tüm kaynaklar tek platformda. TYT Tüm Dersler+AYT Sayısal 2024 paketimizdeki animasyon eksenli Serüvenlerle Fen Bilimleri, Reflekslerle Matematik formatı, özel konseptler, çözümlü soru bankası, deneme sınavları ve Çözücü uygulamasında 100 soru sorma hakkı, Koçum Yanımda uygulamasında 20 görüşme + 50 mesaj hakkı ve Şimdi Anladım uygulamasında 50 Ekspres Özel Ders hakkı ile YKS'ye hazırlanın!",
  },
  {
    id: 18,
    name: "Ayt Kimya Deneme Sınavları",
    price: 1099.99,
    discountedPrice: 899.99,
    image:
      "https://assets-dopinghafiza.dopingtech.net/assets/files/shop/tyt-tum-ders-ayt-tum-dersler-b.jpg",
    detail: [
      { name: "Ayt Kimya Soru Bankası" },
      { name: "Deneme Sınavı" },
      { name: "Performans Analizi" },
    ],
    categoryId: 4,
    installment: 1500,
    description:
      "Sınava hazırlık sürecinde tüm kaynaklar tek platformda. TYT Tüm Dersler+AYT Sayısal 2024 paketimizdeki animasyon eksenli Serüvenlerle Fen Bilimleri, Reflekslerle Matematik formatı, özel konseptler, çözümlü soru bankası, deneme sınavları ve Çözücü uygulamasında 100 soru sorma hakkı, Koçum Yanımda uygulamasında 20 görüşme + 50 mesaj hakkı ve Şimdi Anladım uygulamasında 50 Ekspres Özel Ders hakkı ile YKS'ye hazırlanın!",
  },
  {
    id: 19,
    name: "TYT Türkçe Çözümlü Test Kitabı",
    price: 999.99,
    discountedPrice: 799.99,
    image:
      "https://assets-dopinghafiza.dopingtech.net/assets/files/shop/tyt-tum-ders-ayt-tum-dersler-b.jpg",
    detail: [
      { name: "TYT Türkçe Soru Bankası" },
      { name: "Çözümlü Testler" },
      { name: "Açıklamalı Çözümler" },
    ],
    categoryId: 5,
    installment: 800,
    description:
      "Sınava hazırlık sürecinde tüm kaynaklar tek platformda. TYT Tüm Dersler+AYT Sayısal 2024 paketimizdeki animasyon eksenli Serüvenlerle Fen Bilimleri, Reflekslerle Matematik formatı, özel konseptler, çözümlü soru bankası, deneme sınavları ve Çözücü uygulamasında 100 soru sorma hakkı, Koçum Yanımda uygulamasında 20 görüşme + 50 mesaj hakkı ve Şimdi Anladım uygulamasında 50 Ekspres Özel Ders hakkı ile YKS'ye hazırlanın!",
  },
  {
    id: 20,
    name: "Ayt Dil ve Anlatım Deneme Sınavları",
    price: 1299.99,
    discountedPrice: 999.99,
    image:
      "https://assets-dopinghafiza.dopingtech.net/assets/files/shop/tyt-tum-ders-ayt-tum-dersler-b.jpg",
    detail: [
      { name: "Ayt Dil ve Anlatım Soru Bankası" },
      { name: "Deneme Sınavları" },
      { name: "Performans Analizi" },
    ],
    categoryId: 6,
    installment: 1100,
    description:
      "Sınava hazırlık sürecinde tüm kaynaklar tek platformda. TYT Tüm Dersler+AYT Sayısal 2024 paketimizdeki animasyon eksenli Serüvenlerle Fen Bilimleri, Reflekslerle Matematik formatı, özel konseptler, çözümlü soru bankası, deneme sınavları ve Çözücü uygulamasında 100 soru sorma hakkı, Koçum Yanımda uygulamasında 20 görüşme + 50 mesaj hakkı ve Şimdi Anladım uygulamasında 50 Ekspres Özel Ders hakkı ile YKS'ye hazırlanın!",
  },
  {
    id: 21,
    name: "TYT Tüm Dersler + Ayt Sayısal 2025",
    price: 1599.99,
    discountedPrice: 1999.99,
    image:
      "https://assets-dopinghafiza.dopingtech.net/assets/files/shop/tyt-tum-ders-ayt-sayisal-b.jpg",
    detail: [
      { name: "7-24 Online" },
      { name: "53.783 Ders İçeriği" },
      { name: "5.541 Adet Ders Videosu" },
      { name: "45.272 Adet Video Cözümlü Soru Sayısı" },
      { name: "16.043 İnteraktif İçerği" },
    ],
    categoryId: 1,
    installment: 1300,
    description:
      "Sınava hazırlık sürecinde tüm kaynaklar tek platformda. TYT Tüm Dersler+AYT Sayısal 2024 paketimizdeki animasyon eksenli Serüvenlerle Fen Bilimleri, Reflekslerle Matematik formatı, özel konseptler, çözümlü soru bankası, deneme sınavları ve Çözücü uygulamasında 100 soru sorma hakkı, Koçum Yanımda uygulamasında 20 görüşme + 50 mesaj hakkı ve Şimdi Anladım uygulamasında 50 Ekspres Özel Ders hakkı ile YKS'ye hazırlanın!",
  },
  {
    id: 22,
    name: "Deneme Paketi 1",
    price: 1099.99,
    discountedPrice: 899.99,
    image:
      "https://assets-dopinghafiza.dopingtech.net/assets/files/shop/tyt-tum-ders-ayt-esit-b.jpg",
    detail: [
      { name: "10 Adet Deneme Sınavı" },
      { name: "Çözümlü ve Açıklamalı Sorular" },
      { name: "Performans Analizi" },
    ],
    categoryId: 2,
    installment: 900,
    description:
      "Sınava hazırlık sürecinde tüm kaynaklar tek platformda. TYT Tüm Dersler+AYT Sayısal 2024 paketimizdeki animasyon eksenli Serüvenlerle Fen Bilimleri, Reflekslerle Matematik formatı, özel konseptler, çözümlü soru bankası, deneme sınavları ve Çözücü uygulamasında 100 soru sorma hakkı, Koçum Yanımda uygulamasında 20 görüşme + 50 mesaj hakkı ve Şimdi Anladım uygulamasında 50 Ekspres Özel Ders hakkı ile YKS'ye hazırlanın!",
  },
  {
    id: 23,
    name: "Ayt Edebiyat Konu Anlatımlı",
    price: 1599.99,
    discountedPrice: 1299.99,
    image:
      "https://assets-dopinghafiza.dopingtech.net/assets/files/shop/tyt-tum-ders-ayt-tum-dersler-b.jpg",
    detail: [
      { name: "Edebiyat Konu Anlatımları" },
      { name: "Örnek Soru Çözümleri" },
      { name: "Detaylı Ders Notları" },
    ],
    categoryId: 3,
    installment: 1800,
    description:
      "Sınava hazırlık sürecinde tüm kaynaklar tek platformda. TYT Tüm Dersler+AYT Sayısal 2024 paketimizdeki animasyon eksenli Serüvenlerle Fen Bilimleri, Reflekslerle Matematik formatı, özel konseptler, çözümlü soru bankası, deneme sınavları ve Çözücü uygulamasında 100 soru sorma hakkı, Koçum Yanımda uygulamasında 20 görüşme + 50 mesaj hakkı ve Şimdi Anladım uygulamasında 50 Ekspres Özel Ders hakkı ile YKS'ye hazırlanın!",
  },
  {
    id: 24,
    name: "TYT Türkçe Test Çözüm Kitabı",
    price: 799.99,
    discountedPrice: 599.99,
    image:
      "https://assets-dopinghafiza.dopingtech.net/assets/files/shop/tyt-tum-ders-ayt-tum-dersler-b.jpg",
    detail: [
      { name: "TYT Türkçe Soru Bankası" },
      { name: "Çözümlü Testler" },
      { name: "Kapsamlı Konu Anlatımları" },
    ],
    categoryId: 4,
    installment: 1000,
    description:
      "Sınava hazırlık sürecinde tüm kaynaklar tek platformda. TYT Tüm Dersler+AYT Sayısal 2024 paketimizdeki animasyon eksenli Serüvenlerle Fen Bilimleri, Reflekslerle Matematik formatı, özel konseptler, çözümlü soru bankası, deneme sınavları ve Çözücü uygulamasında 100 soru sorma hakkı, Koçum Yanımda uygulamasında 20 görüşme + 50 mesaj hakkı ve Şimdi Anladım uygulamasında 50 Ekspres Özel Ders hakkı ile YKS'ye hazırlanın!",
  },
  {
    id: 25,
    name: "Ayt Matematik Deneme Sınavları",
    price: 1299.99,
    discountedPrice: 999.99,
    image:
      "https://assets-dopinghafiza.dopingtech.net/assets/files/shop/tyt-tum-ders-ayt-tum-dersler-b.jpg",
    detail: [
      { name: "Ayt Matematik Soru Bankası" },
      { name: "Çözümlü Deneme Sınavları" },
      { name: "Performans Analizi" },
    ],
    categoryId: 2,
    installment: 1200,
    description:
      "Sınava hazırlık sürecinde tüm kaynaklar tek platformda. TYT Tüm Dersler+AYT Sayısal 2024 paketimizdeki animasyon eksenli Serüvenlerle Fen Bilimleri, Reflekslerle Matematik formatı, özel konseptler, çözümlü soru bankası, deneme sınavları ve Çözücü uygulamasında 100 soru sorma hakkı, Koçum Yanımda uygulamasında 20 görüşme + 50 mesaj hakkı ve Şimdi Anladım uygulamasında 50 Ekspres Özel Ders hakkı ile YKS'ye hazırlanın!",
  },
  {
    id: 26,
    name: "TYT Fizik Konu Anlatımlı",
    price: 999.99,
    discountedPrice: 699.99,
    image:
      "https://assets-dopinghafiza.dopingtech.net/assets/files/shop/tyt-tum-ders-ayt-tum-dersler-b.jpg",
    detail: [
      { name: "TYT Fizik Ders Notları" },
      { name: "Örnek Sorular ve Çözümleri" },
      { name: "Konu Anlatım Videoları" },
    ],
    categoryId: 3,
    installment: 800,
    description:
      "Sınava hazırlık sürecinde tüm kaynaklar tek platformda. TYT Tüm Dersler+AYT Sayısal 2024 paketimizdeki animasyon eksenli Serüvenlerle Fen Bilimleri, Reflekslerle Matematik formatı, özel konseptler, çözümlü soru bankası, deneme sınavları ve Çözücü uygulamasında 100 soru sorma hakkı, Koçum Yanımda uygulamasında 20 görüşme + 50 mesaj hakkı ve Şimdi Anladım uygulamasında 50 Ekspres Özel Ders hakkı ile YKS'ye hazırlanın!",
  },
  {
    id: 27,
    name: "Ayt Kimya Soru Bankası",
    price: 1199.99,
    discountedPrice: 899.99,
    image:
      "https://assets-dopinghafiza.dopingtech.net/assets/files/shop/tyt-tum-ders-ayt-tum-dersler-b.jpg",
    detail: [
      { name: "Ayt Kimya Konu Anlatımları" },
      { name: "Çözümlü Soru Bankası" },
      { name: "Deneme Sınavları" },
    ],
    categoryId: 4,
    installment: 1500,
    description:
      "Sınava hazırlık sürecinde tüm kaynaklar tek platformda. TYT Tüm Dersler+AYT Sayısal 2024 paketimizdeki animasyon eksenli Serüvenlerle Fen Bilimleri, Reflekslerle Matematik formatı, özel konseptler, çözümlü soru bankası, deneme sınavları ve Çözücü uygulamasında 100 soru sorma hakkı, Koçum Yanımda uygulamasında 20 görüşme + 50 mesaj hakkı ve Şimdi Anladım uygulamasında 50 Ekspres Özel Ders hakkı ile YKS'ye hazırlanın!",
  },
  {
    id: 28,
    name: "TYT Coğrafya Konu Özetleri",
    price: 699.99,
    discountedPrice: 499.99,
    image:
      "https://assets-dopinghafiza.dopingtech.net/assets/files/shop/tyt-tum-ders-ayt-tum-dersler-b.jpg",
    detail: [
      { name: "TYT Coğrafya Konu Özetleri" },
      { name: "Grafikler ve Tablolarla Desteklenmiş" },
      { name: "Kolay Anlaşılır İçerik" },
    ],
    categoryId: 5,
    installment: 900,
    description:
      "Sınava hazırlık sürecinde tüm kaynaklar tek platformda. TYT Tüm Dersler+AYT Sayısal 2024 paketimizdeki animasyon eksenli Serüvenlerle Fen Bilimleri, Reflekslerle Matematik formatı, özel konseptler, çözümlü soru bankası, deneme sınavları ve Çözücü uygulamasında 100 soru sorma hakkı, Koçum Yanımda uygulamasında 20 görüşme + 50 mesaj hakkı ve Şimdi Anladım uygulamasında 50 Ekspres Özel Ders hakkı ile YKS'ye hazırlanın!",
  },
  {
    id: 29,
    name: "Ayt Biyoloji Konu Anlatımları",
    price: 1399.99,
    discountedPrice: 1099.99,
    image:
      "https://assets-dopinghafiza.dopingtech.net/assets/files/shop/tyt-tum-ders-ayt-tum-dersler-b.jpg",
    detail: [
      { name: "Ayt Biyoloji Konu Anlatımları" },
      { name: "Görsellerle Desteklenmiş" },
      { name: "Özet Bilgiler ve İp Uçları" },
    ],
    categoryId: 5,
    installment: 1300,
    description:
      "Sınava hazırlık sürecinde tüm kaynaklar tek platformda. TYT Tüm Dersler+AYT Sayısal 2024 paketimizdeki animasyon eksenli Serüvenlerle Fen Bilimleri, Reflekslerle Matematik formatı, özel konseptler, çözümlü soru bankası, deneme sınavları ve Çözücü uygulamasında 100 soru sorma hakkı, Koçum Yanımda uygulamasında 20 görüşme + 50 mesaj hakkı ve Şimdi Anladım uygulamasında 50 Ekspres Özel Ders hakkı ile YKS'ye hazırlanın!",
  },
  {
    id: 30,
    name: "TYT Tarih Test Çözümlü",
    price: 899.99,
    discountedPrice: 699.99,
    image:
      "https://assets-dopinghafiza.dopingtech.net/assets/files/shop/tyt-tum-ders-ayt-tum-dersler-b.jpg",
    detail: [
      { name: "TYT Tarih Soru Bankası" },
      { name: "Detaylı Çözümlü Testler" },
      { name: "Tarih Konu Anlatımları" },
    ],
    categoryId: 6,
    installment: 800,
    description:
      "Sınava hazırlık sürecinde tüm kaynaklar tek platformda. TYT Tüm Dersler+AYT Sayısal 2024 paketimizdeki animasyon eksenli Serüvenlerle Fen Bilimleri, Reflekslerle Matematik formatı, özel konseptler, çözümlü soru bankası, deneme sınavları ve Çözücü uygulamasında 100 soru sorma hakkı, Koçum Yanımda uygulamasında 20 görüşme + 50 mesaj hakkı ve Şimdi Anladım uygulamasında 50 Ekspres Özel Ders hakkı ile YKS'ye hazırlanın!",
  },
  {
    id: 31,
    name: "TYT Kimya Deneme Sınavı",
    price: 1199.99,
    discountedPrice: 899.99,
    image:
      "https://assets-dopinghafiza.dopingtech.net/assets/files/shop/tyt-tum-ders-ayt-tum-dersler-b.jpg",
    detail: [
      { name: "TYT Kimya Soru Bankası" },
      { name: "Deneme Sınavı" },
      { name: "Performans Analizi" },
    ],
    categoryId: 7,
    installment: 1600,
    description:
      "Sınava hazırlık sürecinde tüm kaynaklar tek platformda. TYT Tüm Dersler+AYT Sayısal 2024 paketimizdeki animasyon eksenli Serüvenlerle Fen Bilimleri, Reflekslerle Matematik formatı, özel konseptler, çözümlü soru bankası, deneme sınavları ve Çözücü uygulamasında 100 soru sorma hakkı, Koçum Yanımda uygulamasında 20 görüşme + 50 mesaj hakkı ve Şimdi Anladım uygulamasında 50 Ekspres Özel Ders hakkı ile YKS'ye hazırlanın!",
  },
  {
    id: 32,
    name: "Ayt Dil ve Anlatım Çözümlü Soru Bankası",
    price: 1499.99,
    discountedPrice: 1199.99,
    image:
      "https://assets-dopinghafiza.dopingtech.net/assets/files/shop/tyt-tum-ders-ayt-tum-dersler-b.jpg",
    detail: [
      { name: "Ayt Dil ve Anlatım Soru Bankası" },
      { name: "Detaylı Çözümlü Sorular" },
      { name: "Açıklamalı Çözümler" },
    ],
    categoryId: 8,
    installment: 1100,
    description:
      "Sınava hazırlık sürecinde tüm kaynaklar tek platformda. TYT Tüm Dersler+AYT Sayısal 2024 paketimizdeki animasyon eksenli Serüvenlerle Fen Bilimleri, Reflekslerle Matematik formatı, özel konseptler, çözümlü soru bankası, deneme sınavları ve Çözücü uygulamasında 100 soru sorma hakkı, Koçum Yanımda uygulamasında 20 görüşme + 50 mesaj hakkı ve Şimdi Anladım uygulamasında 50 Ekspres Özel Ders hakkı ile YKS'ye hazırlanın!",
  },
  {
    id: 33,
    name: "TYT Tarih Konu Anlatımlı",
    price: 999.99,
    discountedPrice: 799.99,
    image:
      "https://assets-dopinghafiza.dopingtech.net/assets/files/shop/tyt-tum-ders-ayt-tum-dersler-b.jpg",
    detail: [
      { name: "TYT Tarih Konu Anlatımları" },
      { name: "Özet Bilgiler" },
      { name: "Grafiklerle Desteklenmiş" },
    ],
    categoryId: 9,
    installment: 1000,
    description:
      "Sınava hazırlık sürecinde tüm kaynaklar tek platformda. TYT Tüm Dersler+AYT Sayısal 2024 paketimizdeki animasyon eksenli Serüvenlerle Fen Bilimleri, Reflekslerle Matematik formatı, özel konseptler, çözümlü soru bankası, deneme sınavları ve Çözücü uygulamasında 100 soru sorma hakkı, Koçum Yanımda uygulamasında 20 görüşme + 50 mesaj hakkı ve Şimdi Anladım uygulamasında 50 Ekspres Özel Ders hakkı ile YKS'ye hazırlanın!",
  },
  {
    id: 34,
    name: "Ayt Felsefe Kitabı",
    price: 1199.99,
    discountedPrice: 999.99,
    image:
      "https://assets-dopinghafiza.dopingtech.net/assets/files/shop/tyt-tum-ders-ayt-tum-dersler-b.jpg",
    detail: [
      { name: "Ayt Felsefe Konuları" },
      { name: "Örnek Sorular ve Çözümleri" },
      { name: "Açıklamalı Soru Bankası" },
    ],
    categoryId: 10,
    installment: 1400,
    description:
      "Sınava hazırlık sürecinde tüm kaynaklar tek platformda. TYT Tüm Dersler+AYT Sayısal 2024 paketimizdeki animasyon eksenli Serüvenlerle Fen Bilimleri, Reflekslerle Matematik formatı, özel konseptler, çözümlü soru bankası, deneme sınavları ve Çözücü uygulamasında 100 soru sorma hakkı, Koçum Yanımda uygulamasında 20 görüşme + 50 mesaj hakkı ve Şimdi Anladım uygulamasında 50 Ekspres Özel Ders hakkı ile YKS'ye hazırlanın!",
  },
  {
    id: 35,
    name: "TYT Coğrafya Deneme Sınavları",
    price: 899.99,
    discountedPrice: 699.99,
    image:
      "https://assets-dopinghafiza.dopingtech.net/assets/files/shop/tyt-tum-ders-ayt-tum-dersler-b.jpg",
    detail: [
      { name: "TYT Coğrafya Soru Bankası" },
      { name: "Çözümlü Deneme Sınavları" },
      { name: "Performans Analizi" },
    ],
    categoryId: 1,
    installment: 800,
    description:
      "Sınava hazırlık sürecinde tüm kaynaklar tek platformda. TYT Tüm Dersler+AYT Sayısal 2024 paketimizdeki animasyon eksenli Serüvenlerle Fen Bilimleri, Reflekslerle Matematik formatı, özel konseptler, çözümlü soru bankası, deneme sınavları ve Çözücü uygulamasında 100 soru sorma hakkı, Koçum Yanımda uygulamasında 20 görüşme + 50 mesaj hakkı ve Şimdi Anladım uygulamasında 50 Ekspres Özel Ders hakkı ile YKS'ye hazırlanın!",
  },
  {
    id: 36,
    name: "Ayt Fizik Konu Anlatımlı",
    price: 1399.99,
    discountedPrice: 1099.99,
    image:
      "https://assets-dopinghafiza.dopingtech.net/assets/files/shop/tyt-tum-ders-ayt-tum-dersler-b.jpg",
    detail: [
      { name: "Ayt Fizik Konuları" },
      { name: "Örnek Sorular ve Çözümleri" },
      { name: "Detaylı Konu Anlatımları" },
    ],
    categoryId: 2,
    installment: 1700,
    description:
      "Sınava hazırlık sürecinde tüm kaynaklar tek platformda. TYT Tüm Dersler+AYT Sayısal 2024 paketimizdeki animasyon eksenli Serüvenlerle Fen Bilimleri, Reflekslerle Matematik formatı, özel konseptler, çözümlü soru bankası, deneme sınavları ve Çözücü uygulamasında 100 soru sorma hakkı, Koçum Yanımda uygulamasında 20 görüşme + 50 mesaj hakkı ve Şimdi Anladım uygulamasında 50 Ekspres Özel Ders hakkı ile YKS'ye hazırlanın!",
  },
  {
    id: 37,
    name: "TYT Biyoloji Test Kitabı",
    price: 799.99,
    discountedPrice: 599.99,
    image:
      "https://assets-dopinghafiza.dopingtech.net/assets/files/shop/tyt-tum-ders-ayt-tum-dersler-b.jpg",
    detail: [
      { name: "TYT Biyoloji Soru Bankası" },
      { name: "Çözümlü Testler" },
      { name: "Detaylı Konu Anlatımları" },
    ],
    categoryId: 3,
    installment: 1200,
    description:
      "Sınava hazırlık sürecinde tüm kaynaklar tek platformda. TYT Tüm Dersler+AYT Sayısal 2024 paketimizdeki animasyon eksenli Serüvenlerle Fen Bilimleri, Reflekslerle Matematik formatı, özel konseptler, çözümlü soru bankası, deneme sınavları ve Çözücü uygulamasında 100 soru sorma hakkı, Koçum Yanımda uygulamasında 20 görüşme + 50 mesaj hakkı ve Şimdi Anladım uygulamasında 50 Ekspres Özel Ders hakkı ile YKS'ye hazırlanın!",
  },
  {
    id: 38,
    name: "Ayt Kimya Deneme Sınavları",
    price: 1099.99,
    discountedPrice: 899.99,
    image:
      "https://assets-dopinghafiza.dopingtech.net/assets/files/shop/tyt-tum-ders-ayt-tum-dersler-b.jpg",
    detail: [
      { name: "Ayt Kimya Soru Bankası" },
      { name: "Deneme Sınavı" },
      { name: "Performans Analizi" },
    ],
    categoryId: 4,
    installment: 1500,
    description:
      "Sınava hazırlık sürecinde tüm kaynaklar tek platformda. TYT Tüm Dersler+AYT Sayısal 2024 paketimizdeki animasyon eksenli Serüvenlerle Fen Bilimleri, Reflekslerle Matematik formatı, özel konseptler, çözümlü soru bankası, deneme sınavları ve Çözücü uygulamasında 100 soru sorma hakkı, Koçum Yanımda uygulamasında 20 görüşme + 50 mesaj hakkı ve Şimdi Anladım uygulamasında 50 Ekspres Özel Ders hakkı ile YKS'ye hazırlanın!",
  },
  {
    id: 39,
    name: "TYT Türkçe Çözümlü Test Kitabı",
    price: 999.99,
    discountedPrice: 799.99,
    image:
      "https://assets-dopinghafiza.dopingtech.net/assets/files/shop/tyt-tum-ders-ayt-tum-dersler-b.jpg",
    detail: [
      { name: "TYT Türkçe Soru Bankası" },
      { name: "Çözümlü Testler" },
      { name: "Açıklamalı Çözümler" },
    ],
    categoryId: 5,
    installment: 800,
    description:
      "Sınava hazırlık sürecinde tüm kaynaklar tek platformda. TYT Tüm Dersler+AYT Sayısal 2024 paketimizdeki animasyon eksenli Serüvenlerle Fen Bilimleri, Reflekslerle Matematik formatı, özel konseptler, çözümlü soru bankası, deneme sınavları ve Çözücü uygulamasında 100 soru sorma hakkı, Koçum Yanımda uygulamasında 20 görüşme + 50 mesaj hakkı ve Şimdi Anladım uygulamasında 50 Ekspres Özel Ders hakkı ile YKS'ye hazırlanın!",
  },
  {
    id: 40,
    name: "Ayt Dil ve Anlatım Deneme Sınavları",
    price: 1299.99,
    discountedPrice: 999.99,
    image:
      "https://assets-dopinghafiza.dopingtech.net/assets/files/shop/tyt-tum-ders-ayt-tum-dersler-b.jpg",
    detail: [
      { name: "Ayt Dil ve Anlatım Soru Bankası" },
      { name: "Deneme Sınavları" },
      { name: "Performans Analizi" },
    ],
    categoryId: 6,
    installment: 1100,
    description:
      "Sınava hazırlık sürecinde tüm kaynaklar tek platformda. TYT Tüm Dersler+AYT Sayısal 2024 paketimizdeki animasyon eksenli Serüvenlerle Fen Bilimleri, Reflekslerle Matematik formatı, özel konseptler, çözümlü soru bankası, deneme sınavları ve Çözücü uygulamasında 100 soru sorma hakkı, Koçum Yanımda uygulamasında 20 görüşme + 50 mesaj hakkı ve Şimdi Anladım uygulamasında 50 Ekspres Özel Ders hakkı ile YKS'ye hazırlanın!",
  },
  {
    id: 41,
    name: "TYT Tüm Dersler + Ayt Sayısal 2025",
    price: 1599.99,
    discountedPrice: 1999.99,
    image:
      "https://assets-dopinghafiza.dopingtech.net/assets/files/shop/tyt-tum-ders-ayt-sayisal-b.jpg",
    detail: [
      { name: "7-24 Online" },
      { name: "53.783 Ders İçeriği" },
      { name: "5.541 Adet Ders Videosu" },
      { name: "45.272 Adet Video Cözümlü Soru Sayısı" },
      { name: "16.043 İnteraktif İçerği" },
    ],
    categoryId: 1,
    installment: 1300,
    description:
      "Sınava hazırlık sürecinde tüm kaynaklar tek platformda. TYT Tüm Dersler+AYT Sayısal 2024 paketimizdeki animasyon eksenli Serüvenlerle Fen Bilimleri, Reflekslerle Matematik formatı, özel konseptler, çözümlü soru bankası, deneme sınavları ve Çözücü uygulamasında 100 soru sorma hakkı, Koçum Yanımda uygulamasında 20 görüşme + 50 mesaj hakkı ve Şimdi Anladım uygulamasında 50 Ekspres Özel Ders hakkı ile YKS'ye hazırlanın!",
  },
  {
    id: 42,
    name: "Deneme Paketi 1",
    price: 1099.99,
    discountedPrice: 899.99,
    image:
      "https://assets-dopinghafiza.dopingtech.net/assets/files/shop/tyt-tum-ders-ayt-esit-b.jpg",
    detail: [
      { name: "10 Adet Deneme Sınavı" },
      { name: "Çözümlü ve Açıklamalı Sorular" },
      { name: "Performans Analizi" },
    ],
    categoryId: 2,
    installment: 900,
    description:
      "Sınava hazırlık sürecinde tüm kaynaklar tek platformda. TYT Tüm Dersler+AYT Sayısal 2024 paketimizdeki animasyon eksenli Serüvenlerle Fen Bilimleri, Reflekslerle Matematik formatı, özel konseptler, çözümlü soru bankası, deneme sınavları ve Çözücü uygulamasında 100 soru sorma hakkı, Koçum Yanımda uygulamasında 20 görüşme + 50 mesaj hakkı ve Şimdi Anladım uygulamasında 50 Ekspres Özel Ders hakkı ile YKS'ye hazırlanın!",
  },
  {
    id: 43,
    name: "Ayt Edebiyat Konu Anlatımlı",
    price: 1599.99,
    discountedPrice: 1299.99,
    image:
      "https://assets-dopinghafiza.dopingtech.net/assets/files/shop/tyt-tum-ders-ayt-tum-dersler-b.jpg",
    detail: [
      { name: "Edebiyat Konu Anlatımları" },
      { name: "Örnek Soru Çözümleri" },
      { name: "Detaylı Ders Notları" },
    ],
    categoryId: 3,
    installment: 1800,
    description:
      "Sınava hazırlık sürecinde tüm kaynaklar tek platformda. TYT Tüm Dersler+AYT Sayısal 2024 paketimizdeki animasyon eksenli Serüvenlerle Fen Bilimleri, Reflekslerle Matematik formatı, özel konseptler, çözümlü soru bankası, deneme sınavları ve Çözücü uygulamasında 100 soru sorma hakkı, Koçum Yanımda uygulamasında 20 görüşme + 50 mesaj hakkı ve Şimdi Anladım uygulamasında 50 Ekspres Özel Ders hakkı ile YKS'ye hazırlanın!",
  },
  {
    id: 44,
    name: "TYT Türkçe Test Çözüm Kitabı",
    price: 799.99,
    discountedPrice: 599.99,
    image:
      "https://assets-dopinghafiza.dopingtech.net/assets/files/shop/tyt-tum-ders-ayt-tum-dersler-b.jpg",
    detail: [
      { name: "TYT Türkçe Soru Bankası" },
      { name: "Çözümlü Testler" },
      { name: "Kapsamlı Konu Anlatımları" },
    ],
    categoryId: 4,
    installment: 1000,
    description:
      "Sınava hazırlık sürecinde tüm kaynaklar tek platformda. TYT Tüm Dersler+AYT Sayısal 2024 paketimizdeki animasyon eksenli Serüvenlerle Fen Bilimleri, Reflekslerle Matematik formatı, özel konseptler, çözümlü soru bankası, deneme sınavları ve Çözücü uygulamasında 100 soru sorma hakkı, Koçum Yanımda uygulamasında 20 görüşme + 50 mesaj hakkı ve Şimdi Anladım uygulamasında 50 Ekspres Özel Ders hakkı ile YKS'ye hazırlanın!",
  },
  {
    id: 45,
    name: "Ayt Matematik Deneme Sınavları",
    price: 1299.99,
    discountedPrice: 999.99,
    image:
      "https://assets-dopinghafiza.dopingtech.net/assets/files/shop/tyt-tum-ders-ayt-tum-dersler-b.jpg",
    detail: [
      { name: "Ayt Matematik Soru Bankası" },
      { name: "Çözümlü Deneme Sınavları" },
      { name: "Performans Analizi" },
    ],
    categoryId: 2,
    installment: 1200,
    description:
      "Sınava hazırlık sürecinde tüm kaynaklar tek platformda. TYT Tüm Dersler+AYT Sayısal 2024 paketimizdeki animasyon eksenli Serüvenlerle Fen Bilimleri, Reflekslerle Matematik formatı, özel konseptler, çözümlü soru bankası, deneme sınavları ve Çözücü uygulamasında 100 soru sorma hakkı, Koçum Yanımda uygulamasında 20 görüşme + 50 mesaj hakkı ve Şimdi Anladım uygulamasında 50 Ekspres Özel Ders hakkı ile YKS'ye hazırlanın!",
  },
  {
    id: 46,
    name: "TYT Fizik Konu Anlatımlı",
    price: 999.99,
    discountedPrice: 699.99,
    image:
      "https://assets-dopinghafiza.dopingtech.net/assets/files/shop/tyt-tum-ders-ayt-tum-dersler-b.jpg",
    detail: [
      { name: "TYT Fizik Ders Notları" },
      { name: "Örnek Sorular ve Çözümleri" },
      { name: "Konu Anlatım Videoları" },
    ],
    categoryId: 3,
    installment: 800,
    description:
      "Sınava hazırlık sürecinde tüm kaynaklar tek platformda. TYT Tüm Dersler+AYT Sayısal 2024 paketimizdeki animasyon eksenli Serüvenlerle Fen Bilimleri, Reflekslerle Matematik formatı, özel konseptler, çözümlü soru bankası, deneme sınavları ve Çözücü uygulamasında 100 soru sorma hakkı, Koçum Yanımda uygulamasında 20 görüşme + 50 mesaj hakkı ve Şimdi Anladım uygulamasında 50 Ekspres Özel Ders hakkı ile YKS'ye hazırlanın!",
  },
  {
    id: 47,
    name: "Ayt Kimya Soru Bankası",
    price: 1199.99,
    discountedPrice: 899.99,
    image:
      "https://assets-dopinghafiza.dopingtech.net/assets/files/shop/tyt-tum-ders-ayt-tum-dersler-b.jpg",
    detail: [
      { name: "Ayt Kimya Konu Anlatımları" },
      { name: "Çözümlü Soru Bankası" },
      { name: "Deneme Sınavları" },
    ],
    categoryId: 4,
    installment: 1500,
    description:
      "Sınava hazırlık sürecinde tüm kaynaklar tek platformda. TYT Tüm Dersler+AYT Sayısal 2024 paketimizdeki animasyon eksenli Serüvenlerle Fen Bilimleri, Reflekslerle Matematik formatı, özel konseptler, çözümlü soru bankası, deneme sınavları ve Çözücü uygulamasında 100 soru sorma hakkı, Koçum Yanımda uygulamasında 20 görüşme + 50 mesaj hakkı ve Şimdi Anladım uygulamasında 50 Ekspres Özel Ders hakkı ile YKS'ye hazırlanın!",
  },
  {
    id: 48,
    name: "TYT Coğrafya Konu Özetleri",
    price: 699.99,
    discountedPrice: 499.99,
    image:
      "https://assets-dopinghafiza.dopingtech.net/assets/files/shop/tyt-tum-ders-ayt-tum-dersler-b.jpg",
    detail: [
      { name: "TYT Coğrafya Konu Özetleri" },
      { name: "Grafikler ve Tablolarla Desteklenmiş" },
      { name: "Kolay Anlaşılır İçerik" },
    ],
    categoryId: 5,
    installment: 900,
    description:
      "Sınava hazırlık sürecinde tüm kaynaklar tek platformda. TYT Tüm Dersler+AYT Sayısal 2024 paketimizdeki animasyon eksenli Serüvenlerle Fen Bilimleri, Reflekslerle Matematik formatı, özel konseptler, çözümlü soru bankası, deneme sınavları ve Çözücü uygulamasında 100 soru sorma hakkı, Koçum Yanımda uygulamasında 20 görüşme + 50 mesaj hakkı ve Şimdi Anladım uygulamasında 50 Ekspres Özel Ders hakkı ile YKS'ye hazırlanın!",
  },
  {
    id: 49,
    name: "Ayt Biyoloji Konu Anlatımları",
    price: 1399.99,
    discountedPrice: 1099.99,
    image:
      "https://assets-dopinghafiza.dopingtech.net/assets/files/shop/tyt-tum-ders-ayt-tum-dersler-b.jpg",
    detail: [
      { name: "Ayt Biyoloji Konu Anlatımları" },
      { name: "Görsellerle Desteklenmiş" },
      { name: "Özet Bilgiler ve İp Uçları" },
    ],
    categoryId: 5,
    installment: 1300,
    description:
      "Sınava hazırlık sürecinde tüm kaynaklar tek platformda. TYT Tüm Dersler+AYT Sayısal 2024 paketimizdeki animasyon eksenli Serüvenlerle Fen Bilimleri, Reflekslerle Matematik formatı, özel konseptler, çözümlü soru bankası, deneme sınavları ve Çözücü uygulamasında 100 soru sorma hakkı, Koçum Yanımda uygulamasında 20 görüşme + 50 mesaj hakkı ve Şimdi Anladım uygulamasında 50 Ekspres Özel Ders hakkı ile YKS'ye hazırlanın!",
  },
  {
    id: 50,
    name: "TYT Tarih Test Çözümlü",
    price: 899.99,
    discountedPrice: 699.99,
    image:
      "https://assets-dopinghafiza.dopingtech.net/assets/files/shop/tyt-tum-ders-ayt-tum-dersler-b.jpg",
    detail: [
      { name: "TYT Tarih Soru Bankası" },
      { name: "Detaylı Çözümlü Testler" },
      { name: "Tarih Konu Anlatımları" },
    ],
    categoryId: 6,
    installment: 800,
    description:
      "Sınava hazırlık sürecinde tüm kaynaklar tek platformda. TYT Tüm Dersler+AYT Sayısal 2024 paketimizdeki animasyon eksenli Serüvenlerle Fen Bilimleri, Reflekslerle Matematik formatı, özel konseptler, çözümlü soru bankası, deneme sınavları ve Çözücü uygulamasında 100 soru sorma hakkı, Koçum Yanımda uygulamasında 20 görüşme + 50 mesaj hakkı ve Şimdi Anladım uygulamasında 50 Ekspres Özel Ders hakkı ile YKS'ye hazırlanın!",
  },
  {
    id: 51,
    name: "TYT Kimya Deneme Sınavı",
    price: 1199.99,
    discountedPrice: 899.99,
    image:
      "https://assets-dopinghafiza.dopingtech.net/assets/files/shop/tyt-tum-ders-ayt-tum-dersler-b.jpg",
    detail: [
      { name: "TYT Kimya Soru Bankası" },
      { name: "Deneme Sınavı" },
      { name: "Performans Analizi" },
    ],
    categoryId: 7,
    installment: 1600,
    description:
      "Sınava hazırlık sürecinde tüm kaynaklar tek platformda. TYT Tüm Dersler+AYT Sayısal 2024 paketimizdeki animasyon eksenli Serüvenlerle Fen Bilimleri, Reflekslerle Matematik formatı, özel konseptler, çözümlü soru bankası, deneme sınavları ve Çözücü uygulamasında 100 soru sorma hakkı, Koçum Yanımda uygulamasında 20 görüşme + 50 mesaj hakkı ve Şimdi Anladım uygulamasında 50 Ekspres Özel Ders hakkı ile YKS'ye hazırlanın!",
  },
  {
    id: 52,
    name: "Ayt Dil ve Anlatım Çözümlü Soru Bankası",
    price: 1499.99,
    discountedPrice: 1199.99,
    image:
      "https://assets-dopinghafiza.dopingtech.net/assets/files/shop/tyt-tum-ders-ayt-tum-dersler-b.jpg",
    detail: [
      { name: "Ayt Dil ve Anlatım Soru Bankası" },
      { name: "Detaylı Çözümlü Sorular" },
      { name: "Açıklamalı Çözümler" },
    ],
    categoryId: 8,
    installment: 1100,
    description:
      "Sınava hazırlık sürecinde tüm kaynaklar tek platformda. TYT Tüm Dersler+AYT Sayısal 2024 paketimizdeki animasyon eksenli Serüvenlerle Fen Bilimleri, Reflekslerle Matematik formatı, özel konseptler, çözümlü soru bankası, deneme sınavları ve Çözücü uygulamasında 100 soru sorma hakkı, Koçum Yanımda uygulamasında 20 görüşme + 50 mesaj hakkı ve Şimdi Anladım uygulamasında 50 Ekspres Özel Ders hakkı ile YKS'ye hazırlanın!",
  },
  {
    id: 53,
    name: "TYT Tarih Konu Anlatımlı",
    price: 999.99,
    discountedPrice: 799.99,
    image:
      "https://assets-dopinghafiza.dopingtech.net/assets/files/shop/tyt-tum-ders-ayt-tum-dersler-b.jpg",
    detail: [
      { name: "TYT Tarih Konu Anlatımları" },
      { name: "Özet Bilgiler" },
      { name: "Grafiklerle Desteklenmiş" },
    ],
    categoryId: 9,
    installment: 1000,
    description:
      "Sınava hazırlık sürecinde tüm kaynaklar tek platformda. TYT Tüm Dersler+AYT Sayısal 2024 paketimizdeki animasyon eksenli Serüvenlerle Fen Bilimleri, Reflekslerle Matematik formatı, özel konseptler, çözümlü soru bankası, deneme sınavları ve Çözücü uygulamasında 100 soru sorma hakkı, Koçum Yanımda uygulamasında 20 görüşme + 50 mesaj hakkı ve Şimdi Anladım uygulamasında 50 Ekspres Özel Ders hakkı ile YKS'ye hazırlanın!",
  },
  {
    id: 54,
    name: "Ayt Felsefe Kitabı",
    price: 1199.99,
    discountedPrice: 999.99,
    image:
      "https://assets-dopinghafiza.dopingtech.net/assets/files/shop/tyt-tum-ders-ayt-tum-dersler-b.jpg",
    detail: [
      { name: "Ayt Felsefe Konuları" },
      { name: "Örnek Sorular ve Çözümleri" },
      { name: "Açıklamalı Soru Bankası" },
    ],
    categoryId: 10,
    installment: 1400,
    description:
      "Sınava hazırlık sürecinde tüm kaynaklar tek platformda. TYT Tüm Dersler+AYT Sayısal 2024 paketimizdeki animasyon eksenli Serüvenlerle Fen Bilimleri, Reflekslerle Matematik formatı, özel konseptler, çözümlü soru bankası, deneme sınavları ve Çözücü uygulamasında 100 soru sorma hakkı, Koçum Yanımda uygulamasında 20 görüşme + 50 mesaj hakkı ve Şimdi Anladım uygulamasında 50 Ekspres Özel Ders hakkı ile YKS'ye hazırlanın!",
  },
  {
    id: 55,
    name: "TYT Coğrafya Deneme Sınavları",
    price: 899.99,
    discountedPrice: 699.99,
    image:
      "https://assets-dopinghafiza.dopingtech.net/assets/files/shop/tyt-tum-ders-ayt-tum-dersler-b.jpg",
    detail: [
      { name: "TYT Coğrafya Soru Bankası" },
      { name: "Çözümlü Deneme Sınavları" },
      { name: "Performans Analizi" },
    ],
    categoryId: 1,
    installment: 800,
    description:
      "Sınava hazırlık sürecinde tüm kaynaklar tek platformda. TYT Tüm Dersler+AYT Sayısal 2024 paketimizdeki animasyon eksenli Serüvenlerle Fen Bilimleri, Reflekslerle Matematik formatı, özel konseptler, çözümlü soru bankası, deneme sınavları ve Çözücü uygulamasında 100 soru sorma hakkı, Koçum Yanımda uygulamasında 20 görüşme + 50 mesaj hakkı ve Şimdi Anladım uygulamasında 50 Ekspres Özel Ders hakkı ile YKS'ye hazırlanın!",
  },
  {
    id: 56,
    name: "Ayt Fizik Konu Anlatımlı",
    price: 1399.99,
    discountedPrice: 1099.99,
    image:
      "https://assets-dopinghafiza.dopingtech.net/assets/files/shop/tyt-tum-ders-ayt-tum-dersler-b.jpg",
    detail: [
      { name: "Ayt Fizik Konuları" },
      { name: "Örnek Sorular ve Çözümleri" },
      { name: "Detaylı Konu Anlatımları" },
    ],
    categoryId: 2,
    installment: 1700,
    description:
      "Sınava hazırlık sürecinde tüm kaynaklar tek platformda. TYT Tüm Dersler+AYT Sayısal 2024 paketimizdeki animasyon eksenli Serüvenlerle Fen Bilimleri, Reflekslerle Matematik formatı, özel konseptler, çözümlü soru bankası, deneme sınavları ve Çözücü uygulamasında 100 soru sorma hakkı, Koçum Yanımda uygulamasında 20 görüşme + 50 mesaj hakkı ve Şimdi Anladım uygulamasında 50 Ekspres Özel Ders hakkı ile YKS'ye hazırlanın!",
  },
  {
    id: 57,
    name: "TYT Biyoloji Test Kitabı",
    price: 799.99,
    discountedPrice: 599.99,
    image:
      "https://assets-dopinghafiza.dopingtech.net/assets/files/shop/tyt-tum-ders-ayt-tum-dersler-b.jpg",
    detail: [
      { name: "TYT Biyoloji Soru Bankası" },
      { name: "Çözümlü Testler" },
      { name: "Detaylı Konu Anlatımları" },
    ],
    categoryId: 3,
    installment: 1200,
    description:
      "Sınava hazırlık sürecinde tüm kaynaklar tek platformda. TYT Tüm Dersler+AYT Sayısal 2024 paketimizdeki animasyon eksenli Serüvenlerle Fen Bilimleri, Reflekslerle Matematik formatı, özel konseptler, çözümlü soru bankası, deneme sınavları ve Çözücü uygulamasında 100 soru sorma hakkı, Koçum Yanımda uygulamasında 20 görüşme + 50 mesaj hakkı ve Şimdi Anladım uygulamasında 50 Ekspres Özel Ders hakkı ile YKS'ye hazırlanın!",
  },
  {
    id: 58,
    name: "Ayt Kimya Deneme Sınavları",
    price: 1099.99,
    discountedPrice: 899.99,
    image:
      "https://assets-dopinghafiza.dopingtech.net/assets/files/shop/tyt-tum-ders-ayt-tum-dersler-b.jpg",
    detail: [
      { name: "Ayt Kimya Soru Bankası" },
      { name: "Deneme Sınavı" },
      { name: "Performans Analizi" },
    ],
    categoryId: 4,
    installment: 1500,
    description:
      "Sınava hazırlık sürecinde tüm kaynaklar tek platformda. TYT Tüm Dersler+AYT Sayısal 2024 paketimizdeki animasyon eksenli Serüvenlerle Fen Bilimleri, Reflekslerle Matematik formatı, özel konseptler, çözümlü soru bankası, deneme sınavları ve Çözücü uygulamasında 100 soru sorma hakkı, Koçum Yanımda uygulamasında 20 görüşme + 50 mesaj hakkı ve Şimdi Anladım uygulamasında 50 Ekspres Özel Ders hakkı ile YKS'ye hazırlanın!",
  },
  {
    id: 59,
    name: "TYT Türkçe Çözümlü Test Kitabı",
    price: 999.99,
    discountedPrice: 799.99,
    image:
      "https://assets-dopinghafiza.dopingtech.net/assets/files/shop/tyt-tum-ders-ayt-tum-dersler-b.jpg",
    detail: [
      { name: "TYT Türkçe Soru Bankası" },
      { name: "Çözümlü Testler" },
      { name: "Açıklamalı Çözümler" },
    ],
    categoryId: 5,
    installment: 800,
    description:
      "Sınava hazırlık sürecinde tüm kaynaklar tek platformda. TYT Tüm Dersler+AYT Sayısal 2024 paketimizdeki animasyon eksenli Serüvenlerle Fen Bilimleri, Reflekslerle Matematik formatı, özel konseptler, çözümlü soru bankası, deneme sınavları ve Çözücü uygulamasında 100 soru sorma hakkı, Koçum Yanımda uygulamasında 20 görüşme + 50 mesaj hakkı ve Şimdi Anladım uygulamasında 50 Ekspres Özel Ders hakkı ile YKS'ye hazırlanın!",
  },
  {
    id: 60,
    name: "Ayt Dil ve Anlatım Deneme Sınavları",
    price: 1299.99,
    discountedPrice: 999.99,
    image:
      "https://assets-dopinghafiza.dopingtech.net/assets/files/shop/tyt-tum-ders-ayt-tum-dersler-b.jpg",
    detail: [
      { name: "Ayt Dil ve Anlatım Soru Bankası" },
      { name: "Deneme Sınavları" },
      { name: "Performans Analizi" },
    ],
    categoryId: 6,
    installment: 1100,
    description:
      "Sınava hazırlık sürecinde tüm kaynaklar tek platformda. TYT Tüm Dersler+AYT Sayısal 2024 paketimizdeki animasyon eksenli Serüvenlerle Fen Bilimleri, Reflekslerle Matematik formatı, özel konseptler, çözümlü soru bankası, deneme sınavları ve Çözücü uygulamasında 100 soru sorma hakkı, Koçum Yanımda uygulamasında 20 görüşme + 50 mesaj hakkı ve Şimdi Anladım uygulamasında 50 Ekspres Özel Ders hakkı ile YKS'ye hazırlanın!",
  },
];
