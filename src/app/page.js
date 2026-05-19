import Image from "next/image";
import styles from "./page.module.css";
import  Header  from "./components/header/header.js"
import Footer from "./components/Footer/footer.js"
import Link from "next/link";
export default function Home() {
  return (
        <div className={styles.container} >
          <Header/>
       <div className={styles.item2}>
        <div className={styles.mainContent}>
        <Link href="/chitietsanpham/1">
        <div className={styles.product}>
        <div className={styles.productImage}> 
        <Image src="/hinh1.png" alt="Product 1" width={150} height={150} />
                </div>
                <div className={styles.productName}>
                  <h5>Giày chạy bộ nam Asics Sonicblast</h5>
                </div>
                <div className={styles.productPrice}>
                  <strong className={styles.price}>2,950,000₫ </strong>
                  <span className={styles.discount}>
                    <label className={styles.oldPrice}>4.000.000₫</label>
                    <small className={styles.percent}>-20%</small>
                  </span>
                </div>
                <div className={styles.productRemain}>
  <Image src="/hinh2.png" alt="fire" width={25} height={25} />
  <span className={styles.remainText}>Còn 30/30 suất</span>
  </div>
            <div className={styles.buyButton}>Mua ngay
</div>

            </div>
            </Link>

            <Link href="/chitietsanpham/2">
          <div className={styles.product}>
          <div className={styles.productImage}> 
        <Image src="/hinh2.png" alt="Product 1" width={150} height={150} />
                </div>
                <div className={styles.productName}>
                  <h5>Giày Nike Air Jordan 1 Retro Low Dior CN8608-002</h5>
                </div>
                <div className={styles.productPrice}>
                  <strong className={styles.price}>2,050,000₫ </strong>
                  <span className={styles.discount}>
                    <label className={styles.oldPrice}>2,669,000₫</label>
                    <small className={styles.percent}>-20%</small>
                  </span>
                </div>
                <div className={styles.productRemain}>
  <Image src="/hinh2.png" alt="fire" width={25} height={25} />
  <span className={styles.remainText}>Còn 30/30 suất</span>
  </div>
            <div className={styles.buyButton}>Mua ngay
</div>
</div>
</Link> 

<Link href="/chitietsanpham/3">
          <div className={styles.product}>
          <div className={styles.productImage}> 
        <Image src="/hinh3.webp" alt="Product 1" width={150} height={150} />
                </div>
                <div className={styles.productName}>
                  <h5>Giày Kamito Galaxy - KMGC240424 - Xanh Ngọc</h5>
                </div>
                <div className={styles.productPrice}>
                  <strong className={styles.price}>2,050,000₫ </strong>
                  <span className={styles.discount}>
                    <label className={styles.oldPrice}>2,529,000₫</label>
                    <small className={styles.percent}>-20%</small>
                  </span>
                </div>
                <div className={styles.productRemain}>
  <Image src="/hinh2.png" alt="fire" width={25} height={25} />
  <span className={styles.remainText}>Còn 30/30 suất</span>
  </div>
            <div className={styles.buyButton}>Mua ngay
</div>
          </div></Link>
          <Link href="/chitietsanpham/4">
          <div className={styles.product}>  <div className={styles.productImage}> 
        <Image src="/hinh4.jpg" alt="Product 1" width={150} height={150} />
                </div>
                <div className={styles.productName}>
                  <h5>Giày Nike Air Zoom Structure 25 Nam</h5>
                </div>
                <div className={styles.productPrice}>
                  <strong className={styles.price}>2,150,000₫ </strong>
                  <span className={styles.discount}>
                    <label className={styles.oldPrice}>2,955,000₫</label>
                    <small className={styles.percent}>-20%</small>
                  </span>
                </div>
                <div className={styles.productRemain}>
  <Image src="/hinh2.png" alt="fire" width={25} height={25} />
  <span className={styles.remainText}>Còn 30/30 suất</span>
  </div>
            <div className={styles.buyButton}>Mua ngay
</div></div>
</Link>
          {/* hàng thu 2 */}
          <Link href="/chitietsanpham/5">
          <div className={styles.product}>  <div className={styles.productImage}> 
        <Image src="/hinh5.webp" alt="Product 1" width={150} height={150} />
                </div>
                <div className={styles.productName}>
                  <h5>GIÀY SNEAKER DA THẬT NAM Alex</h5>
                </div>
                <div className={styles.productPrice}>
                  <strong className={styles.price}>1,680,000₫ </strong>
                  <span className={styles.discount}>
                    <label className={styles.oldPrice}>2,295,000₫</label>
                    <small className={styles.percent}>-20%</small>
                  </span>
                </div>
                <div className={styles.productRemain}>
  <Image src="/hinh2.png" alt="fire" width={25} height={25} />
  <span className={styles.remainText}>Còn 30/30 suất</span>
  </div>
            <div className={styles.buyButton}>Mua ngay
</div></div></Link>
<Link href="/chitietsanpham/6">
          <div className={styles.product}>  <div className={styles.productImage}> 
        <Image src="/hinh6.jpg" alt="Product 1" width={150} height={150} />
                </div>
                <div className={styles.productName}>
                  <h5>Giày chạy bộ nam Asics Magic Speed 4 </h5>
                </div>
                <div className={styles.productPrice}>
                  <strong className={styles.price}>2,750,000₫</strong>
                  <span className={styles.discount}>
                    <label className={styles.oldPrice}>4,059,000₫</label>
                    <small className={styles.percent}>-20%</small>
                  </span>
                </div>
                <div className={styles.productRemain}>
  <Image src="/hinh2.png" alt="fire" width={25} height={25} />
  <span className={styles.remainText}>Còn 30/30 suất</span>
  </div>
            <div className={styles.buyButton}>Mua ngay
</div></div> </Link>
<Link href="/chitietsanpham/7">
          <div className={styles.product}>  <div className={styles.productImage}> 
        <Image src="/hinh7.webp" alt="Product 1" width={150} height={150} />
                </div>
                <div className={styles.productName}>
                  <h5>Nike Zoom Vapor 12 Premium HC - HF7827-300 - Màu Vàng </h5>
                </div>
                <div className={styles.productPrice}>
                  <strong className={styles.price}>1,990,000₫ </strong>
                  <span className={styles.discount}>
                    <label className={styles.oldPrice}>2,669,000₫</label>
                    <small className={styles.percent}>-20%</small>
                  </span>
                </div>
                <div className={styles.productRemain}>
  <Image src="/hinh2.png" alt="fire" width={25} height={25} />
  <span className={styles.remainText}>Còn 30/30 suất</span>
  </div>
            <div className={styles.buyButton}>Mua ngay
</div></div> </Link>
<Link href="/chitietsanpham/8">
          <div className={styles.product}>  <div className={styles.productImage}> 
        <Image src="/hinh8.webp" alt="Product 1" width={150} height={150} />
                </div>
                <div className={styles.productName}>
                  <h5>Nike X Tom Sachs Craft Mars Yard 2.0 Shoes</h5>
                </div>
                <div className={styles.productPrice}>
                  <strong className={styles.price}>1,850,000₫ </strong>
                  <span className={styles.discount}>
                    <label className={styles.oldPrice}>2,400,000₫</label>
                    <small className={styles.percent}>-20%</small>
                  </span>
                </div>
                <div className={styles.productRemain}>
  <Image src="/hinh2.png" alt="fire" width={25} height={25} />
  <span className={styles.remainText}>Còn 30/30 suất</span>
  </div>
            <div className={styles.buyButton}>Mua ngay
</div></div></Link>
          {/* hàng thu 3 */}
          <Link href="/chitietsanpham/9">
          <div className={styles.product}>  <div className={styles.productImage}> 
        <Image src="/hinh9.webp" alt="Product 1" width={150} height={150} />
                </div>
                <div className={styles.productName}>
                  <h5>Nike Air Force 1 07 Fresh Lace</h5>
                </div>
                <div className={styles.productPrice}>
                  <strong className={styles.price}>1,990,000₫ </strong>
                  <span className={styles.discount}>
                    <label className={styles.oldPrice}>2,779,000₫</label>
                    <small className={styles.percent}>-20%</small>
                  </span>
                </div>
                <div className={styles.productRemain}>
  <Image src="/hinh2.png" alt="fire" width={25} height={25} />
  <span className={styles.remainText}>Còn 30/30 suất</span>
  </div>
            <div className={styles.buyButton}>Mua ngay
</div></div></Link>
<Link href="/chitietsanpham/10">
          <div className={styles.product}>  <div className={styles.productImage}> 
        <Image src="/hinh10.webp" alt="Product 1" width={150} height={150} />
                </div>
                <div className={styles.productName}>
                  <h5>Nike WMNS Air Jordan 1 Low </h5>
                </div>
                <div className={styles.productPrice}>
                  <strong className={styles.price}>2,390,000₫ </strong>
                  <span className={styles.discount}>
                    <label className={styles.oldPrice}>4.000.000₫</label>
                    <small className={styles.percent}>-20%</small>
                  </span>
                </div>
                <div className={styles.productRemain}>
  <Image src="/hinh2.png" alt="fire" width={25} height={25} />
  <span className={styles.remainText}>Còn 30/30 suất</span>
  </div>
            <div className={styles.buyButton}>Mua ngay
</div></div></Link>
        </div>
        </div>
        <Footer/>
    </div>
  );
}

  