function SimpleIntroAnimation({ onAnimationComplete }) {
    setTimeout(() => {
      onAnimationComplete()
    }, 5000)
  
    return (
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "#000",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1000,
          animation: "fadeOut 1s ease 4s forwards",
        }}
      >
        <style>
          {`
            @keyframes fadeOut {
              from { opacity: 1; }
              to { opacity: 0; pointer-events: none; }
            }
            
            @keyframes pulse {
              0% { transform: scale(1); }
              50% { transform: scale(1.1); }
              100% { transform: scale(1); }
            }
            
            @keyframes loadingBar {
              from { width: 0; }
              to { width: 200px; }
            }
          `}
        </style>
        <div
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            marginBottom: "2rem",
            animation: "pulse 2s infinite",
          }}
        >
          FUTURA
        </div>
        <div
          style={{
            fontSize: "1.2rem",
            marginBottom: "2rem",
          }}
        >
          THE FUTURE OF FASHION
        </div>
        <div
          style={{
            width: "200px",
            height: "4px",
            backgroundColor: "#333",
            borderRadius: "2px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              height: "100%",
              backgroundColor: "#00a0ff",
              animation: "loadingBar 4s forwards",
            }}
          ></div>
        </div>
      </div>
    )
  }
  
  export default SimpleIntroAnimation
  
  