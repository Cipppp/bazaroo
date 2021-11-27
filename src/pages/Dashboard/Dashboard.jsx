import React from 'react';
import DashboardImg from '../../assets/homepage.svg';
function Dashboard() {
    return (
        <div>
            {/* Main section */}
            <section className="grid grid-rows-2 h-screen place-items-center p-8 text-center">
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
