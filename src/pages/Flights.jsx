import React from 'react'
import WrapperLayout from '../components/Layouts/WrapperLayout'
import FlightsCard from '../components/shared/FlightsCard';

const Flights = ({ flightsData }) => {
    return (
        <>
            <div className='bg-[#ffffff]'>
                <div className='sm:w-[calc(100%-10%)] mx-2 sm:mx-auto sm:min-h-screen mt-5 flex justify-between flex-col gap-y-10'>
                    {
                        flightsData.map((data, index) => (
                            <FlightsCard
                                data={data}
                                key={index}
                            />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default WrapperLayout()(Flights);