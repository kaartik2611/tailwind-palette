import React from "react";
import StateContext from "../context/stateContext";
function Colors({ res }) {
  const [success, setSuccess] = React.useState(false);
  const { state } = React.useContext(StateContext);
  React.useEffect(() => {
    const bmz = setTimeout(() => {
      setSuccess(false);
    }, 1000);
    return () => {
      clearTimeout(bmz);
    };
  }, [success]);
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-center">
        {res.map((color, i) => (
          <div key={`${color}-${i}`} className="flex flex-col-reverse">
            {color.colors.map((c, j) => (
              <div
                onClick={() => {
                  if (state === "CSS") {
                    navigator.clipboard.writeText(c.name);
                  } else if (state === "HEX") {
                    navigator.clipboard.writeText(c.hex);
                  }
                  setSuccess(true);
                }}
                key={c.name}
                className={`w-[3.3rem] h-[3.3rem] cursor-pointer bg-${c.name}`}
              >
                <p className="opacity-0 hover:opacity-100 p-4 font-bold">
                  {c.name.split("-")[1]}
                </p>
              </div>
            ))}
            <p className="text-center my-auto w-[4.1rem] tracking-[-0.05em] uppercase pb-3">
              {color.name}
            </p>
          </div>
        ))}
      </div>
      <div>
        {success ? (
          <p className="text-xl pt-3 text-center delay-150 transition-all">
            Copied to Clipboard!
          </p>
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
}

export default Colors;
