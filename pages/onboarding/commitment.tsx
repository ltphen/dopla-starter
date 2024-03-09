import Image from "next/image";
import { Inter, Source_Serif_4 } from "next/font/google";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { NavOnboarding } from "@/components/NavOnboarding";
import { useRouter } from "next/router";
import { OnboardingSelectBox } from "@/components/OnboardingSelectBox";
import axios from "axios";

const source_serif = Source_Serif_4({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

const items = [
    "5 min / day",
    "10 min / day",
    "15 min / day",
    "20 min / day",
    "30 min / day"
]
export default function Page() {
    let router = useRouter()

    const action = (value: string)=>{
        
    }
  return (
        <main className={`flex w-full min-h-screen bg-[#f7f5ff] flex-col p-0  ${inter.className}`}>  
            <NavOnboarding></NavOnboarding>
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 pt-24 mx-auto px-4 py-0 flex flex-col justify-between items-center"> 
                <div className="flex flex-col items-center">
                    <h2 className={`text-sm font-normal text-center mx-16 mb-4 ${inter.className}`}>Let&apos;s quickly personnalized your learning journey?</h2>
                    <h2 className={`text-4xl font-semibold text-blue-700 text-center mx-16 mb-8  ${source_serif.className}`}>How often do you want to practise your english ?</h2>
                    
                </div>
                
                <div className="flex justify-between flex-col items-center w-full mt-10">
                    {items.map((item, index)=>(
                        <OnboardingSelectBox key={index} action={()=>action(item)}>
                            {item}
                        </OnboardingSelectBox>
                    ))}
                    {/* <Link href={"/assistant/chat"} className="min-w-[24rem] text-center hover:bg-gray-100 active:bg-blue-500 active:text-white cursor-pointer text-sm border-gray-600 mb-4 text-gray-600 bg-white border rounded py-4 font-bold"> 
                        5 min / day
                    </Link>

                    <Link href={"/assistant/chat"} className="min-w-[24rem] text-center hover:bg-gray-100 active:bg-blue-500 active:text-white cursor-pointer text-sm border-gray-600 mb-4 text-gray-600 bg-white border rounded py-4 font-bold"> 
                        10 min / day
                    </Link>

                    <Link href={"/assistant/chat"} className="min-w-[24rem] text-center hover:bg-gray-100 active:bg-blue-500 active:text-white cursor-pointer text-sm border-gray-600 mb-4 text-gray-600 bg-white border rounded py-4 font-bold"> 
                        15 min / day
                    </Link>

                    <Link href={"/assistant/chat"} className="min-w-[24rem] text-center hover:bg-gray-100 active:bg-blue-500 active:text-white cursor-pointer text-sm border-gray-600 mb-4 text-gray-600 bg-white border rounded px-24 py-4 font-bold"> 
                        20 min / day
                    </Link>

                    <Link href={"/assistant/chat"} className="min-w-[24rem] text-center hover:bg-gray-100 active:bg-blue-500 active:text-white cursor-pointer text-sm border-gray-600 mb-4 text-gray-600 bg-white border rounded px-24 py-4 font-bold"> 
                        30 min / day
                    </Link> */}
                </div>
            </div>

        </main>

  );
}
