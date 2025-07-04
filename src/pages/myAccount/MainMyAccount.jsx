import MyAccountDetails from '../../components/myAccount/MyAccountDetails'
import MyAccountList from '../../components/myAccount/MyAccountList'

const MainMyAccount = () => {
     const id = 1
    return (
        <div className='mt-16 px-10 m-auto max-w-[600px] '>
            <MyAccountDetails id={id}/>
            <MyAccountList  id={id}/>
        </div>

    )
}

export default MainMyAccount


