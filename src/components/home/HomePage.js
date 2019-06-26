import React, {useState} from 'react'
import Mission from './Mission'
import Services from './services/Services'
import Testimonials from './testimonials/TestImonials'
import Modal from '../ui/modal/Modal'
export default function HomePage() {
  const [isOpen, setOpen] = useState(true)

  const toggleModal = (e) => {
    e.stopPropagation()
    setOpen(prevState => !prevState);
  }
  return (
    <main>
      <Mission />
      <Services />
      <Testimonials />
      <Modal isOpen={isOpen} toggle={toggleModal} />
    </main>
  )
}
