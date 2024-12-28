import { Modal, ModalBody, ModalContent } from '@/components/ui/animated-modal'
import AnimatedSquar from '@/components/ui/animated-squar'
import { useTheme } from '@/context/dark-mode/theme-provider'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { Outlet } from 'react-router-dom'

const OnboardingLayout = () => {
  const { theme } = useTheme();

  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT}>
      {/* background animation */}
      <AnimatedSquar
        speed={0.5}
        direction='diagonal'
        borderColor={`${theme == "dark" ? '#222' : '#ebe8e8'}`}
        effectColor={`${theme == "dark" ? '#000' : '#fff'}`}
      />
      {/* onboarding modal */}
      <Modal default_state='open'>
        <ModalBody blur={'0px'} className='bg-white' keepCloseIconVisible={false} closeOnOutsideClick={false}>
          <ModalContent>
            <Outlet />
          </ModalContent>
        </ModalBody>
      </Modal>

    </GoogleOAuthProvider>
  )
}

export default OnboardingLayout