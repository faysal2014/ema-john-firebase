import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';

const Shipping = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const {user}= useAuth();
    const onSubmit = data =>{

    };       
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                
                <input placeholder="name" defaultValue={user.displayName} {...register("name")} />
                <input placeholder="email" defaultValue={user.email} {...register("email", { required: true })} />
                {errors.email && <span>This field is required</span>}
                <input placeholder="address" defaultValue="test" {...register("address")} />

                <input type="submit" />
            </form>
        </div>
    );
};

export default Shipping;