import { Link } from "react-router"

const MyAccountList = ({id}) => {
    return (
       
         <div className="flex flex-col gap-8 ">
                <div>
                    <Link to={`/recharge-history?id=${id}`} className='flex justify-between items-center p-3  rounded-xl shadow-xl inset-shadow-sm'>
                        <p className='font-bold font-inter'>Recharge History</p>
                        <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.17226e-07 13.6591L1.37275 15L9 7.5L1.36504 -6.6747e-07L1.19412e-06 1.34091L6.26992 7.5L1.17226e-07 13.6591Z" fill="black" fillOpacity="0.5" />
                        </svg>
                    </Link>
                </div>
    
                <div >
                    <Link className='flex justify-between items-center p-3  rounded-xl shadow-xl inset-shadow-sm'>
                        <p className='font-bold font-inter'>My Plan</p>
                        <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.17226e-07 13.6591L1.37275 15L9 7.5L1.36504 -6.6747e-07L1.19412e-06 1.34091L6.26992 7.5L1.17226e-07 13.6591Z" fill="black" fillOpacity="0.5" />
                        </svg>
                    </Link>
                </div>
    
                <div >
                    <Link className=' flex justify-between items-center p-3  rounded-xl shadow-xl inset-shadow-sm'>
                        <p className='font-bold font-inter'>Log Out</p>
                        <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.17226e-07 13.6591L1.37275 15L9 7.5L1.36504 -6.6747e-07L1.19412e-06 1.34091L6.26992 7.5L1.17226e-07 13.6591Z" fill="black" fillOpacity="0.5" />
                        </svg>
                    </Link>
                </div>
    
    
         </div>
       
    )
}

export default MyAccountList