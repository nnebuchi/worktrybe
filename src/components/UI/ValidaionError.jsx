/* eslint-disable react/prop-types */
const ValidationError = ({validationErrors, field}) => {
    // console.log(validationErrors);
    return(
        <>
            {validationErrors && validationErrors[field] &&
                validationErrors[field].map((err, index)=>{
                    return (
                        <div key={index}>
                            <span key={index} className="text-ftverror-200" style={{color:"#e74d3c", fontSize:"12px"}}>{err}</span> <br />
                        </div>
                    )
                })
            }
        </>
            
    )
    
}

export default ValidationError;