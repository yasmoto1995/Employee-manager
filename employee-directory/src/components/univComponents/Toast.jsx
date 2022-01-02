import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

export function EmployeeSuccessful(){
    const notify = ()=>{
        toast.info('Employee Record added successfully.', {autoClose:4000})
    }
    notify();
    
}

export function EmployeeExists(){
    const notify = ()=>{
        toast.warning('An Employee with the email or contact number already exists. Please try again', {autoClose:5000})
    }
    notify();
    
}

export function EmployeeError(){
    const notify = ()=>{
        toast.error('Unexpected Error while adding record. Please Contact Administrator', {autoClose:false})
    }
    notify();
    
}

export function LoginSuccessful(){
    const notify = ()=>{
        toast.success('Welcome back!.', {autoClose:4000})
    }
    notify();
    
}

export function LoginCredentialsError(){
    const notify = ()=>{
        toast.error('Incorrect Credentials, please try again.', {autoClose:5000})
    }
    notify();
    
}