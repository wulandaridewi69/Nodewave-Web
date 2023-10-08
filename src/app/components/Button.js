import React from "react";

const Button = ({label, className, loading, onClick }) =>  {
    return (
            <button 
                className={className}
                onClick={onClick}
                disabled={loading}
            >
                {label}              
            </button>
    )
}

export default Button;
