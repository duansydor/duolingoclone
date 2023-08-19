import Image from 'next/image'
import Unity from './Unity'

export default function Home() {
  return (
    <div className='grid grid-cols-1' >
      <div><Unity /></div><br />
      <div><Unity /></div>
    </div>
  )
}
