import React, { useState } from 'react';
import {
    ClassComp,
    MeditationModal,
    Modal,
    Navbar,
    Sidebar,
} from '../../components';
import useWindowDimensions from '../../components/hooks/useWindowDimensions';
import { BiBookAlt } from 'react-icons/bi';
import { FaPlus } from 'react-icons/fa';

function TeachersMeditation() {
    // eslint-disable-next-line
    const { height, width } = useWindowDimensions();
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal((prev) => !prev);
    };

    const sidebar_data = [
        {
            title: 'Meditatie',
            path: '/dashboard/teachers/meditation',
            icon: <BiBookAlt />,
            cName: 'nav-text',
        },
    ];

    const meditation_data = [
        {
            class_name: 'Mate 1',
            teacher_name: 'Prof. Pruna Victor',
            text: 'Daca vrei sa intelegi analiza, inscrie-te aici',
            button_text: 'Inscrie-te',
            button_enabled: false,
        },
        {
            class_name: 'Mate 1',
            teacher_name: 'Prof. Pruna Victor',
            button_text: 'Inscrie-te',
            text: 'Daca vrei sa intelegi analiza, inscrie-te aici',
            button_enabled: false,
        },
    ];

    return (
        <>
            <div>
                {width > 600 ? (
                    <Navbar sidebar_data={sidebar_data} />
                ) : (
                    <Sidebar sidebar_data={sidebar_data} />
                )}
                <section className="text-xs m-6 ">
                    <div className="w-full justify-start md:pl-20 md:pr-20">
                        <button
                            onClick={openModal}
                            className="focus:outline-none w-auto bg-[#AFD0FF] rounded-3xl p-4 font-bold tracking-wider transition ease-out duration-300 flex items-center justify-center"
                        >
                            <FaPlus size={14} />{' '}
                            <p className="ml-2">Adauga o meditatie noua</p>
                        </button>
                    </div>
                    <div className="w-full flex justify-center">
                        <MeditationModal
                            showModal={showModal}
                            setShowModal={setShowModal}
                        />
                    </div>
                    <div className="flex items-center pl-4 pr-4">
                        <h1 className="font-josefin text-xl font-bold">
                            Meditatiile tale
                        </h1>
                    </div>
                    <ul>
                        {meditation_data.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <ClassComp
                                        class_name={item.class_name}
                                        teacher_name={item.teacher_name}
                                        text={item.text}
                                        button_text={item.button_text}
                                        button_enabled={item.button_enabled}
                                    />
                                </li>
                            );
                        })}
                    </ul>
                </section>
            </div>
        </>
    );
}

export default TeachersMeditation;
