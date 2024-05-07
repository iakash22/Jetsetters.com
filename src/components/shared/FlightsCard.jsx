import React, { useState } from 'react'
import { IoCallOutline, IoCallSharp, IoMail } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import { GiPathDistance } from "react-icons/gi";
import { HiOutlineArrowNarrowRight, HiOutlineArrowNarrowLeft } from "react-icons/hi"
import Card from './Card';
import { IconButton } from '@mui/material';

const FlightsCard = ({ data }) => {
    const [km, setKm] = useState(true);
    const [miles, setMiles] = useState(0);
    const kmToMilesConvetor = (distance) => {
        if (km) {
            let d = distance.replace(',', '');
            let m = d / 1.609344;
            setMiles(Math.floor(m));
        }
        setKm(!km);
    }
    return (
        <div>
            <div className='flex justify-between'>

                {/* Source Card  */}

                <Card data={data.source} />

                <div className='flex flex-col mx-1'>

                    {/* to card  */}
                    <div className='w-full my-auto flex flex-col gap-0 items-center justify-center'>
                        <div className=''>
                            <HiOutlineArrowNarrowRight className='text-[40px]' />
                            <HiOutlineArrowNarrowLeft className='text-[40px]' />
                        </div>
                        <p className='tracking-wider font-bold flex gap-x-2 items-center'>
                            <GiPathDistance
                                className='lg:text-[25px] md:text-[20px] sm:block hidden text-blue-600 cursor-pointer hover:text-blue-300'
                                onClick={() => kmToMilesConvetor(data?.distance)}
                            />
                            <span className='tracking-wider font-bold lg:text-xs text-[8px]'>{km ? data.distance + " km" : miles + " miles"}</span>
                        </p>
                    </div>

                    {/* Contact Button  */}
                    <div className='mx-auto md:mt-10 xs:mt-2 bg-[#344f7e2a] rounded-2xl'>
                        <div className=''>
                            <a href="tel:+14088999705" target='_blank'>
                                <IconButton
                                    size='large'
                                    aria-label='Call'
                                    color='primary'
                                    className='group'
                                >
                                    <IoCallSharp className='group-hover:scale-[1.1] transition-transform duration-300' />
                                </IconButton>
                            </a>
                            {/* <a href="mailto:bookings@jetsetterss.com">
                                <IconButton
                                    size='large'
                                    aria-label='mail'
                                    sx={{ color: "#eb4545" }}
                                    className='group'
                                >
                                    <IoMail className='group-hover:scale-[1.1] transition-transform duration-300' />
                                </IconButton>
                            </a> */}
                            <a
                                href="https://wa.me/+14088999705"
                                target="_blank"
                                rel="noopener noreferrer">
                                <IconButton
                                    size='large'
                                    aria-label='whatsapp'
                                    sx={{ color: "#47d94a" }}
                                    className='group'
                                >
                                    <IoLogoWhatsapp className='group-hover:scale-[1.1] transition-transform duration-300' />
                                </IconButton>
                            </a>
                        </div>
                    </div>

                </div>


                {/* Destination Card  */}
                <Card data={data.destination} />
            </div>
        </div>
    )
}

export default FlightsCard;