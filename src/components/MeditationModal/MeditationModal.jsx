import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import { BsFillPersonFill } from 'react-icons/bs';
import person from '../../assets/twitter.svg';

const CloseModalButton = styled(MdClose)`
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    width: 32px;
    height: 32px;
    padding: 0;
    z-index: 10;
`;

function Modal({ showModal, setShowModal }) {
    const modalRef = useRef();

    const animation = useSpring({
        config: {
            duration: 250,
        },
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
    });

    const closeModal = (e) => {
        if (modalRef.current === e.target) {
            setShowModal(false);
        }
    };

    const keyPress = useCallback(
        (e) => {
            if (e.key === 'Escape' && showModal) {
                setShowModal(false);
            }
        },
        [setShowModal, showModal]
    );

    useEffect(() => {
        document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown', keyPress);
    }, [keyPress]);

    return (
        <>
            {showModal ? (
                <div
                    onClick={closeModal}
                    ref={modalRef}
                    className="w-full h-full flex justify-center items-center"
                >
                    <animated.div style={animation} className="w-full m-2">
                        <div
                            showModal={showModal}
                            className="bg-[#272A45] w-full h-full shadow-md text-white relative z-10 border-2 rounded-3xl"
                        >
                            <div className="flex p-2 w-full flex-col items-center justify-center text-white">
                                <div>
                                    <CloseModalButton
                                        aria-label="Close modal"
                                        onClick={() =>
                                            setShowModal((prev) => !prev)
                                        }
                                    />
                                </div>
                                <BsFillPersonFill
                                    size={40}
                                    className="self-start m-4"
                                />
                                <form
                                    action="submit"
                                    className="font-josefin w-full text-xs"
                                >
                                    {/* Mesaj  */}
                                    <textarea
                                        className="w-full p-2 focus:outline-none  border-2 border-black rounded-3xl text-black"
                                        placeholder="Adauga o descriere..."
                                        rows="4"
                                    />
                                    <div className="btnContainer flex place-items-start justify-end mb-5 text-black">
                                        <button className="focus:outline-none bg-[#AFD0FF] rounded-3xl p-2 mt-4 font-bold tracking-wider transition ease-out duration-300 self-end">
                                            Postare
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </animated.div>
                </div>
            ) : null}
        </>
    );
}

export default Modal;
