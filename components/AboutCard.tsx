import Image from "next/image"
import { about_data } from "../data"

const AboutCard = ({ image, details }: { image: string; details: string }) => {
  return (
    <div>
      <div className="relative w-40 h-40">
        <Image src={image} alt={details} layout="fill" />
      </div>
      <h3>{details}</h3>
    </div>
  )
}

export default AboutCard

// export const getStaticProps = async () => {
//   const cardData = await about_data.map(card => {
//     return [{ card }]
//   })

//   return {
//     props: {
//       cardData,
//     },
//   }
// }
