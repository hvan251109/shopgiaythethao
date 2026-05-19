import Image from "next/image";
import styles from "./page.module.css"; 
// Lưu ý: Thư mục Footer viết hoa chữ F, header viết thường theo ảnh của bạn
import Header from "@/app/components/header/header"; 
import Footer from "@/app/components/Footer/footer"; 

async function getProduct(id) {
  const products = [
    {
      id: "1",
      name: "Giày chạy bộ nam Asics Sonicblast",
      price: 2950000,
      oldPrice: 4000000,
      image: "/hinh1.png",
      description: "Asics Sonicblast mang lại cảm giác chạy khá “bốc” và đàn hồi tốt nhờ cấu trúc đệm kép FF Turbo² + FF Blast Max cùng tấm Astroplate bên trong.",
    },
    {
      id: "2",
      name: "Giày Nike Air Jordan 1 Retro Low Dior CN8608-002",
      price: 2050000,
      oldPrice: 2669000,
      image: "/hinh2.png",
      description: "Nike Air Jordan 1 Retro Low Dior CN8608-002 mang lại cảm giác “luxury sneaker” rõ rệt hơn hầu hết Jordan 1 Low thông thường.",
    },
    {
      id: "3",
      name: "Giày Kamito Galaxy - KMGC240424 - Xanh Ngọc",
      price: 2050000,
      oldPrice: 2529000,
      image: "/hinh3.webp",
      description: "Giày Kamito Galaxy KMGC240424 Xanh Ngọc mang lại cảm giác khá dễ chịu và “dễ làm quen”, đặc biệt với người chơi cầu lông hoặc pickleball phong trào cần.",
    },
    {
      id: "4",
      name: "Giày Nike Air Zoom Structure 25 Nam",
      price: 2150000,
      oldPrice: 2955000,
      image: "/hinh4.jpg",
      description: "Nike Air Zoom Structure 25 mang lại cảm giác chạy rất ổn định, chắc chân.",
    },
    {
      id: "5",
      name: "GIÀY SNEAKER DA THẬT NAM Alex",
      price: 1680000,
      oldPrice: 2295000,
      image: "/hinh5.webp",
      description: "GIÀY SNEAKER DA THẬT NAM Alex mang lại cảm giác thiên về “premium casual” hơn là sneaker thể thao.",
    },
    {
      id: "6",
      name: "Giày chạy bộ nam Asics Magic Speed 4 ",
      price: 2750000,
      oldPrice: 4059000,
      image: "/hinh6.jpg",
      description: "Asics Magic Speed 4 mang lại cảm giác chạy “snappy” và thiên về hiệu suất rõ rệt hơn Novablast hay Nimbus.",
    }, {
      id: "7",
      name: "Nike Zoom Vapor 12 Premium HC - HF7827-300 - Màu Vàng",
      price: 1990000,
      oldPrice: 2669000,
      image: "/hinh7.webp",
      description: "Nike Zoom Vapor 12 Premium HC HF7827-300 màu vàng (“High Voltage”) mang lại cảm giác rất “speed-oriented” — nhanh.",
    },
    {
      id: "8",
      name: "Nike X Tom Sachs Craft Mars Yard 2.0 Shoes",
      price: 1850000,
      oldPrice: 2400000,
      image: "/hinh8.webp",
      description: "Nike x Tom Sachs Mars Yard 2.0 mang lại cảm giác rất “functional lifestyle” thay vì hype sneaker đơn thuần.",
    },
    {
      id: "9",
      name: "Nike Air Force 1 07 Fresh Lace",
      price: 1990000,
      oldPrice: 2779000,
      image: "/hinh9.webp",
      description: "Nike Air Force 1 07 Fresh mang lại cảm giác mang “premium” và dễ chịu hơn AF1 thường nhờ phần upper da mềm hơn và ít bị crease (gãy mũi) khi đi lâu.",
    },
    {
      id: "10",
      name: "Nike WMNS Air Jordan 1 Low ",
      price: 2390000,
      oldPrice: 4000000,
      image: "/hinh10.webp",
      description: " Nike WMNS Air Jordan 1 Low mang lại cảm giác mang thiên về thời trang và lifestyle hơn là chạy bộ hay vận động mạnh.",
    },
  ];
  return products.find((p) => p.id === id);
}

export default async function ProductDetail({ params }) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) return <div className={styles.notFound}>Không tìm thấy sản phẩm</div>;

  return (
    <>
      {/* BẮT BUỘC: Phải có thẻ Header ở đây */}
      <Header />
      
      {/* Bao bọc phần nội dung bằng thẻ main để Header nằm trên cùng */}
      <main className={styles.container}>
        <div className={styles.imageWrapper}>
          <Image 
            src={product.image} 
            alt={product.name} 
            fill 
            priority 
            style={{ objectFit: "contain" }}
          />
        </div>

        <div className={styles.infoSection}>
          <h1 className={styles.title}>{product.name}</h1>
          <div className={styles.priceRow}>
            <span className={styles.currentPrice}>{product.price.toLocaleString()}₫</span>
            <span className={styles.oldPrice}>{product.oldPrice.toLocaleString()}₫</span>
          </div>
          <div className={styles.description}>
            <h3>Mô tả chi tiết</h3>
            <p>{product.description}</p>
          </div>
          <button className={styles.button}>THÊM VÀO GIỎ HÀNG</button>
        </div>
      </main>
      <Footer />
    </>
  );
}