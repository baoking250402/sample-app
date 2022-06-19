import {Navigate} from 'react-router-dom';
import AddEmployee from './AddEmployee';
import Employees from './Employees';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { signout } from './redux/accountSlice';
import {clearEmployees} from './redux/employeesSlice'

function Private() {
    const account = useSelector((state) => state.account);
    const employees = useSelector((state) => state.employees);
    const dispatch = useDispatch();
    const handleSignout = () => {
        window.localStorage.setItem(account.email, JSON.stringify(employees))
        dispatch(signout())
        dispatch(clearEmployees())
    }


    return (
        <div>
            {
                account.isSignin 
                ?
                <div>
                <Button onClick={handleSignout} size='lg' variant="outline-danger">Signout</Button>
                <AddEmployee></AddEmployee>
                <Employees></Employees>
                </div>
                :
                <Navigate to="/" replace />
            }
        </div>
    )
}

export default Private;