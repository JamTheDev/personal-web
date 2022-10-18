import { faWarning } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FunctionComponent, useState } from "react";
import Modal, { ModalClose } from "./modal";

const AlertBetaModal: FunctionComponent = () => {
    const [opened, setOpenState] = useState(true);
    return (
        <Modal className='py-6 px-3' opened={opened} onHide={() => setOpenState(false)}>
        <ModalClose />

        <div className='flex flex-col justify-center items-center'>
          <span className='text-red-500 font-bold lg:text-3xl text-xl p-3 font-sans'>WARNING</span>
          <FontAwesomeIcon className='text-red-500' icon={faWarning} size="8x" />
          <span className='text-center lg:text-lg md:text-md text-sm p-3'>
            This website is still under development. Discrepancies, visual bugs & the likes are still present, and if ever encountered, feel free to contact me.
          </span>
          <button className='bg-gradient-to-r from-purple-400 to-purple-500 py-3 px-6 rounded-lg text-white lg:text-lg md:text-md text-xs' onClick={() => setOpenState(false)}>
            I understand
          </button>
        </div>
      </Modal>
    )
}

export default AlertBetaModal