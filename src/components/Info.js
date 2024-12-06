import React from "react";

const Info=()=>{

    const lines=12;
    const stations=288;
    const len=393;
    return (

        <div style={{display:"flex", justifyContent:"center", gap:"50px",

            paddingTop:'50px'
        }}>

            <div style={{ textAlign: "center", 

                border:'2px solid blue',
                padding:"20px"
             }}>
        <strong style={{ fontSize: "28px",
            color:'blue',
         }}>{stations}</strong>
        <br />
        <span>Total no. of stations</span>
      </div>

      <div style={{textAlign:"center",

                border:'2px solid blue',
                padding:"20px"
      }}>

                <strong style={{fontSize:'28px',
                    color:'blue',
                }}>{lines}</strong>
                <br/>
                <span>Total no. of lines</span>
            </div>

      <div style={{ textAlign: "center",

        border:'2px solid blue',
                padding:"20px"
       }}>
        <strong style={{ fontSize: "28px",
            color:'blue'
         }}>{len}</strong>
        <br />
        <span>Total network length (km)</span>
      </div>
        </div>
    );
};

export default Info;


