import { useState } from "react";
import { movies } from "../data/movie";
export const Form = () => {
  const [display, setDisplay] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [movie, setMovie] = useState(null);
  const [message, setMessage] = useState("");

  const [displayMovie, setDisplayMovie] = useState({});
  const [displayName, setDisplayName] = useState("");
  const [displayEmail, setDisplayEmail] = useState("");
  const [displayMessage, setDisplayMessage] = useState("");

  const [errorMovie, setErrorMovie] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const refresh = () => {
    setDisplay(false)
    setDisplayEmail('')
    setDisplayMovie(null)
    setDisplayName('')
    setDisplayMessage('')

    setEmail('')
    setMovie(null)
    setName('')
    setMessage('')

    setErrorMovie('')
    setErrorName('')
    setErrorEmail('')

}
  const submit = (event) => {
    event.preventDefault();
    let error = [];
    if (!name) {
      setErrorName("โปรดใส่ชื่อของคุณ");
      error.push(true);
    } else {
      setErrorName("");
    }

    if (!email) {
      setErrorEmail("โปรดใส่อีเมลของคุณ");
      error.push(true);
    } else if (!emailPattern.test(email)) {
      setErrorEmail("รูปแบบอีเมลไม่ถูกต้อง");
      error.push(true);
    } else {
      setErrorEmail("");
    }

    if (!movie) {
      setErrorMovie("กรุณาเลือกหนังที่คุณชอบ");
      error.push(true);
    } else {
      setErrorMovie("");
    }

    setDisplayName(name);
    setDisplayEmail(email);
    setDisplayMessage(message);
    setDisplayMovie(movie ? { ...movie } : {});

    if (error.length === 0) {
      setDisplay(true);
    }
  };

  const reset = (event) => {
    event.preventDefault();
    setName("");
    setEmail("");
    setMovie(null);
    setMessage("");
    setDisplay(false);

    setErrorName("");
    setErrorEmail("");
    setErrorMovie("");
  };

  return (
    <>
      {!display ? (
        <div className="p-6 flex flex-col gap-6">
          <div className="space-y-2">
            <label
              className="flex peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-medium"
              htmlFor="name"
            >
              ชื่อ <span className="text-red-500">*</span>
            </label>
            <input
              className={`flex h-10 w-full rounded-md border ${
                errorName ? "border-red-500" : "border-input"
              } bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm`}
              placeholder="กรุณากรอกชื่อของคุณ"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <div className="flex text-sm text-red-500">
              {errorName ?? <div>{errorName}</div>}
            </div>
          </div>
          <div className="space-y-2">
            <label
              className="flex peer-disabled:cursor-not-allowed  peer-disabled:opacity-70 text-sm font-medium"
              htmlFor="name"
            >
              อีเมล <span className="text-red-500">*</span>
            </label>
            <input
              className={`flex h-10 w-full rounded-md border ${
                errorEmail ? "border-red-500" : "border-input"
              } bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm`}
              id="email"
              name="email"
              type="email"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="flex text-sm text-red-500">
              {errorEmail ?? <div>{errorEmail}</div>}
            </div>
          </div>
          <div className="space-y-2">
            <label
              className="flex peer-disabled:cursor-not-allowe text-sm font-medium"
              htmlFor="name"
            >
              เลือกหนังที่คุณชอบ <span className="text-red-500">*</span>
            </label>
            <div
              className={`flex flex-col items-start gap-6  ${
                errorMovie
                  ? "gap-0 border border-red-500 rounded-md"
                  : "border-input"
              }`}
            >
              {movies.map((n, i) => (
                <label
                  className={`${
                    errorMovie ? "mx-2 py-4" : null
                  }  flex text-sm gap-4 items-start text-left `}
                  key={i}
                >
                  <div className="pt-1">
                    <input
                      type="radio"
                      value={n.title}
                      checked={movie?.title === n.title}
                      onChange={() => setMovie(n)}
                    />
                  </div>
                  <div className="flex flex-col text-left ">
                    <span className="text-left">
                      {n.title} ({n.year})
                    </span>
                    <span className="text-left">Director: {n.director}</span>
                  </div>
                </label>
              ))}
            </div>
            <div className="flex text-sm text-red-500">
              {errorMovie ?? <div>{errorMovie}</div>}
            </div>
          </div>
          <div className="space-y-2">
            <label
              className="flex peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-medium"
              htmlFor="comment"
            >
              ความคิดเห็นเกี่ยวกับหนัง
            </label>
            <textarea
              className="bg-white flex w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              rows={3}
              placeholder="พิมพ์ความคิดเห็นของคุณที่นี่..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div className="flex justify-between text-white">
            <button type="button" onClick={reset}>
              A
            </button>
            <button type="button" onClick={submit}>
              B
            </button>
          </div>
        </div>
      ) : (
        <div className="p-6 flex flex-col gap-6">
          <div className="bg-[#f0fdf4] border border-[#bbf7d0] flex flex-col text-left p-4 rounded-[0.5rem] gap-3">
            <div className="flex items-center justify-start gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-circle-check-big h-5 w-5 text-green-600"
              >
                <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                <path d="m9 11 3 3L22 4"></path>
              </svg>
              <h1 className="text-lg text-[#166534] font-medium">
                ส่งแบบสำรวจสำเร็จ!
              </h1>
            </div>

            <div className="grid grid-cols-[max-content_1fr] gap-y-2 gap-x-4 text-sm">
              <div className="text-gray-500 pr-2">ชื่อ:</div>
              <div className="text-black whitespace-pre-line">
                {displayName}
              </div>
              <div className="text-gray-500 pr-2">อีเมล:</div>
              <div className="text-black">{displayEmail}</div>
              <div className="text-gray-500 pr-2">หนังที่เลือก:</div>
              <div>
                <div className="text-purple-600 ">{displayMovie.title}</div>
              </div>
            </div>
            <div className="bg-gray-200 p-[0.5px]"></div>
            <div>
              <div className="text-gray-700 pr-2 text-sm pb-2">
                ความคิดเห็น:
              </div>
              <div className="p-3 bg-[#f9fafb] rounded-md">
                <div className="text-black text-sm">{displayMessage}</div>
              </div>
            </div>
          </div>
          <div className="text-white ">
            <button className="w-full flex items-center justify-center gap-2" onClick={refresh}>
              <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-refresh-cw h-4 w-4"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path><path d="M8 16H3v5"></path></svg>
              </span>
              <span>ส่งแบบสำรวจสำเร็จ!</span>
            </button>
          </div>
        </div>
      )}
    </>

    // <>
    // {display ? <div className="p-6 flex flex-col gap-6">
    //     <div className="space-y-2">
    //       <label
    //         className="flex peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-medium"
    //         htmlFor="name"
    //       >
    //         ชื่อ <span className="text-red-500">*</span>
    //       </label>
    //       <input
    //         className="bg-white flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
    //         id="name"
    //         placeholder="กรุณากรอกชื่อของคุณ"
    //         name="name"
    //         value=""
    //       />
    //     </div>
    //     <div className="space-y-2">
    //       <label
    //         className="flex peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-medium"
    //         htmlFor="name"
    //       >
    //         อีเมล <span className="text-red-500">*</span>
    //       </label>
    //       <input
    //         className="bg-white flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
    //         id="email"
    //         name="email"
    //         type="email"
    //         placeholder="example@gmail.com"
    //         value=""
    //       />
    //     </div>
    //     <div className="space-y-2">
    //       <label
    //         className="flex peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-medium"
    //         htmlFor="name"
    //       >
    //         เลือกหนังที่คุณชอบ <span className="text-red-500">*</span>
    //       </label>
    //       <div className="flex flex-col items-start gap-6">
    //         {movies.map((n, i) => (
    //           <label className="flex text-sm gap-4 items-start text-left " key={i}>
    //             <div className="pt-1">
    //               <input
    //                 type="radio"
    //                 name="favoriteMovie"
    //                 value={i}
    //                 className="h-4 w-4 text-white"
    //               />
    //             </div>
    //             <div className="flex flex-col text-left ">
    //               <span className="text-left">{n.title} ({n.year})</span>
    //               <span className="text-left">Director: {n.director}</span>
    //             </div>
    //           </label>
    //         ))}
    //       </div>
    //     </div>
    //     <div className="space-y-2">
    //       <label
    //         className="flex peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-medium"
    //         htmlFor="comment"
    //       >
    //         ความคิดเห็นเกี่ยวกับหนัง
    //       </label>
    //       <textarea
    //         className="bg-white flex w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
    //         rows={3}
    //         placeholder="พิมพ์ความคิดเห็นของคุณที่นี่..."
    //       />
    //     </div>
    //     <div className="flex justify-between text-white">
    //       <button type="button">A</button>
    //       <button type="button" onClick={submit}>B</button>
    //     </div>

    //   </div>
    //   :
    //   <div className="p-6 flex flex-col gap-6">
    //     <div className="bg-[#f0fdf4] border border-[#bbf7d0] flex flex-col text-left p-4 rounded-[0.5rem]">
    //         <h1 className="text-lg text-[#166534]">ส่งแบบสำรวจสำเร็จ!</h1>
    //         <p>ชื่อ: </p>
    //         <p>อีเมล: </p>
    //         <p>หนังที่เลือก: </p>
    //     </div>
    //     <div className="text-white">
    //         <button>Reset</button>
    //     </div>
    //   </div> }

    // </>
  );
};
