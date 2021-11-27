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
            <div className="grid grid-rows-2 font-josefin p-4 place-items-center rounded-full mt-6 bg-[#B1E0FF]">
                <div className="grid grid-cols-2">
                    <div className="flex justify-start items-center">
                        <p>{class_name}</p>
                    </div>
                    <div className="flex items-endjustify-end ">
                        <p>{teacher_name}</p>
                    </div>
                </div>
                <div className="grid grid-cols-2">
                    <div className="flex justify-start items-center">
                        <p>{text}</p>
                    </div>
                    {button_enabled ? (
                        <div className="flex items-end justify-end">
                            <button class="btn p-2 mt-2 bg-[#272A45] focus:outline-none text-white">
                                {button_text}
                            </button>
                        </div>
                    ) : null}
                </div>
            </div>
        </>
    );
}

export default ClassComp;
