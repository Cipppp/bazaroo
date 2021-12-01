import React from 'react';
import DashboardImg from '../../assets/homepage.svg';
import { BiBookAlt } from 'react-icons/bi';
import useWindowDimensions from '../../components/hooks/useWindowDimensions';
import { Navbar, Sidebar } from '../../components';
function Dashboard() {
    // eslint-disable-next-line
    const { height, width } = useWindowDimensions();

    const sidebar_data = [
        {
            title: 'Meditatie',
            path: '/dashboard/teachers/meditation',
            icon: <BiBookAlt />,
            cName: 'nav-text ',
        },
    ];
    return (
        <div>
            {/* Navbar  */}
            {width > 600 ? (
                <Navbar sidebar_data={sidebar_data} />
            ) : (
                <Sidebar sidebar_data={sidebar_data} />
            )}
            {/* Main section */}
            <section className="grid grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 h-screen place-items-center p-8 text-center overflow-y-hidden">
                <div>
                    <h1 className="font-josefin text-4xl">
                        Invatatul nu a fost niciodata mai simplu!
                    </h1>
                    <p className="font-josefin text-md mt-6">
                        Platforma ideala pentru meditatii online, atat pentru
                        profesori, cat si pentru studenti .
                    </p>
                </div>
                <div className="flex justify-center items-center">
                    <img src={DashboardImg} alt="" />
                </div>
            </section>
        </div>
    );
}

export default Dashboard;
