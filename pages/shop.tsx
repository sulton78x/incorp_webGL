import Image from "next/image"

const Shop = () => {
  return (
    <div>
      {/* image */}
      <div className="relative w-48 h-48">
        <Image src="/assets/bottle_33ml.jpg" alt="" layout="fill" priority />
      </div>
    </div>
  )
}

export default Shop
