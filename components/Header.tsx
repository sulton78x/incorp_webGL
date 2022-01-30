import LoginModal from "../components/LoginModal"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/router"

const Header = () => {
  const router = useRouter()
  return (
    <header className="flex justify-between items-center p-5 w-full text-white font-caslon_display">
      {/* nav */}

      <div className="space-x-3">
        <Link href="/shop">
          <a className="button">Shop</a>
        </Link>
        <Link href="/contact">
          <a className="button">Contact</a>
        </Link>
      </div>
      {/* logo */}
      <h2 className="text-3xl font-semibold text-black uppercase">Incorp</h2>
      <div className="space-x-3">
        <Link href="/about">
          <a className="button">About</a>
        </Link>
        <Link href="/follow">
          <a className="button">Follow</a>
        </Link>
        {/* login modal */}
        <LoginModal />
      </div>
    </header>
  )
}

export default Header
