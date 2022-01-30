import Image from "next/image"
import { useRouter } from "next/router"
import { motion } from "framer-motion"

const Footer = () => {
  const router = useRouter()
  return (
    <footer
      onClick={() => router.push("/")}
      className="flex absolute inset-x-0 bottom-5 justify-center items-center cursor-pointer"
    >
      <motion.div
        className="object-contain relative w-20 h-20"
        animate={{
          rotate: 180,
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
          repeatType: "reverse",
        }}
      >
        <Image
          src="/assets/logo.png"
          alt=""
          layout="fill"
          objectFit="contain"
        />
      </motion.div>
    </footer>
  )
}

export default Footer
