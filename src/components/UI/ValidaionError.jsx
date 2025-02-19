/* eslint-disable react/prop-types */
const ValidationError = ({validationErrors, field}) => {
    // console.log(validationErrors);
    return(
        <>
            {validationErrors && validationErrors[field] &&
                validationErrors[field].map((err, index)=>{
                    return (
                        <>
                        <span key={index} className="text-ftvwine-200">{err}</span> <br />
                        </>
                    )
                })
            }
        </>
            
    )
    
}

export default ValidationError;