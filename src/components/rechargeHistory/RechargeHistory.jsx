import { useEffect, useState } from "react"
import { useRef } from "react"
import { rechargeHistory } from "../../data/Recharge"
import { Link, useSearchParams } from "react-router"

const RechargeHistory = () => {

    const [history, setHistory] = useState([])
    const [filterHistory, setFilterHistory] = useState([])


    // input date ref
    const dateInputRef = useRef()


    // id
    const [searchParams] = useSearchParams()
    const id = searchParams.get('id')

    // get recharge history api call
    const getData = () => {
        const res = rechargeHistory.filter(val => val.id == id)
        setHistory(res)
    }

    useEffect(() => {
        getData()
    }, [])


    const handleChangeDate = (e) => {
        let values = e.target.value
        let [year, month] = values.split('-')

        let monthNames = [
            'January', 'February', 'March', "April", 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
        ]
        let monthName = monthNames[parseInt(month, 10) - 1].toLocaleLowerCase()

        // filter api response  
        let filterData = history.filter(res => res.month.toLocaleLowerCase() == monthName && res.year == year)

        setFilterHistory(filterData)

    }

    // click the date
    const handleDateClick = () => {
        dateInputRef.current?.showPicker()
    }

    // filterdata or original data
    let historyData = filterHistory != 0 ? filterHistory : history

    return (
        <div className='p-6'>
            {/* heading and back button */}
            <div className='flex items-center px-4'>
                <Link to={'/my-account'} >
                    <svg width="9" height="14" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 1.84091L7.62725 0.5L0 8L7.63496 15.5L9 14.1591L2.73008 8L9 1.84091Z" fill="black" />
                    </svg>
                </Link>
                <h2 className='m-auto font-bold text-center text-[20px] font-inter'>Recharge History</h2>
            </div>

            {/* month */}
            <div className='my-10 ml-10'>

                {/* button month */}
                <button onClick={handleDateClick} className='flex items-center justify-center gap-1 py-2 px-4 rounded-xl shadow-[3px_5px_3px_rgb(0,0,0,0.3),inset_0_4px_4px_rgb(0,0,0,0.2)]'>
                    <div>
                        <svg width="16" height="16" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.18182 0H4.45455V0.636364H3.18182V0ZM9.54545 0H10.8182V0.636364H9.54545V0ZM13.3636 2.54545V1.90909H11.4545V0.636364H10.8182V3.81818H9.54545V0.636364H8.90909V1.90909H5.09091V0.636364H4.45455V3.81818H3.18182V0.636364H2.54545V1.90909H0.636364V2.54545H0V13.3636H0.636364V14H13.3636V13.3636H14V2.54545H13.3636ZM12.7273 4.45455V6.36364H10.8182V4.45455H12.7273ZM12.7273 9.54545H10.8182V7.63636H12.7273V9.54545ZM12.7273 12.7273H10.8182V10.8182H12.7273V12.7273ZM1.27273 10.8182H3.18182V12.7273H1.27273V10.8182ZM1.27273 7.63636H3.18182V9.54545H1.27273V7.63636ZM9.54545 9.54545H7.63636V7.63636H9.54545V9.54545ZM6.36364 9.54545H4.45455V7.63636H6.36364V9.54545ZM4.45455 10.8182H6.36364V12.7273H4.45455V10.8182ZM7.63636 10.8182H9.54545V12.7273H7.63636V10.8182ZM9.54545 6.36364H7.63636V4.45455H9.54545V6.36364ZM6.36364 4.45455V6.36364H4.45455V4.45455H6.36364ZM3.18182 6.36364H1.27273V4.45455H3.18182V6.36364Z" fill="black" fillOpacity="0.5" />
                        </svg>
                    </div>

                    <span className='text-black/50 text-[13px]'>Month</span>

                    <div>
                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.07273 0.5L-2.59309e-07 1.5677L6 7.5L12 1.5617L10.9273 0.5L6 5.37661L1.07273 0.5Z" fill="black" fillOpacity="0.5" />
                        </svg>
                    </div>

                </button>

                <input ref={dateInputRef} onChange={handleChangeDate} type="month" name="dates" id="dates" hidden />
            </div>


            {/* history details */}
            <div className='grid md:grid-cols-2 gap-5 px-4 place-items'>

                {/* map history */}
                {historyData.length === 0 ?
                    (
                        <div className="md:col-span-2 text-center text-2xl mt-10 text-red-500 font-bold font-inter">Recharge History is empty </div>
                    )
                    :
                    historyData.map(item => (
                        <div key={item._id} className='py-2 px-4 shadow-xl inset-shadow-sm rounded-2xl hover:scale-[1] hover:bg-gray-100'>
                            <h2 className='font-bold text-[24px] font-inter'>{item.month} {item.year}</h2>

                            <div className='flex justify-between items-start p-2'>
                                {/* left */}
                                <div className='flex items-center p-1'>
                                    <svg width="26" height="33" viewBox="0 0 26 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M25 19.9615V15.9231C25 14.546 24.4311 13.2253 23.4184 12.2516C22.4057 11.2778 21.0322 10.7308 19.6 10.7308H17.2C16.7226 10.7308 16.2648 10.5484 15.9272 10.2238C15.5896 9.89926 15.4 9.45903 15.4 9V6.69231C15.4 5.31522 14.8311 3.99454 13.8184 3.02079C12.8057 2.04705 11.4322 1.5 10 1.5H7M10.6 15.3462H16.6M9.4 19.3846H16.6M13 26.8846L9.4 23.4231H10C11.1139 23.4231 12.1822 22.9976 12.9698 22.2402C13.7575 21.4829 14.2 20.4557 14.2 19.3846C14.2 18.3135 13.7575 17.2864 12.9698 16.529C12.1822 15.7716 11.1139 15.3462 10 15.3462H9.4M10.6 1.5H2.8C1.8064 1.5 1 2.27538 1 3.23077V29.7692C1 30.7246 1.8064 31.5 2.8 31.5H23.2C24.1936 31.5 25 30.7246 25 29.7692V15.3462C25 11.6739 23.4829 8.1521 20.7823 5.55544C18.0818 2.95879 14.4191 1.5 10.6 1.5Z" stroke="black" strokeOpacity="0.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>

                                    <div>
                                        <div className='ml-2'>
                                            <p className='font-bold font-inter'>{item.name}</p>
                                            <p className="font-inter">{item.phone}</p>
                                            <span className='text-black/50 text-[14px] font-semibold font-inter'>{`${item.day} ${item.month} ${item.year} ${item.time}`} </span>

                                        </div>
                                        <span className='border-1 text-[14px] py-[2px] px-[10px] font-bold rounded-[5px] bg-[#46DC00]/50 text-[#267700] font-inter'>Success</span>
                                    </div>
                                </div>

                                {/* right */}
                                <div className='flex  items-baseline gap-1 '>
                                    <div >
                                        <svg width="10" height="14" viewBox="0 0 13 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1H12M1 5.722H12M8.792 18L1 10.444H3.75C9.861 10.444 9.861 1 3.75 1" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>

                                    <p className='text-[20px] font-inter'>{item.rechargeValue}</p>

                                    <button>
                                        <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.17226e-07 13.6591L1.37275 15L9 7.5L1.36504 -6.6747e-07L1.19412e-06 1.34091L6.26992 7.5L1.17226e-07 13.6591Z" fill="black" fillOpacity="0.5" />
                                        </svg>
                                    </button>

                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>

    )
}

export default RechargeHistory



