import React from 'react';

function ClassComp({
    class_name,
    teacher_name,
    text,
    button_text,
    button_enabled,
}) {
    return (
        <>
            <div className="flex justify-center items-center">
                <div className="grid grid-rows-2 font-josefin p-4 rounded-full mt-6 bg-[#B1E0FF] text-xs md:text-base w-full md:w-10/12 md:p-10">
                    <div className="flex items-center justify-between">
                        <p className="text-sm font-bold md:text-lg">
                            {class_name}
                        </p>
                        <p>{teacher_name}</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <div>
                            <p>{text}</p>
                        </div>
                        {button_enabled ? (
                            <div>
                                <button class="btn p-2 mt-2 bg-[#272A45] focus:outline-none text-white">
                                    {button_text}
                                </button>
                            </div>
                        ) : (
                            <div></div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ClassComp;
