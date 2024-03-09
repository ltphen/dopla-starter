import { Inter, Source_Serif_4 } from "next/font/google";
import { ChatSideNavProfile } from "@/components/ChatSideNavProfile";
import { ChatBubble } from "@/components/ChatBubble";


const source_serif = Source_Serif_4({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export default function Page() {
    const characters = [
        {
            profile: "/profile1.jpg",
            name: "Henry Boyd",
            description: "a resilient nomad, seeks vengeance after her tribes destruction but questions the morality of her quest."
        },
        {
            profile: "/profile2.jpg",
            name: "Henry Ford",
            description: "a resilient nomad, seeks vengeance after her tribes destruction but questions the morality of her quest."
        },
        {
            profile: "/profile3.jpg",
            name: "Cool Brigde",
            description: "a resilient nomad, seeks vengeance after her tribes destruction but questions the morality of her quest."
        },
        {
            profile: "/profile4.jpg",
            name: "Baby boss",
            description: "a resilient nomad, seeks vengeance after her tribes destruction but questions the morality of her quest."
        }
    ]
    const conversation = [{
        role: "assistant",
        content: "Hi, how can I help you today?"
    }]
  return (
        <main className={`flex w-full h-screen bg-[#f7f5ff] flex-col p-0  ${inter.className}`}>  
           <div className="shadow flex items-center py-4 justify-center bg-[#f7f5ff]">
                <div className="flex items-center justify-center rounded-2xl text-indigo-700 bg-indigo-100 h-10 w-10">
                    <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                    />
                    </svg>
                </div>
                <div className="ml-2 font-bold text-2xl">Dopla</div>


            </div>
            
           

                <>
                {/* component */}
                <div className="flex h-screen antialiased text-gray-800">
                    <div className="flex flex-row h-full w-full overflow-x-hidden">
                        <div className="flex flex-col py-8 pl-6 pr-2 w-1/5 mt-[.04rem] flex-shrink-0">
                            
                            <div className="flex flex-col items-center bg-indigo-100 border border-gray-200  w-full py-6 px-4 rounded-lg">
                           
                            <div className="text-sm font-semibold m-2">Configure your experience</div>
                            <div className="text-xs text-gray-500"> Switch between oral and chat </div>
                            
                            <label className="inline-flex mt-4 items-center cursor-pointer">
                                <input type="checkbox" value="" className="sr-only peer"/>
                                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                <span className="ms-3 text-[.7rem] font-medium text-gray-900 dark:text-gray-300">Active</span>
                            </label>

                            </div>
                            <div className="flex flex-col mt-8">
                            <div className="flex flex-row items-center justify-between text-xs">
                                <span className="font-bold">Your Tutors</span>
                                <span className="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full">
                                4
                                </span>
                            </div>
                            <div className="flex flex-col space-y-1 mt-4 -mx-2 overflow-y-auto">
                                {characters.map((item, index)=>(
                                    <ChatSideNavProfile onClick={()=>{}} key={index} active={1 == index} character={item}></ChatSideNavProfile>
                                ))}
                                {/* <ChatSideNavProfile profile="/profile2.jpg" active={true}></ChatSideNavProfile>
                                <ChatSideNavProfile profile="/profile3.jpg"></ChatSideNavProfile>
                                <ChatSideNavProfile profile="/profile4.jpg"></ChatSideNavProfile> */}
                               

                              
                            </div>
                            
                            </div>
                        </div>
                        <div className="border shadow-md w-full">
                            <div className="space-y-1.5 p-6 flex flex-row items-center border-b mb-8">
                                <div className="flex items-center space-x-4">
                                    <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                                        <img
                                        className="aspect-square h-full w-full"
                                        alt="Image"
                                        src={characters[0].profile}
                                        />
                                    </span>
                                    <div>
                                        <p className="text-md font-medium leading-none">{characters[0].name}</p>
                                        <p className="text-[.8rem] text-gray-500 mt-2">{characters[0].description}</p>
                                    </div>
                                </div>
                                
                            </div>
                            
                            <div className="max-w-5xl mx-auto flex flex-col h-[80vh] justify-between">
                            
                                <div className="h-5/6 overflow-auto p-6 pt-0 chatbox-container" >
                                    <div className="flex flex-col mb-16">
                                        <div className="flex items-center space-x-4 flex-col">
                                            <span className="relative flex h-[6rem] w-[6rem] shrink-0 overflow-hidden rounded-full">
                                                <img
                                                className="aspect-square h-full w-full"
                                                alt="Image"
                                                src={characters[0].profile}
                                                />
                                            </span>
                                            <div className="flex items-center flex-col mt-6">
                                                <p className="text-md font-medium leading-none">{characters[0].name}</p>
                                                <p className="text-[.8rem] text-gray-500 mt-2">{characters[0].description}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        {conversation.map((message, index)=>(
                                            <ChatBubble voice={()=>{}} key={index} direction={message.role == "assistant" ? "left" : "right"}>
                                                {message.content}
                                            </ChatBubble>
                                        ))}
                                        <div style={{ float:"left", clear: "both" }}>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center p-6 pt-0 ">
                                    <form className="flex w-full items-center space-x-2">
                                    <input
                                        className="flex h-12 w-full rounded-md border border-gray-300 border-input bg-background px-3 py-4 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1"
                                        id="message"
                                        placeholder="Type your message..."
                                        autoComplete="off"
                                        value={""}
                                    />
                                    <button
                                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-500 text-blue-500-foreground hover:bg-blue-500/90 h-12 w-12"
                                        type="submit"
                                    >
                                        <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="h-6 w-6 text-white"
                                        >
                                        <path d="m22 2-7 20-4-9-9-4Z" />
                                        <path d="M22 2 11 13" />
                                        </svg>
                                        <span className="sr-only">Send</span>
                                    </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </>



        </main>

  );
}
