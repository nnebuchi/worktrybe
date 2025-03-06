/* eslint-disable react/prop-types */
const ValidationError = ({validationErrors, field}) => {
    // console.log(validationErrors);
    return(
        <>
            {validationErrors && validationErrors[field] &&
                validationErrors[field].map((err, index)=>{
                    return (
                        <div key={index}>
                        <span key={index} className="text-ftvwine-200">{err}</span> <br />
                        </div>
                    )
                })
            }
        </>
            
    )
    
}

export default ValidationError;