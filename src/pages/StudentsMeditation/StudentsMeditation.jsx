import React from 'react';
import { ClassComp, Navbar, Sidebar } from '../../components';
import useWindowDimensions from '../../components/hooks/useWindowDimensions';
import { IoMdSchool } from 'react-icons/io';
import { HiFilter } from 'react-icons/hi';
import { SiGoogleclassroom } from 'react-icons/si';

function StudentsMeditation() {
    const { height, width } = useWindowDimensions();

    const sidebar_data = [
        {
            title: 'Meditatii',
            path: '#',
            icon: <IoMdSchool />,
            cName: 'nav-text',
        },
        {
            title: 'Inrolari',
            path: '#',
            icon: <SiGoogleclassroom />,
            cName: 'nav-text',
        },
    ];
    const meditation_data = [
        {
            class_name: 'Mate 1',
            teacher_name: 'Prof. Pruna Victor',
            text: 'Daca vrei sa intelegi analiza, inscrie-te aici',
            button_text: 'Inscrie-te',
            button_enabled: true,
        },
        {
            class_name: 'Mate 1',
            teacher_name: 'Prof. Pruna Victor',
            button_text: 'Inscrie-te',
            text: 'Daca vrei sa intelegi analiza, inscrie-te aici',
            button_enabled: true,
        },
        {
            class_name: 'Mate 1',
            teacher_name: 'Prof. Pruna Victor',
            button_text: 'Inscrie-te',
            text: 'Daca vrei sa intelegi analiza, inscrie-te aici',
            button_enabled: true,
        },
        {
            class_name: 'Mate 1',
            teacher_name: 'Prof. Pruna Victor',
            button_text: 'Inscrie-te',
            text: 'Daca vrei sa intelegi analiza, inscrie-te aici',
            button_enabled: true,
        },
    ];

    return (
        <>
            <div>
                {width > 600 ? (
                    <Navbar />
                ) : (
                    <Sidebar SidebarData={sidebar_data} />
                )}
                <section className="text-xs m-6 ">
                    <div className="flex justify-between items-center pl-4 pr-4">
                        <h1 className="font-josefin text-xl font-bold">
                            Postari
                        </h1>

                        <span className="pr-3 pl-3 pt-1 pb-1 bg-[#B2EEFF]  focus:outline-none rounded-full ">
                            <HiFilter size={25} />
                        </span>
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

export default StudentsMeditation;
