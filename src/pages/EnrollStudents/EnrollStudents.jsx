import React from 'react';
import { ClassComp, Navbar, Sidebar } from '../../components';
import useWindowDimensions from '../../components/hooks/useWindowDimensions';
import { IoMdSchool } from 'react-icons/io';
import { HiFilter } from 'react-icons/hi';
import { SiGoogleclassroom } from 'react-icons/si';
import FacebookIcon from '../../assets/facebook.svg';
import InstagramIcon from '../../assets/instagram.svg';
import TwitterIcon from '../../assets/twitter.svg';
import './EnrollStudents.css';

function Footer() {
    return (
        <>
            <div className="container">
                <div className="flex items-center justify-end footer">
                    <img src={FacebookIcon} alt="" className="w-12" />
                    <img src={InstagramIcon} alt="" className="w-12" />
                    <img src={TwitterIcon} alt="" className="w-12" />
                </div>
            </div>
        </>
    );
}

function EnrollStudents() {
    const { height, width } = useWindowDimensions();

    const sidebar_data = [
        {
            title: 'Meditatii',
            path: '/dashboard/students/meditation',
            icon: <IoMdSchool />,
            cName: 'nav-text',
        },
        {
            title: 'Inrolari',
            path: '/dashboard/students/enroll',
            icon: <SiGoogleclassroom />,
            cName: 'nav-text',
        },
    ];
    const meditation_data = [
        {
            class_name: 'Mate 1',
            teacher_name: 'Prof. Pruna Victor',
            text: 'Daca vrei sa intelegi analiza, inscrie-te aici',
            button_text: 'Renunta',
            button_enabled: true,
        },
        {
            class_name: 'Mate 1',
            teacher_name: 'Prof. Pruna Victor',
            button_text: 'Renunta',
            text: 'Daca vrei sa intelegi analiza, inscrie-te aici',
            button_enabled: true,
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
                    <div className="flex items-center pl-4 pr-4">
                        <h1 className="font-josefin text-xl font-bold">
                            Inscrierile tale
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

export default EnrollStudents;
